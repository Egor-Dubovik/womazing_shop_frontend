import { getBasketProducts } from 'htttp/basketApi';
import { getOneProduct } from 'htttp/productApi';
import { Context } from 'index';
import { observer } from 'mobx-react-lite';
import React, { FC, useContext, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { IBasketItem, IBasketObject, IBasketProduct } from 'types/basket.interface';

const Basket: FC = observer(() => {
  const { basket, product } = useContext(Context);
  const params = useParams();
  const [productInfo, setProductInfo] = useState<IBasketProduct[] | null>(null);

  const getBasketObject = (basketItems: IBasketItem[]): IBasketObject => {
    const basketObject = basketItems.reduce((acc, item) => {
      const productId = item.productId;
      acc[productId] = acc[productId] ? acc[productId] + 1 : 1;
      return acc;
    }, {} as IBasketObject);
    return basketObject;
  };

  const getBasketData = async (): Promise<IBasketObject | undefined> => {
    if (params.basketId) {
      const basketId = Number(params.basketId);
      const basketProducts = await getBasketProducts(basketId);
      return getBasketObject(basketProducts.rows);
    }
  };

  const showBasketProduct = async (): Promise<void> => {
    const basketData = await getBasketData();
    const productsResult = [] as IBasketProduct[];

    if (basketData) {
      for (const productId in basketData) {
        const product = await getOneProduct(Number(productId));
        productsResult.push({ product: product, amount: Number(basketData[productId]) });
      }
      setProductInfo(productsResult);
    }
  };

  useEffect(() => {
    showBasketProduct();
  }, []);

  return (
    <div>
      {productInfo &&
        productInfo.map((info) => (
          <div key={info.product.id}>
            <div>name: {info.product.name}</div>
            <div>amount: {info.amount}</div>
          </div>
        ))}
    </div>
  );
});

export default Basket;
