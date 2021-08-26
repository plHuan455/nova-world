import 'App.scss';

import React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import Home from 'pages/Home';
import { store } from 'store';

const routes = [
  {
    path: '/',
    component: Home,
  },
  {
    path: '/cac-phan-ki',
    component: () => (
      <div>
        Các phân kỳ
      </div>
    ),
  },
];

const NotFound = () => <div>Not found</div>;

const App: React.FC = () => {
  console.log(window.location);
  return (
    <div className="app">
      <Router>
        <Switch>
          {routes.map((item, index) => (
            <Route
              key={`route-${index.toString()}`}
              exact
              path={item.path}
              component={item.component}
            />
          ))}
          <Route path="*" component={NotFound} />
        </Switch>
      </Router>
    </div>
  );
};

const AppWrapper: React.FC = () => (
  <Provider store={store}>
    <App />
  </Provider>
);

export default AppWrapper;
