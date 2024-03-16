'use client';

import React from 'react';
import { Live, Play } from '@/components';
import { useUIStore } from '@/store';

export const NavTop = () => {
  const isSideMenuOpen = useUIStore((state) => state.isSideMenuOpen);
  return (
    <nav
      className={`${
        !isSideMenuOpen ? 'fixed' : 'hidden'
      } w-full z-20 border-gray-200 bg-primary shadow-custom1`}
    >
      <div className='max-w-screen-xl flex flex-wrap items-center justify-center mx-auto'>
        <div className='h-full flex justify-center items-center gap-2 md:gap-10 text-white text-xs lg:text-3xl md:text-2xl sm:text-lg'>
          <div className='py-4 bg-fourdary h-full font-bold flex gap-2 md:gap-8 justify-center items-center px-2 uppercase shadow-custom1'>
            <span>Live</span>{' '}
            <Live
              className={'text-white w-6 h-6 lg:w-10 sm:w-8 lg:h-10 sm:h-8'}
            />
          </div>
          <p className='text-lg py-4 text-center'>
            <span>Lorem ipsu</span>{' '}
            <span className='text-secondary'>dolor sit amet</span>
          </p>
          <button className='py-4 bg-tertiary hover:bg-secondary text-white px-2 md:px-8 font-bold font-weight-bold text-xs lg:text-xl md:text-lg sm:text-md h-full flex gap-2 md:gap-8 transition duration-500 ease-in-out transform justify-center uppercase items-center  cursor-pointer'>
            {' '}
            <span>Join Now!</span>
            <Play
              className={'text-white w-6 h-6 lg:w-10 sm:w-8  lg:h-10 sm:h-8'}
            />
          </button>
        </div>
      </div>
    </nav>
  );
};
