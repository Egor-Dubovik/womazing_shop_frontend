import React, { FC } from 'react';
import { Button, Col, Image, Row } from 'react-bootstrap';
import { getPrice } from 'utils/product';

const ProductPage: FC = () => {
  const product = {
    id: 1,
    name: 'куртка модная',
    price: 5000,
    discount_price: 4000,
    size: ['m', 'l'],
    colors: ['red', 'black'],
    rating: 5,
    image: 'https://bigstar.by/product_images/130312902(1)_3.jpg',
  };

  const description = [
    { id: 1, title: 'title1', description: 'aaaaaaaaaa' },
    { id: 1, title: 'title2', description: 'bbbbbbbbbb' },
  ];

  return (
    <Col>
      <Row>
        <Col>
          <Image src={product.image}></Image>
        </Col>
        <Col>
          <Row>{getPrice(product)}</Row>
          <Row>Choose a size {product.size}</Row>
          <Row>Choose a color {product.colors}</Row>
          <Row>
            <h5>Описание</h5>
            {description.map((info) => (
              <Row key={info.id}>
                {info.title}: {info.description}
              </Row>
            ))}
          </Row>

          <Button variant="outline-dark">add to basket</Button>
        </Col>
      </Row>
      <Row>Products info</Row>
    </Col>
  );
};

export default ProductPage;
