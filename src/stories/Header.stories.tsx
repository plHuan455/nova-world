import { Story, Meta } from '@storybook/react';
import React from 'react';
// also exported from '@storybook/react' if you can deal with breaking changes in 6.1

import { Header, HeaderProps } from 'stories/Header';

export default {
  title: 'Example/Header',
  component: Header,
} as Meta;

const Template: Story<HeaderProps> = ({
  user, onCreateAccount, onLogin, onLogout,
}) => (
  <Header {...{
    user, onCreateAccount, onLogin, onLogout,
  }}
  />
);

export const LoggedIn = Template.bind({});
LoggedIn.args = {
  user: {},
};

export const LoggedOut = Template.bind({});
LoggedOut.args = {};