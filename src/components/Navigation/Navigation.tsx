import React, { FC, useContext } from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import { NavLink, useLocation, useNavigate } from 'react-router-dom';
import { Button, Col, Dropdown, Offcanvas } from 'react-bootstrap';
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
import { registration } from 'htttp/userAPI';
import { IUser } from 'types/user.inerface';
import jwtDecode from 'jwt-decode';
import { IToken } from 'pages/ProductPage';

// чтобы mobx отследивал значения состояний - observer

const Navigation: FC = observer(() => {
  const { user } = useContext(Context);
  const navigate = useNavigate();
  const location = useLocation();

  const logOut = () => {
    user.setUser({} as IUser);
    user.setIsAuth(false);
    if (
      location.pathname === PROFILE_ROUTE ||
      location.pathname === ADMIN_ROUTE ||
      location.pathname === BASKET_ROUTE
    ) {
      navigate(LOGIN_ROUTE);
    }
  };

  const expand = 'md'; // 'sm', 'md', 'lg', 'xl'

  const getLinkClasses = (isActive: boolean): string => {
    return isActive ? `${classes.Link} ${classes.ActiveLink}` : classes.Link;
  };

  const getBosketId = (): number | undefined => {
    const encryptedToken = localStorage.getItem('token');
    if (encryptedToken) {
      const token = jwtDecode(encryptedToken) as IToken;
      return token.basketId;
    }
  };

  return (
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
                  <NavLink
                    className={({ isActive }) => getLinkClasses(isActive)}
                    to={getBosketId() ? BASKET_ROUTE + `/${getBosketId()}` : BASKET_ROUTE}
                  >
                    Basket
                  </NavLink>
                )}

                <Dropdown as={ButtonGroup}>
                  <Button variant="success">
                    <NavLink
                      style={{ color: 'white' }}
                      to={user.isAuth ? PROFILE_ROUTE : LOGIN_ROUTE}
                    >
                      Profile
                    </NavLink>
                  </Button>

                  <Dropdown.Toggle split variant="success" id="dropdown-split-basic" />

                  <Dropdown.Menu flip={true}>
                    {user.isAuth ? (
                      <Dropdown.Item onClick={() => logOut()}>Log out</Dropdown.Item>
                    ) : (
                      <>
                        <div className="d-flex flex-column">
                          <NavLink className="p-2" to={REGISTRATION_ROUTE}>
                            Sign in
                          </NavLink>
                          <NavLink className="p-2" to={LOGIN_ROUTE}>
                            Log in
                          </NavLink>
                        </div>
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
