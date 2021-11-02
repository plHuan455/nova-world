import React, {
  useState,
  ChangeEvent,
  KeyboardEvent,
  useEffect,
} from 'react';
import { useTranslation } from 'react-i18next';
import { useHistory, useLocation } from 'react-router-dom';

import Content from './content';
import { TabsFirst, TabsSecond } from './tabs-search';

import featureHotel from 'assets/images/feature-hotel.jpg';
import Divider from 'components/atoms/Divider';
import Heading from 'components/atoms/Heading';
import Text from 'components/atoms/Text';
import { CardProps } from 'components/molecules/Card';
import Animate from 'components/organisms/Animate';
import Container from 'components/organisms/Container';
import { InputSearch } from 'components/organisms/Header';
import i18n from 'i18n';
import { getSearchService } from 'services/search';
import { SearchItem } from 'services/search/type';
import {
  getImageURL,
  getBlockData,
} from 'utils/functions';

const LIMIT_ITEMS = 12;

interface LocationState {
  keyword: string;
}

const Search: React.FC<BasePageData<SearchBlock>> = ({
  blocks,
}) => {
  const { t } = useTranslation('translation', { i18n });

  const siteName = [
    {
      value: 'novaworld',
      label: `${t('search.nova_hotram')}`,
    },
    {
      value: 'novahabana',
      label: `${t('search.habana_island')}`,
    },
    {
      value: 'novamorito',
      label: `${t('search.morito')}`,
    },
    {
      value: 'novatropicana',
      label: `${t('search.the_tropicana')}`,
    },
    {
      value: 'novawonderland',
      label: `${t('search.wonderland')}`,
    },
  ];

  const moduleName = [
    {
      id: 1,
      slug: 'page',
      title: `${t('search.page')}`,
    },
    {
      id: 2,
      slug: 'news',
      title: `${t('search.news')}`,
    },
    {
      id: 3,
      slug: 'utility',
      title: `${t('search.utilities')}`,
    },
    {
      id: 4,
      slug: 'products',
      title: `${t('search.products')}`,
    },
  ];

  const searchTitle = getBlockData('section1', blocks) as SearchBlock;

  const currentLang = i18n.language || ' vi';
  const location = useLocation<LocationState>();
  const history = useHistory();
  const searchTextParams = location.state?.keyword;
  const [value, setValue] = useState<string>(searchTextParams);
  const [searchText, setSearchText] = useState<string>(searchTextParams);
  const [currentSiteName, setCurrentSiteName] = useState<string>(siteName[0].value);
  const [currentModule, setCurrentModule] = useState<string>(moduleName[0].slug);
  const [searchResult, setSearchResult] = useState<CardProps[]>([]);
  const [total, setTotal] = useState(0);
  const [page, setPage] = useState<number>(1);
  const [totalPage, setTotalPage] = useState<number>(1);
  const [loading, setLoading] = useState(false);
  const [currentModuleIdx, setCurrentModuleIdx] = useState<number>(0);
  const [argMutable, setArgMutable] = useState('');

  const novaWorldModuleName = moduleName.filter((item) => item.slug !== 'utility');
  const moduleList = currentSiteName === 'novaworld' ? novaWorldModuleName : moduleName;

  const convertNewsList = (list: SearchItem[]) => {
    if (list.length > 0) {
      return list.map((item) => ({
        title: item.title,
        siteName: item.siteName,
        type: item.moduleName,
        imgSrc: getImageURL(item?.thumbnail) || featureHotel,
        description: item.description,
        href: item.slug,
      }));
    }
    return [];
  };

  const fetchSearchResult = async (params?: {
    searchParams?: string,
    site?: string,
    module?: string;
    pageNumber?: number;
  }) => {
    try {
      setLoading(true);
      const { data, meta } = await getSearchService({
        limit: LIMIT_ITEMS,
        keyword: params?.searchParams || value || null,
        moduleName: params?.module || currentModule,
        siteName: params?.site || currentSiteName,
        page: params?.pageNumber || page,
        locale: currentLang,
      });
      setSearchText(value);
      setSearchResult(convertNewsList(data));
      setTotal(meta.total);
      setTotalPage(meta.totalPages);
      setPage(meta.page);
    } catch {
      // empty
    } finally {
      setLoading(false);
    }
  };

  const handleShowMore = async () => {
    try {
      setLoading(true);
      if (totalPage > page) {
        const increasePage = page + 1;
        const { data, meta } = await getSearchService({
          limit: LIMIT_ITEMS,
          keyword: value,
          moduleName: currentModule,
          siteName: currentSiteName,
          page: increasePage,
          locale: currentLang,
        });
        setSearchResult(searchResult.concat(convertNewsList(data)));
        setTotalPage(meta.totalPages);
        setPage(increasePage);
      } else {
        setSearchResult(searchResult.slice(0, LIMIT_ITEMS));
        setPage(1);
      }
    } catch {
      // empty
    } finally {
      setLoading(false);
    }
  };

  const onPressEnter = (e: KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      setSearchText(value);
      fetchSearchResult(({ site: currentModule === 'products' ? 'novaworld' : currentSiteName }));
    }
  };

  const handleClickSiteName = (idx: number) => {
    setCurrentSiteName(siteName[idx].value);
    const tempList = siteName[idx].value === 'novaworld' ? novaWorldModuleName : moduleName;
    const moduleIdx = tempList.findIndex((item) => item.slug === currentModule);
    if (moduleIdx === -1) {
      setCurrentModuleIdx(0);
      setCurrentModule(tempList[0].slug);
      setArgMutable('reset');
    } else {
      setCurrentModuleIdx(moduleIdx);
      setCurrentModule(tempList[moduleIdx].slug);
      setArgMutable('');
    }
    setPage(1);
    if (currentModule === 'products') {
      fetchSearchResult({ site: siteName[0].value, pageNumber: 1 });
    } else {
      fetchSearchResult({ site: siteName[idx].value, pageNumber: 1 });
    }
  };

  const handleClickModuleName = (idx: number) => {
    setCurrentModule(moduleList[idx].slug);
    setPage(1);
    if (moduleList[idx].slug === 'products') {
      fetchSearchResult({ site: siteName[0].value, module: moduleList[idx].slug, pageNumber: 1 });
    } else {
      fetchSearchResult({ module: moduleList[idx].slug, pageNumber: 1 });
    }
  };

  useEffect(() => {
    if (searchTextParams) {
      setValue(searchTextParams);
      setSearchText(searchTextParams);
      fetchSearchResult({
        searchParams: searchTextParams,
      });
      history.replace({ state: {} });
    } else {
      fetchSearchResult();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [searchTextParams]);

  return (
    <>
      <Container>
        <div className="title">
          <Heading type="h2">
            {searchTitle.title}
            <Divider />
          </Heading>
        </div>
        <div className="input">
          <InputSearch
            onChange={(e: ChangeEvent<HTMLInputElement>) => setValue(e.target.value)}
            value={value}
            handleClickSearch={() => fetchSearchResult(({ site: currentModule === 'products' ? 'novaworld' : currentSiteName }))}
            onKeyDown={onPressEnter}
            placeholder={t('search.placeholder')}
            autoComplete="off"
          />
        </div>
        <div className="description">
          <Text modifiers={['center']} type="p">
            <b>{total}</b>
            {' '}
            {t('search.result')}
            {' '}
            {searchText && (
              <>
                {t('search.result_for')}
                {' '}
                <b>{`“${searchText}”`}</b>
              </>
            )}
          </Text>
        </div>
        <Animate type="fadeInUp" extendClassName="tabs-first">
          <TabsFirst
            handleClick={handleClickSiteName}
            siteName={siteName}
          />
        </Animate>
        <Animate type="fadeInUp" extendClassName="tabs-second">
          <TabsSecond
            handleClick={handleClickModuleName}
            moduleName={moduleList}
            currentModuleIdx={currentModuleIdx}
            argMutable={argMutable}
          />
        </Animate>
        <Animate type="fadeInUp" extendClassName="search-content">
          <Content
            totalPage={totalPage}
            page={page}
            listCard={searchResult}
            handleClick={handleShowMore}
            isLoading={loading}
          />
        </Animate>
      </Container>
    </>
  );
};

export default Search;
