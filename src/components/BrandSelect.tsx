import React, { useContext, useEffect, useState } from 'react';
import Form from 'react-bootstrap/Form';
import { Context } from 'index';
import { observer } from 'mobx-react-lite';

const BrandSelect = observer(() => {
  const { product } = useContext(Context);
  const [activeBrand, setActiveBrand] = useState('');

  useEffect(() => {
    activeBrand !== ''
      ? product.setSelectedBrand(JSON.parse(activeBrand))
      : product.setSelectedBrand({});
  }, [activeBrand]);

  return (
    <Form.Select
      style={{ cursor: 'pointer' }}
      onChange={(event) => setActiveBrand(event.target.value)}
      value={activeBrand}
    >
      <option value="">Choose brand for sorting</option>
      {product.brands.map((brand) => (
        <option key={brand.id} value={JSON.stringify(brand)}>
          {brand.name}
        </option>
      ))}
    </Form.Select>
  );
});

export default BrandSelect;
