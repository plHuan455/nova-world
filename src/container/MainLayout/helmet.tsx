import React from 'react';
import { Helmet } from 'react-helmet';

interface Props {
  seoData?: SEOData;
  imgSrc?: string;
}

const HelmetComponent: React.FC<Props> = ({ seoData, imgSrc }) => (
  <Helmet>
    <title>{seoData?.title || 'NovaWorld Ho Tram'}</title>
    <meta name="description" content={seoData?.description || ''} />
    <meta property="og:url" content={window.location.href} />
    <meta property="og:title" content={seoData?.title || ''} />
    <meta property="og:description" content={seoData?.description || ''} />
    { imgSrc && <meta property="og:image" content={imgSrc} />}
    <meta name="twitter:title" content={seoData?.title || ''} />
    <meta name="twitter:description" content={seoData?.description || ''} />
    { imgSrc && <meta name="twitter:image" content={imgSrc} />}
  </Helmet>
);

export default HelmetComponent;
