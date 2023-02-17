import React, { FC } from 'react';
import { Card, Col, Image } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import { PRODUCT_ROUTE } from 'types/constants';
import { IProduct } from 'types/product.interface';

interface IProductItem {
  product: IProduct;
}

const ProductItem: FC<IProductItem> = ({ product }) => {
  const navigate = useNavigate();

  const getPrice = (product: IProduct) =>
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

  return (
    <Col md={3} onClick={() => navigate(`${PRODUCT_ROUTE}/${product.id}`)}>
      <Card style={{ cursor: 'pointer' }}>
        <Image src={product.image} />
        <h5>{product.name}</h5>
        <div className="d-flex">{getPrice(product)}</div>
        <div>{product.size.toString()}</div>
      </Card>
    </Col>
  );
};

export default ProductItem;
