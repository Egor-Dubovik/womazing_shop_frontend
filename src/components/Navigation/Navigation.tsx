import React, { FC, useContext } from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import { NavLink } from 'react-router-dom';
import { Button, Dropdown, Offcanvas } from 'react-bootstrap';
import { observer } from 'mobx-react-lite';
import Container from 'react-bootstrap/Container';
import { Context } from 'index';
import classes from './Navigation.module.css';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
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
} from '../../types/constants';

// чтобы mobx отследивал значения состояний - observer

const Navigation: FC = observer(() => {
  const { user } = useContext(Context);
  // const logOut = () => {
  //   user.setUser({});
  //   user.setIsAuth(false);
  // };
  const expand = 'md'; // 'sm', 'md', 'lg', 'xl'

  const getLinkClasses = (isActive: boolean): string => {
    return isActive ? `${classes.Link} ${classes.ActiveLink}` : classes.Link;
  };

  return (
    //fixed="top"
    // fluid - container
    <>
      <Navbar bg="light" expand={expand} className="mb-3">
        <Container>
          <NavLink to="MAIN_ROUTE">
            <img
              src="/logo.svg"
              width="30"
              height="30"
              className="d-inline-block align-top"
              alt="React Bootstrap logo"
            />
            Womazing
          </NavLink>
          <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-${expand}`} />

          <Navbar.Offcanvas
            id={`offcanvasNavbar-expand-${expand}`}
            aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`}
            placement="end"
          >
            <Offcanvas.Header closeButton>
              <Offcanvas.Title id={`offcanvasNavbarLabel-expand-${expand}`}>
                Womazing
              </Offcanvas.Title>
            </Offcanvas.Header>

            <Offcanvas.Body>
              <Nav className="align-items-center justify-content-end flex-grow-1 pe-3">
                <NavLink className={({ isActive }) => getLinkClasses(isActive)} to={MAIN_ROUTE}>
                  Main
                </NavLink>
                <NavLink className={({ isActive }) => getLinkClasses(isActive)} to={STORE_ROUTE}>
                  Store
                </NavLink>
                <NavLink className={({ isActive }) => getLinkClasses(isActive)} to={ABOUT_ROUTE}>
                  About
                </NavLink>
                <NavLink className={({ isActive }) => getLinkClasses(isActive)} to={CONTACTS_ROUTE}>
                  Contacts
                </NavLink>

                {user.isAuth && (
                  <NavLink className={({ isActive }) => getLinkClasses(isActive)} to={BASKET_ROUTE}>
                    Basket
                  </NavLink>
                )}

                <Dropdown as={ButtonGroup}>
                  <Button variant="success">
                    <NavLink style={{ color: 'white' }} to={PROFILE_ROUTE}>
                      Profile
                    </NavLink>
                  </Button>

                  <Dropdown.Toggle split variant="success" id="dropdown-split-basic" />

                  <Dropdown.Menu flip={true}>
                    {user.isAuth ? (
                      <Dropdown.Item onClick={() => user.setIsAuth(false)}>Log out</Dropdown.Item>
                    ) : (
                      <>
                        <Dropdown.Item>
                          <NavLink to={REGISTRATION_ROUTE}>Sign in</NavLink>
                        </Dropdown.Item>
                        <Dropdown.Item>
                          <NavLink to={LOGIN_ROUTE}>Log in</NavLink>
                        </Dropdown.Item>
                      </>
                    )}
                  </Dropdown.Menu>
                </Dropdown>
              </Nav>
            </Offcanvas.Body>
          </Navbar.Offcanvas>
        </Container>
      </Navbar>
    </>
  );
});

export default Navigation;

// {user.isAuth ? (
//   <Nav className="ml-auto" style={{ color: 'white' }}>
//     <Button variant={'outline-light'} onClick={() => logOut()} className="ml-2">
//       Выйти
//     </Button>
//   </Nav>
// ) : (
//   <Nav className="ml-auto" style={{ color: 'white' }}>
//     <Button variant={'outline-light'} onClick={() => history.push(LOGIN_ROUTE)}>
//       Авторизация
//     </Button>
//   </Nav>
// )}
