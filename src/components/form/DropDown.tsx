// import { Context } from 'index';
// import { observer } from 'mobx-react-lite';
// import React, { useContext, useState } from 'react';
// import { Dropdown } from 'react-bootstrap';

// const DropDown = observer(() => {
//   const { product } = useContext(Context);
//   const [selectedOptions, setSelectedOptions] = useState([]);

//   //   const addOptionToState = (option) => {
//   //     if (!selectedOptions.includes(option)) {
//   //       setSelectedOptions([...selectedOptions, option]);
//   //     }
//   //   };

//   return (
//     <Dropdown style={{ marginRight: 10 }}>
//       <Dropdown.Toggle>{product.selectedType.name || 'Choose a type'}</Dropdown.Toggle>
//       <Dropdown.Menu>
//         {product.colors.map((color) => (
//           <Dropdown.Item key={color.id} onClick={() => product.setSelectedColor(color)}>
//             {color.name}
//           </Dropdown.Item>
//         ))}
//       </Dropdown.Menu>
//     </Dropdown>
//   );
// });

// export default DropDown;
