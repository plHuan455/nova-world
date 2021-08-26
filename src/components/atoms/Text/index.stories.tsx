import { Story, Meta } from '@storybook/react';
import React from 'react';

import Text from '.';

export default {
  title: 'Components/atoms/Text',
  component: Text,
  argTypes: {
    sizes: {
      control: {
        type: 'select',
        options: ['48x56', '32x48', '20x32', '20x24', '16x19', '14x21'],
      },
    },
    text: {
      control: {
        type: 'text',
      },
      defaultValue: 'Dummy text',
    },
    colors: {
      control: {
        type: 'select',
        options: [
          'white',
          'black',
          'cyanCobaltBlue',
          'dimGray',
        ],
      },
      defaultValue: 'dimGray',
    },
    letterSpacing: {
      control: {
        type: 'select',
        options: ['s001', 's005', 's00015', undefined],
      },
      defaultValue: undefined,
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
          '650',
          '700',
          '800',
          '900',
        ],
      },
      defaultValue: '400',
    },
    variants: {
      control: {
        type: 'check',
        options: [
          'uppercase',
          'capitalize',
          'underline',
          'italic',
          'center',
          'justify',
          'left',
          'right',
        ],
      },
    },
    type: {
      control: {
        type: 'radio',
        options: ['p', 'span', 'div'],
      },
      defaultValue: 'p',
    },
    customSize: {
      control: {
        type: 'select',
        options: ['xs', 'md', undefined],
      },
      defaultValue: undefined,
    },
  },
} as Meta;

export const normal: Story = ({
  sizes,
  colors,
  variants,
  text,
  fontWeight,
  type,
  font,
  letterSpacing,
  customSize,
}) => (
  <Text
    type={type}
    modifiers={[colors, variants, sizes, fontWeight, font, letterSpacing, customSize]}
  >
    {text}
  </Text>
);
