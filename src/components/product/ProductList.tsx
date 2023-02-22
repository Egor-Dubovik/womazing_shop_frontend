import { Context } from 'index';
import { observer } from 'mobx-react-lite';
import React, { useContext } from 'react';
import { Col, Row } from 'react-bootstrap';
import ProductItem from './ProductItem';

const ProductList = observer(() => {
  const { product } = useContext(Context);

  return (
    <Row className="d-flex gx-3 gy-3">
      {/* TODO */}
      {/* {product.product.length && <Col>no products found</Col>} */}

      {product.product.map((product) => (
        <ProductItem key={product.id} product={product} />
      ))}
    </Row>
  );
});

export default ProductList;
