import React, { Component } from 'react';
import { Container } from 'react-bootstrap';
import { Outlet } from 'react-router-dom';
import Navigation from './Navigation/Navigation';

class Layout extends Component {
  render() {
    return (
      <>
        <Navigation />
        <main className="main">
          <Container>
            <Outlet />
          </Container>
        </main>
        <footer className="footer">
          <Container>footer</Container>
        </footer>
      </>
    );
  }
}
export default Layout;
