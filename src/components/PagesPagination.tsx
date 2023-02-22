import { Context } from 'index';
import { observer } from 'mobx-react-lite';
import React, { useContext } from 'react';
import { Pagination } from 'react-bootstrap';

const PagesPagination = observer(() => {
  // const [state, setState] = useState(initialState);
  const { product } = useContext(Context);
  const pageCount = Math.ceil(product.totalCount / product.productLimit);
  const pages = [] as number[];

  for (let index = 0; index < pageCount; index++) {
    pages.push(index + 1);
  }

  //   console.log(pages, product.totalCount, product.productLimit);
  return (
    <Pagination>
      {pages.map((page) => (
        <Pagination.Item
          key={page}
          active={product.page === page}
          onClick={() => product.setPage(page)}
        >
          {page}
        </Pagination.Item>
      ))}
    </Pagination>
  );
});

export default PagesPagination;
