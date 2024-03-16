'use client';

import { useEffect, useState } from 'react';
import Image from 'next/image';
import { useUIStore } from '@/store';
import icongrab from '../../../public/assets/icongrab.png';

export const NavSm = () => {
  const [show, setshow] = useState(false);
  const openSideMenu = useUIStore((state) => state.openSideMenu);
  const closeSideMenu = useUIStore((state) => state.closeSideMenu);
  const isSideMenuOpen = useUIStore((state) => state.isSideMenuOpen);

  useEffect(() => {
    function handleResize() {
      if (window.matchMedia('(max-width: 1027px)').matches) {
        openSideMenu();
      } else {
        closeSideMenu();
      }
    }

    handleResize();
    window.addEventListener('resize', handleResize);

    return () => window.removeEventListener('resize', handleResize);
  }, [openSideMenu, closeSideMenu]);

  return (
    <nav
      className={`${
        isSideMenuOpen ? 'fixed' : 'hidden'
      } w-full z-20 border-gray-200 bg-primary shadow-custom1`}
    >
      <div className='max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4'>
        <a href='#' className='flex items-center space-x-3 rtl:space-x-reverse'>
          <Image
            src={icongrab}
            className='h-8 w-20 object-fill absolute z-[-1]'
            alt={'prb_header'}
            title={'Prb_Header'}
            width='0'
            height='0'
            quality={100}
            sizes='100vw'
          />{' '}
        </a>
        <button
          onClick={() => setshow(!show)}
          data-collapse-toggle='navbar-hamburger'
          type='button'
          className='inline-flex items-center justify-center p-2 w-10 h-10 text-sm text-white shadow-custom1 rounded-lg hover:bg-primary transition duration-500 ease-in-out transform  focus:outline-none focus:ring-2 focus:ring-gray-200 '
          aria-controls='navbar-hamburger'
          aria-expanded='false'
        >
          <span className='sr-only'>Open main menu</span>
          <svg
            className='w-5 h-5'
            aria-hidden='true'
            xmlns='http://www.w3.org/2000/svg'
            fill='none'
            viewBox='0 0 17 14'
          >
            <path
              stroke='currentColor'
              stroke-linecap='round'
              stroke-linejoin='round'
              stroke-width='2'
              d='M1 1h15M1 7h15M1 13h15'
            />
          </svg>
        </button>
        <div className={`${show ? '' : 'hidden'} w-full`}>
          <ul className='flex flex-col font-medium mt-4 rounded-lg bg-white shadow-custom1'>
            <li>
              <a
                href='#'
                className='block py-2 px-3 text-white bg-primary rounded '
                aria-current='page'
              >
                Home
              </a>
            </li>
            <li>
              <a
                href='#'
                className='block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 '
              >
                Services
              </a>
            </li>
            <li>
              <a
                href='#'
                className='block py-2 px-3 text-gray-900 rounded hover:bg-gray-100'
              >
                Pricing
              </a>
            </li>
            <li>
              <a
                href='#'
                className='block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 '
              >
                Contact
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};
