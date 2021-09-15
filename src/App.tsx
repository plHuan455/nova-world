import 'App.scss';

import React, { Suspense, lazy } from 'react';
import { GoogleReCaptchaProvider } from 'react-google-recaptcha-v3';
import { Provider } from 'react-redux';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import Loading from 'components/atoms/Loading';
import { MainLayoutProvider } from 'container/MainLayout';
import Contact from 'pages/Contact';
import ExperienceJourney from 'pages/ExperienceJourney';
import ExperienceJourneyDetail from 'pages/ExperienceJourneyDetail';
import Home from 'pages/Home';
import Library from 'pages/Library';
import LibraryImageCarouselPage from 'pages/LibraryImageCarousel';
import News from 'pages/News';
import NotFound from 'pages/NotFound';
import Product from 'pages/Product';
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
  {
    key: 'experienceJourneyDetail',
    path: '/hanh-trinh-trai-nghiem/chi-tiet',
    component: ExperienceJourneyDetail,
  },
  {
    key: 'product',
    path: '/san-pham-noi-bat',
    component: Product,

  },
  {
    key: 'library',
    path: '/thu-vien',
    component: Library,
  },
  {
    key: 'library-carousel',
    path: '/thu-vien-hinh-anh',
    component: LibraryImageCarouselPage,
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

const GoogleReCaptchaWrapper: React.FC = ({ children }) => (
  <GoogleReCaptchaProvider
    reCaptchaKey="6LcwgsIZAAAAAHZFFWu3icOSaGK2_SVjZwY-kEjQ"
    language="vi"
    scriptProps={{
      appendTo: 'head',
    }}
  >
    {children}
  </GoogleReCaptchaProvider>
);

const AppWrapper: React.FC = () => (
  <Provider store={store}>
    <GoogleReCaptchaWrapper>
      <App />
    </GoogleReCaptchaWrapper>
  </Provider>
);

export default AppWrapper;
