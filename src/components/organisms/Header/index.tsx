import React, {
  useCallback, useMemo, useRef, useState,
} from 'react';
import { Link, NavLink, useHistory } from 'react-router-dom';

import Container from '../Container';

import LogoNovaWorldBlue from 'assets/images/logo/nova-world-blue.svg';
import LogoNovaWorldWhite from 'assets/images/logo/nova-world-white.png';
import Icon from 'components/atoms/Icon';
import Image from 'components/atoms/Image';
import useClickOutside from 'hooks/useClickOutside';
import useWindowScroll from 'hooks/useWindowScroll';
import mapModifiers from 'utils/functions';

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

const menuList = [
  {
    pathname: '/',
    text: 'Trang chủ',
  },
  {
    pathname: '/cac-phan-ki',
    text: 'Các phân kì',
  },
  {
    pathname: '/san-pham-noi-bat',
    text: 'Sản phẩm nổi bật',
  },
  {
    pathname: '/hanh-trinh-trai-nghiem',
    text: 'Hành trình trải nghiệm',
  },
  {
    pathname: '/thu-vien',
    text: 'Thư viện',
  },
  {
    pathname: '/tin-tuc',
    text: 'Tin tức',
  },
  {
    pathname: '/lien-he',
    text: 'Liên hệ',
  },
];

const language = [
  {
    label: 'VN',
    value: 'vi',
  },
  {
    label: 'EN',
    value: 'en',
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
}

const Option: React.FC<OptionProps> = ({ toggleMenu }) => {
  const [isOpenSearch, setIsOpenSearch] = useState(false);
  const refInputSearch = useRef<HTMLInputElement|null>(null);
  const refSuggest = useRef<HTMLUListElement|null>(null);
  const [inputIsFocus, setInputIsFocus] = useState(false);

  const history = useHistory();

  const handleClickIconSearch = useCallback(
    () => {
      history.push({
        pathname: '/tim-kiem',
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
        <Language />
      </li>
    </ul>
  );
};

const Language: React.FC = () => {
  const ref = useRef(null);
  const [option, setOption] = useState(language[0]);
  const [show, setShow] = useState(false);

  useClickOutside(ref, (): void => setShow(false));

  const handleClick = useCallback(() => {
    setShow(!show);
  }, [show]);

  const handleClickOption = useCallback((l) => {
    setOption(l);
    setShow(false);
  }, []);

  return (
    <div ref={ref} className="o-header-language">
      <button
        type="button"
        className="o-header-language-label"
        onClick={handleClick}
      >
        {option.label}
        <div className={`o-header-language-dropdown ${show ? 'active' : ''}`} />
      </button>
      <ul className={`o-header-language-list ${show ? 'show' : ''}`}>
        {language.map((l, i) => (
          <li className="o-header-language-item" key={`_language${String(i)}`}>
            <button
              type="button"
              className={`o-header-language-button ${
                l.value === option.value ? 'active' : ''
              }`}
              onClick={() => handleClickOption(l)}
            >
              {l.label}
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

const Header: React.FC = () => {
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

  const nav = useMemo(() => (
    <ul className="o-header-nav">
      {menuList.map((menu, index) => (
        <li className="o-header-nav-item" key={`_nav${String(index)}`}>
          <NavLink
            exact
            className="o-header-link"
            to={menu.pathname}
            onClick={() => {
              if (isOpenMenu) {
                setIsOpenMenu(false);
              }
            }}
          >
            {menu.text}
          </NavLink>
        </li>
      ))}
    </ul>
  ), [isOpenMenu]);

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
                pathname: '/',
                search: window.location.search,
              }}
              aria-label="label"
            >
              <Image
                ratio="logo-novaworld"
                // imgSrc={isHome ? LogoNovaWorldWhite : LogoNovaWorldBlue}
                imgSrc={LogoNovaWorldWhite}
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
                    imgSrc={LogoNovaWorldBlue}
                    alt="logo_novaworld"
                    size="contain"
                  />
                </Link>
              </div>
              {IconCloseMenu}
            </div>
            {nav}
            <div className="o-header-divider" />
            <Option toggleMenu={() => setIsOpenMenu(false)} />
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Header;
