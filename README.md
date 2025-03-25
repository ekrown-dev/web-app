# eKROWN Technologies Website

A modern, responsive website for eKROWN Technologies built with Next.js and TailwindCSS.

## Features

- Modern and responsive design
- Animated components using Framer Motion
- Contact form with form validation
- Dark theme optimized for IT services
- SEO friendly
- Supabase integration for contact form submissions

## Tech Stack

- Next.js 14
- TypeScript
- TailwindCSS
- Framer Motion
- React Icons
- Heroicons
- Supabase (Local Development)

## Project Structure

```
web-app/
├── public/                 # Static files
│   ├── images/            # Image assets
│   │   └── eKROWN-logo.png    # Company logo
│   └── favicon.ico        # Website favicon
├── src/
│   ├── app/              # Next.js app directory
│   │   ├── api/          # API routes
│   │   │   └── contact/  # Contact form API
│   │   ├── globals.css   # Global styles
│   │   ├── layout.tsx    # Root layout
│   │   └── page.tsx      # Home page
│   ├── components/       # React components
│   │   ├── Contact.tsx   # Contact form
│   │   ├── Footer.tsx    # Footer component
│   │   ├── Hero.tsx      # Hero section
│   │   ├── Navbar.tsx    # Navigation bar
│   │   ├── Services.tsx  # Services section
│   │   ├── Team.tsx      # Team section
│   │   └── Testimonials.tsx # Testimonials section
│   └── lib/              # Utility functions
├── supabase/             # Supabase configuration
│   ├── migrations/       # Database migrations
│   └── seed.sql         # Seed data
├── scripts/              # Utility scripts
│   ├── download-images.sh    # Image download script
│   └── setup-supabase.sh     # Supabase setup script
└── config files          # Configuration files
    ├── next.config.ts    # Next.js config
    ├── tailwind.config.ts # TailwindCSS config
    └── tsconfig.json     # TypeScript config
```

## Getting Started

1. Clone the repository:
```bash
git clone git@github.com:ekrown-dev/web-app.git
cd web-app
```

2. Install dependencies:
```bash
npm install
```

3. Set up Supabase locally:
```bash
# Make the setup script executable
chmod +x scripts/setup-supabase.sh

# Run the setup script
./scripts/setup-supabase.sh
```

4. Download required images:
```bash
# Make the download script executable
chmod +x scripts/download-images.sh

# Run the download script
./scripts/download-images.sh
```

5. Create a `.env` file with Supabase credentials:
```env
NEXT_PUBLIC_SUPABASE_URL=http://127.0.0.1:54321
NEXT_PUBLIC_SUPABASE_ANON_KEY=your-anon-key
SUPABASE_SERVICE_ROLE_KEY=your-service-role-key
```

6. Run the development server:
```bash
npm run dev
```

7. Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Development

### Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint

### Supabase Studio

Access the Supabase Studio UI at http://127.0.0.1:54323 to:
- View and manage database tables
- Monitor API requests
- Test database queries
- View contact form submissions

### Contact Form

The contact form submissions are stored in the Supabase database:
- Table: `contact_submissions`
- Fields: id, name, email, message, created_at

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License - see the LICENSE file for details.

## Contact

eKROWN Technologies - contact@ekrown.com
