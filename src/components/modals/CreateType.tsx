import { createType } from 'htttp/productApi';
import React, { FC, useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';
import { ICreate } from 'types/product.interface';

const CreateType: FC<ICreate> = ({ show, onHide }) => {
  const [name, setName] = useState('');

  const addType = () => {
    createType({ name }).then((newType) => {
      setName('');
    });
  };

  return (
    <>
      <Modal show={show} onHide={() => onHide(false)}>
        <Modal.Header closeButton>
          <Modal.Title>Add new type</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Control
              type="text"
              placeholder="name"
              value={name}
              onChange={(event) => {
                setName(event.target.value);
              }}
              autoFocus
            />
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={() => onHide(false)}>
            Close
          </Button>
          <Button variant="outline-success" onClick={addType}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default CreateType;
