import 'App.scss';

import React, { Suspense, lazy, useMemo } from 'react';
import { GoogleReCaptchaProvider } from 'react-google-recaptcha-v3';
import { HelmetProvider } from 'react-helmet-async';
import { Provider } from 'react-redux';
import {
  BrowserRouter as Router, Route, Switch,
} from 'react-router-dom';

import { MainLayoutProvider } from 'container/MainLayout';
import i18n from 'i18n';
import { LanguageRouteMapping } from 'services/systems/types';
import { store } from 'store';
import { useAppSelector } from 'store/hooks';
import {
  convertHomeRoute, convertRoute, getSlugByTemplateCode,
} from 'utils/language';

const NewsDetail = lazy(() => import('pages/NewsDetail'));
const PageNav = lazy(() => import('navigation/PageNav'));
const HomeNav = lazy(() => import('navigation/HomeNav'));
const JourneyDetail = lazy(() => import('pages/ExperienceJourneyDetail'));

const App: React.FC = () => {
  const {
    menu: { staticSlug },
    locales: { listLocales },
  } = useAppSelector((state) => state);

  const { baseSystem } = useAppSelector((state) => state.systems);
  const newsDetailSlug = baseSystem?.routeMappings.novaworld.news[
    i18n.language as keyof LanguageRouteMapping
  ];

  const routesList = useMemo(() => ({
    home: convertHomeRoute(listLocales),
    newsDetail: convertRoute(listLocales, `/${newsDetailSlug}/:slug`),
    journeyDetail: convertRoute(listLocales, `/${getSlugByTemplateCode('journey', staticSlug)}/:slug`),
    pages: convertRoute(listLocales, '/:slug'),
  }), [staticSlug, listLocales, newsDetailSlug]);

  return (
    <div className="app">
      <Router>
        <Suspense fallback>
          <MainLayoutProvider>
            <Switch>
              <Route exact path={routesList.home}>
                <HomeNav />
              </Route>
              <Route
                exact
                path={routesList.newsDetail}
              >
                <NewsDetail />
              </Route>
              <Route
                exact
                path={routesList.journeyDetail}
              >
                <JourneyDetail />
              </Route>
              <Route exact path={routesList.pages}>
                <PageNav />
              </Route>
            </Switch>
          </MainLayoutProvider>
        </Suspense>
      </Router>
    </div>
  );
};

const GoogleReCaptchaWrapper: React.FC = ({ children }) => (
  <GoogleReCaptchaProvider
    reCaptchaKey="6LcwgsIZAAAAAHZFFWu3icOSaGK2_SVjZwY-kEjQ"
    language="vi"
    scriptProps={{
      appendTo: 'head',
      async: true,
      defer: true,
    }}
  >
    {children}
  </GoogleReCaptchaProvider>
);

const AppWrapper: React.FC = () => (
  <Provider store={store}>
    <HelmetProvider>
      <GoogleReCaptchaWrapper>
        <App />
      </GoogleReCaptchaWrapper>
      <div id="fb-customer-chat" className="fb-customerchat" />
    </HelmetProvider>
  </Provider>
);

export default AppWrapper;
