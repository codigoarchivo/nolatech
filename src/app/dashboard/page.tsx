export const revalidate = 0;

import { redirect } from 'next/navigation';
import { AdminDashboard } from './ui/admin/AdminDashboard';
import { auth } from '@/auth';

type IDashboard = {
  params: { locale: string };
  searchParams: {
    page?: string;
    search?: string;
    count?: string;
  };
};

export default async function Dashboard(props: IDashboard) {
  const session = await auth();
  const profile = session?.user.profile;
  const accessToken = session?.user.accessToken;

  const is_admin = profile?.is_admin;
  const is_user = !is_admin;

  const locale = props.params.locale;
  const page = props.searchParams.page;
  const search = props.searchParams.search;
  const count = props.searchParams.count;

  if (is_admin) {
    return (
      <AdminDashboard
        locale={locale}
        page={page}
        search={search}
        accessToken={accessToken}
        count={count}
      />
    );
  } else if (is_user) {
    return redirect('/');
  } else {
    redirect('/auth/login?redirectTo=/dashboard');
  }
}
