import CreateBrand from 'components/modals/CreateBrand';
import CreateProduct from 'components/modals/CreateProduct';
import CreateType from 'components/modals/CreateType';
import React, { FC, useState } from 'react';
import { Button, Col } from 'react-bootstrap';

const Admin: FC = () => {
  const [showBrand, setShowBrand] = useState(false);
  const [showType, setShowType] = useState(false);
  const [showProduct, setShowProduct] = useState(false);

  return (
    <div className="d-flex flex-column">
      <Button variant={'outline-dark'} className={'mt-3 p-2'} onClick={() => setShowBrand(true)}>
        Add brand
      </Button>
      <Button variant={'outline-dark'} className={'mt-4 p-2'} onClick={() => setShowType(true)}>
        Add type
      </Button>
      <Button variant={'outline-dark'} className={'mt-3 p-2'} onClick={() => setShowProduct(true)}>
        Add product
      </Button>
      <CreateBrand show={showBrand} onHide={setShowBrand} />
      <CreateType show={showType} onHide={setShowType} />
      <CreateProduct show={showProduct} onHide={setShowProduct} />
    </div>
  );
};

export default Admin;
