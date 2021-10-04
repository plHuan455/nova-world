import React from 'react';
import { Link as RouterLink } from 'react-router-dom';

interface LinkProps {
  target?: string;
  href: string;
  extendsClass?: string;
  search?: string;
  state?: unknown;
}

const Link: React.FC<LinkProps> = ({
  children,
  target,
  href,
  extendsClass,
  search,
  state,
}) => {
  if (href.includes('http')) {
    return (
      <a target={target} href={href} className={extendsClass}>
        {children}
      </a>
    );
  }
  return (
    <RouterLink
      to={{
        pathname: href,
        search: search || window.location.search,
        state,
      }}
      target={target}
      className={extendsClass}
      aria-label="label"
    >
      {children}
    </RouterLink>
  );
};

export default Link;
