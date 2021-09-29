import React, {
  useCallback, useMemo, useRef, useState,
} from 'react';
import { Link, NavLink, useHistory } from 'react-router-dom';

import Container from '../Container';

import Icon from 'components/atoms/Icon';
import Image from 'components/atoms/Image';
import { LIST_LANGUAGE } from 'constants/language';
import useClickOutside from 'hooks/useClickOutside';
import useWindowScroll from 'hooks/useWindowScroll';
import i18n from 'i18n';
import { MenuItem } from 'services/menus/types';
import mapModifiers from 'utils/functions';
import { getHomeLangURL, getSlugItemMenuHeader } from 'utils/language';

const suggestList = [
  {
    title: 'Dịch vụ đẳng cấp quốc tế',
    link: '/',
  },
  {
    title: 'Nghỉ dưỡng cao cấp',
    link: '/',
  },
  {
    title: 'Vui chơi giải trí',
    link: '/',
  },
];

interface InputSearchProps extends React.InputHTMLAttributes<HTMLInputElement> {
  handleClickSearch?: () => void;
}

export const InputSearch = React.forwardRef<HTMLInputElement, InputSearchProps>(({
  handleClickSearch,
  ...props
}, ref) => (
  <div className="a-input-search">
    <input
      ref={ref}
      type="text"
      className="a-input-search_input"
      {...props}
    />
    <button onClick={handleClickSearch} type="button" className="a-input-search_button" aria-label="submit-search">
      <Icon iconName="search" />
    </button>
  </div>
));

interface OptionProps {
  toggleMenu?: () => void;
  handleChangeLanguage?: (lang:keyof LocalesResponse) => void;
  slugSearch?: string;
}

