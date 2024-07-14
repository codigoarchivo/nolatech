import { jwtDecode } from 'jwt-decode';
import { JWT } from 'next-auth/jwt';
import { CE } from '@/interfaces/api.interface';
import axiosInstance from './axios';
import { IUserDecode, IUserForm } from '@/interfaces/user.interface';

export async function isTokenExpired(
  token: string | undefined
): Promise<Date | undefined> {
  const decode: IUserDecode | null = token ? jwtDecode(token) : null;
  return decode?.exp ? new Date((decode.exp - 20) * 1000) : undefined;
}
export async function createUser(
  token: string | undefined
): Promise<IUserForm | string | undefined> {
  const decode = token ? jwtDecode(token) : null;
  return JSON.stringify({ ...decode });
}

export async function updateSession(token: JWT): Promise<JWT> {
  try {
    const data = token?.data;

    if (!data?.refreshToken!) {
      return token;
    }

    const config = { headers: { Authorization: `${data.refreshToken}` } };
    const response = await axiosInstance.post(
      '/jwt/refresh/',
      { refresh: data.refreshToken },
      config
    );

    if (!response.data) {
      throw new Error('No data received in response');
    }

    const accessToken = response.data?.accessToken;
    const refreshToken = response.data?.refreshToken;

    const profile = await createUser(accessToken);
    const accessTokenExpires = await isTokenExpired(accessToken);
    const refreshTokenExpires = await isTokenExpired(refreshToken);

    let newData = {
      ...data,
      profile: JSON.parse(`${profile}`),
      accessToken: accessToken,
      accessTokenExpires,
      refreshToken: refreshToken ?? data.refreshToken,
    };

    return {
      ...token,
      data: newData,
      exp: refreshTokenExpires?.getTime(),
    };
  } catch (error) {
    const customError = error as CE;
    const [key] = Object.keys(customError.response?.data || {});
    const errorMessage = Object(customError.response?.data)[key]?.[0];

    console.error('Error fetching data:', errorMessage);

    return {
      ...token,
      error: 'RefreshAccessTokenError',
    };
  }
}
