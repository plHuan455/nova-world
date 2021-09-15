/* eslint-disable no-undef */
import React from 'react';
import { NavLink } from 'react-router-dom';

import mapModifiers from 'utils/functions';

interface LinkProps {
  href: string;
  useExternal?: boolean;
  target?: string;
  activeClassName?: 'active';
  modifiers?: string;
  handleClick?: ()=>void;
}

const Link: React.FC<LinkProps> = ({
  href,
  useExternal,
  target,
  children,
  activeClassName,
  handleClick,
  modifiers,
}) => {
  if (useExternal) {
    return (
      <a
        target={target}
        className="a-link"
        href={href}
      >
        {children}
      </a>
    );
  }
  return (
    <NavLink
      activeClassName={activeClassName}
      exact
      to={{
        pathname: href,
        search: window.location.search,
      }}
      className={mapModifiers('a-link', modifiers)}
      onClick={handleClick}
    >
      {children}
    </NavLink>
  );
};

export default Link;
