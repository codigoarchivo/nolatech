'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { IlistImages } from '@/interfaces';

interface CarouselProps {
  list: IlistImages[];
}

export const Carrousel = ({ list }: CarouselProps) => {
  const [currentIndex1, setCurrentIndex1] = useState(0);
  const [currentIndex2, setCurrentIndex2] = useState(1);
  const [currentIndex3, setCurrentIndex3] = useState(2);

  const handleNext = () => {
    setCurrentIndex1((prevIndex) => (prevIndex + 1) % list.length);
    setCurrentIndex2((prevIndex) => (prevIndex + 2) % list.length);
    setCurrentIndex3((prevIndex) => (prevIndex + 3) % list.length);
  };

  const handlePrev = () => {
    setCurrentIndex1(
      (prevIndex) => (prevIndex - 1 + list.length) % list.length
    );
    setCurrentIndex2(
      (prevIndex) => (prevIndex - 2 + list.length) % list.length
    );
    setCurrentIndex3(
      (prevIndex) => (prevIndex - 3 + list.length) % list.length
    );
  };

  return (
    <div className='relative container mx-auto'>
      <button
        onClick={handlePrev}
        className='absolute left-1 top-1/2 inline-block bg-primary rounded-full shadow-custom1 text-center text-sm font-semibold text-white hover:text-white outline-none transition duration-500 ease-in-out transform hover:bg-tertiary focus-visible:ring active:bg-secondary md:text-base'
      >
        <svg
          xmlns='http://www.w3.org/2000/svg'
          fill='none'
          viewBox='0 0 24 24'
          stroke='currentColor'
          className='w-6 h-6'
        >
          <path
            strokeLinecap='round'
            strokeLinejoin='round'
            strokeWidth='2'
            d='M15 19l-7-7 7-7'
          />
        </svg>
      </button>
      <div className='flex gap-6 p-5 justify-center overflow-x-hidden'>
        <Image
          src={list[currentIndex1]?.link}
          alt={`Slide ${currentIndex1}`}
          className='w-2/3 lg:w-1/4  h-60 lg:h-[450px] rounded-lg shadow-custom1 transition-opacity duration-300 ease-in-out'
          width='0'
          height='0'
          sizes='100vw'
          title={`Slide ${currentIndex1}`}
        />
        <Image
          src={list[currentIndex2]?.link}
          alt={`Slide ${currentIndex2}`}
          className='w-2/3 lg:w-1/4  h-60 lg:h-[450px] rounded-lg shadow-custom1 transition-opacity duration-300 ease-in-out'
          width='0'
          height='0'
          sizes='100vw'
          title={`Slide ${currentIndex2}`}
        />
        <Image
          src={list[currentIndex3]?.link}
          alt={`Slide ${currentIndex3}`}
          className='w-2/3 lg:w-1/4  h-60 lg:h-[450px] rounded-lg shadow-custom1 transition-opacity duration-300 ease-in-out'
          width='0'
          height='0'
          sizes='100vw'
          title={`Slide ${currentIndex3}`}
        />
      </div>
      <button
        onClick={handleNext}
        className='absolute right-1 top-1/2 inline-block bg-primary rounded-full shadow-custom1 text-center text-sm font-semibold text-white hover:text-white outline-none transition duration-500 ease-in-out transform hover:bg-tertiary focus-visible:ring active:bg-secondary md:text-base'
      >
        <svg
          xmlns='http://www.w3.org/2000/svg'
          fill='none'
          viewBox='0 0 24 24'
          stroke='currentColor'
          className='w-6 h-6'
        >
          <path
            strokeLinecap='round'
            strokeLinejoin='round'
            strokeWidth='2'
            d='M9 5l7 7-7 7'
          />
        </svg>
      </button>
    </div>
  );
};
