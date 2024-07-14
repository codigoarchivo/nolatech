'use client';

import { IUpload } from './interface';
import { Draggable } from './Draggable';
import { ListImages } from './ListImages';

export const Upload = (props: IUpload) => {
  // rq = true choose a square or round image
  // one = true choose one image or several

  const { rq = true, images = [], one = true } = props;

  return (
    <>
      {!!images[0] && !props.permission && (
        <div>
          <label className='block text-sm font-medium text-textSecondary'>
            {props.photo}
          </label>
          <ListImages rq={rq} images={images} change={props.change} />{' '}
        </div>
      )}

      <div className='w-full'>
        <label className='block text-sm font-medium text-gray-700'>
          {props.cover}
        </label>
        <Draggable
          pdf={props.permission}
          one={one}
          drag={props.drag}
          or={props.or}
          upload={props.upload}
          register={props.register}
          up={props.up}
          images={props.images}
        />
      </div>
    </>
  );
};
