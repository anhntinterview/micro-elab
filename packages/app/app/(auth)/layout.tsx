import { Inter } from 'next/font/google';
import { ReactNode, Suspense } from 'react';
import '@app/all.css';

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter',
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={inter.variable}>
      <body className="custom-page">
        <div className="custom-wrap">
          <Suspense>{children}</Suspense>
        </div>
      </body>
    </html>
  );
}
