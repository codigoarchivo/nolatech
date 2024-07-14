import React from 'react';
import { ImagesItem } from './ImagesItem';

interface IListImages {
  images: string[];
  rq: boolean;
  change: string;
}

export const ListImages = (props: IListImages) => {
  return (
    <div className='flex gap-y-3 gap-x-4 flex-wrap'>
      {props.images?.map((image, index) => (
        <ImagesItem
          key={index}
          image={image}
          old={index}
          change={props.change}
          rq={props.rq}
          images={props.images}
        />
      ))}
    </div>
  );
};
