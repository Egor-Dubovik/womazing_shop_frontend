import { getOneProduct } from 'htttp/productApi';
import { API_URL } from 'htttp/url';
import React, { FC, useEffect, useState } from 'react';
import { Button, Col, Image, Row } from 'react-bootstrap';
import { useParams } from 'react-router-dom';
import { IProduct } from 'types/product.interface';
import { getPrice } from 'utils/product';

const ProductPage: FC = () => {
  const [product, setProduct] = useState<IProduct | Record<string, never>>({});
  const { id } = useParams();

  useEffect(() => {
    getOneProduct(+(id as string)).then((data) => setProduct(data));
    console.log(product);
  }, []);

  return (
    <Col>
      <Row>
        <Col>
          <Image style={{ width: 300, height: 400 }} src={API_URL + product.image}></Image>
        </Col>
        <Col>
          <Row>{getPrice(product)}</Row>
          <Row>Choose a size {product.size}</Row>
          <Row>Choose a color {product.colors}</Row>
          <Row>
            <h5>Описание</h5>
            {product.info &&
              product.info.map((info) => (
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
