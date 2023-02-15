import React, { Component } from 'react';
import { Outlet } from 'react-router-dom';

class Layout extends Component {
  render() {
    return (
      <>
        <header>header</header>
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
