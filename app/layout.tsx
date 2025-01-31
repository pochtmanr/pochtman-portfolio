import './globals.css';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Roman Pochtman Portfolio',
  description: 'Roman Pochtman is a passionate Web Developer and Data Analyst based in Dortmund, Germany. He specializes in providing web development, targeted advertising, and data analytics solutions for small businesses.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}