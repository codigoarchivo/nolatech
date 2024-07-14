'use client';

import { useRouter } from 'next/navigation';
import React, { useEffect, useState } from 'react';

interface ICountDropdown {
  count: string;
}

export const CountDropdown: React.FC<ICountDropdown> = ({ count }) => {
  const router = useRouter();
  const [selectedCount, setSelectedCount] = useState<number | null>(0);

  useEffect(() => {
    setSelectedCount(Number(count));
  }, [count]);

  useEffect(() => {
    if (selectedCount !== null) {
      const newCount = selectedCount === 0 ? '' : `/?count=${selectedCount}`;
      router.push(`/dashboard${newCount}`);
    }
  }, [selectedCount, count, router]);

  const handleSelect = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const newValue = parseInt(e.target.value, 10);
    setSelectedCount(newValue);
  };

  return (
    <div className='relative'>
      <select
        className='shadow-custom1 appearance-none h-full rounded-l border block w-full bg-white border-gray-400 text-gray-700 py-2 px-4 pr-8 leading-tight focus:outline-none focus:bg-white focus:border-gray-500'
        onChange={handleSelect}
        value={selectedCount || ''}
        aria-label='Selecciona un número'
      >
        {/* Opciones numeradas del 1 al 10 */}
        {Array.from({ length: 10 }, (_, index) => (
          <option key={index} value={index}>
            {index}
          </option>
        ))}
      </select>
      <div className='pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700'>
        <svg
          className='fill-current h-4 w-4'
          xmlns='http://www.w3.org/2000/svg'
          viewBox='0 0 20 20'
        >
          <path d='M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z' />
        </svg>
      </div>
    </div>
  );
};
