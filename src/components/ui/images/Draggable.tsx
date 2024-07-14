import React, { ChangeEvent, useRef } from 'react';
import { useSession } from 'next-auth/react';
import { IDraggable } from './interface';
import { add_image } from '@/actions/image/add_image';

interface IChangeImages extends IDraggable {
  one: boolean;
  pdf: boolean | undefined;
}

export const Draggable = (props: IChangeImages) => {
  const fileInputRef = useRef<HTMLInputElement | null>(null);
  const { data: session } = useSession();
  const token = session?.user.accessToken;

  const onFilesSelected = async (event: ChangeEvent<HTMLInputElement>) => {
    try {
      const files = event.target.files;
      if (!files || files.length === 0) {
        return;
      }

      const file = files[0]; // Use the first selected file

      const formData = new FormData();
      formData.append('file', file); // Append the actual file, not the entire files array
      formData.append('profile_image', props?.images[0]); // Assuming props.images contains the profile image info
      formData.append('base', '/upload/');
      formData.append('token', token ?? '');

      const data = await add_image(Object.fromEntries(formData));
      console.log(data);
    } catch (error) {
      console.error('Error handling file selection:', error);
    }
  };

  const handleFile = () => fileInputRef.current?.click();

  return (
    <div className='flex text-sm text-textSecondary'>
      <label
        htmlFor='file-upload'
        className='relative cursor-pointer rounded-md font-medium text-primary hover:text-textSecondary focus-within:outline-none'
      >
        <span onClick={handleFile}>{props.upload}</span>
        <input
          ref={fileInputRef}
          type='file'
          accept={'image/png, image/gif, image/jpeg'} // Correct MIME type for PDF
          style={{ display: 'none' }}
          onChange={onFilesSelected}
          multiple={false} // Only allow selecting one file at a time
        />
      </label>
      <p className='pl-1'>
        {props.or} {props.drag}
      </p>
    </div>
  );
};
