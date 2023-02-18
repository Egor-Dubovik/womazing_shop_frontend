import { makeAutoObservable } from 'mobx';
import { IBrandProduct, IProduct, ITypeProduct } from 'types/product.interface';

// interface IProductStore {
//   _isAuth: boolean;
// }

class ProductStore {
  _types: ITypeProduct[];
  _brands: IBrandProduct[];
  _product: IProduct[];
  _selectedType: ITypeProduct | Record<string, never>;
  _selectedBrand: IBrandProduct | Record<string, never>;

  constructor() {
    this._types = [];
    this._brands = [];
    this._product = [];

    this._selectedType = {};
    this._selectedBrand = {};
    makeAutoObservable(this);
  }

  //actions
  setSelectedBrand(type: IBrandProduct | Record<string, never>): void {
    this._selectedBrand = type;
  }

  setSelectedType(type: ITypeProduct | Record<string, never>): void {
    this._selectedType = type;
  }

  setTypes(value: ITypeProduct[]): void {
    this._types = value;
  }

  setBrands(value: IBrandProduct[]): void {
    this._brands = value;
  }

  setAllProduct(product: IProduct[]): void {
    this._product = product;
  }

  get selectedBrand(): IBrandProduct | Record<string, never> {
    return this._selectedBrand;
  }

  get selectedType(): ITypeProduct | Record<string, never> {
    return this._selectedType;
  }

  get types(): ITypeProduct[] {
    return this._types;
  }

  get brands(): IBrandProduct[] {
    return this._brands;
  }

  get product(): IProduct[] {
    return this._product;
  }
}

export default ProductStore;
