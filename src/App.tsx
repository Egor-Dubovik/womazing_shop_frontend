import { Context } from 'index';
import React, { useContext, useEffect, useState } from 'react';
import { useRoutes } from 'react-router-dom';
import AppRouter from 'router/AppRouter';
import { authRoutes, publicRoutes } from 'router/rotes';
import { IRoute } from 'types/app.interface';
import './styles/App.css';

const getRoutes = (isAuth: boolean): IRoute[] => {
  return isAuth ? [...authRoutes, ...publicRoutes] : publicRoutes;
};

function App() {
  const { user } = useContext(Context);
  const [userRoutes, setUserRoutes] = useState(getRoutes(user._isAuth));
  const routes = useRoutes(AppRouter(userRoutes));

  useEffect(() => {
    setUserRoutes(getRoutes(user._isAuth));
  }, [user._isAuth]);

  console.log(user._isAuth, userRoutes);
  return <div className="App">{routes}</div>;
}

export default App;
