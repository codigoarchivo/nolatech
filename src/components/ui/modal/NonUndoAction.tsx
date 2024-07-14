import React from 'react';

interface NonUndoAction {
  select: string | undefined;
  text: string;
}
export const NonUndoAction = (props: NonUndoAction) => {
  return (
    <div className='bg-white px-4 pb-4 pt-5 sm:p-6 sm:pb-4'>
      <div className='sm:flex sm:items-start'>
        <div className='mx-auto flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full bg-red-100 sm:mx-0 sm:h-10 sm:w-10'>
          <svg
            className='h-6 w-6 text-red-600'
            viewBox='0 0 24 24'
            fill='none'
            xmlns='http://www.w3.org/2000/svg'
          >
            <circle cx='12' cy='17' r='1' fill='currentColor' />
            <path
              d='M12 10L12 14'
              stroke='currentColor'
              strokeWidth='2'
               strokeLinecap='round'
              strokeLinejoin='round'
            />
            <path
              d='M3.44722 18.1056L10.2111 4.57771C10.9482 3.10361 13.0518 3.10362 13.7889 4.57771L20.5528 18.1056C21.2177 19.4354 20.2507 21 18.7639 21H5.23607C3.7493 21 2.78231 19.4354 3.44722 18.1056Z'
              stroke='currentColor'
              strokeWidth='2'
              strokeLinecap='round'
              strokeLinejoin='round'
            />
          </svg>
        </div>
        <div className='mt-3 text-center sm:ml-4 sm:mt-0 sm:text-left'>
          <h3
            className='text-base font-semibold leading-6 text-gray-900'
            id='modal-title'
          >
            {props.select}
          </h3>
          <div className='mt-2'>
            <p className='text-sm text-gray-500'>{props.text}</p>
          </div>
        </div>
      </div>
    </div>
  );
};
