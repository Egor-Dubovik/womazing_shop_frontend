import { Context } from 'index';
import { observer } from 'mobx-react-lite';
import React, { FC, FormEvent, useContext, useEffect, useState } from 'react';
import { Form } from 'react-bootstrap';
import { Size } from 'types/product.interface';

interface IFormCeckBox {
  types: string[] | Size[];
}

const FormCeckBox: FC<IFormCeckBox> = observer(({ types }) => {
  const { product } = useContext(Context);
  const [selectedTypes, setSelectedTypes] = useState<Size[]>([]);

  const switchTypes = (event: FormEvent<HTMLInputElement>) => {
    const type = event.currentTarget.value as Size;
    const checked = event.currentTarget.checked;

    // checked
    //   ? setSelectedTypes((prevTypes) => [...prevTypes, type])
    //   : setSelectedTypes((prevTypes) => prevTypes.filter((currentType) => currentType !== type));

    checked
      ? product.setSize([...product.size, type])
      : product.setSize(product.size.filter((currentSize) => currentSize !== type));
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
});

export default FormCeckBox;
