import React, {
  useState,
  KeyboardEvent,
  useEffect,
} from 'react';
import { useLocation } from 'react-router-dom';

import Content from './content';
import { TabsFirst, TabsSecond } from './tabs-search';

import { siteName, moduleName } from 'assets/dataDummy/search';
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
} from 'utils/functions';

const LIMIT_ITEMS = 12;

interface LocationState {
  searchText: string;
}

const Search: React.FC<BasePageData<SearchBlock>> = ({
  pageData,
}) => {
  const currentLang = i18n.language || ' vi';
  const location = useLocation<LocationState>();
  const searchTextParams = location.state?.searchText;
  const [value, setValue] = useState<string>(searchTextParams);
  const [searchText, setSearchText] = useState<string>(searchTextParams);
  const [currentSiteName, setCurrentSiteName] = useState<string>(siteName[0].value);
  const [currentModule, setCurrentModule] = useState<string>(moduleName[0].slug);
  const [searchResult, setSearchResult] = useState<CardProps[]>([]);
  const [total, setTotal] = useState(0);
  const [page, setPage] = useState<number>(1);
  const [totalPage, setTotalPage] = useState<number>(1);
  const [loading, setLoading] = useState(false);

  const convertNewsList = (list: SearchItem[]) => {
    if (list.length > 0) {
      return list.map((item) => ({
        title: item.title,
        siteName: item.siteName,
        type: item.moduleName,
        imgSrc: getImageURL(item?.thumbnail) || getImageURL(pageData?.image),
        description: item.description,
        href: item.slug,
      }));
    }
    return [];
  };

  console.log(pageData?.image);

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
  };

  const onPressEnter = (e: KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      setSearchText(value);
      fetchSearchResult();
    }
  };

  const handleClickSiteName = (idx: number) => {
    setCurrentSiteName(siteName[idx].value);
    setPage(1);
    fetchSearchResult({ site: siteName[idx].value, pageNumber: 1 });
  };

  const handleClickModuleName = (idx: number) => {
    setCurrentModule(moduleName[idx].slug);
    setPage(1);
    fetchSearchResult({ module: moduleName[idx].slug, pageNumber: 1 });
  };

  useEffect(() => {
    if (searchTextParams) {
      setValue(searchTextParams);
      setSearchText(searchTextParams);
      fetchSearchResult({
        searchParams: searchTextParams,
      });
    } else {
      fetchSearchResult();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [searchTextParams]);

  console.log(i18n);

  return (
    <>
      <Container>
        <div className="title">
          <Heading type="h2">
            Tìm Kiếm
            <Divider />
          </Heading>
        </div>
        <div className="input">
          <InputSearch
            onChange={(e) => setValue(e.target.value)}
            value={value}
            handleClickSearch={() => fetchSearchResult()}
            onKeyDown={onPressEnter}
            placeholder="Please fill search text"
          />
        </div>
        <div className="description">
          <Text modifiers={['center']} type="p">
            <b>{total}</b>
            {' '}
            kết quả
            {' '}
            {searchText && (
              <>
                tìm thấy cho
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
            moduleName={moduleName}
          />
        </Animate>
        <Animate type="fadeInUp" extendClassName="search-content">
          <Content
            buttonName={totalPage > page ? 'Xem thêm' : 'Rút gọn'}
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
