import { ChangeEvent, useRef } from 'react';
import Image from 'next/image';
import { add_image } from '@/actions/image/add_image';

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
  const fileInputRef = useRef<HTMLInputElement | null>(null);

  const createObjectURL = (file: File) =>
    (window.URL || window.webkitURL).createObjectURL(file);

  const onFilesSelected = async ({ target }: ChangeEvent<HTMLInputElement>) => {
    try {
      const files = target.files;
      const length = files?.length;

      if (!files || length === 0 || length! > 1) {
        return;
      }

      const file = files[0]; // Use the first selected file

      const path = createObjectURL(file);

      const formData = new FormData();

      formData.append('file', path ?? '');
      formData.append('profile_image', `${props?.images}`);

      const { image }: any = await add_image(Object.fromEntries(formData));

    } catch (error) {
      console.error('Error handling file selection:', error);
    }
  };

  const handleFile = () => fileInputRef.current?.click();

  const handleInitial = () => {
    // if (props.image === oldImage) {
    //   changeImages({ ...props, image: '' });
    // } else {
    //   setCompare(false);
    //   setImages(oldImage);
    // }
  };

  const select = props.rq ? 'rounded-sm' : 'rounded-full';

  return (
    <div className='mt-1 flex items-end gap-1'>
      <div
        className={`${select} grid place-content-center h-14 w-14 overflow-hidden bg-gray-100 shadow-custom1`}
      >
        <input
          ref={fileInputRef}
          type='file'
          accept='image/png, image/gif, image/jpeg'
          style={{ display: 'none' }}
          onChange={onFilesSelected}
        />
        <Image
          src={props.image}
          className={`${select} h-14 w-14 rounded-full object-cover shadow-custom1`}
          alt={`image#${props.old}`}
          title={`image#${props.old}`}
          width={100}
          height={100}
        />
      </div>
      <div className='grid gap-1'>
        <button
          onClick={handleFile}
          type='button'
          className='inline-flex justify-center p-1 border border-transparent shadow-custom1 text-[0.65rem] font-medium rounded-sm text-white bg-primary hover:bg-secondary transition duration-500 ease-in-out transform'
        >
          {props.change}
        </button>
        <button
          onClick={handleInitial}
          type='button'
          className='inline-flex justify-center p-1 border border-transparent shadow-custom1 text-[0.65rem] font-medium rounded-sm text-white bg-primary hover:bg-secondary transition duration-500 ease-in-out transform'
        >
          {true ? 'initial' : 'delete'}
        </button>
      </div>
    </div>
  );
};
