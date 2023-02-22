import React from 'react';
import { Navigate } from 'react-router-dom';
import MainPage from 'pages/MainPage';
import Admin from 'pages/Admin';
import Basket from 'pages/Basket';
import Auth from 'pages/Auth';
import Store from 'pages/Store';
import ProductPage from 'pages/ProductPage';
import Profile from 'pages/Profile';
import About from 'pages/About';
import {
  ADMIN_ROUTE,
  LOGIN_ROUTE,
  NOT_FOUND_ROUTE,
  REGISTRATION_ROUTE,
  STORE_ROUTE,
  MAIN_ROUTE,
  BASKET_ROUTE,
  PRODUCT_ROUTE,
  BAD_ROUTE,
  PROFILE_ROUTE,
  ABOUT_ROUTE,
  CONTACTS_ROUTE,
} from '../types/constants';
import Contacts from 'pages/Contacts';

export const publicRoutes = [
  {
    path: MAIN_ROUTE,
    element: <MainPage />,
  },
  {
    path: STORE_ROUTE,
    element: <Store />,
  },
  {
    path: ABOUT_ROUTE,
    element: <About />,
  },
  {
    path: CONTACTS_ROUTE,
    element: <Contacts />,
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
    path: PROFILE_ROUTE,
    element: <Profile />,
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
    path: BAD_ROUTE,
    element: <Navigate to={NOT_FOUND_ROUTE} replace />,
  },
];

export const authRoutes = [
  {
    path: ADMIN_ROUTE,
    element: <Admin />,
  },
  {
    path: BASKET_ROUTE + '/:basketId',
    element: <Basket />,
  },
];
