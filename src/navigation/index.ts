import React from 'react';

import Contact from 'pages/Contact';
import ExperienceJourney from 'pages/ExperienceJourney';
import Home from 'pages/Home';
import Library from 'pages/Library';
import News from 'pages/News';
import Search from 'pages/Search';
import { BasePageData } from 'services/navigation/types';

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
];
