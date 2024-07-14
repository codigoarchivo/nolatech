import Image from 'next/image';
import { LinkItem } from '@/components/ui/buttom/LinkItem';
import { ModalDelete } from '@/components/ui/modal/ModalDelete';
import { IUserForm } from '@/interfaces/user.interface';
import profile from '../../../../../../public/assets/notImage/profile.png';

interface ITbodyAdminUsers {
  data: IUserForm;
}

export const TbodyAdminUsers = async (props: ITbodyAdminUsers) => {
  return (
    <tbody>
      <tr className='bg-white border-b  hover:bg-gray-50 '>
        <th
          scope='row'
          className='flex items-center pl-6 pr-10 py-1 font-medium text-gray-900 whitespace-nowrap dark:text-white'
        >
          <Image
            src={props.data?.profile_image ?? profile}
            className='h-10 w-10 rounded-full object-cover shadow-custom1'
            alt='Man'
            width='0'
            height='0'
            sizes='100vw'
          />
          <div className='ps-3'>
            <div className='text-base font-semibold capitalize'>
              {props.data?.first_name} {props.data?.last_name}
            </div>
            <div className='font-normal text-gray-500'>{props.data?.email}</div>
          </div>
        </th>
        <td className='px-6 py-2 truncate'>
          {props.data.is_active ? 'Activo' : 'No activo'}
        </td>
        <td className='px-6 py-2 truncate'>
          {props.data.is_admin ? 'Administración' : 'Usuario'}
        </td>
        <td className='px-6 py-2'>
          <div className='flex gap-2 items-center'>
            <LinkItem
              title={'Editar'}
              link={`/dashboard/users/${props.data?.id}`}
              textOrSvg={'Editar'}
              className='font-medium text-primary dark:text-textSecondary hover:underline'
            />

            {/* modal delete */}
            <ModalDelete
              back='/dashboard/'
              path={`/users/${props.data?.id}/`}
              del={'Eliminar'}
              text={
                '¿Estás seguro de que quieres eliminar? Todos sus datos se eliminarán de forma permanente. Esta acción no se puede deshacer.'
              }
              cancel={'Cancelar'}
              options={[
                'Registro exitoso.',
                'No se recibieron datos válidos en la respuesta.',
              ]}
            />
          </div>
        </td>
      </tr>
    </tbody>
  );
};
