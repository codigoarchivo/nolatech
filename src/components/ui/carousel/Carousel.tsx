"use client";
import Image from "next/image";
import React, { useState } from "react";

interface CarouselProps {
  images: string[]; // Array of image URLs
}

export const Carrousel = ({ images }: CarouselProps) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const handlePrev = () => {
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + images.length) % images.length
    );
  };

  return (
    <div className="relative container mx-auto">
      <button
        onClick={handlePrev}
        className="absolute left-1 top-1/2 inline-block bg-transparent rounded-full shadow-custom1 text-center text-sm font-semibold text-tertiary outline-none transition duration-500 ease-in-out transform hover:bg-secondary focus-visible:ring active:bg-secondary md:text-base"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          className="w-6 h-6"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M15 19l-7-7 7-7"
          />
        </svg>
      </button>
      <div className="flex gap-6 p-5 justify-center overflow-x-hidden">
        <Image
          src={images[currentIndex]}
          alt={`Slide ${currentIndex}`}
          className="ml-80 w-1/4 h-[500px] rounded-lg shadow-custom1 transition-opacity duration-300 ease-in-out"
          width="0"
          height="0"
          sizes="100vw"
        />
        <Image
          src={images[currentIndex + 1]}
          alt={`Slide ${currentIndex + 1}`}
          className="w-1/4 h-[500px] rounded-lg shadow-custom1 transition-opacity duration-300 ease-in-out"
          width="0"
          height="0"
          sizes="100vw"
        />
        <Image
          src={images[currentIndex + 2]}
          alt={`Slide ${currentIndex + 2}`}
          className="w-1/4 h-[500px] rounded-lg shadow-custom1 transition-opacity duration-300 ease-in-out"
          width="0"
          height="0"
          sizes="100vw"
        />
        <Image
          src={images[currentIndex + 3]}
          alt={`Slide ${currentIndex + 3}`}
          className="w-1/4 h-[500px] rounded-lg shadow-custom1 transition-opacity duration-300 ease-in-out"
          width="0"
          height="0"
          sizes="100vw"
        />
      </div>
      <button
        onClick={handleNext}
        className="absolute right-1 top-1/2 inline-block bg-transparent rounded-full shadow-custom1 text-center text-sm font-semibold text-tertiary outline-none transition duration-500 ease-in-out transform hover:bg-secondary focus-visible:ring active:bg-secondary md:text-base"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          className="w-6 h-6"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M9 5l7 7-7 7"
          />
        </svg>
      </button>
    </div>
  );
};
