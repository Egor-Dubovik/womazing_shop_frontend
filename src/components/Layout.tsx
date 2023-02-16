import React, { Component } from 'react';
import { Outlet } from 'react-router-dom';
import Navigation from './Navigation/Navigation';

class Layout extends Component {
  render() {
    return (
      <>
        <Navigation />
        <main className={'classes.main'}>
          <div className="main__container">
            <Outlet />
          </div>
        </main>
        <footer className="footer">
          <div className="footer__container">footer</div>
        </footer>
      </>
    );
  }
}
export default Layout;
