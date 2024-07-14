'use server';

import axiosInstance from '@/lib/axios';

interface Iadd_user {
  [k: string]: FormDataEntryValue;
}

export const add_user = async (register: Iadd_user) => {
  try {
    const response = await axiosInstance.post('/users/', register);

    if (response.status === 204) {
      return {
        ok: true,
      };
    } else {
      return {
        ok: false,
      };
    }
  } catch (error) {
    console.error(
      'Error fetching data:',
      (error as { message: string }).message
    );
    return {
      ok: false,
    };
  }
};
