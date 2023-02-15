import ProductStore from 'store/ProductStore';
import UserStore from 'store/UserStore';

export interface IAppContext {
  user: UserStore;
  product: ProductStore;
}

export interface IRoute {
  path: string;
  element: JSX.Element;
}
