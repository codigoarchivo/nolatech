import { ChangeEvent, useRef } from 'react';
import Image from 'next/image';
import { useUIImages } from '@/store/ui/gestor-images';
import { useSession } from 'next-auth/react';
import axios from 'axios';

interface IChangeImages {
  image: string;
  old: number;
}

interface IImagesItem extends IChangeImages {
  images: string[];
  change: string;
  rq: boolean;
}

export const ImagesItem = (props: IImagesItem) => {
  const select = props.rq ? 'rounded-sm' : 'rounded-full';

  return (
    <div className='mt-1 flex items-end gap-1'>
      <div
        className={`${select} grid place-content-center h-14 w-14 overflow-hidden bg-gray-100 shadow-custom1`}
      >
        <Image
          src={props.image}
          className={`${select} h-14 w-14 rounded-full object-cover shadow-custom1`}
          alt={`image#${props.old}`}
          title={`image#${props.old}`}
          width={100}
          height={100}
        />
      </div>
    </div>
  );
};
