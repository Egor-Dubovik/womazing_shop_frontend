import { makeAutoObservable } from 'mobx';
import { IBrandProduct, IProduct, ITypeProduct } from 'types/product.interface';

// interface IProductStore {
//   _isAuth: boolean;
// }

class ProductStore {
  _types: ITypeProduct[];
  _brands: IBrandProduct[];
  _product: IProduct[];

  constructor() {
    this._types = [
      { id: 1, name: 'куртка' },
      { id: 2, name: 'куртка' },
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
        image:
          'https://www.google.com/search?q=%D1%84%D0%BE%D1%82%D0%BA%D0%B0+%D0%BA%D1%83%D1%80%D1%82%D0%BA%D0%B8&rlz=1C1GCEA_enBY1030BY1030&sxsrf=AJOqlzWw38zFM62sT_GlhVULajqc6nRaAQ:1676479480328&source=lnms&tbm=isch&sa=X&ved=2ahUKEwiQvJff_Jf9AhWPPewKHZ7hCOIQ_AUoAXoECAEQAw&biw=1920&bih=880&dpr=1#imgrc=QJxG0yvdxWPp8M',
      },
    ];
    makeAutoObservable(this);
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
