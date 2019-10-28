---
to: src/components/<%= level %>/<%= name %>/index.stories.tsx
---
import React from "react";
import base from 'paths.macro';

import <%= name %> from ".";

export default {
  // title: `Components|${base.replace('/src/components/', '')}`,
  title: "Components|<%= level %>/<%= name %>",
  component: <%= name %>,
};

export const normal = () => (
  <<%= name %> />
);
