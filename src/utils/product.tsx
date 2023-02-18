import React from 'react';
import { IProduct } from 'types/product.interface';

export const getPrice = (product: IProduct | Record<string, never>) =>
  product.price === product.discount_price ? (
    <p>${product.price}</p>
  ) : (
    <>
      <div style={{ textDecoration: 'line-through', marginRight: 10 }}>
        ${product.discount_price}
      </div>
      <div>${product.price}</div>
    </>
  );
