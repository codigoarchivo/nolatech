'use client'

import Image from 'next/image';
import Pic6 from '../../../../public/assets/Pic6.png';
import Pic6White from '../../../../public/assets/Pic6White.png';
import { useUIStore } from '@/store';

export const CallMe = () => {
  const isSideMenuOpen = useUIStore((state) => state.isSideMenuOpen);
  return (
    <Image
      src={isSideMenuOpen ? Pic6White : Pic6}
      className='h-full w-full object-fill absolute z-[-1]'
      alt={'prb_header'}
      title={'Prb_Header'}
      width='0'
      height='0'
      quality={100}
      sizes='100vw'
    />
  );
};
