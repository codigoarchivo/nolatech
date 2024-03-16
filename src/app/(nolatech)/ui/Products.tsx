import Link from 'next/link';
import Image from 'next/image';
import { IProducts } from '@/interfaces';

export const Products = (props: IProducts) => {
  return (
    <div className='col-span-3 md:col-span-1'>
      <div className='flex flex-col mb-12 overflow-hidden cursor-pointer shadow-custom1'>
        <Link href={props.link}>
          <div className='flex-shrink-0'>
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
          <h3 className='text-2xl font-semibold leading-none tracking-tighter text-white'>
            {props.name}
          </h3>
        </div>
      </div>
    </div>
  );
};
