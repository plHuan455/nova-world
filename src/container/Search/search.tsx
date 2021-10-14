import React, {
  useCallback, useEffect, useMemo, useRef, useState,
} from 'react';
import { useTranslation } from 'react-i18next';
import { useLocation } from 'react-router-dom';

import Content from './content';
import { TabsFirst, TabsSecond } from './tabs-search';

import Divider from 'components/atoms/Divider';
import Heading from 'components/atoms/Heading';
import Text from 'components/atoms/Text';
import Animate from 'components/organisms/Animate';
import Container from 'components/organisms/Container';
import { InputSearch } from 'components/organisms/Header';
import useIsMounted from 'hooks/useIsMounted';
import { getSearchService } from 'services/search';
import { SearchItem } from 'services/search/type';
import { useAppSelector } from 'store/hooks';
import { getImageURL } from 'utils/functions';
import { fnCustomUrlDetail } from 'utils/language';

interface SearchProps {
  title: string;
}

const PAGE = {
  PAGE_INITIAL: 1,
  LIMIT: 9,
};

const Search: React.FC<SearchProps> = ({ title }) => {
  const {
    menu: { prefix },
  } = useAppSelector((state) => state);

  const isMounted = useIsMounted();
  const { t } = useTranslation('translation');

  const { state } = useLocation<{keyword?: string}>();
  const refKeyword = useRef<string>('');

  const [value, setValue] = useState('');
  const [loading, setLoading] = useState(false);
  const [meta, setMeta] = useState<Meta>();
  const [dataSearch, setDataSearch] = useState<SearchItem[]>([]);
  const [slice, setSlice] = useState<number>();
  const [indexTabsFirst, setIndexTabsFirst] = useState(0);
  const [indexTabsSecond, setIndexTabsSecond] = useState(0);

  const fetchCardList = useCallback(async (page, keyword) => {
    try {
      if (isMounted()) setLoading(true);
      const res = await getSearchService({
        limit: PAGE.LIMIT,
        page,
        keyword,
      });
      if (page === 1) {
        if (isMounted()) setDataSearch(res.data);
      } else if (isMounted()) setDataSearch([...dataSearch, ...res.data]);
      // setKeyWord(keyword);
      refKeyword.current = keyword;
      if (isMounted()) setMeta(res.meta);
      if (isMounted()) setLoading(false);
    } catch {
      // empty
    } finally {
      if (isMounted()) setLoading(false);
    }
  }, [dataSearch, isMounted]);

  useEffect(() => {
    if (isMounted()) setValue(state?.keyword || '');
  }, [state, isMounted]);

  useEffect(() => {
    fetchCardList(1, state?.keyword);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [state?.keyword]);

  const handleClickSearch = useCallback(() => {
    fetchCardList(1, value);
  }, [value, fetchCardList]);

  const handleKeyDown = useCallback((event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === 'Enter') {
      fetchCardList(1, value);
    }
  }, [fetchCardList, value]);

  const handleLoadMore = useCallback(() => {
    if (!slice && meta && meta.page < meta.totalPages) {
      fetchCardList(meta.page + 1, value);
    }
    if (!slice && meta && meta.page >= meta.totalPages) {
      setSlice(9);
    }
    if (slice) {
      setSlice(undefined);
    }
  }, [fetchCardList, meta, slice, value]);

  const listCard = useMemo(() => dataSearch.map((item) => ({
    imgSrc: getImageURL(item?.thumbnail),
    title: item?.title,
    description: item?.description,
    href: item?.type === 'news' ? fnCustomUrlDetail(prefix?.newsDetail, item?.slug) : item?.link,
    target: item?.linkTarget,
  })), [dataSearch, prefix?.newsDetail]);

  return (
    <Container>
      <Animate type="fadeInUp">
        <div className="title">
          <Heading type="h2">
            {title}
            <Divider />
          </Heading>
        </div>
        <div className="input">
          <InputSearch
            onChange={(e) => setValue(e.target.value)}
            value={value}
            handleClickSearch={handleClickSearch}
            onKeyDown={handleKeyDown}
            placeholder={t('search.placeholder')}
          />
        </div>
        <div className="description">
          <Text modifiers={['center']} type="p">
            <>
              <strong>{meta?.total || 0}</strong>
              {' '}
              {t('search.description')}
              {' '}
              <strong>{`“${refKeyword.current || ''}”`}</strong>
            </>
          </Text>
        </div>
      </Animate>
      <Animate type="fadeInUp" extendClassName="tabs-first">
        <TabsFirst
          indexActive={indexTabsFirst}
          handleClick={(index) => setIndexTabsFirst(index)}
        />
      </Animate>
      <Animate type="fadeInUp" extendClassName="tabs-second">
        <TabsSecond
          indexActive={indexTabsSecond}
          handleClick={(index) => setIndexTabsSecond(index)}
        />
      </Animate>
      <Animate type="fadeInUp" extendClassName="search-content">
        <Content
          buttonName={(!slice && meta && meta.page >= meta.totalPages) ? t('button.show_less') : t('button.show_more')}
          listCard={listCard.slice(0, slice || listCard.length)}
          handleClick={handleLoadMore}
          isLoading={loading}
        />
      </Animate>
    </Container>
  );
};

export default Search;
