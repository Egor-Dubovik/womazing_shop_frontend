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
    this._types = [
      { id: 1, name: 'куртка' },
      { id: 2, name: 'Пальто' },
      { id: 3, name: 'Жакеты' },
      { id: 4, name: 'Платья' },
    ];
    this._brands = [
      { id: 1, name: 'Gugu' },
      { id: 2, name: 'Defacto' },
    ];
    this._product = [
      {
        id: 1,
        name: 'куртка модная',
        price: 5000,
        discount_price: 4000,
        size: ['m', 'l'],
        colors: ['red', 'black'],
        rating: 5,
        image: 'https://bigstar.by/product_images/130312902(1)_3.jpg',
      },
      {
        id: 2,
        name: 'куртка модная',
        price: 5000,
        discount_price: 4000,
        size: ['m', 'l'],
        colors: ['red', 'black'],
        rating: 5,
        image: 'https://bigstar.by/product_images/130312902(1)_3.jpg',
      },
      {
        id: 3,
        name: 'куртка модная',
        price: 5000,
        discount_price: 4000,
        size: ['m', 'l'],
        colors: ['red', 'black'],
        rating: 5,
        image: 'https://bigstar.by/product_images/130312902(1)_3.jpg',
      },
      {
        id: 4,
        name: 'куртка модная',
        price: 5000,
        discount_price: 4000,
        size: ['m', 'l'],
        colors: ['red', 'black'],
        rating: 5,
        image: 'https://bigstar.by/product_images/130312902(1)_3.jpg',
      },
      {
        id: 5,
        name: 'куртка модная',
        price: 5000,
        discount_price: 4000,
        size: ['m', 'l'],
        colors: ['red', 'black'],
        rating: 5,
        image: 'https://bigstar.by/product_images/130312902(1)_3.jpg',
      },
    ];

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

  setProduct(product: IProduct[]): void {
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
