-- Migration generated from MCP operation
-- Operation: Direct SQL execution via MCP
-- Purpose: Fix contact submissions table for anonymous users

-- The table structure is already correct:
-- - user_id is nullable with default value
-- - RLS policies allow anonymous insert
-- - All required fields are properly configured

-- Current RLS policies (verified working):
-- 1. "Enable insert for anonymous users" - allows anon to INSERT
-- 2. "Enable all operations for service role" - allows service_role full access
-- 3. "Enable select for authenticated users" - allows authenticated to SELECT
-- 4. "Enable select for service role" - allows service_role to SELECT

-- Test insert was successful with this data:
-- INSERT INTO public."11564c6a-cc0e-4d8e-91b2-b028ee5d9af1_contact_submissions" 
-- (name, email, message, subject)
-- VALUES ('Test User', 'test@example.com', 'Test message', 'Test Subject')

-- No additional changes needed - table is ready for anonymous submissions