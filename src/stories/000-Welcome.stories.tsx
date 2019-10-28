import React from 'react';
import { filename } from 'paths.macro';

import { linkTo } from '@storybook/addon-links';
import { Welcome } from '@storybook/react/demo';

export default {
  // title: `Stories|${filename.replace(/(?:\d+-)(.+)\.stories/, '$1')}`,
  title: 'Stories|Welcome',
};

export const toStorybook = () => <Welcome showApp={linkTo('Button')} />;

toStorybook.story = {
  name: 'to Storybook',
};
