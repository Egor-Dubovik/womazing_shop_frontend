import { IProduct } from './product.interface';

export interface IBasketProduct {
  product: IProduct;
  amount: number;
}

export interface IBasketData {
  count: number;
  rows: IBasketItem[];
}

export interface IBasketItem {
  basketId: number;
  createdAt: string;
  id: number;
  productId: number;
  updatedAt: string;
}

export interface IBasketObject {
  [index: string]: number;
}
