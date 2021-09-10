/* eslint-disable no-unused-vars */
import React from 'react';
import { useHistory } from 'react-router-dom';

import Button from 'components/atoms/Button';
import Heading from 'components/atoms/Heading';
import Image from 'components/atoms/Image';
import Text from 'components/atoms/Text';
import useMainLayout from 'hooks/useMainLayout';

const dummy = {
  btnLabel: 'Trang chủ',
  btnLink: '/',
  description: 'Đường dẫn của bạn kh&ocirc;ng đ&uacute;ng hoặc kh&ocirc;ng ch&iacute;nh x&aacute;c. Vui l&ograve;ng kiểm tra lại.&nbsp;',
  subTitle: 'NovaWorld Ho Tram',
  title: '404 Not Found',
  imgSrc: 'https://source.unsplash.com/random',
};

// export interface NotFoundProps {
//   btnLabel?: string;
//   btnLink?: string;
//   description?: string;
//   subTitle?: string;
//   title?: string;
//   imgSrc?: string;
// }

const NotFound: React.FC = () => {
  useMainLayout('another');
  const history = useHistory();
  return (
    <>
      <section className="s-banner">
        <div className="thumbnail">
          <Image ratio="1366x568" imgSrc={dummy.imgSrc} alt={dummy.title} />
        </div>
        <div className="wrap">
          <div className="subtitle">
            <Text modifiers={['20x24', '500', 'white']}>{dummy.subTitle}</Text>
          </div>
          <div className="title">
            <Heading type="h1" modifiers={['700', 'white']}>{dummy.title}</Heading>
          </div>
          <div className="description">
            <Text modifiers={['white', '400', '20x24']} innerHTML={dummy.description} />
          </div>
          <div className="button">
            <Button
              type="button"
              modifiers="android-green"
              handleClick={() => history.push({
                pathname: dummy.btnLink,
                search: window.location.search,
              })}
            >
              {dummy.btnLabel}
            </Button>
          </div>
        </div>
      </section>
    </>
  );
};

export default NotFound;
