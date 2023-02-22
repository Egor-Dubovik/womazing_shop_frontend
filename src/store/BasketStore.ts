import { makeAutoObservable } from 'mobx';
import { IBasketProduct } from 'types/basket.interface';

class BasketStore {
  _products: IBasketProduct[];

  constructor() {
    this._products = [];
    makeAutoObservable(this);
  }

  setBasketProduct(product: IBasketProduct): void {
    this._products.push(product);
  }

  deleteBasketProduct(productId: number): void {
    this._products = this._products.filter((productInfo) => productInfo.product.id !== productId);
  }

  get products(): IBasketProduct[] {
    return this._products;
  }
}

export default BasketStore;