const Option: React.FC<OptionProps> = ({ toggleMenu, handleChangeLanguage, slugSearch }) => {
  const [isOpenSearch, setIsOpenSearch] = useState(false);
  const refInputSearch = useRef<HTMLInputElement|null>(null);
  const refSuggest = useRef<HTMLUListElement|null>(null);
  const [inputIsFocus, setInputIsFocus] = useState(false);

  const history = useHistory();

  const handleClickIconSearch = useCallback(
    () => {
      history.push({
        pathname: slugSearch,
        state: {
          keyword: refInputSearch.current?.value || '',
        },
        search: window.location.search,
      });
      if (toggleMenu) {
        toggleMenu();
      }
    },
    [history, refInputSearch, toggleMenu],
  );

  const handleFocusInputMobile = useCallback(
    (isFocus:boolean) => {
      setInputIsFocus(isFocus);
    },
    [],
  );

  const handleKeyDown = useCallback((event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === 'Enter') {
      handleClickIconSearch();
    }
  }, [handleClickIconSearch]);

  useClickOutside(refSuggest, () => setIsOpenSearch(false));

  return (
    <ul ref={refSuggest} className="o-header-option">
      <li
        className="o-header-option-item first"
      >
        <button
          onClick={() => {
            if (!isOpenSearch) {
              refInputSearch.current?.focus();
            }
            setIsOpenSearch(!isOpenSearch);
          }}
          type="button"
          className="o-header-option-button"
          aria-label="dropdown-search"
        >
          <Icon iconName="search" />
        </button>
        <div
          className={mapModifiers('o-header-suggest', isOpenSearch && 'expand')}
        >
          <div className="o-header-suggest-content">
            <div className="o-header-suggest-search">
              <InputSearch
                onBlur={() => handleFocusInputMobile(false)}
                onFocus={() => handleFocusInputMobile(true)}
                ref={refInputSearch}
                handleClickSearch={handleClickIconSearch}
                placeholder="Tìm kiếm"
                onKeyDown={handleKeyDown}
              />
            </div>
            <div className="o-header-suggest-driver" />
            <ul className={mapModifiers('o-header-suggest-list', inputIsFocus && 'expand')}>
              {suggestList.map((item, index) => (
                <li className="o-header-suggest-item" key={`_suggest-item${String(index)}`}>
                  <Link
                    className="o-header-suggest-link"
                    to={{
                      pathname: item.link,
                      search: window.location.search,
                    }}
                  >
                    {item.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </li>
      <li className="o-header-option-item">
        <Language handleChangeLanguage={handleChangeLanguage} />
      </li>
    </ul>
  );
};

interface LanguageProps {
  handleChangeLanguage?: (lang:keyof LocalesResponse) => void;
}

const Language: React.FC<LanguageProps> = ({
  handleChangeLanguage,
}) => {
  const ref = useRef(null);
  const [show, setShow] = useState(false);
  useClickOutside(ref, (): void => setShow(false));

  const handleClick = useCallback(() => {
    setShow(!show);
  }, [show]);

  const handleChange = useCallback((l) => {
    setShow(false);
    if (handleChangeLanguage) {
      handleChangeLanguage(l);
    }
  }, [handleChangeLanguage]);

  return (
    <div ref={ref} className="o-header-language">
      <button
        type="button"
        className="o-header-language-label"
        onClick={handleClick}
      >
        {LIST_LANGUAGE.find((item) => item.value === i18n.language)?.label}
        <div className={`o-header-language-dropdown ${show ? 'active' : ''}`} />
      </button>
      <ul className={`o-header-language-list ${show ? 'show' : ''}`}>
        {LIST_LANGUAGE.map((l, i) => (
          <li className="o-header-language-item" key={`_language${String(i)}`}>
            <button
              type="button"
              className={`o-header-language-button ${
                l.value === i18n.language ? 'active' : ''
              }`}
              onClick={() => handleChange(l.value)}
            >
              {l.label}
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

interface NavProps {
  menuList: MenuItem[];
  toggleMenu?: () => void;
}

const Nav: React.FC<NavProps> = ({ menuList, toggleMenu }) => {
  const ref = useRef(null);
  const [isOpenMenuChild, setIsOpenMenuChild] = useState<number>(); // Menu Id

  useClickOutside(ref, (): void => setIsOpenMenuChild(undefined));

  return (
    <ul className="o-header-nav" ref={ref}>
      {menuList.map((menu, index) => {
        const isChild = !!menu?.subMenu?.length;
        const isOpen = isOpenMenuChild === menu.id;
        return (
          <li className={`o-header-nav-item ${isChild ? 'o-header-nav-child' : ''} ${isOpen ? 'o-header-nav-show' : ''}`} key={`_nav${String(index)}`}>
            {isChild ? (
              <p className="o-header-link" onClick={() => setIsOpenMenuChild(isOpen ? undefined : menu.id)}>
                {menu.title}
              </p>
            ) : (
              <NavLink
                exact
                className="o-header-link"
                to={{
                  pathname: getSlugItemMenuHeader(menu, i18n.language),
                  search: window.location.search,
                }}
                target={menu.target}
                onClick={() => {
                  if (toggleMenu) {
                    toggleMenu();
                  }
                }}
              >
                {menu.title}
              </NavLink>
            )}
            {isChild && (
              <ul className="o-header-nav-sub">
                {menu.subMenu?.map((s, i) => (
                  <li className="o-header-nav-subitem" key={`_navsub${String(i)}`}>
                    <NavLink
                      exact
                      className="o-header-nav-sublink"
                      to={{
                        pathname: s?.link || '',
                      }}
                      target={s.target}
                      rel="noreferrer"
                    >
                      {s.title}
                    </NavLink>
                  </li>
                ))}
              </ul>
            )}
          </li>
        );
      })}
    </ul>
  );
};

interface HeaderProps {
  logoWhite: string;
  logoBlue: string;
  menuList: MenuItem[];
  slugSearch?: string;
  handleChangeLanguage?: (lang:keyof LocalesResponse) => void;
}

const Header: React.FC<HeaderProps> = ({
  logoWhite,
  logoBlue,
  menuList,
  slugSearch,
  handleChangeLanguage,
}) => {
  const [isScroll, setIsScroll] = useState(false);
  const [isOpenMenu, setIsOpenMenu] = useState(false);

  const iconMenu = useMemo(() => (
    <button
      type="button"
      className="o-header-hamburger"
      aria-label="hamburger"
      onClick={() => setIsOpenMenu(true)}
    >
      <span />
      <span />
      <span />
    </button>
  ), []);

  const IconCloseMenu = useMemo(() => (
    <button
      type="button"
      className="o-header-sm-close"
      aria-label="close"
      onClick={() => setIsOpenMenu(false)}
    >
      <span />
      <span />
    </button>
  ), []);

  useWindowScroll(() => {
    if (window.pageYOffset > 70) {
      setIsScroll(true);
      return;
    }
    setIsScroll(false);
  });

  return (
    <div
      className={mapModifiers(
        'o-header',
        isScroll && 'scroll',
        // isHome && 'transparent',
        isOpenMenu && 'open',
      )}
    >
      <Container paddingHalf>
        <div className="o-header-wrap">
          {iconMenu}
          <div className="o-header-logo">
            <Link
              to={{
                pathname: getHomeLangURL(i18n.language),
                search: window.location.search,
              }}
              aria-label="label"
            >
              <Image
                ratio="logo-novaworld"
                imgSrc={isScroll ? logoBlue : logoWhite}
                alt="logo_novaworld"
                size="contain"
              />
            </Link>
          </div>
          <div className="o-header-menu">
            <div className="o-header-sm">
              <div className="o-header-sm-logo">
                <Link
                  to={{
                    pathname: '/',
                    search: window.location.search,
                  }}
                  aria-label="label"
                >
                  <Image
                    ratio="logo-novaworld"
                    imgSrc={logoBlue}
                    alt="logo_novaworld"
                    size="contain"
                  />
                </Link>
              </div>
              {IconCloseMenu}
            </div>
            <Nav
              menuList={menuList}
              toggleMenu={() => setIsOpenMenu(false)}
            />
            <div className="o-header-divider" />
            <Option
              handleChangeLanguage={handleChangeLanguage}
              toggleMenu={() => setIsOpenMenu(false)}
              slugSearch={slugSearch}
            />
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Header;
