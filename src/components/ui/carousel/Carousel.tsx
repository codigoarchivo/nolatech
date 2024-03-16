'use client';

import Image from 'next/image';
import React, { useState } from 'react';

interface CarouselProps {
  images: string[]; // Array of image URLs
}

export const Carrousel = ({ images }: CarouselProps) => {
  const [currentIndex1, setCurrentIndex1] = useState(0);
  const [currentIndex2, setCurrentIndex2] = useState(0);
  const [currentIndex3, setCurrentIndex3] = useState(0);

  const handleNext = () => {
    setCurrentIndex1((prevIndex) => (prevIndex + 1) % images.length);
    setCurrentIndex2((prevIndex) => (prevIndex + 2) % images.length);
    setCurrentIndex3((prevIndex) => (prevIndex + 3) % images.length);
  };

  const handlePrev = () => {
    setCurrentIndex1((prevIndex) => (prevIndex - 1 + images.length) % images.length);
    setCurrentIndex2((prevIndex) => (prevIndex - 2 + images.length) % images.length);
    setCurrentIndex3((prevIndex) => (prevIndex - 3 + images.length) % images.length);
  };

  return (
    <div className='relative container mx-auto'>
      <button
        onClick={handlePrev}
        className='absolute left-1 top-1/2 inline-block bg-primary rounded-full shadow-custom1 text-center text-sm font-semibold text-secondary outline-none transition duration-500 ease-in-out transform hover:bg-secondary focus-visible:ring active:bg-secondary md:text-base'
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
          src={images[currentIndex1]}
          alt={`Slide ${currentIndex1}`}
          className='w-2/3 lg:w-1/4  h-60 lg:h-[500px] rounded-lg shadow-custom1 transition-opacity duration-300 ease-in-out'
          width='0'
          height='0'
          sizes='100vw'
        />
        <Image
          src={images[currentIndex2]}
          alt={`Slide ${currentIndex2}`}
          className='w-2/3 lg:w-1/4  h-60 lg:h-[500px] rounded-lg shadow-custom1 transition-opacity duration-300 ease-in-out'
          width='0'
          height='0'
          sizes='100vw'
        />
        <Image
          src={images[currentIndex3]}
          alt={`Slide ${currentIndex3}`}
          className='w-2/3 lg:w-1/4  h-60 lg:h-[500px] rounded-lg shadow-custom1 transition-opacity duration-300 ease-in-out'
          width='0'
          height='0'
          sizes='100vw'
        />

      </div>
      <button
        onClick={handleNext}
        className='absolute right-1 top-1/2 inline-block bg-primary rounded-full shadow-custom1 text-center text-sm font-semibold text-secondary outline-none transition duration-500 ease-in-out transform hover:bg-secondary focus-visible:ring active:bg-secondary md:text-base'
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
