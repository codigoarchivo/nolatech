'use client';

import React, { useState, useEffect } from 'react';
import { startCountdown } from '@/utils';


interface ICountdown {
  targetDate: Date;
}

export const Countdown = ({ targetDate }: ICountdown) => {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    const timer = setTimeout(() => {
      setTimeLeft(startCountdown(targetDate));
    }, 1000);

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
        <div className='inline-block h-18 min-h-[1em] shadow-custom1 w-0.5 self-stretch bg-white/50'></div>
        <div className='grid text-center'>
          <span className='font-bold text-2xl md:text-4xl lg:text-5xl'>
            {timeLeft.hours}
          </span>
          <span className='text-sm md:text-md lg:text-lg text-white/50'>
            Hour
          </span>
        </div>
        <div className='inline-block h-18 min-h-[1em] shadow-custom1 w-0.5 self-stretch bg-white/50'></div>
        <div className='grid text-center'>
          <span className='font-bold text-2xl md:text-4xl lg:text-5xl'>
            {timeLeft.minutes}
          </span>
          <span className='text-sm md:text-md lg:text-lg text-white/50'>
            Minutes
          </span>
        </div>
        <div className='inline-block h-18 min-h-[1em] shadow-custom1 w-0.5 self-stretch bg-white/50'></div>
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
