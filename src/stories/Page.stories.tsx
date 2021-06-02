import { Story, Meta } from '@storybook/react';
import React from 'react';

import * as HeaderStories from './Header.stories';
import { Page, PageProps } from './Page';

export default {
  title: 'Example/Page',
  component: Page,
} as Meta;

const Template: Story<PageProps> = ({
  user,
  onCreateAccount, onLogin, onLogout,
}) => (
  <Page {...{
    user, onCreateAccount, onLogin, onLogout,
  }}
  />
);

export const LoggedIn = Template.bind({});
LoggedIn.args = {
  ...HeaderStories.LoggedIn.args,
};

export const LoggedOut = Template.bind({});
LoggedOut.args = {
  ...HeaderStories.LoggedOut.args,
};
