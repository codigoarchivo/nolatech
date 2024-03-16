import { Countdown } from './Countdown';

export const Content = () => {
  const targetDate = new Date('2024-12-31T23:59:59');
  
  return (
    <div className=' bg-primary text-white grid grid-cols-6 gap-6 px-14 sm:items-center h-40 py-10'>
      <div className='text-md md:text-lg lg:text-lg xl:text-2xl font-bold col-span-6 md:col-span-2'>
        <p>Lorem ipsum dolor sit amet, consetetur</p>
      </div>
      <Countdown targetDate={targetDate} /> 
    </div>
  );
};
