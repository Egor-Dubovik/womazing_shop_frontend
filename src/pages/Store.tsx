import BrandSelect from 'components/BrandSelect';
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
        <Col md={9}></Col>
      </Row>
    </>
  );
};

export default Store;
