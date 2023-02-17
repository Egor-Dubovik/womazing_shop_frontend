import BrandSelect from 'components/BrandSelect';
import ProductList from 'components/ProductList';
import TypeBar from 'components/TypeBar';
import React, { FC } from 'react';
import { Col, Row } from 'react-bootstrap';

const Store: FC = () => {
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
};

export default Store;
