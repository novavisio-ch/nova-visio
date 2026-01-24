import { serve } from "https://deno.land/std@0.190.0/http/server.ts";
import { Resend } from "https://esm.sh/resend@2.0.0";

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

const handler = async (req: Request): Promise<Response> => {
  // Handle CORS preflight requests
  if (req.method === "OPTIONS") {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const { firstName, lastName, email, projectType, message }: ContactFormRequest = await req.json();

    // Validate required fields
    if (!firstName || !lastName || !email || !message) {
      throw new Error("Missing required fields");
    }

    const projectTypeLabel = projectType || "Non spécifié";

    // Send notification email to the business
    const emailResponse = await resend.emails.send({
      from: "NovaVisio <noreply@novavisio.ch>",
      to: ["contact@novavisio.ch"],
      subject: `Nouvelle demande de contact - ${firstName} ${lastName}`,
      html: `
        <h1>Nouvelle demande de contact</h1>
        <p><strong>Nom:</strong> ${firstName} ${lastName}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Type de projet:</strong> ${projectTypeLabel}</p>
        <hr/>
        <h2>Message:</h2>
        <p>${message.replace(/\n/g, "<br/>")}</p>
      `,
    });

    console.log("Contact notification email sent successfully:", emailResponse);

    return new Response(JSON.stringify({ success: true, data: emailResponse }), {
      status: 200,
      headers: {
        "Content-Type": "application/json",
        ...corsHeaders,
      },
    });
  } catch (error: any) {
    console.error("Error in send-contact-email function:", error);
    return new Response(
      JSON.stringify({ error: error.message }),
      {
        status: 500,
        headers: { "Content-Type": "application/json", ...corsHeaders },
      }
    );
  }
};

serve(handler);
