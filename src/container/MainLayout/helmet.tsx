import React, { useMemo } from 'react';
import { Helmet } from 'react-helmet-async';

import { useAppSelector } from 'store/hooks';
import { getImageURL } from 'utils/functions';

interface Props {
  seoData?: SEOData;
}

const HelmetComponent: React.FC<Props> = ({ seoData }) => {
  const system = useAppSelector((state) => state.systems?.data);
  const imgSeo = useMemo(
    () => getImageURL(seoData?.imgSrc || system?.openGraphImage),
    [system, seoData],
  );
  const desSeo = useMemo(() => seoData?.description || system?.seo?.description, [system, seoData]);
  const titleSeo = useMemo(() => seoData?.title || system?.seo?.title || 'NovaWorld Ho Tram', [system, seoData]);
  const keywordsSeo = useMemo(() => seoData?.keywords || system?.seo?.keywords, [system, seoData]);

  return (
    <Helmet>
      <title>{titleSeo}</title>
      <meta name="description" content={desSeo} />
      <meta property="og:url" content={window.location.href} />
      <meta property="og:title" content={titleSeo} />
      <meta property="og:description" content={desSeo} />
      <meta property="og:image" content={imgSeo} />
      <meta name="twitter:title" content={titleSeo} />
      <meta name="twitter:description" content={desSeo} />
      <meta name="twitter:image" content={imgSeo} />
      <meta property="og:keywords" content={keywordsSeo} />
      <meta property="og:image:width" content="400" />
      <meta property="og:image:height" content="300" />
    </Helmet>
  );
};

export default HelmetComponent;
