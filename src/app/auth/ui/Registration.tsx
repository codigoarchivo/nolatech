'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { useForm } from 'react-hook-form';
import { toast } from 'react-toastify';
import { AlertForm } from '@/components/ui/vigilant/AlertForm';
import { IUserAuth } from '@/interfaces/user.interface';
import { add_user } from '@/actions/auth/registration';

export const Registration = () => {
  const [showPassword, setShowPassword] = useState(false);
  const router = useRouter();

  const {
    handleSubmit,
    register,
    reset,
    formState: { errors, isValid },
  } = useForm<IUserAuth>({
    defaultValues: {
      first_name: 'jackson',
      last_name: 'quintero',
      email: 'jacksonescuques@gmail.com',
      password: 'Escuque5!',
      password_repeat: 'Escuque5!',
    },
  });

  const onSubmit = async (data: IUserAuth) => {
    const formData = new FormData();

    formData.append('first_name', data.first_name ?? '');
    formData.append('last_name', data.last_name ?? '');
    formData.append('email', data.email ?? '');
    formData.append('password', data.password ?? '');
    formData.append('password_repeat', data.password_repeat ?? '');

    const resp = await add_user({ ...Object.fromEntries(formData) });

    if (!resp?.ok) {
      toast.error('Error al obtener datos. Por favor, inténtalo de nuevo más tarde.');
      return;
    }

    toast.success(`Te enviamos un correo electrónico a: ${data.email}`);
    setShowPassword(false);
    reset();
    router.push('/');
  };

  const handleTogglePassword = () => {
    setShowPassword(!showPassword);
  };

  return (
    <>
      <div className='md:grid md:grid-cols-3 md:gap-6'>
        <div className='mt-5 md:mt-0 md:col-span-3'>
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className='sm:rounded-md sm:overflow-hidden'>
              <div className='px-4 py-5 space-y-6 sm:p-6'>
                <h2 className='text-2xl font-bold text-textSecondary uppercase'>
                  Registro
                </h2>
                <div className='grid grid-cols-6 gap-6'>
                  <div className='col-span-6'>
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
                      className='w-full rounded-md border shadow-custom1  bg-white py-3 px-6 text-base font-medium text-gray-500 outline-none focus:border-primary transition duration-500 ease-in-out transform  focus:shadow-md'
                    />
                    <AlertForm
                      message={`Nombre requerido`}
                      type={'error'}
                      error={errors.first_name?.type}
                    />
                  </div>
                  <div className='col-span-6'>
                    <label
                      htmlFor='last_name'
                      className='block text-sm font-medium text-textSecondary'
                    >
                      Apellido
                    </label>
                    <input
                      {...register('last_name', { required: true })}
                      type='text'
                      name='last_name'
                      id='last_name'
                      className='w-full rounded-md border shadow-custom1  bg-white py-3 px-6 text-base font-medium text-gray-500 outline-none focus:border-primary transition duration-500 ease-in-out transform  focus:shadow-md'
                    />
                    <AlertForm
                      message={`Apellido requerido`}
                      type={'error'}
                      error={errors.last_name?.type}
                    />
                  </div>
                  <div className='col-span-6'>
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
                      className='w-full rounded-md border shadow-custom1  bg-white py-3 px-6 text-base font-medium text-gray-500 outline-none focus:border-primary transition duration-500 ease-in-out transform  focus:shadow-md'
                    />
                    <AlertForm
                      message={`Email requerido`}
                      type={'error'}
                      error={errors.email?.type}
                    />
                  </div>
                  <div className='col-span-6'>
                    <label
                      htmlFor='password'
                      className='block text-sm font-medium text-textSecondary'
                    >
                      Contraseña
                    </label>
                    <div className='relative'>
                      <input
                        {...register('password', { required: true })}
                        type={showPassword ? 'text' : 'password'}
                        name='password'
                        id='password'
                        className='w-full rounded-md border shadow-custom1  bg-white py-3 px-6 text-base font-medium text-gray-500 outline-none focus:border-primary transition duration-500 ease-in-out transform  focus:shadow-md'
                      />
                      <button
                        type='button'
                        onClick={handleTogglePassword}
                        className='absolute top-1/2 right-4 transform -translate-y-1/2 text-gray-500 text-sm'
                      >
                        ojo
                      </button>
                    </div>
                    <AlertForm
                      message={`Contraseña requerido`}
                      type={'error'}
                      error={errors.password?.type}
                    />
                  </div>
                  <div className='col-span-6'>
                    <label
                      htmlFor='password_repeat'
                      className='block text-sm font-medium text-textSecondary'
                    >
                      Repetir contraseña
                    </label>
                    <input
                      {...register('password_repeat', { required: true })}
                      type={showPassword ? 'text' : 'password'}
                      name='password_repeat'
                      id='password_repeat'
                      className='w-full rounded-md border shadow-custom1  bg-white py-3 px-6 text-base font-medium text-gray-500 outline-none focus:border-primary transition duration-500 ease-in-out transform  focus:shadow-md'
                    />
                    <AlertForm
                      message={`Repetir contraseña requerido`}
                      type={'error'}
                      error={errors.password_repeat?.type}
                    />
                  </div>
                </div>
              </div>
              <div className='flex gap-4 px-4 sm:px-6 mb-10'>
                <div className='flex gap-4'>
                  <button
                    disabled={!isValid}
                    type='submit'
                    className='inline-flex justify-center py-2 px-4 border border-transparent shadow-custom1 text-sm font-medium rounded-md text-white bg-primary hover:bg-secondary transition duration-500 ease-in-out transform'
                  >
                    Enviar
                  </button>
                  <button
                    type='button'
                    onClick={() => {
                      router.back(), reset();
                    }}
                    className='inline-flex justify-center py-2 px-4 border border-transparent shadow-custom1 text-sm font-medium rounded-md text-white bg-primary hover:bg-secondary transition duration-500 ease-in-out transform'
                  >
                    Regresar
                  </button>
                </div>
              </div>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};
