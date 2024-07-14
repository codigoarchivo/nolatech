'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { useUIStore } from '@/store';
import { navLink } from './nav_link';
import icongrabWhite from '../../../public/assets/icongrabWhite.png';

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
      } w-full z-20 border-gray-200 bg-primary shadow-custom1 top-0`}
    >
      <div className='max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-2 md:p-4'>
        <Link href='#' title='link image' className='flex items-center space-x-3 rtl:space-x-reverse'>
          <Image
            src={icongrabWhite}
            className='h-8 w-20 object-fill absolute z-[-1]'
            alt={'prb_header'}
            title={'Prb_Header'}
            width='0'
            height='0'
            quality={100}
            sizes='100vw'
          />{' '}
        </Link>
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
              strokeLinecap='round'
              strokeLinejoin='round'
              strokeWidth='2'
              d='M1 1h15M1 7h15M1 13h15'
            />
          </svg>
        </button>
        <div className={`${show ? '' : 'hidden'} w-full`}>
          <ul className='flex flex-col font-medium mt-4 rounded-lg bg-white shadow-custom1'>
            {navLink.map((item, key, arr) => (
              <li
                key={key}
                className={`${
                  key === 0
                    ? 'text-white bg-primary rounded'
                    : 'text-gray-900 rounded hover:bg-gray-100'
                } block py-2 px-3`}
              >
                <Link href={item.link} title={item.name}>
                  <span>{item.name}</span>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
};
