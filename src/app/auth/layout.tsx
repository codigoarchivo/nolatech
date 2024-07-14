import { Suspense } from 'react';
import { auth } from '@/auth';
import { redirect } from 'next/navigation';
import { Loading } from '../Loading';

type LayoutProps = {
  params: { locale: string };
  children: React.ReactNode;
};
export default async function AuthLayout({ children, params }: LayoutProps) {
  const session = await auth();

  if (!session) {
    return <Suspense fallback={<Loading />}>{children}</Suspense>;
  } else {
    redirect('/');
  }
}
