import React, { FC, useState } from 'react';
import { IProductSize } from 'types/product.interface';
import classes from './ProductSize.module.css';

const ProductSize: FC<IProductSize> = ({ size }) => {
  const [activeSize, setActiveSize] = useState('');

  return (
    <>
      <div className={classes.SizeBlock}>
        {size.map((currentSize) => (
          <div
            key={currentSize}
            className={currentSize === activeSize ? classes.ActiveSize : classes.Size}
            onClick={() => setActiveSize(currentSize)}
          >
            {currentSize}
          </div>
        ))}
      </div>
    </>
  );
};

export default ProductSize;
