import type { Metadata } from 'next';
import { ToastContainer } from 'react-toastify';
import { Inter } from 'next/font/google';
import { Providers } from '@/components/providers/Providers';
import 'react-toastify/dist/ReactToastify.css';
import './globals.css';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: {
    template: 'Nolatech - %s',
    default: 'Nolatech',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en'>
      <Providers>
        <body className={inter.className}>
          <ToastContainer />
          {children}
        </body>
      </Providers>
    </html>
  );
}
