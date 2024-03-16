import { NavTop } from '../ui/NavTop';
import { NavSub } from '../ui/NavSub';
import { Footer } from '../ui/Footer';
import { NavSm } from '../ui/NavSm';

type LayoutProps = {
  params: { locale: string };
  children: React.ReactNode;
};

type M = Pick<LayoutProps, 'params'>;

export async function generateMetadata({ params }: M) {
  return {
    title: `Home: nolatech`,
    description: 'nolatech',
  };
}

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
