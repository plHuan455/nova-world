import React, { useCallback, useMemo, useState } from 'react';

import Product, { ProductCardProps } from './product';
import Related from './related';

import Banner from 'components/organisms/Banner';
import HelmetComponent from 'container/MainLayout/helmet';
import useCallService from 'hooks/useCallService';
import useDidMount from 'hooks/useDidMount';
import useMainLayout from 'hooks/useMainLayout';
import getProductService from 'services/product';
import { ProductData } from 'services/product/type';
import { getBlockData, getImageURL } from 'utils/functions';

const PAGE = {
  PAGE_INITIAL: 1,
  LIMIT: 4,
};

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
  const [loading, setLoading] = useState(false);

  const dataRelated = useCallService(() => getProductService({ is_featured: '0' }));
  const listCardRelated = useMemo(() => dataRelated.data?.data.map((item) => ({
    imgSrc: getImageURL(item.thumbnail),
    title: item.title,
    description: item.subTitle,
    href: item.link,
    target: item.linkTarget,
  })), [dataRelated]);

  const fetchProductCard = useCallback(async (page) => {
    try {
      setLoading(true);
      const res = await getProductService({
        page,
        limit: PAGE.LIMIT,
        is_featured: '1',
      });
      setMetaProduct(res.meta);
      setDataProduct([...dataProduct, ...formatData(res.data)]);
      setLoading(false);
    } catch (error) {
      setLoading(false);
    }
  }, [dataProduct]);

  useDidMount(async () => {
    fetchProductCard(PAGE.PAGE_INITIAL);
  });

  const handleLoadMore = useCallback(async () => {
    if (metaProduct && metaProduct.page < metaProduct.totalPages) {
      fetchProductCard(metaProduct.page + 1);
    }
  }, [metaProduct, fetchProductCard]);

  return (
    <>
      <HelmetComponent seoData={seoData} />
      <section className="s-banner">
        <Banner thumbnail={banner} />
      </section>
      <section className="s-content">
        <Product
          loading={loading}
          handleLoadMore={handleLoadMore}
          data={dataProduct}
          title={block1.title}
        />
        <Related data={listCardRelated || []} title={block2.title} />
      </section>
    </>
  );
};

export default Screen;
