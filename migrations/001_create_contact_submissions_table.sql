-- Migration generated from MCP operation
-- Operation: mcp_supabase_apply_migration
-- Purpose: Create contact submissions table for collecting contact form data

-- Create contact submissions table
CREATE TABLE public."11564c6a-cc0e-4d8e-91b2-b028ee5d9af1_contact_submissions" (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    user_id UUID NOT NULL DEFAULT '58ec3cec-9bce-44e7-980d-27352226a600',
    name TEXT NOT NULL,
    email TEXT NOT NULL,
    phone TEXT,
    company TEXT,
    subject TEXT,
    message TEXT NOT NULL,
    status TEXT DEFAULT 'new' CHECK (status IN ('new', 'in_progress', 'resolved', 'closed')),
    priority TEXT DEFAULT 'normal' CHECK (priority IN ('low', 'normal', 'high', 'urgent')),
    source TEXT DEFAULT 'website',
    ip_address INET,
    user_agent TEXT,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
    updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
    responded_at TIMESTAMP WITH TIME ZONE
);

-- Enable RLS
ALTER TABLE public."11564c6a-cc0e-4d8e-91b2-b028ee5d9af1_contact_submissions" ENABLE ROW LEVEL SECURITY;

-- Create indexes for better performance
CREATE INDEX idx_contact_submissions_email ON public."11564c6a-cc0e-4d8e-91b2-b028ee5d9af1_contact_submissions"(email);
CREATE INDEX idx_contact_submissions_status ON public."11564c6a-cc0e-4d8e-91b2-b028ee5d9af1_contact_submissions"(status);
CREATE INDEX idx_contact_submissions_created_at ON public."11564c6a-cc0e-4d8e-91b2-b028ee5d9af1_contact_submissions"(created_at DESC);
CREATE INDEX idx_contact_submissions_priority ON public."11564c6a-cc0e-4d8e-91b2-b028ee5d9af1_contact_submissions"(priority, status);

-- Create RLS policies
CREATE POLICY "Allow service role full access"
  ON public."11564c6a-cc0e-4d8e-91b2-b028ee5d9af1_contact_submissions"
  FOR ALL
  TO service_role
  USING (true);

CREATE POLICY "Allow anon to insert contact submissions"
  ON public."11564c6a-cc0e-4d8e-91b2-b028ee5d9af1_contact_submissions"
  FOR INSERT
  TO anon
  WITH CHECK (true);

CREATE POLICY "Allow authenticated users to view their own submissions"
  ON public."11564c6a-cc0e-4d8e-91b2-b028ee5d9af1_contact_submissions"
  FOR SELECT
  TO authenticated
  USING (user_id = auth.uid());

-- Create function and trigger for updated_at
CREATE OR REPLACE FUNCTION update_updated_at_column()
RETURNS TRIGGER AS $$
BEGIN
    NEW.updated_at = NOW();
    RETURN NEW;
END;
$$ language 'plpgsql';

CREATE TRIGGER update_contact_submissions_updated_at
    BEFORE UPDATE ON public."11564c6a-cc0e-4d8e-91b2-b028ee5d9af1_contact_submissions"
    FOR EACH ROW
    EXECUTE FUNCTION update_updated_at_column();

-- Add comments
COMMENT ON TABLE public."11564c6a-cc0e-4d8e-91b2-b028ee5d9af1_contact_submissions" IS 'Contact form submissions from website visitors';
COMMENT ON COLUMN public."11564c6a-cc0e-4d8e-91b2-b028ee5d9af1_contact_submissions".user_id IS 'User ID for RLS policies';
COMMENT ON COLUMN public."11564c6a-cc0e-4d8e-91b2-b028ee5d9af1_contact_submissions".name IS 'Full name of the contact person';
COMMENT ON COLUMN public."11564c6a-cc0e-4d8e-91b2-b028ee5d9af1_contact_submissions".email IS 'Email address for follow-up';
COMMENT ON COLUMN public."11564c6a-cc0e-4d8e-91b2-b028ee5d9af1_contact_submissions".phone IS 'Optional phone number';
COMMENT ON COLUMN public."11564c6a-cc0e-4d8e-91b2-b028ee5d9af1_contact_submissions".company IS 'Optional company name';
COMMENT ON COLUMN public."11564c6a-cc0e-4d8e-91b2-b028ee5d9af1_contact_submissions".subject IS 'Subject or inquiry type';
COMMENT ON COLUMN public."11564c6a-cc0e-4d8e-91b2-b028ee5d9af1_contact_submissions".message IS 'Main message content';
COMMENT ON COLUMN public."11564c6a-cc0e-4d8e-91b2-b028ee5d9af1_contact_submissions".status IS 'Processing status of the inquiry';
COMMENT ON COLUMN public."11564c6a-cc0e-4d8e-91b2-b028ee5d9af1_contact_submissions".priority IS 'Priority level for handling';
COMMENT ON COLUMN public."11564c6a-cc0e-4d8e-91b2-b028ee5d9af1_contact_submissions".source IS 'Source of the contact (website, mobile app, etc.)';
COMMENT ON COLUMN public."11564c6a-cc0e-4d8e-91b2-b028ee5d9af1_contact_submissions".ip_address IS 'IP address for security tracking';
COMMENT ON COLUMN public."11564c6a-cc0e-4d8e-91b2-b028ee5d9af1_contact_submissions".user_agent IS 'Browser user agent for analytics';

-- End of migration