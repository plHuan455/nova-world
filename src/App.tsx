import 'App.scss';

import React, { Suspense } from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import Loading from 'components/atoms/Loading';
import { MainLayoutProvider } from 'container/MainLayout';
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
    path: '/cac-phan-ki',
    component: () => (
      <div>
        Các phân kỳ
      </div>
    ),
    key: 'dummy',
  },
];

const NotFound = () => <div>Not found</div>;

const App: React.FC = () => (
  <div className="app">
    <Router>
      <Suspense fallback={<Loading />}>
        <MainLayoutProvider>
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
