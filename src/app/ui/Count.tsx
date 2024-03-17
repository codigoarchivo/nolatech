import { Countdown } from './Countdown';
 
export const Content = () => {
  const targetDate = new Date('2024-12-31T23:59:59');
  
  return (
    <div className='bg-primary text-white grid grid-cols-6 gap-6 px-2 py-6 sm:px-12 md:py-14 md:px-14 sm:items-center'>
      <div className='text-md md:text-lg lg:text-2xl xl:text-3xl font-bold col-span-6 md:col-span-2'>
        <p>Lorem <span className='text-secondary'>ipsum dolor sit</span> amet, consetetur</p>
      </div>
      <Countdown targetDate={targetDate} /> 
    </div>
  );
};
