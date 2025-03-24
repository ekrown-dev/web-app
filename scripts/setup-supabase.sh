#!/bin/bash

# Initialize Supabase
npx supabase init

# Start Supabase
npx supabase start

# Run migrations
npx supabase db reset

echo "Supabase setup complete. Contact form submissions will be stored in the database." 