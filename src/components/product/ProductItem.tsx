import { API_URL } from 'htttp/url';
import React, { FC } from 'react';
import { Card, Col, Image } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import { PRODUCT_ROUTE } from 'types/constants';
import { IProduct } from 'types/product.interface';
import ProductPrice from './ProductPrice/ProductPrice';

interface IProductItem {
  product: IProduct;
}

const ProductItem: FC<IProductItem> = ({ product }) => {
  const navigate = useNavigate();

  return (
    <Col md={3} onClick={() => navigate(`${PRODUCT_ROUTE}/${product.id}`)}>
      <Card style={{ cursor: 'pointer' }}>
        <Image src={API_URL + product.image} />
        <h5>{product.name}</h5>
        <ProductPrice price={product.price} discountPrice={product.discount_price} />
        <div>{product.size.toString()}</div>
      </Card>
    </Col>
  );
};

export default ProductItem;
