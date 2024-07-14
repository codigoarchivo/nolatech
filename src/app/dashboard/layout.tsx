import { Suspense } from 'react';
import { Metadata } from 'next';
import { Loading } from '../Loading';
import { NavTop } from '../ui/NavTop';
import { NavSm } from '../ui/NavSm';
import { Footer } from '../ui/Footer';

export const metadata: Metadata = {
  title: {
    template: '%s - Nolatech',
    default: 'Admin - Nolatech',
  },
  description: 'Nolatech Administrator',
};

type LayoutProps = {
  children: React.ReactNode;
};
export default async function DashboardLayout({ children }: LayoutProps) {
  return (
    <main>
      <NavTop />
      <NavSm />
      <Suspense fallback={<Loading />}>{children}</Suspense>
      <Footer />
    </main>
  );
}
