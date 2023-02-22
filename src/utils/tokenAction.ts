import jwtDecode from 'jwt-decode';
import { IToken } from 'types/auth.interface';

export const getTokenData = (): IToken => {
  const encryptedToken = localStorage.getItem('token');
  const tokenData = jwtDecode(encryptedToken as string) as IToken;
  return tokenData;
};
