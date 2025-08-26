-- Fix RLS policies for contact submissions table
-- Drop existing policies
DROP POLICY IF EXISTS "Allow service role full access" ON public."11564c6a-cc0e-4d8e-91b2-b028ee5d9af1_contact_submissions";
DROP POLICY IF EXISTS "Allow anon to insert contact submissions" ON public."11564c6a-cc0e-4d8e-91b2-b028ee5d9af1_contact_submissions";
DROP POLICY IF EXISTS "Allow authenticated users to view their own submissions" ON public."11564c6a-cc0e-4d8e-91b2-b028ee5d9af1_contact_submissions";

-- Create new RLS policies with proper permissions
CREATE POLICY "Enable insert for anon users"
  ON public."11564c6a-cc0e-4d8e-91b2-b028ee5d9af1_contact_submissions"
  FOR INSERT
  TO anon
  WITH CHECK (true);

CREATE POLICY "Enable read for service role"
  ON public."11564c6a-cc0e-4d8e-91b2-b028ee5d9af1_contact_submissions"
  FOR SELECT
  TO service_role
  USING (true);

CREATE POLICY "Enable all for service role"
  ON public."11564c6a-cc0e-4d8e-91b2-b028ee5d9af1_contact_submissions"
  FOR ALL
  TO service_role
  USING (true)
  WITH CHECK (true);

CREATE POLICY "Enable read for authenticated users"
  ON public."11564c6a-cc0e-4d8e-91b2-b028ee5d9af1_contact_submissions"
  FOR SELECT
  TO authenticated
  USING (true);

-- Grant necessary permissions
GRANT INSERT ON public."11564c6a-cc0e-4d8e-91b2-b028ee5d9af1_contact_submissions" TO anon;
GRANT SELECT ON public."11564c6a-cc0e-4d8e-91b2-b028ee5d9af1_contact_submissions" TO anon;
GRANT ALL ON public."11564c6a-cc0e-4d8e-91b2-b028ee5d9af1_contact_submissions" TO authenticated;
GRANT ALL ON public."11564c6a-cc0e-4d8e-91b2-b028ee5d9af1_contact_submissions" TO service_role;

-- Make sure the table allows anon access
ALTER TABLE public."11564c6a-cc0e-4d8e-91b2-b028ee5d9af1_contact_submissions" ENABLE ROW LEVEL SECURITY;