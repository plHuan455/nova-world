import 'App.scss';

import React, { Suspense } from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import Loading from 'components/atoms/Loading';
import { MainLayoutProvider } from 'container/MainLayout';
import Contact from 'pages/Contact';
import Home from 'pages/Home';
import Search from 'pages/Search';
import { store } from 'store';

const routes = [
  {
    path: '/',
    component: Home,
    key: 'home',
  },
  {
    path: '/tim-kiem',
    component: Search,
    key: 'search',
  },
  {
    key: 'contact',
    path: '/lien-he',
    component: Contact,
  },
];

const NotFound = () => <div>Not found</div>;

const App: React.FC = () => (
  <div className="app">
    <Router>
      <Suspense fallback={<Loading />}>
        <MainLayoutProvider>
          <Switch>
            {routes.map((item) => (
              <Route
                key={item.key}
                exact
                path={item.path}
                component={item.component}
              />
            ))}
            <Route path="*" component={NotFound} />
          </Switch>
        </MainLayoutProvider>
      </Suspense>
    </Router>
  </div>
);

const AppWrapper: React.FC = () => (
  <Provider store={store}>
    <App />
  </Provider>
);

export default AppWrapper;
