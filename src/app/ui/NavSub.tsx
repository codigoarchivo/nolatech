'use client';

import Image from 'next/image';
import { Content } from './Count';
import { useUIStore } from '@/store';
import icongrab from '../../../public/assets/icongrab.png';
import Prb_Header from '../../../public/assets/Prb_Header.png';

export const NavSub = () => {  
  const isSideMenuOpen = useUIStore((state) => state.isSideMenuOpen);
  return (
    <nav>
      <div className='w-full h-full'>
        <div className='relative h-screen grid items-center'>
          <Image
            src={Prb_Header}
            className='h-full w-full object-cover object-top absolute z-[-1]'
            alt={'prb_header'}
            title={'Prb_Header'}
            width='0'
            height='0'
            quality={100}
            sizes='100vw'
          />
          <div className='absolute z-[-1] inset-0 bg-secondary/35 sm:from-sebg-secondary/95 sm:to-sebg-secondary/25 ltr:sm:bg-gradient-to-r rtl:sm:bg-gradient-to-l'></div>

          <div className={`${!isSideMenuOpen ? 'flex' : 'hidden'} w-full flex gap-5 justify-around items-center text-white py-10 container mx-auto`}>
            <Image
              src={icongrab}
              className='h-16 w-48'
              alt={'grab'}
              title={'icongrab'}
              width='0'
              height='0'
              quality={100}
              sizes='100vw'
            />
            <div className='flex justify-between gap-5 font-bold  text-sm lg:text-md'>
              <a href='' className='route'>
                LOREM IPSUM
              </a>
              <a href='' className='route'>
                LOREM IPSUM
              </a>
              <a href='' className='route'>
                LOREM IPSUM
              </a>
              <a href='' className='route'>
                LOREM IPSUM
              </a>
              <a href='' className='route'>
                LOREM IPSUM
              </a>
              <a href='' className='route'>
                LOREM IPSUM
              </a>{' '}
            </div>
          </div>
          <div className='grid grid-cols-6 gap-6 container mx-auto'>
            <div className='col-span-6 sm:col-span-1 md:col-span-2'></div>
            <div className='col-span-6 sm:col-span-5 md:col-span-4'>
              <div className='grid gap-2 items-center w-max text-2xl md:text-4xl lg:text-6xl p-3'>
                <h2 className='text-white font-bold'>LOREM IPSUM</h2>
                <h1 className='text-secondary bg-white font-bold max-w-fit p-2 shadow-custom1'>
                  LOREM IPSUM DOLOR
                </h1>
                <h2 className='text-white font-bold mb-14'>LOREM IPSUM</h2>
                <button className=' w-max inline-block rounded-md bg-primary px-8 py-3 shadow-custom1 text-center text-sm font-semibold text-white outline-none transition duration-500 ease-in-out transform hover:bg-tertiary focus-visible:ring active:bg-secondary md:text-base'>
                  WHAT IS NEXT
                </button>
              </div>
            </div>
          </div>
        </div>
        <Content />
      </div>
    </nav>
  );
};
