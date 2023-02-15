import UserStore from 'store/UserStore';

export interface IAppContext {
  user: UserStore;
}

export interface IRoute {
  path: string;
  element: JSX.Element;
}
