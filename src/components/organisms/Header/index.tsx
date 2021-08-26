import React, {
  useCallback, useMemo, useRef, useState,
} from 'react';
import { Link, NavLink } from 'react-router-dom';

import Container from '../Container';

import LogoNovaWorldBlue from 'assets/images/logo-novaworld-blue.png';
import LogoNovaWorldWhite from 'assets/images/logo-novaworld-white.png';
import Icon from 'components/atoms/Icon';
import Image from 'components/atoms/Image';
import useClickOutside from 'hooks/useClickOutside';
import useWindowScroll from 'hooks/useWindowScroll';
import mapModifiers from 'utils/functions';

interface HeaderProps {
  isHome?: boolean;
}

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
    <div className="o-header-language">
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

const Header: React.FC<HeaderProps> = ({ isHome }) => {
  const [isScroll, setIsScroll] = useState(false);
  const [isOpenMenu, setIsOpenMenu] = useState(false);

  const iconMenu = useMemo(() => (
    <button
      type="button"
      className="o-header-hamburger"
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
          <NavLink className="o-header-link" to={menu.pathname} exact>
            {menu.text}
          </NavLink>
        </li>
      ))}
    </ul>
  ), []);

  const option = useMemo(() => (
    <ul className="o-header-option">
      <li className="o-header-option-item">
        <div className="o-header-search">
          <input
            type="text"
            className="o-header-search-input"
            placeholder="Tìm kiếm"
          />
          <button type="button" className="o-header-search-button">
            <Icon iconName="search" />
          </button>
        </div>
      </li>
      <li className="o-header-option-item">
        <Language />
      </li>
    </ul>
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
        isHome && 'transparent',
        isOpenMenu && 'open',
      )}
    >
      <Container paddingHalf>
        <div className="o-header-wrap">
          {iconMenu}
          <div className="o-header-logo">
            <Link to="/">
              <Image
                ratio="logo-novaworld"
                imgSrc={isHome ? LogoNovaWorldWhite : LogoNovaWorldBlue}
                alt="logo_novaworld"
              />
            </Link>
          </div>
          <div className="o-header-menu">
            <div className="o-header-sm">
              <div className="o-header-sm-logo">
                <Link to="/">
                  <Image
                    ratio="logo-novaworld"
                    imgSrc={LogoNovaWorldBlue}
                    alt="logo_novaworld"
                  />
                </Link>
              </div>
              {IconCloseMenu}
            </div>
            {nav}
            <div className="o-header-divider" />
            {option}
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Header;
