-- Add reply column to contact_submissions table
ALTER TABLE contact_submissions ADD COLUMN IF NOT EXISTS reply TEXT;

-- Update RLS policies to allow admin to update replies
CREATE POLICY "Allow admin to update replies" ON contact_submissions
    FOR UPDATE TO authenticated
    USING (auth.uid() IN (
        SELECT id FROM auth.users WHERE email IN (
            'admin@example.com'  -- Replace with actual admin email
        )
    ))
    WITH CHECK (auth.uid() IN (
        SELECT id FROM auth.users WHERE email IN (
            'admin@example.com'  -- Replace with actual admin email
        )
    )); 