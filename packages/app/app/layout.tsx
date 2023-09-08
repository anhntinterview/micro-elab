import { Inter } from 'next/font/google';
import { ReactNode, Suspense } from 'react';
import '@app/all.css';
import Header from '@app/components/layout/header';
import Footer from '@app/components/layout/footer';
import Search from '@app/components/search';

const { SITE_NAME, DOMAIN, PORT } = process.env;

export const metadata = {
  metadataBase: new URL(`${DOMAIN}:${PORT}`),
  description: 'A personal Blog is created and owned by Robert',
  title: {
    default: SITE_NAME!,
    template: `%s | ${SITE_NAME}`,
  },
  robots: {
    follow: true,
    index: true,
  },
};

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
        <div className="global-wrap">
          <div className="global-content">
            <Search />
            <Header />
            <Suspense>
              <div>{children}</div>
            </Suspense>
            <Footer />
          </div>
        </div>
      </body>
    </html>
  );
}
