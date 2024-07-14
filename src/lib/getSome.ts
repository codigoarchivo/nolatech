import { cache } from 'react';
import axiosInstance from './axios';
import { confHeader } from '@/utils/configHeader';

interface IfetchData {
  base: string;
  params: string;
  token: string;
  id: string;
}

const fetchData = async (register: IfetchData) => {
  try {
    const options = register.token === '' ? {} : confHeader(register.token);
    
    const response = await axiosInstance.get(
      `${register.base}${register.id}${register.params}`,
      options
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

export const getSome = cache(fetchData);
