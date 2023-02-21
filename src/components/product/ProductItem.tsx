import { API_URL } from 'htttp/url';
import React, { FC } from 'react';
import { Card, Col, Image } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import { PRODUCT_ROUTE } from 'types/constants';
import { IProduct } from 'types/product.interface';
import { getPrice } from 'utils/product';

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
        <div className="d-flex">{getPrice(product)}</div>
        <div>{product.size.toString()}</div>
      </Card>
    </Col>
  );
};

export default ProductItem;
