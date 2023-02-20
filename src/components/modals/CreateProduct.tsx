import FormCeckBox from 'components/form/FormCeckBox';
import { createProduct, getAllProducts, getBrands, getTypes } from 'htttp/productApi';
import { Context } from 'index';
import { observer } from 'mobx-react-lite';
import React, { FC, FormEvent, useContext, useEffect, useState } from 'react';
import { Col, Dropdown, Row } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';
import { ICreate, IProduct } from 'types/product.interface';

interface IProductInfo {
  title: string;
  description: string;
  number: number;
}

const CreateProduct: FC<ICreate> = observer(({ show, onHide }) => {
  const { product } = useContext(Context);
  const [info, setInfo] = useState<IProductInfo[]>([]);
  const [name, setName] = useState('');
  const [price, setPrice] = useState('');
  const [discountPrice, setDiscountPrice] = useState('');
  const [file, setFile] = useState<File | null>(null);
  // const [brand, setBrand] = useState(null);
  // const [type, setType] = useState(null);

  useEffect(() => {
    getTypes().then((types) => product.setTypes(types));
    getBrands().then((brands) => product.setBrands(brands));
    getAllProducts().then((products) => product.setAllProduct(products.rows));
  }, []);

  const addInfo = (): void => {
    setInfo([...info, { title: '', description: '', number: Date.now() }]);
  };

  const removeInfo = (number: number): void => {
    setInfo(info.filter((currentInfo) => currentInfo.number !== number));
  };

  const changeInfo = (key: string, value: string, number: number): void => {
    setInfo(
      info.map((currentInfo) =>
        currentInfo.number === number ? { ...currentInfo, [key]: value } : currentInfo
      )
    );
  };

  const selectFile = (event: FormEvent): void => {
    const files = (event.target as HTMLInputElement).files;
    if (files) {
      const chosenFile = files[0];
      setFile(chosenFile);
    }
  };

  const addProduct = (): void => {
    const formData = new FormData();
    formData.append('name', name);
    formData.append('price', price);
    formData.append('discount_price', discountPrice);
    formData.append('image', file as unknown as string);
    formData.append('branId', `${product.selectedBrand.id}`);
    formData.append('typeId', `${product.selectedType.id}`);
    formData.append('info', JSON.stringify(info));
    console.log(formData);

    createProduct(formData).then((data) => onHide(true));
  };

  return (
    <>
      <Modal show={show} onHide={() => onHide(false)}>
        <Modal.Header closeButton>
          <Modal.Title>Add new product</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Control
              className="mb-3"
              type="text"
              placeholder="name"
              value={name}
              onChange={(event) => setName(event.target.value)}
              autoFocus
            />
            <Form.Group className="d-flex mb-3">
              <Dropdown style={{ marginRight: 10 }}>
                <Dropdown.Toggle>{product.selectedType.name || 'Choose a type'}</Dropdown.Toggle>
                <Dropdown.Menu>
                  {product.types.map((type) => (
                    <Dropdown.Item key={type.id} onClick={() => product.setSelectedType(type)}>
                      {type.name}
                    </Dropdown.Item>
                  ))}
                </Dropdown.Menu>
              </Dropdown>
              <Dropdown>
                <Dropdown.Toggle>{product.selectedBrand.name || 'Choose a brand'}</Dropdown.Toggle>
                <Dropdown.Menu>
                  {product.brands.map((brand) => (
                    <Dropdown.Item key={brand.id} onClick={() => product.setSelectedBrand(brand)}>
                      {brand.name}{' '}
                    </Dropdown.Item>
                  ))}
                </Dropdown.Menu>
              </Dropdown>
            </Form.Group>
            <Form.Control
              className="mb-3"
              type="number"
              placeholder="product cost"
              value={price}
              onChange={(event) => setPrice(event.target.value)}
            />
            <Form.Control
              className="mb-3"
              type="number"
              placeholder="discount product cost"
              value={discountPrice}
              onChange={(event) => setDiscountPrice(event.target.value)}
            />
            <FormCeckBox types={['M', 'L']} />
            <Form.Control className="mb-3" type="file" onChange={(event) => selectFile(event)} />
            <hr />
            <Button className="mb-3" variant="outline-dark" onClick={addInfo}>
              Add info
            </Button>
            {info.map((currentInfo) => (
              <Row key={currentInfo.number} className="mb-2">
                <Col md={4}>
                  <Form.Control
                    placeholder="enter name"
                    value={currentInfo.title}
                    onChange={(event) =>
                      changeInfo('title', event.target.value, currentInfo.number)
                    }
                  />
                </Col>
                <Col md={4}>
                  <Form.Control
                    placeholder="enter description"
                    value={currentInfo.description}
                    onChange={(event) =>
                      changeInfo('description', event.target.value, currentInfo.number)
                    }
                  />
                </Col>
                <Col md={4} onClick={() => removeInfo(currentInfo.number)}>
                  <Button variant="outline-danger">delete</Button>
                </Col>
              </Row>
            ))}
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={() => onHide(false)}>
            Close
          </Button>
          <Button variant="outline-success" onClick={addProduct}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
});

export default CreateProduct;
