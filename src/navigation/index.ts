import React from 'react';

import { BasePageData } from 'services/navigation/types';

const Home = React.lazy(() => import('pages/Home'));
const Contact = React.lazy(() => import('pages/Contact'));
const ExperienceJourney = React.lazy(() => import('pages/ExperienceJourney'));
const Library = React.lazy(() => import('pages/Library'));
const News = React.lazy(() => import('pages/News'));
const Search = React.lazy(() => import('pages/Search'));
const NotFound = React.lazy(() => import('pages/NotFound'));

export type TemplateCodeType = {
  code: string;
  component: React.FC<BasePageData<any>>;
};

export const TemplateCode: TemplateCodeType[] = [
  {
    code: 'home',
    component: Home,
  },
  {
    code: 'journey',
    component: ExperienceJourney,
  },
  {
    code: 'library',
    component: Library,
  },
  {
    code: 'news',
    component: News,
  },
  {
    code: 'search',
    component: Search,
  },
  {
    code: 'contact',
    component: Contact,
  },
  {
    code: 'page404',
    component: NotFound,
  },
];
