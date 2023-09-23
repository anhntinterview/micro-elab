import { Inter } from 'next/font/google';
import '@app/all.css';
// *** CLIENT STATE MANAGEMENT ***
import Provider from '@app/app/template/module/provider';
// *** END CLIENT STATE MANAGEMENT ***
import { DOMAIN, PORT, SITE_NAME } from './template/envVars';

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
        <Provider>{children}</Provider>
      </body>
    </html>
  );
}
