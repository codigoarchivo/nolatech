import { redirect } from 'next/navigation';
import { FormAdmin } from '../ui/admin/FormAdmin';
import { auth } from '@/auth';
import { getSome } from '@/lib/getSome';

type UserProps = {
  params: { locale: string; user: string };
};

export default async function UserPage(props: UserProps) {
  const session = await auth();

  const profile = session?.user.profile;
  const accessToken = session?.user.accessToken;

  const is_admin = profile?.is_admin;
  const is_user = !is_admin;

  const user = props.params?.user;

  const select = {
    token: accessToken ?? '',
    params: '',
    base: '/users/',
    id: `${user}/` ?? '',
  };
  if (is_admin) {

    const type = user === 'add' ? user : 'edit';
    const users = type === 'edit' ? await getSome(select) : null;

    return (
      <div className='container mx-auto my-20'>
        <FormAdmin base='/users/' data={users?.data?.user} />
      </div>
    );
  } else if (is_user) {
    return redirect('/');
  } else {
    redirect('/auth/login?redirectTo=/dashboard');
  }
}
