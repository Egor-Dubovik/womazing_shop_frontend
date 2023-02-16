import React from 'react';
import { RouteObject } from 'react-router-dom';
import Layout from 'components/Layout';

import { IRoute } from 'types/app.interface';

const AppRouter = (routes: IRoute[]): RouteObject[] => {
  return [
    {
      element: <Layout />,
      children: routes,
    },
  ];
};

export default AppRouter;
