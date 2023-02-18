import { check } from 'htttp/userAPI';
import { Context } from 'index';
import { observer } from 'mobx-react-lite';
import React, { useContext, useEffect, useState } from 'react';
import { Spinner } from 'react-bootstrap';
import { useRoutes } from 'react-router-dom';
import AppRouter from 'router/AppRouter';
import { authRoutes, publicRoutes } from 'router/rotes';
import { IRoute } from 'types/app.interface';
import './styles/App.css';

const getRoutes = (isAuth: boolean): IRoute[] => {
  return isAuth ? [...authRoutes, ...publicRoutes] : publicRoutes;
};

const App = observer(() => {
  const { user } = useContext(Context);
  const [userRoutes, setUserRoutes] = useState(getRoutes(user._isAuth));
  const routes = useRoutes(AppRouter(userRoutes));
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      check()
        .then((data) => {
          console.log(data);
          // user.setUser(true);
          user.setIsAuth(true);
          console.log(111);
        })
        .finally(() => setLoading(false));
    }, 2000);
  }, []);

  useEffect(() => {
    setUserRoutes(getRoutes(user._isAuth));
    console.log(222);
  }, [user._isAuth]);

  return <>{loading ? <Spinner animation="grow" /> : <div className="App">{routes}</div>}</>;
});

export default App;
