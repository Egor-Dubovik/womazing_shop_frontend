import { Context } from 'index';
import React, { FC, useContext, useState } from 'react';
import { Col, Dropdown, Row } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';
import { ICreate } from 'types/product.interface';

interface IProductInfo {
  title: string;
  description: string;
  number: number;
}

const CreateProduct: FC<ICreate> = ({ show, onHide }) => {
  const { product } = useContext(Context);
  const [info, setInfo] = useState<IProductInfo[]>([]);

  const addInfo = (): void => {
    setInfo([...info, { title: '', description: '', number: Date.now() }]);
  };

  const removeInfo = (number: number): void => {
    setInfo(info.filter((currentInfo) => currentInfo.number !== number));
  };

  return (
    <>
      <Modal show={show} onHide={() => onHide(false)}>
        <Modal.Header closeButton>
          <Modal.Title>Add new product</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Control className="mb-3" type="text" placeholder="name" autoFocus />
            <Form.Group className="d-flex mb-3">
              <Dropdown style={{ marginRight: 10 }}>
                <Dropdown.Toggle>Choose a type</Dropdown.Toggle>
                <Dropdown.Menu>
                  {product.types.map((type) => (
                    <Dropdown.Item key={type.id}>{type.name}</Dropdown.Item>
                  ))}
                </Dropdown.Menu>
              </Dropdown>
              <Dropdown>
                <Dropdown.Toggle>Choose a brand</Dropdown.Toggle>
                <Dropdown.Menu>
                  {product.brands.map((brand) => (
                    <Dropdown.Item key={brand.id}>{brand.name}</Dropdown.Item>
                  ))}
                </Dropdown.Menu>
              </Dropdown>
            </Form.Group>
            <Form.Control className="mb-3" type="number" placeholder="product cost" />
            <Form.Control className="mb-3" type="file" />
            <hr />
            <Button className="mb-3" variant="outline-dark" onClick={addInfo}>
              Add info
            </Button>
            {info.map((currentInfo) => (
              <Row key={currentInfo.number} className="mb-2">
                <Col md={4}>
                  <Form.Control placeholder="enter name" />
                </Col>
                <Col md={4}>
                  <Form.Control placeholder="enter description" />
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
          <Button variant="outline-success" onClick={() => onHide(false)}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default CreateProduct;
