import Image from 'next/image';
import icongrab from '../../../public/assets/icongrab.png';
export const Footer = () => {
  return (
    <footer className='container mx-auto p-5'>
      <div className='grid grid-cols-3 items-center gap-10 py-10'>
        <div className='col-span-3 md:col-span-1'>
          <h4 className='text-lg font-bold mb-3'>Lorem <span className='text-primary'>ipsum</span></h4>
          <p className=''>
            Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
            nonumy eirmod tempor invidunt ut labore et dolore magna
          </p>
        </div>
        <div className='col-span-3 md:col-span-1 flex md:justify-center'>
          <Image
            src={icongrab}
            className='h-20 w-48'
            alt={'grab'}
            title={'icongrab'}
            width='0'
            height='0'
            quality={100}
            sizes='100vw'
          />
        </div>
        <p className='col-span-3 md:col-span-1'>
          All rights reserved to{' '}
          <strong className='text-primary'>Lorem Ipsum ©</strong>{' '}
          <span>{new Date().getFullYear()}</span>
        </p>
      </div>
    </footer>
  );
};
