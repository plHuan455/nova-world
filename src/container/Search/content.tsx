import React from 'react';

import Button from 'components/atoms/Button';
import Loading from 'components/atoms/Loading';
import Card, { CardProps, SiteName } from 'components/molecules/Card';
import i18n from 'i18n';
import { StaticSlug } from 'services/menus/types';
import {
  externalUrl,
  getLangURL,
  getSlugByTemplateCode,
} from 'utils/functions';

interface ContentProps {
  listCard: CardProps[];
  isLoading?: boolean;
  buttonName?: string;
  handleClick?: () => void;
}

const Content:React.FC<ContentProps> = ({
  listCard,
  isLoading,
  buttonName,
  handleClick,
}) => {
  const staticSlug: StaticSlug[] = [
    {
      templateCode: 'news',
      slug: 'tin-tuc',
    },
    {
      templateCode: 'products',
      slug: 'san-pham',
    },
    {
      templateCode: 'utility',
      slug: 'tien-ich',
    },
  ];
  const renderHref = (href: string, type?: string, siteNameText?: SiteName) => {
    const url = siteNameText ? externalUrl(siteNameText) : '';
    if (type === 'news') return `${url}${getLangURL(i18n.language)}/${getSlugByTemplateCode('news', staticSlug)}/${href}`;
    if (type === 'products') return `${url}${getLangURL(i18n.language)}/${getSlugByTemplateCode('products', staticSlug)}`;
    if (type === 'utility') return `${url}${getLangURL(i18n.language)}/${getSlugByTemplateCode('utility', staticSlug)}`;
    return `${url}${getLangURL(i18n.language)}/${href}`;
  };
  // console.log(listCard);
  return (
    <>
      <div className="list">
        {listCard.map((item, index) => (
          <div
            className="item"
            key={`_card${String(index)}`}
          >
            {/* <Card {...item} /> */}
            <Card
              key={`card-${index.toString()}`}
              imgSrc={item.imgSrc}
              title={item.title}
              description={item.description}
              href={renderHref(item.href!, item.type, item.siteName)}
            />
          </div>
        ))}
      </div>
      { isLoading && <Loading modifiers={['blue']} />}
      {!isLoading && listCard.length > 0 && buttonName && (
      <div className="button-show">
        <Button
          handleClick={handleClick}
        >
          {buttonName}
        </Button>
      </div>
      )}
    </>
  );
};

export default Content;
