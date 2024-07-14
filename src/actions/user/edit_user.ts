'use server';

import axiosInstance from '@/lib/axios';
import { confHeader } from '@/utils/configHeader';

interface Iupdate_user {
  [k: string]: FormDataEntryValue;
}

export const update_user = async (register: Iupdate_user) => {
  try {
    
    const formData = {
      first_name: register.first_name,
      last_name: register.last_name,
      email: register.email,
      profile_image: register.profile_image,
    };

    
    const response = await axiosInstance.patch(
      `${register.base}${register.id}`,
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
