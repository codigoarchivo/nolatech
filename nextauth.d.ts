import NextAuth, { DefaultSession } from 'next-auth';
import { JWT } from 'next-auth/jwt';
import { IUserForm } from '@/interfaces/user.interface';

export interface ISession {
  profile: IUserForm | undefined;
  accessToken: string | null;
  refreshToken: string | null;
  accessTokenExpires: Date | undefined;
  error?: 'RefreshAccessTokenError';
  id?: string;
}

declare module 'next-auth' {
  interface User extends ISession {}

  interface Session {
    user: User & DefaultSession['user'];
  }
}

declare module 'next-auth/jwt' {
  interface JWT {
    data: ISession;
  }
}


