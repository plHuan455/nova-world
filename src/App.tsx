import 'App.scss';

import React, { Suspense, lazy } from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import Loading from 'components/atoms/Loading';
import { MainLayoutProvider } from 'container/MainLayout';
import Contact from 'pages/Contact';
import ExperienceJourney from 'pages/ExperienceJourney';
import Home from 'pages/Home';
import News from 'pages/News';
import NotFound from 'pages/NotFound';
import Search from 'pages/Search';
import { store } from 'store';

const NewsDetail = lazy(() => import('pages/NewsDetail'));

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
  {
    key: 'newsdetail',
    path: '/tin-tuc/:slug',
    component: NewsDetail,
  },
  {
    key: 'page404',
    path: '/not-found',
    component: NotFound,
  },
  {
    key: 'experience-journey',
    path: '/hanh-trinh-trai-nghiem',
    component: ExperienceJourney,
  },
  {
    key: 'news',
    path: '/tin-tuc',
    component: News,
  },
];

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
