import BasketStore from 'store/BasketStore';
import ProductStore from 'store/ProductStore';
import UserStore from 'store/UserStore';

export interface IAppContext {
  user: UserStore;
  product: ProductStore;
  basket: BasketStore;
}

export interface IRoute {
  path: string;
  element: JSX.Element;
}
