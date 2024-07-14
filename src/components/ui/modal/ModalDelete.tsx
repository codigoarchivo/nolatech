'use client'

import { useState } from 'react';
import { useSession } from 'next-auth/react';
import { useRouter } from 'next/navigation';
import { toast } from 'react-toastify';
import { IModalDelete } from '@/components/ui/modal/interface';
import { NonUndoAction } from '@/components/ui/modal/NonUndoAction';
import { delete_modal } from '@/actions/modal/delete_modal';

export const ModalDelete = (props: IModalDelete) => {
  const [isOpenDelete, setIsOpenDelete] = useState(false);
  const { data: session } = useSession();
  const router = useRouter()

  const handleDelete = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const formData = new FormData();

    formData.append('token', session?.user.accessToken ?? '');
    formData.append('path', props.path);

    const resp = await delete_modal(Object.fromEntries(formData));

    if (!resp?.ok) {
      toast.error(`No se recibieron datos válidos en la respuesta.`);
      return;
    }

    toast.success(`${props.options[0]}`);
     
    router.push(`${props.back}`);
    setIsOpenDelete(false);
    toast.success("Registro exitoso.");
  };

  return (
    <>
      <button
        onClick={() => setIsOpenDelete(!isOpenDelete)}
        className='font-medium text-primary dark:text-textSecondary hover:underline'
      >
        {props.del}
      </button>
      {isOpenDelete && (
        <div
          className='relative z-30'
          aria-labelledby='modal-title'
          role='dialog'
          aria-modal='true'
        >
          <div className='fixed inset-0 bg-gray-800 bg-opacity-25 transition-opacity'></div>

          <div className='fixed inset-0 z-10 w-screen overflow-y-auto'>
            <div className='flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0'>
              <div className='relative transform overflow-hidden rounded-lg bg-white text-left shadow-custom1 transition-all sm:my-8 sm:w-full sm:max-w-lg'>
                <NonUndoAction select={props.del} text={props.text} />
                <div className='flex gap-5 bg-gray-50 px-4 py-3 sm:flex sm:flex-row-reverse sm:px-6'>
                  <form onSubmit={handleDelete}>
                    <button
                      type='submit'
                      className='inline-flex justify-center py-2 px-4 border border-transparent shadow-custom1 text-sm font-medium rounded-md text-white bg-primary hover:bg-secondary transition duration-500 ease-in-out transform'
                    >
                      {props.del}
                    </button>
                  </form>
                  <button
                    onClick={() => setIsOpenDelete(!isOpenDelete)}
                    type='button'
                    className='inline-flex justify-center py-2 px-4 border border-transparent shadow-custom1 text-sm font-medium rounded-md text-textSecondary bg-white hover:bg-secondary hover:text-white transition duration-500 ease-in-out transform'
                  >
                    {props.cancel}
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

