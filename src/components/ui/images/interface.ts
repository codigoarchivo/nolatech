import { UseFormRegister, UseFormSetValue } from 'react-hook-form';


export interface IUpload {
  images: string[];
  // text
  photo: string;
  cover: string;
  change: string;
  upload: string;
  drag: string;
  or: string;
  up: string;
  // select
  rq?: boolean;
  one?: boolean;
  // pdf
  no_authorization?: string;
  permission?: boolean;
  document?: string;
  cancel?: string;
  // method
  register: UseFormRegister<any>
}


export type IDraggable = Pick<IUpload, 'images' | 'register' | 'upload' | 'or' | 'drag' | 'up' | 'one'> 

