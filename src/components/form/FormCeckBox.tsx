import React, { FC, FormEvent, useEffect, useState } from 'react';
import { Form } from 'react-bootstrap';
import { Size } from 'types/product.interface';

interface IFormCeckBox {
  types: string[] | Size[];
}

const FormCeckBox: FC<IFormCeckBox> = ({ types }) => {
  const [selectedTypes, setSelectedTypes] = useState<string[] | Size[]>([]);

  const switchTypes = (event: FormEvent<HTMLInputElement>) => {
    const type = event.currentTarget.value;
    const checked = event.currentTarget.checked;
    checked
      ? setSelectedTypes((prevTypes) => [...prevTypes, type])
      : setSelectedTypes((prevTypes) => prevTypes.filter((currentType) => currentType !== type));
  };

  console.log(selectedTypes);
  return (
    <>
      {types.map((type, index) => (
        <div key={index} className="mb-1">
          <Form.Check inline label={type} value={type} type={'checkbox'} onChange={switchTypes} />
        </div>
      ))}
    </>
  );
};

export default FormCeckBox;
