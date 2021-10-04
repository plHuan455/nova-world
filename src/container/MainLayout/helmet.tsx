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
  const desSeo = useMemo(() => seoData?.description || system?.seo?.description || '', [system, seoData]);
  const titleSeo = useMemo(() => seoData?.title || system?.seo?.title || 'NovaWorld Ho Tram', [system, seoData]);

  return (
    <Helmet>
      <title>{seoData?.title}</title>
      <meta name="description" content={desSeo} />
      <meta property="og:url" content={window.location.href} />
      <meta property="og:title" content={titleSeo} />
      <meta property="og:description" content={desSeo} />
      { imgSeo && <meta property="og:image" content={imgSeo} />}
      <meta name="twitter:title" content={titleSeo} />
      <meta name="twitter:description" content={desSeo} />
      { imgSeo && <meta name="twitter:image" content={imgSeo} />}
    </Helmet>
  );
};

export default HelmetComponent;
