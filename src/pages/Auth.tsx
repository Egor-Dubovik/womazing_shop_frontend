import AuthForm from 'components/AuthForm/AuthForm';
import React, { FC } from 'react';
import { Button, Container, Form, ListGroup } from 'react-bootstrap';
import Nav from 'react-bootstrap/Nav';
import { NavLink, useLocation } from 'react-router-dom';
import { LOGIN_ROUTE, REGISTRATION_ROUTE } from 'types/constants';

// className="d-flex justify-content-between"

const Auth: FC = () => {
  const location = useLocation();
  const isLogin = location.pathname === LOGIN_ROUTE;

  return (
    <>
      <Nav>
        <NavLink className="m-lg-auto d-inline-block" to={LOGIN_ROUTE}>
          Login
        </NavLink>
        <NavLink className="m-lg-auto d-inline-block" to={REGISTRATION_ROUTE}>
          Register
        </NavLink>
      </Nav>
      <div style={{ display: 'flex' }}>
        {isLogin ? <p>Sign in with:</p> : <p>Sign up with::</p>}

        <div style={{ display: 'flex' }}>
          <p style={{ marginRight: 10 }}>Google</p>
          <p>Facebook</p>
        </div>
      </div>

      <AuthForm isLogin={isLogin} />
    </>
  );
};

export default Auth;
