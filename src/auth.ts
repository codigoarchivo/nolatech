import NextAuth from 'next-auth';
import { authConfig } from './auth.config';
import Credentials from 'next-auth/providers/credentials';
import { createUser, isTokenExpired } from './lib/session';
import axiosInstance from './lib/axios';

export const { auth, signIn, signOut, handlers } = NextAuth({
  ...authConfig,
  providers: [
    Credentials({
      async authorize(credentials) {
        try {
          const path = credentials.path;
          const response = await axiosInstance.post(
            path as string,
            credentials
          );
          const accessToken = response.data?.accessToken;
          const refreshToken = response.data?.refreshToken;

          const profile = await createUser(accessToken);
          const accessTokenExpires = await isTokenExpired(accessToken);

          const user = {
            profile: JSON.parse(`${profile}`),
            accessToken: accessToken,
            refreshToken: refreshToken,
            accessTokenExpires,
          };
          if (user) {
            return Promise.resolve(user);
          } else {
            return Promise.resolve(null);
          }
        } catch (e) {
          console.error('Error al autorizar:', e);
          throw new Error('Error al autorizar');
        }
      },
    }),
  ],
});
