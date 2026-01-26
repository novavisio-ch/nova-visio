import { serve } from "https://deno.land/std@0.190.0/http/server.ts";
import { Resend } from "https://esm.sh/resend@2.0.0";
import { createClient } from "https://esm.sh/@supabase/supabase-js@2.49.1";

const resend = new Resend(Deno.env.get("RESEND_API_KEY"));

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers":
    "authorization, x-client-info, apikey, content-type",
};

interface ContactFormRequest {
  firstName: string;
  lastName: string;
  email: string;
  projectType: string;
  message: string;
}

// HTML escape function to prevent XSS attacks
function escapeHtml(text: string): string {
  const htmlEntities: Record<string, string> = {
    "&": "&amp;",
    "<": "&lt;",
    ">": "&gt;",
    '"': "&quot;",
    "'": "&#39;",
  };
  return text.replace(/[&<>"']/g, (char) => htmlEntities[char] || char);
}

// Rate limiting: max 5 submissions per email per hour
async function checkRateLimit(email: string): Promise<boolean> {
  const supabaseUrl = Deno.env.get("SUPABASE_URL")!;
  const supabaseServiceKey = Deno.env.get("SUPABASE_SERVICE_ROLE_KEY")!;
  const supabase = createClient(supabaseUrl, supabaseServiceKey);

  const oneHourAgo = new Date(Date.now() - 3600000).toISOString();
  
  const { count, error } = await supabase
    .from("contact_submissions")
    .select("*", { count: "exact", head: true })
    .eq("email", email)
    .gte("created_at", oneHourAgo);

  if (error) {
    console.error("Rate limit check error:", error);
    return true; // Allow on error to not block legitimate users
  }

  return (count || 0) < 5;
}

const handler = async (req: Request): Promise<Response> => {
  // Handle CORS preflight requests
  if (req.method === "OPTIONS") {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const { firstName, lastName, email, projectType, message }: ContactFormRequest = await req.json();

    // Validate required fields
    if (!firstName || !lastName || !email || !message) {
      return new Response(
        JSON.stringify({ error: "Champs requis manquants" }),
        {
          status: 400,
          headers: { "Content-Type": "application/json", ...corsHeaders },
        }
      );
    }

    // Check rate limit
    const withinLimit = await checkRateLimit(email);
    if (!withinLimit) {
      return new Response(
        JSON.stringify({ error: "Trop de demandes. Veuillez réessayer plus tard." }),
        {
          status: 429,
          headers: { "Content-Type": "application/json", ...corsHeaders },
        }
      );
    }

    // Sanitize all user inputs to prevent XSS
    const safeFirstName = escapeHtml(firstName);
    const safeLastName = escapeHtml(lastName);
    const safeEmail = escapeHtml(email);
    const safeProjectTypeLabel = escapeHtml(projectType || "Non spécifié");
    const safeMessage = escapeHtml(message).replace(/\n/g, "<br/>");

    // Send notification email to the business
    const emailResponse = await resend.emails.send({
      from: "NovaVisio <noreply@novavisio.ch>",
      to: ["hello@novavisio.ch"],
      subject: `Nouvelle demande de contact - ${safeFirstName} ${safeLastName}`,
      html: `
        <h1>Nouvelle demande de contact</h1>
        <p><strong>Nom:</strong> ${safeFirstName} ${safeLastName}</p>
        <p><strong>Email:</strong> ${safeEmail}</p>
        <p><strong>Type de projet:</strong> ${safeProjectTypeLabel}</p>
        <hr/>
        <h2>Message:</h2>
        <p>${safeMessage}</p>
      `,
    });

    console.log("Contact notification email sent successfully:", emailResponse);

    return new Response(JSON.stringify({ success: true }), {
      status: 200,
      headers: {
        "Content-Type": "application/json",
        ...corsHeaders,
      },
    });
  } catch (error: unknown) {
    console.error("Error in send-contact-email function:", error);
    // Return generic error message to avoid exposing internal details
    return new Response(
      JSON.stringify({ error: "Une erreur est survenue. Veuillez réessayer plus tard." }),
      {
        status: 500,
        headers: { "Content-Type": "application/json", ...corsHeaders },
      }
    );
  }
};

serve(handler);
