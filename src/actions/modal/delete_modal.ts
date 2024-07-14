'use server';

import axiosInstance from '@/lib/axios';
import { confHeader } from '@/utils/configHeader';

interface Idelete_modal {
  [k: string]: FormDataEntryValue;
}

export const delete_modal = async (register: Idelete_modal) => {
  try {
    const response = await axiosInstance.delete(
      register.path.toString(),
      confHeader(register.token.toString())
    );

    if (response.status === 200) {
      return {
        ok: true,
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
