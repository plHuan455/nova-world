import React, { useCallback, useMemo, useState } from 'react';

import Product, { ProductCardProps } from './product';
import Related, { RelatedCardProps } from './related';

import Banner from 'components/organisms/Banner';
import HelmetComponent from 'container/MainLayout/helmet';
import useDidMount from 'hooks/useDidMount';
import useMainLayout from 'hooks/useMainLayout';
import getProductService from 'services/product';
import { ProductData } from 'services/product/type';
import { getBlockData, getImageURL } from 'utils/functions';
import useCallService from 'hooks/useCallService';

const PAGE = {
  PAGE_INITIAL: 1,
  LIMIT: 4,
};

const Screen: React.FC<BasePageData<ProductPage>> = ({
  banners,
  blocks,
  seoData,
}) => {
  const { banner } = useMainLayout({ isHome: false, banners });
  const block1 = useMemo(() => getBlockData('section1', blocks), [blocks]) as SearchBlock;
  const block2 = useMemo(() => getBlockData('section2', blocks), [blocks]) as SearchBlock;
  const [metaProduct, setMetaProduct] = useState<MetaData>();
  const [dataProduct, setDataProduct] = useState<ProductCardProps[]>([]);
  const [dataRelatedList, setDataRelatedList] = useState<RelatedCardProps[]>([]);

  const dataRelated = useCallService(()=>getProductService({is_featured: '0',}));
  const listCardRelated=useMemo(()=>())
  const formatData = (data: ProductData[]) => data.map((item) => (
    {
      index: item.id,
      imgSrc: getImageURL(item?.thumbnail),
      title: item?.title || '',
      description: item?.subTitle || '',
      // TODO : Update btn label
      btnLabel: 'Khám phá ngay',
      btnLink: item?.link || '',
      target: item?.linkTarget || '',
    }
  ));

  useDidMount(async () => {
    const { data, meta } = await getProductService(
      {
        page: PAGE.PAGE_INITIAL,
        limit: PAGE.LIMIT,
        is_featured: '1',
      },
    );
    const dataRelated = await getProductService(
      {
        is_featured: '0',
      },
    );
    setMetaProduct(meta);
    setDataProduct(formatData(data));
    setDataRelatedList(dataRelated.data.map((item) => ({
      imgSrc: getImageURL(item.thumbnail),
      title: item.title,
      description: item.subTitle,
      href: item.link,
      target: item.linkTarget,
    })));
  });

  const handleLoadMore = useCallback(async () => {
    if (metaProduct && metaProduct.page < metaProduct.totalPages) {
      const { data, meta } = await getProductService(
        {
          limit: PAGE.LIMIT,
          page: metaProduct.page + 1,
          is_featured: '1',
        },
      );
      setMetaProduct(meta);
      setDataProduct(dataProduct.concat(formatData(data)));
    }
  }, [metaProduct, dataProduct]);

  return (
    <>
      <HelmetComponent seoData={seoData} />
      <section className="s-banner">
        <Banner thumbnail={banner} />
      </section>
      <section className="s-content">
        <Product handleLoadMore={handleLoadMore} data={dataProduct} title={block1.title} />
        <Related data={dataRelatedList} title={block2.title} />
      </section>
    </>
  );
};

export default Screen;
