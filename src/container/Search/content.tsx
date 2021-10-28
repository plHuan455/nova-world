import React from 'react';
import { useTranslation } from 'react-i18next';

import Button from 'components/atoms/Button';
import Loading from 'components/atoms/Loading';
import Card, { CardProps } from 'components/molecules/Card';
import i18n from 'i18n';
import { TranslateData } from 'services/systems/types';
import { useAppSelector } from 'store/hooks';
import {
  externalUrl,
  getLangURL,
} from 'utils/functions';

interface ContentProps {
  listCard: CardProps[];
  isLoading?: boolean;
  page?: number;
  totalPage?: number;
  handleClick?: () => void;
}

type SiteName = 'novaworld' | 'novamorito' | 'novatropicana' | 'novawonderland' | 'novahabana';

const Content:React.FC<ContentProps> = ({
  listCard,
  isLoading,
  page = 0,
  totalPage = 0,
  handleClick,
}) => {
  const { baseSystem } = useAppSelector((state) => state.systems);
  const { t } = useTranslation('translation', { i18n });

  const renderHref = (href: string, type?: string, siteNameText?: SiteName) => {
    if (href) {
      const externalNewsDetailSlug = baseSystem?.routeMappings[
        siteNameText as SiteName
      ].news[i18n.language as keyof TranslateData];

      const externalUtilitySlug = (siteNameText !== 'novaworld' && baseSystem?.routeMappings[
        siteNameText as SiteName
      ].ultility[i18n.language as keyof TranslateData]) || '';

      const externalProductSlug = (baseSystem?.routeMappings.novaworld.product
        && baseSystem?.routeMappings.novaworld.product[
          i18n.language as keyof TranslateData
        ]) || '';

      const url = siteNameText ? externalUrl(siteNameText) : '';
      if (type === 'news') return `${url}${getLangURL(i18n.language)}/${externalNewsDetailSlug}/${href}`;
      if (type === 'products') return `${url}${getLangURL(i18n.language)}/${externalProductSlug}`;
      if (type === 'utility') return `${url}${getLangURL(i18n.language)}/${externalUtilitySlug}`;
    }
    return '';
  };

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
              href={renderHref(item.href!, item.type, item.siteName as SiteName)}
            />
          </div>
        ))}
      </div>
      { isLoading && <Loading modifiers={['blue']} />}
      {!isLoading && listCard.length > 0 && totalPage > 1 && (
      <div className="button-show">
        <Button
          handleClick={handleClick}
        >
          {totalPage > page ? t('button.show_more') : t('button.show_less')}
        </Button>
      </div>
      )}
    </>
  );
};

export default Content;
