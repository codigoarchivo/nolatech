'use client';

import { redirect, usePathname, useSearchParams } from 'next/navigation';
import Link from 'next/link';
import clsx from 'clsx';
import { generatePaginationNumbers } from '@/utils/generatePaginationNumbers';

interface IPagination {
  totalPages: number;
  next: string;
  previous: string;
  total: number;
  from: number;
  sho: string;
  of: string;
}

interface IPaginationItem {
  currentPage: number;
  page: string | number;
  // method
  createPageUrl: (pageNumber: number | string) => string;
}

const PaginationItem = ({
  page,
  currentPage,
  // method
  createPageUrl,
}: IPaginationItem) => {
  return (
    <Link
      title={`Nolatech page ${page}`}
      className={clsx(
        `${
          page === currentPage || page === '...'
            ? ''
            : 'bg-white hover:bg-primary hover:text-white shadow-custom1'
        } ${
          page === '...' && 'pointer-events-none'
        } page-link relative px-2 sm:px-3 py-1 text-sm text-gray-500 hover:textPrimary transition duration-500 ease-in-out transform focus:shadow-none`,
        {
          'bg-primary shadow-custom1 text-white hover:bg-secondary transition duration-500 ease-in-out transform':
            page === currentPage,
        }
      )}
      href={createPageUrl(page)}
    >
      {page}
    </Link>
  );
};

export const Pagination = ({
  totalPages,
  previous,
  next,
  sho,
  of,
  total,
  from,
}: IPagination) => {
  const pathname = usePathname();
  const searchParams = useSearchParams();

  const pageString = searchParams.get('page') ?? 1;
  const currentPage = isNaN(+pageString) ? 1 : +pageString;

  if (currentPage < 1 || isNaN(+pageString)) {
    redirect(pathname);
  }

  if (totalPages === 1) {
    return null
  }

  const allPages = generatePaginationNumbers(currentPage, totalPages);

/* This code snippet is checking if the first element in the `allPages`
 array is equal to 1. If it is, then it returns `null`. */
  if (!allPages[0]) {
    return null;
  }

  const createPageUrl = (pageNumber: number | string) => {
    const params = new URLSearchParams(searchParams);

    if (pageNumber === '...') {
      return `${pathname}?${params.toString()}`;
    }

    if (+pageNumber <= 0) {
      return `${pathname}`; //   href='/kid';
    }

    if (+pageNumber > totalPages) {
      // Next >
      return `${pathname}?${params.toString()}`;
    }

    params.set('page', pageNumber.toString());
    return `${pathname}?${params.toString()}`;
  };

  return (
    <>
      <span className='text-sm font-normal dark:text-gray-400 mb-4 md:mb-0 block w-full md:inline md:w-auto'>
        {sho}{' '}
        <span className='font-semibold text-textSecondary dark:text-white'>
          {from}-{totalPages}
        </span>{' '}
        {of}{' '}
        <span className='font-semibold text-textSecondary dark:text-white'>
          {total}
        </span>
      </span>
      <ul>
        <li className='flex h-6'>
          <div className='flex text-center justify-center mb-32'>
            <nav aria-label='Page navigation example'>
              <ul className='flex list-style-none'>
                <li className='page-item'>
                  <Link
                    className={`page-link px-1 sm:px-3 py-1 text-sm font-medium shadow-custom1 bg-white rounded-s-md hover:bg-primary text-textSecondary hover:text-white transition duration-500 ease-in-out transform ${
                      currentPage === 1 ? 'cursor-not-allowed' : ''
                    }`}
                    href={createPageUrl(currentPage - 1)}
                    title={previous}
                  >
                    {previous}
                  </Link>
                </li>

                {allPages.map((page, index) => (
                  <li className='page-item' key={index}>
                    <PaginationItem
                      page={page}
                      currentPage={currentPage}
                      // method
                      createPageUrl={createPageUrl}
                    />
                  </li>
                ))}

                <li className='page-item'>
                  <Link
                    className='page-link px-1 sm:px-3 py-1 text-sm  font-medium shadow-custom1 bg-white rounded-e-md hover:bg-primary text-textSecondary hover:text-white  transition duration-500 ease-in-out transform'
                    href={createPageUrl(currentPage + 1)}
                    title={next}
                  >
                    {next}
                  </Link>
                </li>
              </ul>
            </nav>
          </div>
        </li>
      </ul>
    </>
  );
};
