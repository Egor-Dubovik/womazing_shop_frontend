import React, { FC } from 'react';
import { IProductPrice } from 'types/product.interface';
import classes from './ProductPrice.module.css';

const ProductPrice: FC<IProductPrice> = ({ price, discountPrice }) => {
  return (
    <>
      {price === discountPrice ? (
        <div>
          <p className={classes.Prece}>${price}</p>
        </div>
      ) : (
        <>
          <div className={classes.PreceBlock}>
            <p className={classes.Prece}>${price}</p>
            <p
              className={classes.Prece}
              style={{ textDecoration: 'line-through', marginRight: 10 }}
            >
              ${discountPrice}
            </p>
          </div>
        </>
      )}
    </>
  );
};

export default ProductPrice;
