import { withHTML } from '@whitespace/storybook-addon-html/react';

import '!style-loader!css-loader!sass-loader!../src/index.scss';
import '!style-loader!css-loader!sass-loader!../src/App.scss';

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
}

export const decorators = [
  withHTML(),
];
