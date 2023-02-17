export interface IProduct {
  id: number;
  name: string;
  price: number;
  discount_price: number;
  size: string[];
  colors: string[];
  rating: number;
  image: string;
}

export interface ITypeProduct {
  id: number;
  name: string;
}

export type IBrandProduct = ITypeProduct;

export interface ICreate {
  show: boolean;
  onHide: React.Dispatch<React.SetStateAction<boolean>>;
}
