---
to: src/components/<%= level %>/<%= name %>/index.stories.tsx
---
import React from "react";
import base from 'paths.macro';
import { Story, Meta } from '@storybook/react';

import <%= name %> from ".";

export default {
  title: `Components/${base.replace('/src/components/', '').replace(/\/$/, '')}`,
  component: <%= name %>,
} as Meta;

export const normal: Story = () => (
  <<%= name %> />
);
