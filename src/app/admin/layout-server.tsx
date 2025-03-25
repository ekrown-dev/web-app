import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Admin Dashboard',
  description: 'Admin dashboard for managing contact form submissions'
};

export default function AdminLayoutServer({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
} 