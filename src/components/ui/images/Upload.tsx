'use client';

import { File } from './File';
import { IUpload } from './interface';
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
        <File
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
