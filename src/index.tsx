import React, { createContext } from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router } from 'react-router-dom';
import UserStore from 'store/UserStore';
import { IAppContext } from 'types/app.interface';
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);
export const Context = createContext<IAppContext | Record<string, never>>({});

root.render(
  <Context.Provider value={{ user: new UserStore() }}>
    <Router>
      <App />
    </Router>
  </Context.Provider>
);
