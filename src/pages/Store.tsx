import BrandSelect from 'components/BrandSelect';
import PagesPagination from 'components/PagesPagination';
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
  }, []);

  useEffect(() => {
    getAllProducts(product.selectedType.id, product.selectedBrand.id, product.page, 2).then(
      (products) => {
        product.setAllProduct(products.rows);
        product.setTotalCount(products.count);
      }
    );
  }, [product.page, product.selectedType, product.selectedBrand]);

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
          <PagesPagination />
        </Col>
      </Row>
    </>
  );
});

export default Store;
