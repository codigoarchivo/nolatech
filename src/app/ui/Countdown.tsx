'use client';

import { startCountdown } from '@/utils';

import React, { useState, useEffect } from 'react';

interface ICountdown {
  targetDate: Date;
}

export const Countdown = ({ targetDate }: ICountdown) => {
  const [timeLeft, setTimeLeft] = useState(startCountdown(targetDate));

  useEffect(() => {
    const timer = setTimeout(() => {
      setTimeLeft(startCountdown(targetDate));
    }, 1000);

    // Limpiar el intervalo cuando el componente se desmonte
    return () => clearTimeout(timer);
  });

  return (
    <div className='col-span-6 md:col-span-4'>
      <div className='flex md:justify-center gap-4  md:gap-10'>
        <div className='grid text-center'>
          <span className='font-bold text-2xl md:text-4xl lg:text-5xl'>
            {timeLeft.days}
          </span>
          <span className='text-sm md:text-md lg:text-lg text-white/50'>
            days
          </span>
        </div>
        <hr className='divide-y-2 text-white/50' />
        <div className='grid text-center'>
          <span className='font-bold text-2xl md:text-4xl lg:text-5xl'>
            {timeLeft.hours}
          </span>
          <span className='text-sm md:text-md lg:text-lg text-white/50'>
            Hour
          </span>
        </div>
        <hr className='divider' />
        <div className='grid text-center'>
          <span className='font-bold text-2xl md:text-4xl lg:text-5xl'>
            {timeLeft.minutes}
          </span>
          <span className='text-sm md:text-md lg:text-lg text-white/50'>
            Minutes
          </span>
        </div>
        <hr className='divider' />
        <div className='grid text-center'>
          <span className='font-bold text-2xl md:text-4xl lg:text-5xl'>
            {timeLeft.seconds}{' '}
          </span>
          <span className='text-sm md:text-md lg:text-lg text-white/50'>
            Seconds
          </span>
        </div>
      </div>
    </div>
  );
};
