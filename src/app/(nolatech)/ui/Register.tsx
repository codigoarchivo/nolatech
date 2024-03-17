'use client';

import React from 'react';
import { useForm } from 'react-hook-form';
import { AlertForm } from '@/components';
import { IUser } from '@/interfaces';

export const Register = () => {
  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm<IUser>();

  const onSubmit = async (data: IUser) => {
    const formData = new FormData();

    formData.append('id', data.id ?? '');
    formData.append('firstName', data.firstName);
    formData.append('lastName', data.lastName);
    formData.append('email', data.email);
    formData.append('message', data.message);
    formData.append('department', data.department);
    formData.append('phone', data.phone);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className='grid grid-cols-6 gap-6'>
        <div className='col-span-6 sm:col-span-3'>
          <input
            {...register('firstName', { required: true })}
            className='w-full rounded-md border shadow-custom1 border-textPrimary bg-white py-2 md:py-3 px-6 text-base font-medium text-gray-500 outline-none focus:border-primary transition duration-500 ease-in-out transform  focus:shadow-md'
            type='text'
            placeholder='First Name'
          />
          <AlertForm
            message={'First Name is require'}
            type={'error'}
            error={errors.firstName?.type}
          />
        </div>
        <div className='col-span-6 sm:col-span-3'>
          <input
            {...register('lastName', { required: true })}
            className='w-full rounded-md border shadow-custom1 border-textPrimary bg-white py-2 md:py-3 px-6 text-base font-medium text-gray-500 outline-none focus:border-primary transition duration-500 ease-in-out transform  focus:shadow-md'
            type='text'
            placeholder='Last Name'
          />
          <AlertForm
            message={'Last Name is require'}
            type={'error'}
            error={errors.lastName?.type}
          />
        </div>
        <div className='col-span-6 sm:col-span-3'>
          <input
            {...register('phone', { required: true })}
            className='w-full rounded-md border shadow-custom1 border-textPrimary bg-white py-2 md:py-3 px-6 text-base font-medium text-gray-500 outline-none focus:border-primary transition duration-500 ease-in-out transform  focus:shadow-md'
            type='text'
            placeholder='Phone'
          />
          <AlertForm
            message={'Phone is require'}
            type={'error'}
            error={errors.phone?.type}
          />
        </div>
        <div className='col-span-6 sm:col-span-3'>
          <input
            {...register('email', { required: true })}
            className='w-full rounded-md border shadow-custom1 border-textPrimary bg-white py-2 md:py-3 px-6 text-base font-medium text-gray-500 outline-none focus:border-primary transition duration-500 ease-in-out transform  focus:shadow-md'
            type='text'
            placeholder='Email'
          />
          <AlertForm
            message={'Email is require'}
            type={'error'}
            error={errors.email?.type}
          />
        </div>
        <div className='col-span-6'>
          <input
            {...register('department', { required: true })}
            className='w-full rounded-md border shadow-custom1 border-textPrimary bg-white py-2 md:py-3 px-6 text-base font-medium text-gray-500 outline-none focus:border-primary transition duration-500 ease-in-out transform  focus:shadow-md'
            type='text'
            placeholder='Department'
          />
          <AlertForm
            message={'Department is require'}
            type={'error'}
            error={errors.department?.type}
          />
        </div>
        <div className='col-span-6'>
          <textarea
            {...register('message', { required: true })}
            className='w-full rounded-md border shadow-custom1 border-textPrimary bg-white py-2 md:py-3 px-6 text-base font-medium text-gray-500 outline-none focus:border-primary transition duration-500 ease-in-out transform  focus:shadow-md'
            placeholder='Mensajse'
          ></textarea>
          <AlertForm
            message={'Mensajse is require'}
            type={'error'}
            error={errors.message?.type}
          />
        </div>
        <div className='col-span-6 sm:col-span-3'>
          <button type='submit' className=' w-max inline-block rounded-md bg-primary px-4 md:px-10 py-2 md:py-4 text-xs md:text-base shadow-custom1 text-center  font-semibold text-white outline-none transition duration-500 ease-in-out transform hover:bg-tertiary focus-visible:ring active:bg-secondary'>
            I’M IN
          </button>
        </div>
        <div className='col-span-6'>
          <p>
            Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
            nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam
          </p>
        </div>
      </div>
    </form>
  );
};
