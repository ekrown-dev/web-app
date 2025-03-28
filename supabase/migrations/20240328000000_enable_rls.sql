-- Enable RLS on contact_submissions table
alter table contact_submissions enable row level security;

-- Contact Submissions Policies

-- Read policy for admin users
create policy "Admins can read all contact submissions"
on contact_submissions
for select
to authenticated
using (
  (select auth.jwt() -> 'app_metadata' ->> 'role') = 'admin'
);

-- Insert policy for public submissions
create policy "Anyone can create contact submissions"
on contact_submissions
for insert
to anon, authenticated
with check (true);

-- Update policy for admin users
create policy "Admins can update contact submissions"
on contact_submissions
for update
to authenticated
using (
  (select auth.jwt() -> 'app_metadata' ->> 'role') = 'admin'
)
with check (
  (select auth.jwt() -> 'app_metadata' ->> 'role') = 'admin'
);

-- Delete policy for admin users
create policy "Admins can delete contact submissions"
on contact_submissions
for delete
to authenticated
using (
  (select auth.jwt() -> 'app_metadata' ->> 'role') = 'admin'
);

-- Create index for better performance
create index if not exists idx_contact_submissions_created_at
on contact_submissions(created_at desc); 