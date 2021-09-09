import { Story, Meta } from '@storybook/react';
import React from 'react';

import Map from '.';

export default {
  title: 'Components/organisms/Map',
  component: Map,
  argTypes: {
    keyMap: {
      control: {
        type: 'text',
      },
      defaultValue: 'AIzaSyAt4eV8aoSdhKXHQSQvJc7aSEGlcnUVbdo',
    },
    latitude: {
      control: {
        type: 'text',
      },
      defaultValue: 10.778352104415093,
    },
    longtitude: {
      control: {
        type: 'text',
      },
      defaultValue: 106.69949898056191,
    },
  },
} as Meta;
export const normal: Story = ({ latitude, longtitude, keyMap }) => (
  <div style={{
    width: '900px',
    height: '600px',
    padding: '40px',
  }}
  >
    <Map
      mapAPIkey={keyMap}
      mapMarker={[{ lat: latitude, lng: longtitude }]}
    />
  </div>
);
