import ProductColors from 'components/product/ProductColor/ProductColors';
import ProductPrice from 'components/product/ProductPrice/ProductPrice';
import { getOneProduct } from 'htttp/productApi';
import { API_URL } from 'htttp/url';
import React, { FC, useEffect, useState } from 'react';
import { Button, Col, Image, Row } from 'react-bootstrap';
import { useParams } from 'react-router-dom';
import { IProduct } from 'types/product.interface';

const ProductPage: FC = () => {
  const [loading, setLoading] = useState(true);
  const [product, setProduct] = useState<IProduct | Record<string, never>>({});
  const { id } = useParams();

  useEffect(() => {
    setLoading(true);
    getOneProduct(+(id as string))
      .then((data) => setProduct(data))
      .then((data) => {
        setLoading(false);
      });
  }, []);

  return (
    <>
      {loading ? (
        <div>Loading</div>
      ) : (
        <Col>
          <Row>
            <Col>
              <Image style={{ width: 300, height: 400 }} src={API_URL + product.image}></Image>
            </Col>
            <Col>
              <ProductPrice price={product.price} discountPrice={product.discount_price} />
              <Row>Choose a size {product.size}</Row>

              <Row style={{}}>
                <h5>Colors</h5>
                {product.color.length !== 0 ? (
                  <ProductColors color={product.color} />
                ) : (
                  'There is not available colors'
                )}
              </Row>

              <Row>
                <h5>Description</h5>
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
          <Row>Another products:</Row>
        </Col>
      )}
    </>
  );
};

export default ProductPage;
