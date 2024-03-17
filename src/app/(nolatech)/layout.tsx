import { Metadata } from 'next';
import { NavTop } from '../ui/NavTop';
import { NavSub } from '../ui/NavSub';
import { Footer } from '../ui/Footer';
import { NavSm } from '../ui/NavSm';

type LayoutProps = {
  params: { locale: string };
  children: React.ReactNode;
};

export const metadata: Metadata = {
  title: `Home: Lorem ipsum dolor sit amet, consetetur`,
  description: 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua.',
};

export default function HomeLayout({ params, children }: LayoutProps) {
  return (
    <main>
      <header>
        <NavTop />
        <NavSm />
        <NavSub />
      </header>
      {children}
      <Footer />
    </main>
  );
}
