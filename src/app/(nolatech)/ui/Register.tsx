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
            className='w-full rounded-md border shadow-custom1 border-textPrimary bg-white py-3 px-6 text-base font-medium text-gray-500 outline-none focus:border-primary transition duration-500 ease-in-out transform  focus:shadow-md'
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
            className='w-full rounded-md border shadow-custom1 border-textPrimary bg-white py-3 px-6 text-base font-medium text-gray-500 outline-none focus:border-primary transition duration-500 ease-in-out transform  focus:shadow-md'
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
            className='w-full rounded-md border shadow-custom1 border-textPrimary bg-white py-3 px-6 text-base font-medium text-gray-500 outline-none focus:border-primary transition duration-500 ease-in-out transform  focus:shadow-md'
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
            className='w-full rounded-md border shadow-custom1 border-textPrimary bg-white py-3 px-6 text-base font-medium text-gray-500 outline-none focus:border-primary transition duration-500 ease-in-out transform  focus:shadow-md'
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
            className='w-full rounded-md border shadow-custom1 border-textPrimary bg-white py-3 px-6 text-base font-medium text-gray-500 outline-none focus:border-primary transition duration-500 ease-in-out transform  focus:shadow-md'
            type='text'
            placeholder='Department'
          />
        </div>
        <div className='col-span-6'>
          <textarea
            {...register('message', { required: true })}
            className='w-full rounded-md border shadow-custom1 border-textPrimary bg-white py-3 px-6 text-base font-medium text-gray-500 outline-none focus:border-primary transition duration-500 ease-in-out transform  focus:shadow-md'
            placeholder='Mensajse'
          ></textarea>
          <AlertForm
            message={'Mensajse is require'}
            type={'error'}
            error={errors.message?.type}
          />
        </div>
        <div className='col-span-6 sm:col-span-3'>
          <button
            type='submit'
            className='inline-block rounded-md bg-primary px-16 py-3 shadow-custom1 text-center text-sm font-semibold text-white outline-none transition duration-500 ease-in-out transform hover:bg-secondary focus-visible:ring active:bg-secondary md:text-base'
          >
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
