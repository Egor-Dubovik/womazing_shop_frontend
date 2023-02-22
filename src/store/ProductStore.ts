import { makeAutoObservable } from 'mobx';
import { IBrandProduct, IProduct, ITypeProduct, Size } from 'types/product.interface';

// interface IProductStore {
//   _isAuth: boolean;
// }

class ProductStore {
  _types: ITypeProduct[];
  _brands: IBrandProduct[];
  _product: IProduct[];
  _size: Size[];
  _selectedType: ITypeProduct | Record<string, never>;
  _selectedBrand: IBrandProduct | Record<string, never>;
  _selectedSize: Size | null;
  _totalCount: number;
  _productLimit: number;
  _page: number;

  constructor() {
    this._types = [];
    this._brands = [];
    this._product = [];
    this._size = [];
    this._page = 1;
    this._totalCount = 10; //количество товара доступного по запросу
    this._productLimit = 3; //кл-во товара на одной странице

    this._selectedType = {};
    this._selectedBrand = {};
    this._selectedSize = null;
    makeAutoObservable(this);
  }

  //actions
  setPage(page: number): void {
    this._page = page;
  }

  setProductLimit(limit: number): void {
    this._productLimit = limit;
  }

  setTotalCount(count: number): void {
    this._totalCount = count;
  }

  setSelectedSize(value: Size | null): void {
    this._selectedSize = value;
  }

  setSelectedBrand(brand: IBrandProduct | Record<string, never>): void {
    this.setPage(1);
    this._selectedBrand = brand;
  }

  setSelectedType(type: ITypeProduct | Record<string, never>): void {
    this.setPage(1);
    this._selectedType = type;
  }

  setSize(value: Size[]): void {
    this._size = value;
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

  get selectedSize(): Size | null {
    return this._selectedSize;
  }

  get selectedBrand(): IBrandProduct | Record<string, never> {
    return this._selectedBrand;
  }

  get selectedType(): ITypeProduct | Record<string, never> {
    return this._selectedType;
  }

  get size(): Size[] {
    return this._size;
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

  get page(): number {
    return this._page;
  }

  get totalCount(): number {
    return this._totalCount;
  }

  get productLimit(): number {
    return this._productLimit;
  }
}

export default ProductStore;
