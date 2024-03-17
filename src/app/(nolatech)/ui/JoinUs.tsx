'use client'

import Image from 'next/image';
import JoinU from '../../../../public/assets/Join Us.png';
import JoinUsDark from '../../../../public/assets/JoinUsDark.png';
import { useUIStore } from '@/store';

export const JoinUs = () => {
  const isSideMenuOpen = useUIStore((state) => state.isSideMenuOpen);
  return (
    <Image
      src={isSideMenuOpen ? JoinUsDark : JoinU}
      className='w-full h-full object-fill absolute z-[-3]'
      alt={'prb_header'}
      title={'Prb_Header'}
      width='0'
      height='0'
      quality={100}
      sizes='100vw'
    />
  );
};
