'use client';

import { useRouter } from 'next/navigation';
import { useForm } from 'react-hook-form';
import { toast } from 'react-toastify';
import { useSession } from 'next-auth/react';
import { AlertForm } from '@/components/ui/vigilant/AlertForm';
import { IUserForm } from '@/interfaces/user.interface';
import { update_user } from '@/actions/user/edit_user';
import { Upload } from '@/components/ui/images/Upload';
import { useUIImages } from '@/store/ui/gestor-images';

interface Props {
  data: IUserForm;
  base: string;
}

export const FormAdmin = (props: Props) => {
  const setImages = useUIImages((state) => state.setImages);
  const images = useUIImages((state) => state.images);
  const router = useRouter();
  const { data: session } = useSession();
  const token = session?.user.accessToken;

  const profile = images ? images : props.data?.profile_image

  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm<IUserForm>({
    defaultValues: {
      first_name: props.data?.first_name ?? '',
      last_name: props.data?.last_name ?? '',
      email: props.data?.email ?? '',
      is_admin: `${props.data?.is_admin}`,
      profile_image: `${profile ?? ''}`,
    },
  });

  const onSubmit = async (data: IUserForm) => {
    const formData = new FormData();

    const id = props?.data.id;
    const idn = id ? `${id}/` : '';

    formData.append('id', idn);
    formData.append('first_name', data.first_name ?? '');
    formData.append('last_name', data.last_name ?? '');
    formData.append('email', data.email ?? '');
    formData.append('profile_image', `${profile ?? ''}`);
    formData.append('token', token ?? '');
    formData.append('base', props.base ?? '');

    const resp = await update_user(Object.fromEntries(formData));

    if (!resp?.ok) {
      toast.error(`No se recibieron datos válidos en la respuesta.`);
      return;
    }

    toast.success('Registro exitoso.');
    setImages(null)
    router.refresh()
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className='sm:rounded-md sm:overflow-hidden'>
        <div className='px-4 py-5 space-y-6 sm:p-6'>
          <h2 className='text-2xl font-bold text-textSecondary uppercase'>
            Agregar o editar usuario
          </h2>
          <div className='grid grid-cols-6 gap-6'>
            <div className='col-span-6 sm:col-span-3'>
              <label
                htmlFor='first_name'
                className='block text-sm font-medium text-textSecondary'
              >
                Nombre
              </label>
              <input
                {...register('first_name', { required: true })}
                type='text'
                name='first_name'
                id='first_name'
                className='w-full rounded-md border shadow-custom1 border-textPrimary bg-white py-3 px-6 text-base font-medium text-gray-500 outline-none focus:border-primary transition duration-500 ease-in-out transform  focus:shadow-md'
              />
              <AlertForm
                message={`Nombre es requerido`}
                type={'error'}
                error={errors.first_name?.type}
              />
            </div>
            <div className='col-span-6 sm:col-span-3'>
              <label
                htmlFor='last_name'
                className='block text-sm font-medium text-textSecondary'
              >
                Apellido
              </label>
              <input
                {...register('last_name', { required: true, minLength: 3 })}
                type='text'
                name='last_name'
                id='last_name'
                className='w-full rounded-md border shadow-custom1 border-textPrimary bg-white py-3 px-6 text-base font-medium text-gray-500 outline-none focus:border-primary transition duration-500 ease-in-out transform  focus:shadow-md'
              />
              <AlertForm
                message={`Apellido es requerido`}
                type={'error'}
                error={errors.last_name?.type}
              />
            </div>
            <div className='col-span-6 sm:col-span-3'>
              <label
                htmlFor='email'
                className='block text-sm font-medium text-textSecondary'
              >
                Email
              </label>
              <input
                {...register('email', { required: true })}
                type='email'
                name='email'
                id='email'
                className='w-full rounded-md border shadow-custom1 border-textPrimary bg-white py-3 px-6 text-base font-medium text-gray-500 outline-none focus:border-primary transition duration-500 ease-in-out transform  focus:shadow-md'
              />
              <AlertForm
                message={`Email es requerido`}
                type={'error'}
                error={errors.email?.type}
              />
            </div>
            <div className='col-span-6 sm:col-span-3 grid gap-3'>
              <Upload
                // list images
                images={[`${profile ?? ''}`]}
                // text change photo
                photo={'Foto'}
                change={'Cambiar'}
                // text File
                upload={'Subir un archivo'}
                cover={'Foto de portada'}
                drag={'arrastrar '}
                or={'o'}
                up={'hasta'}
                // method
                register={register}
              />
            </div>
          </div>
        </div>
        <div className='flex gap-4 px-4 sm:px-6'>
          <button
            type='submit'
            className='inline-flex justify-center py-2 px-4 border border-transparent shadow-custom1 text-sm font-medium rounded-md text-white bg-primary hover:bg-secondary transition duration-500 ease-in-out transform'
          >
            Enviar
          </button>
          <button
            type='button'
            onClick={() => {
              router.push('/dashboard')
              setImages(null)
            }}
            className='inline-flex justify-center py-2 px-4 border border-transparent shadow-custom1 text-sm font-medium rounded-md text-white bg-primary hover:bg-secondary transition duration-500 ease-in-out transform'
          >
            Regresar
          </button>
        </div>
      </div>
    </form>
  );
};
