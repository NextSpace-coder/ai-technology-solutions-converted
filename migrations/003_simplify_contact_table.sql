-- Alternative: Create a simpler table structure if the complex one doesn't work
-- This creates a backup table with simpler RLS policies

CREATE TABLE IF NOT EXISTS public.contact_submissions_simple (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    name TEXT NOT NULL,
    email TEXT NOT NULL,
    phone TEXT,
    company TEXT,
    subject TEXT,
    message TEXT NOT NULL,
    status TEXT DEFAULT 'new',
    priority TEXT DEFAULT 'normal',
    source TEXT DEFAULT 'website',
    user_agent TEXT,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
    updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Enable RLS
ALTER TABLE public.contact_submissions_simple ENABLE ROW LEVEL SECURITY;

-- Create simple policies
CREATE POLICY "Anyone can insert contact submissions"
  ON public.contact_submissions_simple
  FOR INSERT
  WITH CHECK (true);

CREATE POLICY "Service role can do everything"
  ON public.contact_submissions_simple
  FOR ALL
  TO service_role
  USING (true)
  WITH CHECK (true);

-- Grant permissions
GRANT INSERT ON public.contact_submissions_simple TO anon;
GRANT ALL ON public.contact_submissions_simple TO authenticated;
GRANT ALL ON public.contact_submissions_simple TO service_role;

-- Create indexes
CREATE INDEX idx_contact_simple_email ON public.contact_submissions_simple(email);
CREATE INDEX idx_contact_simple_created_at ON public.contact_submissions_simple(created_at DESC);

-- Add trigger for updated_at
CREATE TRIGGER update_contact_simple_updated_at
    BEFORE UPDATE ON public.contact_submissions_simple
    FOR EACH ROW
    EXECUTE FUNCTION update_updated_at_column();