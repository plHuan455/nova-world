import React, { useMemo } from 'react';
import { useHistory } from 'react-router-dom';

import Button from 'components/atoms/Button';
import Heading from 'components/atoms/Heading';
import Image from 'components/atoms/Image';
import Text from 'components/atoms/Text';
import Animate from 'components/organisms/Animate';
import HelmetComponent from 'container/MainLayout/helmet';
import useMainLayout from 'hooks/useMainLayout';
import i18n from 'i18n';
import { getBlockData } from 'utils/functions';
import { getHomeLangURL } from 'utils/language';

const NotFound: React.FC<BasePageData<NotFoundPage>> = ({
  banners,
  blocks,
  seoData,
}) => {
  const { banner } = useMainLayout({ isHome: false, banners });
  const history = useHistory();

  const data = useMemo(() => getBlockData<NotFoundBlock>('section1', blocks), [blocks]);

  return (
    <>
      <HelmetComponent seoData={seoData} />
      <section className="s-banner">
        <div className="thumbnail">
          <Image ratio="1366x568" imgSrc={banner} alt="banner_notfound" />
        </div>
        <div className="wrap">
          <Animate type="beatSmall">
            <div className="subtitle">
              <Text modifiers={['20x24', '500', 'white']}>{data?.title}</Text>
            </div>
            <div className="title">
              <Heading type="h1" modifiers={['700', 'white']}>{data?.subTitle}</Heading>
            </div>
            <div className="description">
              <Text modifiers={['white', '400', '20x24']} innerHTML={data?.description} />
            </div>
            <div className="button">
              <Button
                type="button"
                modifiers="android-green"
                handleClick={() => history.push({
                  pathname: getHomeLangURL(i18n.language),
                  search: window.location.search,
                })}
              >
                {data?.btnLabel}
              </Button>
            </div>
          </Animate>
        </div>
      </section>
    </>
  );
};

export default NotFound;
