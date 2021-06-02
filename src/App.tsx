import 'App.scss';

import React from 'react';
import { Provider } from 'react-redux';

import logo from 'logo.svg';
import { store } from 'store';

const App: React.FC = () => (
  <div className="app">
    <header className="app-header">
      <img src={logo} className="app-logo" alt="logo" />
      <p>
        Edit
        {' '}
        <code>src/App.tsx</code>
        {' '}
        and save to reload.
      </p>
      <a
        className="app-link"
        href="https://reactjs.org"
        target="_blank"
        rel="noopener noreferrer"
      >
        Learn React
      </a>
    </header>
  </div>
);

const AppWrapper: React.FC = () => (
  <Provider store={store}>
    <App />
  </Provider>
);

export default AppWrapper;
