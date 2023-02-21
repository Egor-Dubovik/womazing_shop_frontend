import React, { FC, useState } from 'react';
import { Row } from 'react-bootstrap';
import { IProductColors } from 'types/product.interface';
import classes from './ProductColors.module.css';

const ProductColors: FC<IProductColors> = ({ color }) => {
  const [activeColor, setActiveColor] = useState('');

  return (
    <>
      <Row>
        {color.map((currentColor) => (
          <button
            key={currentColor.id}
            style={{ backgroundColor: currentColor.value }}
            className={
              activeColor === currentColor.value ? classes.ActiveColorButton : classes.ColorButton
            }
            onClick={() => setActiveColor(currentColor.value)}
          ></button>
        ))}
      </Row>
    </>
  );
};

export default ProductColors;
