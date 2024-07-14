'use server';

import axiosInstance from '@/lib/axios';
import { confHeader } from '@/utils/configHeader';

interface IAdd_image {
  [k: string]: FormDataEntryValue;
}

export const add_image = async (register: IAdd_image) => {
  try {
    const formData = {
      file: register.file,
      profile_image: register.profile_image,
    };

    const response = await axiosInstance.put(
      register.base.toString(),
      formData,
      confHeader(register.token.toString())
    );

    if (response.status === 200) {
      return {
        ok: true,
        data: response.data,
      };
    } else {
      return {
        ok: false,
      };
    }
  } catch (error) {
    console.log('Error fetching data:', (error as { message: string }).message);
    return {
      ok: false,
    };
  }
};
