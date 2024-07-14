import React, { ChangeEvent, useRef } from 'react';
import { useSession } from 'next-auth/react';
import axios from 'axios';
import { IFile } from './interface';
import { useUIImages } from '@/store/ui/gestor-images';

interface IChangeImages extends IFile {
  one: boolean;
}

export const File = (props: IChangeImages) => {
  const setImages = useUIImages((state) => state.setImages);
  const fileInputRef = useRef<HTMLInputElement | null>(null);
  const { data: session } = useSession();
  const token = session?.user.refreshToken;

  const onFilesSelected = async (event: ChangeEvent<HTMLInputElement>) => {
    setImages(null)
    const files = event.target.files;
    if (!files || files.length === 0) {
      return;
    }
    try {
      for (const file of files as any) {
        const formData = new FormData();
        formData.append('file', file);
        formData.append('profile_image', props?.images[0] ?? '');
        const { data } = await axios.put<{ image: string }>(
          'http://localhost:8000/api/v1/upload/',
          formData,
          { headers: { Authorization: `${token}` } }
        );
        setImages(data.image)
      }
    } catch (error) {
      console.error({ error });
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
          accept={'image/png, image/gif, image/jpeg'} // Correct MIME type for images
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
