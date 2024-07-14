'use client';

import { signIn } from 'next-auth/react';
import { useRouter } from 'next/navigation';
import { toast } from 'react-toastify';

interface IActivation {
  activation: string;
}

export const Activation = (props: IActivation) => {
  const router = useRouter()
  const handleActivation = async () => {
    const formData = new FormData();

    formData.append('token', props.activation ?? '');
    formData.append('path', '/users/activation/');

    const resp = await signIn('credentials', {
      ...Object.fromEntries(formData),
      redirect: false,
    });

    if (!resp?.ok) {
      toast.error(`No se recibieron datos válidos en la respuesta.`);
      return;
    }

    toast.success('Registro exitoso.');
    router.push('/')
  };

  return (
    <div className='grid gap-5 max-w-xl p-10 bg-white border border-gray-200 rounded-lg shadow-custom1'>
      <div>
        <h5 className='mb-2 uppercase text-2xl font-bold tracking-tight text-textSecondary'>
          Activación
        </h5>
        <p className='grid gap-2 mb-3 font-normal text-gray-500'>
          <span>
            Al aceptar los términos y condiciones, confirmas que eres el titular
            de esta cuenta y que proporcionaste información veraz durante el
            proceso de registro. Estamos comprometidos a proteger tu privacidad
            y a garantizar la seguridad de tus datos. Si tienes alguna pregunta
            o inquietud, no dudes en contactarnos.
          </span>
          <strong className='text-secondary'>¡Bienvenido a Nolatech!</strong>
        </p>
      </div>

      <button
        onClick={handleActivation}
        className='inline-flex justify-center items-center uppercase py-2 px-4 border border-transparent shadow-custom1 text-sm font-medium rounded-md text-white bg-primary hover:bg-secondary transition duration-500 ease-in-out transform'
      >
        <span>Activación</span>
        <svg
          className='rtl:rotate-180 w-3.5 h-3.5 ms-2'
          aria-hidden='true'
          xmlns='http://www.w3.org/2000/svg'
          fill='none'
          viewBox='0 0 14 10'
        >
          <path
            stroke='currentColor'
            strokeLinecap='round'
            strokeLinejoin='round'
            strokeWidth='2'
            d='M1 5h12m0 0L9 1m4 4L9 9'
          />
        </svg>
      </button>
    </div>
  );
};
