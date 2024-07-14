import { IUserForm } from '@/interfaces/user.interface';
import { TbodyAdminUsers } from './TbodyAdminUsers';

interface ITBody {
  users: IUserForm[];
}

export const TBody = (props: ITBody) => {
  return props.users.map((data: IUserForm) => (
    <TbodyAdminUsers  key={data.id} data={data} />
  ));
};
