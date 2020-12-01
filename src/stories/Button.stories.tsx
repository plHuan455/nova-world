import { Story, Meta } from '@storybook/react';
import React from 'react';
// also exported from '@storybook/react' if you can deal with breaking changes in 6.1

import { Button, ButtonProps } from 'stories/Button';

export default {
  title: 'Example/Button',
  component: Button,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as Meta;

const Template: Story<ButtonProps> = ({
  label, backgroundColor, onClick, primary, size,
}) => (
  <Button {...{
    label, backgroundColor, onClick, primary, size,
  }}
  />
);

export const Primary = Template.bind({});
Primary.args = {
  primary: true,
  label: 'Button',
};

export const Secondary = Template.bind({});
Secondary.args = {
  label: 'Button',
};

export const Large = Template.bind({});
Large.args = {
  size: 'large',
  label: 'Button',
};

export const Small = Template.bind({});
Small.args = {
  size: 'small',
  label: 'Button',
};
