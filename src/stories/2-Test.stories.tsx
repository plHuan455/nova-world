import React from "react";

import { action } from "@storybook/addon-actions";
import RoundedButton from "../components/RoundedButton";

export default {
  title: 'RoundedButton',
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
