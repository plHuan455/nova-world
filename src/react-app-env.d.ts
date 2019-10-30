/// <reference types="react-scripts" />

declare module "paths.macro" {
  const base: string;
  export default base;

  export const filename: string;
}

declare module "@storybook/react/demo" {
  interface WelcomeProps {
    showApp(...args: any[]): any;
  }

  interface ButtonProps {
    children: React.ReactChild;
    onClick(...args: any[]): any;
  }

  export const Welcome: React.ComponentType<WelcomeProps>;
  export const Button: React.ComponentType<ButtonProps>;
}
