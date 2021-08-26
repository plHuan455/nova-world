/* eslint-disable no-unused-vars */
/* eslint-disable @typescript-eslint/no-unused-vars */
import React, {
  useCallback, useMemo, useRef, useState,
} from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';

import Container from '../Container';

import LogoNovaWorld from 'assets/images/logo-novaworld-white.png';
import Icon from 'components/atoms/Icon';
import Image from 'components/atoms/Image';
import useClickOutside from 'hooks/useClickOutside';
import useWindowScroll from 'hooks/useWindowScroll';
import mapModifiers from 'utils/functions';

interface HeaderProps {}

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

  return (
    <div className="o-header-language">
      <div className="o-header-language-label" onClick={handleClick}>
        {option.label}
        <div className={`o-header-language-dropdown ${show ? 'active' : ''}`} />
      </div>
      <ul className={`o-header-language-list ${show ? 'show' : ''}`}>
        {language.map((l, i) => (
          <li className="o-header-language-item" key={`_language${String(i)}`}>
            <button type="button" className={`o-header-language-button ${l.value === option.value ? 'active' : ''}`}>
              {l.label}
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

const Header: React.FC<HeaderProps> = () => {
  const location = useLocation();
  const [isScroll, setIsScroll] = useState(false);

  const isHomePage = useMemo(() => location.pathname.length === 1, [location.pathname]);

  useWindowScroll(() => {
    if (window.pageYOffset > 70) {
      setIsScroll(true);
      return;
    }
    setIsScroll(false);
  });

  return (
    <div className={mapModifiers('o-header', isScroll && 'scroll', isHomePage && 'transparent')}>
      <Container paddingHalf>
        <div className="o-header-wrap">
          <div className="o-header-logo">
            <Link to="/">
              <Image
                ratio="logo-novaworld"
                imgSrc={LogoNovaWorld}
                alt="logo_novaworld"
              />
            </Link>
          </div>
          <div className="o-header-menu">
            <ul className="o-header-nav">
              {menuList.map((menu, index) => (
                <li className="o-header-nav-item" key={`_nav${String(index)}`}>
                  <NavLink className="o-header-link" to={menu.pathname} exact>
                    {menu.text}
                  </NavLink>
                </li>
              ))}
            </ul>
            <div className="o-header-divider" />
            <ul className="o-header-option">
              <li className="o-header-option-item">
                <button type="button" className="o-header-search">
                  <Icon iconName="search" />
                </button>
              </li>
              <li className="o-header-option-item">
                <Language />
              </li>
            </ul>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Header;
