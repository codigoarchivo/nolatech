
export interface IUser {
  id?: number | null;
  first_name: string | null;
  last_name: string | null;
  profile_image?: string | null;
  email: string | null;
  password: string | null;
  password_repeat: string | null;
  is_active: boolean;
  is_admin: string | null;
  is_user: string | null;
  full_name: string | null;
  exp: number;
  iat: number;
  jti: string;

}


export type IUserAuth = Pick<IUser, 'first_name' | 'last_name' | 'email' | 'password' | 'password_repeat'>

export type IUserForm = Pick<IUser, 'first_name' | 'last_name' | 'profile_image' |'email' | 'is_active' | 'is_admin' | 'id'>;

export type IUserProfile =  Pick<IUser, 'full_name' | 'email' | 'is_active' | 'is_admin' | 'is_user' | 'profile_image'>;

export type IUserDecode =  Pick<IUser, 'exp' | 'iat' | 'jti'> | null;