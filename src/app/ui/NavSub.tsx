'use client';

import Image from 'next/image';
import Link from 'next/link';
import { Content } from './Count';
import { useUIStore } from '@/store';
import icongrab from '../../../public/assets/icongrab.png';
import Prb_Header from '../../../public/assets/Prb_Header.png';
import { navLink } from './nav_link';

export const NavSub = () => {
  const isSideMenuOpen = useUIStore((state) => state.isSideMenuOpen);
  return (
    <nav>
      <div className='w-full h-full 2xl:container 2xl:mx-auto'>
        <div className='relative h-[400px] sm:h-[500px] md:h-[600px] lg:h-[760px] grid items-center'>
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

          <div
            className={`${
              !isSideMenuOpen ? 'flex' : 'hidden'
            } w-full flex gap-5 justify-around items-center text-white py-0 container mx-auto`}
          >
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
              {navLink.map((item, key) => (
                <Link href={item.link} key={key} title={item.name + key}>
                  <span>{item.name}</span>
                </Link>
              ))}
            </div>
          </div>
          <div className='w-full h-full flex justify-center items-center lg:items-start '>
            <div className='grid gap-2 w-max text-lg sm:text-2xl md:text-4xl lg:text-6xl px-2 md:px-6  ml-0 md:ml-20 lg:ml-40'>
              <h2 className='text-white font-bold'>LOREM IPSUM</h2>
              <h1 className='text-secondary bg-white font-bold max-w-fit p-2 shadow-custom1'>
                LOREM IPSUM DOLOR
              </h1>
              <h2 className='text-white font-bold mb-4 md:mb-14'>LOREM IPSUM</h2>
              <button className=' w-max inline-block rounded-md bg-primary px-4 md:px-10 py-2 md:py-4 text-xs md:text-base shadow-custom1 text-center  font-semibold text-white outline-none transition duration-500 ease-in-out transform hover:bg-tertiary focus-visible:ring active:bg-secondary'>
                WHAT IS NEXT
              </button>
            </div>
          </div>
        </div>
        <Content />
      </div>
    </nav>
  );
};
