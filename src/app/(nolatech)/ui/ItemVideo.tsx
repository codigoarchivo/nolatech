import Image from 'next/image';
import { Play } from '@/components';
import { IListVideo } from '@/interfaces';

export const ItemVideo = (props: IListVideo) => {
  return (
    <div className='flex flex-col mb-12 overflow-hidden cursor-pointer shadow-custom1'>
      <div className='text-white hover:text-primary  flex-shrink-0 relative flex justify-center items-center'>
        <div className='absolute z-[1] inset-0 bg-secondary/35 sm:from-sebg-secondary/95 sm:to-sebg-secondary/25 ltr:sm:bg-gradient-to-r rtl:sm:bg-gradient-to-l'></div>
        <Play
          className={
            'w-10 h-10 lg:w-20 sm:w-14  lg:h-20 sm:h-14 absolute z-10 transition duration-500 ease-in-out transform'
          }
        />
        <Image
          src={props.image}
          className='w-full h-52'
          alt={props.name}
          title={props.name}
          width='0'
          height='0'
          quality={100}
          sizes='100vw'
        />
      </div>
      <div className='flex flex-col justify-between flex-1 p-5'>
        <h3 className='text-lg font-semibold leading-none tracking-tighter text-primary'>
          {props.name}
        </h3>
      </div>
    </div>
  );
};
