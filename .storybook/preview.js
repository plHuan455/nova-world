import { withHTML } from '@whitespace/storybook-addon-html/react';

if (typeof jest === "undefined") {
  // NOTES: Resolve storybook static file after built
  require('!style-loader!css-loader!sass-loader!../src/index.scss');
  require('!style-loader!css-loader!sass-loader!../src/App.scss');
}

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
}

export const decorators = [
  withHTML(),
];
