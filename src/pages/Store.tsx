import BrandSelect from 'components/BrandSelect';
import ProductList from 'components/product/ProductList';
import TypeBar from 'components/TypeBar';
import { getAllProducts, getBrands, getTypes } from 'htttp/productApi';
import { Context } from 'index';
import { observer } from 'mobx-react-lite';
import React, { FC, useContext, useEffect } from 'react';
import { Col, Row } from 'react-bootstrap';

const Store: FC = observer(() => {
  const { product } = useContext(Context);

  useEffect(() => {
    getTypes().then((types) => product.setTypes(types));
    getBrands().then((brands) => product.setBrands(brands));
    getAllProducts().then((products) => product.setAllProduct(products.rows));
  }, []);

  return (
    <>
      <Col className="mb-3">
        <BrandSelect />
      </Col>
      <Row>
        <Col md={3}>
          <TypeBar />
        </Col>
        <Col md={9}>
          <ProductList />
        </Col>
      </Row>
    </>
  );
});

export default Store;
