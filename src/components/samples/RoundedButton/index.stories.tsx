import React from "react";
import base from 'paths.macro';

import { action } from "@storybook/addon-actions";

import RoundedButton from ".";

export default {
  // title: `Components|${base.replace('/src/components/', '')}`,
  title: "Components|samples/RoundedButton",
  component: RoundedButton,
};

export const withText = () => (
  <RoundedButton color="hotpink" onClick={action("clicked")}>Hello Button</RoundedButton>
);

export const withSomeEmoji = () => (
  <RoundedButton color="papayawhip" onClick={action("clicked")}>
    <span role="img" aria-label="so cool">
      😀 😎 👍 💯
    </span>
  </RoundedButton>
);
