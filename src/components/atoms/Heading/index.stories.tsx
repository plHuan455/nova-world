import { Story, Meta } from '@storybook/react';
import React from 'react';

import Heading from '.';

export default {
  title: 'Components/atoms/Heading',
  component: Heading,
  argTypes: {
    type: {
      control: {
        type: 'select',
        options: ['h1', 'h2', 'h6'],
      },
      defaultValue: 'h2',
    },
    fontWeight: {
      control: {
        type: 'select',
        options: [
          '100',
          '200',
          '300',
          '400',
          '500',
          '600',
          '700',
          '800',
          '900',
        ],
      },
      defaultValue: '500',
    },
    color: {
      control: {
        type: 'select',
        options: [
          'white',
          'black',
          'cyanCobaltBlue',
        ],
      },
      defaultValue: 'cyanCobaltBlue',
    },
    text: {
      control: {
        type: 'text',
      },
      defaultValue: 'Testing Heading',
    },
    style: {
      control: {
        type: 'select',
        options: [
          'uppercase',
          'capitalize',
          'underline',
          'italic',
          'center',
        ],
      },
      defaultValue: 'uppercase',
    },
    size: {
      control: {
        type: 'select',
        options: [
          'xs',
          undefined,
        ],
      },
      defaultValue: undefined,
    },
  },
} as Meta;

export const normal: Story = ({
  type,
  color,
  fontWeight,
  style,
  text,
  font,
  letterSpacing,
  size,
}) => (
  <Heading type={type} modifiers={[color, fontWeight, style, font, letterSpacing, size]}>
    {text}
  </Heading>
);
