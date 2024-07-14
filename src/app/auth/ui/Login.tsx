'use client';

import { useState } from 'react';
import { toast } from 'react-toastify';
import { useForm } from 'react-hook-form';
import { signIn } from 'next-auth/react';
import { useRouter, useSearchParams } from 'next/navigation';
import { AlertForm } from '@/components/ui/vigilant/AlertForm';
import { IUserAuth } from '@/interfaces/user.interface';

export const Login = () => {
  const router = useRouter();
  const [showPassword, setShowPassword] = useState(false);
  const searchParams = useSearchParams();
  const redirectTo = searchParams.get('redirectTo');

  const {
    handleSubmit,
    register,
    reset,
    formState: { errors, isValid },
  } = useForm<IUserAuth>({
    defaultValues: {
      email: 'jacksonescuques@gmail.com',
      password: 'Escuque5!',
    },
  });

  const onSubmit = async (data: IUserAuth) => {
    const formData = new FormData();

    formData.append('email', data.email ?? '');
    formData.append('password', data.password ?? '');
    formData.append('path', '/jwt/create/');

    const resp = await signIn('credentials', {
      ...Object.fromEntries(formData),
      redirect: false,
    });

    if (!resp?.ok) {
      toast.error(`No se recibieron datos válidos en la respuesta.`);
      return;
    }

    setShowPassword(false);
    toast.success('Registro exitoso.');
    reset();
    router.push('/');
  };

  const handleTogglePassword = () => {
    setShowPassword(!showPassword);
  };

  const handleReturn = () => {
    redirectTo ? router.push('/') : router.back();
    reset();
  };

  return (
    <>
      <div className='md:grid md:grid-cols-3 md:gap-6'>
        <div className='mt-5 md:mt-0 md:col-span-3'>
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className='sm:rounded-md sm:overflow-hidden'>
              <div className='px-4 py-5 space-y-6 sm:p-6'>
                <h2 className='text-2xl font-bold text-textSecondary uppercase'>
                  Login
                </h2>
                <div className='grid grid-cols-6 gap-6'>
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
                      message={`Login`}
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
                        defaultValue={'Escuque1$'}
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
                      message={`Login`}
                      type={'error'}
                      error={errors.email?.type}
                    />
                  </div>
                </div>
              </div>
              <div className='flex gap-4 px-4 sm:px-6 mb-10'>
                <button
                  type='submit'
                  className='inline-flex justify-center py-2 px-4 border border-transparent shadow-custom1 text-sm font-medium rounded-md text-white bg-primary hover:bg-secondary transition duration-500 ease-in-out transform'
                  disabled={!isValid}
                >
                  Enviar
                </button>
                <button
                  type='button'
                  onClick={handleReturn}
                  className='inline-flex justify-center py-2 px-4 border border-transparent shadow-custom1 text-sm font-medium rounded-md text-white bg-primary hover:bg-secondary transition duration-500 ease-in-out transform'
                >
                  Regresar
                </button>
              </div>
              <div className='flex gap-4 px-4 sm:px-6 mb-10 items-center'>
                <strong>¿Aún no eres miembro?</strong>
                <button
                  type='button'
                  className='underline text-primary hover:text-textSecondary transition duration-500 ease-in-out transform inline-flex items-center'
                  onClick={() => router.push('/auth/registration')}
                >
                  <strong>Únete</strong>
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};
