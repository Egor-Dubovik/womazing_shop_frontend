export type Role = 'USER' | 'ADMIN';

export interface IUser {
  id: number;
  email: string;
  password: string;
  role: Role;
}
