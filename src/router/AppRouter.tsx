import React from 'react';
import { createBrowserRouter } from 'react-router-dom';
import Layout from 'components/layout/Layout';
import { authRoutes, publicRoutes } from './rotes';

const isAuth = true;

interface IRoute {
  path: string;
  element: JSX.Element;
}

const getRoutes = (): IRoute[] => {
  return isAuth ? [...authRoutes, ...publicRoutes] : publicRoutes;
};

const AppRouter = createBrowserRouter([
  {
    element: <Layout />,
    children: getRoutes(),
  },
]);

export default AppRouter;
