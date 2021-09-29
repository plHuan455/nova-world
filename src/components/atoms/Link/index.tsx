import React from 'react';
import { Link as RouterLink } from 'react-router-dom';

interface LinkProps {
  target?: string;
  href: string;
  extendsClass?: string;
}

const Link: React.FC<LinkProps> = ({
  children, target, href, extendsClass,
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
        search: window.location.search,
      }}
      target={target}
      className={extendsClass}
    >
      {children}
    </RouterLink>
  );
};

export default Link;
