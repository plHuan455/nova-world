import React from 'react';
import { Link as RouterLink, LinkProps as RouterLinkProps } from 'react-router-dom';

interface LinkProps extends Omit<RouterLinkProps, 'to'> {
  target?: string;
  href: string;
  search?: string;
  state?: unknown;
}

const Link: React.FC<LinkProps> = ({
  children,
  target,
  href,
  search,
  state,
  ...props
}) => {
  if (href && href.includes('http')) {
    return (
      <a {...props} target={target} href={href}>
        {children}
      </a>
    );
  }
  return (
    <RouterLink
      {...props}
      to={{
        pathname: href,
        search,
        state,
      }}
      target={target}
      aria-label="label"
    >
      {children}
    </RouterLink>
  );
};

export default Link;
