'use client';

import { FC } from 'react';
import { useRouter } from 'next/navigation';

interface ILinkItem {
  link: string;
  target?: '_self' | '_blank';
  className?: string;
  title: string;
  textOrSvg?: JSX.Element | string;
  svgLeft?: JSX.Element;
  svgRight?: JSX.Element;
}

export const LinkItem: FC<ILinkItem> = (props) => {
  const router = useRouter(); // Inicializa useRouter

  const { link, target = '_self' } = props;

  const handleClick = async (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    router.push(link);
  };

  return (
    <a
      href={link}
      target={target}
      className={props.className}
      title={props?.title}
      onClick={handleClick} // Agrega el manejador de clic
    >
      {props.svgLeft} {props.textOrSvg} {props.svgRight}
    </a>
  );
};
