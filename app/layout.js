import '../styles/globals.css';

export const metadata = {
  title: 'Pangasinan Heritage Digital Showcase',
  description: 'A mobile-first digital showcase of Pangasinan heritage destinations.',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
