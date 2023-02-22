import ProductColors from 'components/product/ProductColor/ProductColors';
import ProductPrice from 'components/product/ProductPrice/ProductPrice';
import ProductSize from 'components/product/ProductSize/ProductSize';
import { createBasketProduct } from 'htttp/basketApi';
import { getOneProduct } from 'htttp/productApi';
import { API_URL } from 'htttp/url';
import { Context } from 'index';
import { observer } from 'mobx-react-lite';
import React, { FC, useContext, useEffect, useState } from 'react';
import { Button, Col, Image, Row } from 'react-bootstrap';
import { useParams } from 'react-router-dom';
import { IProduct } from 'types/product.interface';
import { getTokenData } from 'utils/tokenAction';

const ProductPage: FC = observer(() => {
  const { basket } = useContext(Context);
  const [loading, setLoading] = useState(true);
  const [product, setProduct] = useState<IProduct | Record<string, never>>({});
  const { id } = useParams();

  useEffect(() => {
    setLoading(true);
    getOneProduct(Number(id as string))
      .then((data) => setProduct(data))
      .then((data) => {
        setLoading(false);
      });
  }, []);

  const addToBasket = () => {
    const tokenData = getTokenData();
    if (tokenData) {
      const data = createBasketProduct(product.id, tokenData.basketId);
      console.log(data);
      console.log(product.id, tokenData.basketId);
    }
  };

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

              <div>
                <h5>Choose a size</h5>
                <ProductSize size={product.size} />
              </div>

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

              <Button variant="outline-dark" onClick={addToBasket}>
                add to basket
              </Button>
            </Col>
          </Row>
          <Row>Another products:</Row>
        </Col>
      )}
    </>
  );
});

export default ProductPage;
