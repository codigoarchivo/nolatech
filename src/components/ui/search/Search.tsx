'use client';

import { useRouter } from 'next/navigation';
import React, { ChangeEvent, FormEvent, useState } from 'react';

interface ISearch {
  route: string;
  search: string;
}

export const Search = (props: ISearch) => {
  const [query, setQuery] = useState('');
  const router = useRouter();

  const handleSearch = (e: ChangeEvent<HTMLInputElement>) => {
    setQuery(e.target.value);
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    let path = `${process.env.NEXT_PUBLIC_PATH_BASE}${props.route}`;
    router.push(query ? `${path}?search=${query}` : query);
    setQuery('')
  };

  return (
    <>
      <form onSubmit={handleSubmit} className='max-w-lg  w-svw'>
        <label
          htmlFor='default-search'
          className='mb-2 text-sm font-medium text-textSecondary sr-only'
        >
          {props.search}
        </label>
        <div className='relative'>
          <div className='absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none'>
            <svg
              className='w-4 h-4 text-primary'
              aria-hidden='true'
              xmlns='http://www.w3.org/2000/svg'
              fill='none'
              viewBox='0 0 20 20'
            >
              <path
                stroke='currentColor'
                strokeLinecap='round'
                strokeLinejoin='round'
                strokeWidth='2'
                d='m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z'
              />
            </svg>
          </div>
          <input
            type='search'
            id='default-search'
            className='block w-full px-4 py-2 ps-10 text-sm text-textSecondary border shadow-custom1 border-textPrimary rounded-lg  focus:ring-primary focus:border-primary transition duration-500 ease-in-out outline-none focus:shadow-md'
            value={query}
            onChange={handleSearch}
            required
          />
          <button
            type='submit'
            className='absolute end-2.5 bottom-1 py-1 px-4 border border-transparent shadow-custom1 text-sm font-medium rounded-md text-white bg-primary hover:bg-secondary transition duration-500 ease-in-out transform'
          >
            {props.search}
          </button>
        </div>
      </form>
    </>
  );
};
