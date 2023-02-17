import React, { FC, useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';
import { ICreate } from 'types/product.interface';

const CreateBrand: FC<ICreate> = ({ show, onHide }) => {
  return (
    <>
      <Modal show={show} onHide={() => onHide(false)}>
        <Modal.Header closeButton>
          <Modal.Title>Add new brand</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Control type="text" placeholder="name" autoFocus />
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

export default CreateBrand;
