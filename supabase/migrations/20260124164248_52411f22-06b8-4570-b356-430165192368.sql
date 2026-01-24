-- Add policy to deny all public SELECT access to contact_submissions
-- Only the backend/edge functions with service role can read this data
CREATE POLICY "No public read access to contact submissions"
ON public.contact_submissions
FOR SELECT
USING (false);