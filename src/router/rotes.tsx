import React from 'react';
import { Navigate } from 'react-router-dom';
import MainPage from 'pages/MainPage';
import {
  ADMIN_ROUTE,
  LOGIN_ROUTE,
  NOT_FOUND_ROUTE,
  REGISTRATION_ROUTE,
  STORE_ROUTE,
  MAIN_ROUTE,
  BASKET_ROUTE,
  PRODUCT_ROUTE,
} from '../types/constants';
import Admin from 'pages/Admin';
import Basket from 'pages/Basket';
import Auth from 'pages/Auth';
import Store from 'pages/Store';
import ProductPage from 'pages/ProductPage';

export const publicRoutes = [
  {
    path: MAIN_ROUTE,
    element: <MainPage />,
  },
  {
    path: LOGIN_ROUTE,
    element: <Auth />,
  },
  {
    path: REGISTRATION_ROUTE,
    element: <Auth />,
  },
  {
    path: STORE_ROUTE,
    element: <Store />,
  },
  {
    path: PRODUCT_ROUTE + '/:id',
    element: <ProductPage />,
  },
  {
    path: NOT_FOUND_ROUTE,
    element: <div>not found page</div>,
  },
  {
    path: '*',
    element: <Navigate to={NOT_FOUND_ROUTE} replace />,
  },
];

export const authRoutes = [
  {
    path: ADMIN_ROUTE,
    element: <Admin />,
  },
  {
    path: BASKET_ROUTE,
    element: <Basket />,
  },
];
