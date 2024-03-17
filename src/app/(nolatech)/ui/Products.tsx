import Link from 'next/link';
import Image from 'next/image';
import { IProducts } from '@/interfaces';

export const Products = (props: IProducts) => {
  return (
    <div className='col-span-3 md:col-span-1'>
      <div className='flex flex-col mb-12 overflow-hidden cursor-pointer shadow-custom1'>
        <Link href={props.link} title='link image'>
          <div className='flex-shrink-0 relative'>
            <div className='absolute z-[1] inset-0 bg-secondary/35 sm:from-sebg-secondary/95 sm:to-sebg-secondary/25 ltr:sm:bg-gradient-to-r rtl:sm:bg-gradient-to-l'></div>
            <Image
              src={props.image}
              className='w-full h-64'
              alt={'grab'}
              title={'icongrab'}
              width='0'
              height='0'
              quality={100}
              sizes='100vw'
            />
          </div>
        </Link>
        <div className='flex flex-col justify-between flex-1 bg-primary p-5 text-center'>
          <h4 className='text-lg font-semibold leading-none tracking-tighter uppercase text-white'>
            {props.name}
          </h4>
        </div>
      </div>
    </div>
  );
};
