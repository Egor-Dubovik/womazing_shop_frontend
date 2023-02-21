export interface IProduct {
  id: number;
  name: string;
  price: number;
  discount_price: number;
  size: Size[];
  color: IColor[];
  rating: number;
  image: string;
  info: IProductInfo[];
}

export interface IColor {
  id?: number;
  value: string;
}

export enum Size {
  S = 'S',
  M = 'M',
  L = 'L',
  XL = 'XL',
  XXL = 'XXL',
}

export interface IProductInfo {
  id: number;
  title: string;
  description: string;
}

export interface ITypeProduct {
  id?: number;
  name: string;
}

export type IBrandProduct = ITypeProduct;

export interface ICreate {
  show: boolean;
  onHide: React.Dispatch<React.SetStateAction<boolean>>;
}
