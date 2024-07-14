import  {  type NextAuthConfig } from 'next-auth';
import { signOut } from 'next-auth/react';
import { isTokenExpired, updateSession } from './lib/session';


export const authConfig = {
  callbacks: {
    async jwt({ token, user }) {

      try {
        // If the user exists, update the token data
        if (user) {
          token.data = user;
        }
        
        const refreshTokenExpires = await isTokenExpired(token.data.refreshToken?.toString());
    
        // Check if the refresh token has expired
        if (new Date() > new Date(refreshTokenExpires!)) {
          await signOut();
          return token;
        }

        // Check if the access token has not expired yet
        if (new Date() < new Date(token.data.accessTokenExpires!)) {
          return token;
        }

        // If the access token has expired, update the session
        return await updateSession(token);
      } catch (error) {
        console.error('Error en jwt:', error);
        throw error;
      }
    },
 
    session({ session, token }) {
      session.user = {
        ...session.user,
        accessToken: token.data.accessToken,
        accessTokenExpires: token.data.accessTokenExpires,
        profile: token.data.profile,
        refreshToken: token.data.refreshToken,
      }
      
      const expires = token.data.accessTokenExpires as Date & string
      session.expires = expires

      return session;
    },
  },
  providers: [],
} satisfies NextAuthConfig;

