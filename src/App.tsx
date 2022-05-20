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
const ErrorNav = lazy(() => import('navigation/ErrorNav'));

const App: React.FC = () => {
  const {
    locales: { listLocales },
  } = useAppSelector((state) => state);

  const { baseSystem } = useAppSelector((state) => state.systems);
  const newsDetailSlug = baseSystem?.routeMappings.novaworld.news[
    i18n.language as keyof LanguageRouteMapping
  ];

  const routesList = useMemo(() => ({
    home: convertHomeRoute(listLocales),
    newsDetail: convertRoute(listLocales, `/${newsDetailSlug}/:slug`),
    journeyDetail: convertRoute(listLocales, `/${getSlugByTemplateCode('journey', baseSystem?.staticPages.novaworld)}/:slug`),
    pages: convertRoute(listLocales, '/:slug'),
  }), [baseSystem?.staticPages.novaworld, listLocales, newsDetailSlug]);

  return (
    <div className="app">
      <Router>
        <Suspense fallback>
          <MainLayoutProvider>
            <Switch>
              <Route exact path={routesList.home}>
                <HomeNav />
              </Route>
              {newsDetailSlug && (
              <Route
                exact
                path={routesList.newsDetail}
              >
                <NewsDetail />
              </Route>
              )}
              <Route
                exact
                path={routesList.journeyDetail}
              >
                <JourneyDetail />
              </Route>
              <Route exact path={routesList.pages}>
                <PageNav />
              </Route>
              {baseSystem
              && newsDetailSlug
              && listLocales
              && Object.keys(listLocales).length > 0 && (
              <Route exact path="*">
                <ErrorNav />
              </Route>
              )}
            </Switch>
          </MainLayoutProvider>
        </Suspense>
      </Router>
    </div>
  );
};

const GoogleReCaptchaWrapper: React.FC = ({ children }) => {
  const {
    systems: { baseSystem },
  } = useAppSelector((state) => state);

  return (
    <GoogleReCaptchaProvider
      reCaptchaKey={baseSystem?.googleRecaptchaSiteKey}
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
};

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
