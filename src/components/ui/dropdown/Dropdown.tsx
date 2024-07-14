'use client';

import Image from 'next/image';
import React, { useEffect, useRef, useState } from 'react';
import { useSession } from 'next-auth/react';
import { useRouter } from 'next/navigation';
import { DropdownProps } from './interface';
import { DropdownItem } from './DropdownItem';
import profileI from '../../../../public/assets/notImage/profile.png';

export interface IDropdown {
  list: DropdownProps[];
}
export const Dropdown = (props: IDropdown) => {
  const router = useRouter();
  const { data: session } = useSession();
  const profile = session?.user.profile;
  const [isDropdownOpen, setIsDropdownOpen] = useState<boolean>(false);
  const dropdownButton = useRef<HTMLButtonElement>(null);
  const dropdownMenu = useRef<HTMLUListElement>(null);

  // Function to toggle the dropdown
  const toggleDropdown = () => {
    setIsDropdownOpen((prevState) => !prevState);
  };

  // Close the dropdown when clicking outside of it
  const handleOutsideClick = (event: MouseEvent) => {
    if (dropdownButton && dropdownMenu) {
      if (
        !dropdownButton.current?.contains(event.target as Node) &&
        !dropdownMenu.current?.contains(event.target as Node)
      ) {
        setIsDropdownOpen(false);
      }
    }
  };

  useEffect(() => {
    // Initialize the dropdown state
    toggleDropdown();

    // Add event listener to close dropdown on outside click
    window.addEventListener('click', handleOutsideClick);

    return () => {
      // Clean up event listener
      window.removeEventListener('click', handleOutsideClick);
    };
  }, []);

  return (
    <div className='relative inline-block text-left'>
      {profile ? (
        <>
          <button
            ref={dropdownButton}
            onClick={toggleDropdown}
            className={`hover:shadow-custom1 inline-flex items-center justify-center py-2 px-4 border border-transparent  text-sm font-medium rounded-md  transition duration-500 ease-in-out transform`}
          >
            <div className='flex items-center font-medium text-gray-900 whitespace-nowrap dark:text-white'>
              <Image
                src={profileI}
                className='h-6 w-6 rounded-full object-cover shadow-custom1'
                alt='Man'
                width='0'
                height='0'
                sizes='100vw'
              />
              <div className='ps-2 grid text-xs justify-start'>
                <strong className='font-semibold capitalize text-xs flex'>
                  {profile?.first_name} {profile?.last_name}
                </strong>
                <strong className='font-normal text-gray-500'>
                  {profile?.email}
                </strong>
              </div>
            </div>
          </button>
          <ul
            ref={dropdownMenu}
            className={`${
              isDropdownOpen ? '' : 'hidden'
            } transform duration-300 ease-in-out origin-top-right absolute mt-2 w-48 rounded-md shadow-custom1 bg-white ring-1 ring-secondary ring-opacity-5 z-[1] `}
          >
            {props.list.map((props, key) => (
              <DropdownItem
                key={key}
                {...props}
                setIsDropdownOpen={setIsDropdownOpen}
              />
            ))}
          </ul>
        </>
      ) : (
        <button className='flex' onClick={() => router.push('/auth/login')}>
          <svg fill='none' className='w-6 h-6' viewBox='0 0 24 24'>
            <path
              d='M12 20C7.58172 20 4 16.4183 4 12C4 7.58172 7.58172 4 12 4'
              stroke='currentColor'
              strokeWidth='1.5'
              strokeLinecap='round'
            />
            <path
              d='M10 12H20M20 12L17 9M20 12L17 15'
              stroke='currentColor'
              strokeWidth='1.5'
              strokeLinecap='round'
              strokeLinejoin='round'
            />
          </svg>
        </button>
      )}
    </div>
  );
};
