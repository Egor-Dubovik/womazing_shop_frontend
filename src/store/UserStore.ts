import { makeAutoObservable } from 'mobx';
import { IUser } from 'types/user.inerface';

// interface IUserStore {
//   _isAuth: boolean;
// }

class UserStore {
  _isAuth: boolean;
  _user: IUser | Record<string, never>;

  constructor() {
    this._isAuth = false;
    this._user = {};
    makeAutoObservable(this);
  }

  setIsAuth(value: boolean): void {
    this._isAuth = value;
  }

  setUser(user: IUser): void {
    this._user = user;
  }

  get isAuth(): boolean {
    return this._isAuth;
  }

  get user(): IUser | Record<string, never> {
    return this._user;
  }
}

export default UserStore;
