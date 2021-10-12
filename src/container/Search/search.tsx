import React, {
  useCallback, useEffect, useMemo, useRef, useState,
} from 'react';
import { useTranslation } from 'react-i18next';
import { useLocation } from 'react-router-dom';

import Divider from 'components/atoms/Divider';
import Heading from 'components/atoms/Heading';
import Loading from 'components/atoms/Loading';
import Text from 'components/atoms/Text';
import Card from 'components/molecules/Card';
import Animate from 'components/organisms/Animate';
import Container from 'components/organisms/Container';
import { InputSearch } from 'components/organisms/Header';
import useIsMounted from 'hooks/useIsMounted';
import useScrollInfinite from 'hooks/useScrollInfinite';
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
  LIMIT: 12,
};

const Search: React.FC<SearchProps> = ({ title }) => {
  const {
    menu: { prefix },
  } = useAppSelector((state) => state);

  const isMounted = useIsMounted();
  const { t } = useTranslation('translation');

  const { state } = useLocation<{keyword?: string}>();
  const refInputSearch = useRef<HTMLInputElement>(null);
  const refKeyword = useRef<string>('');

  const [value, setValue] = useState('');
  const [loading, setLoading] = useState(false);
  const [meta, setMeta] = useState<Meta>();
  const [dataSearch, setDataSearch] = useState<SearchItem[]>([]);

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

  const listCard = useMemo(() => dataSearch.map((item) => ({
    imgSrc: getImageURL(item?.thumbnail),
    title: item?.title,
    description: item?.description,
    href: item?.type === 'news' ? fnCustomUrlDetail(prefix?.newsDetail, item?.slug) : item?.link,
    target: item?.linkTarget,
  })), [dataSearch, prefix?.newsDetail]);

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
    if (meta && meta.page < meta.totalPages) {
      fetchCardList(meta.page + 1, value);
    }
  }, [fetchCardList, meta, value]);

  const { setNode } = useScrollInfinite(handleLoadMore);

  return (
    <Container>
      <Animate type="fadeInUp" extendClassName="title">
        <Heading type="h2">
          {title}
          <Divider />
        </Heading>
      </Animate>
      <Animate type="fadeInUp">
        <div className="input">
          <InputSearch
            onChange={(e) => setValue(e.target.value)}
            value={value}
            handleClickSearch={handleClickSearch}
            onKeyDown={handleKeyDown}
            ref={refInputSearch}
            placeholder={t('search.placeholder')}
          />
        </div>
        <div className="description">
          <Text type="p">
            <>
              <strong>{meta?.total || 0}</strong>
              {' '}
              {t('search.description')}
              {' '}
              <strong>{`“${refKeyword.current || ''}”`}</strong>
            </>
          </Text>
        </div>
        <div className="list">
          {listCard.map((item, index) => (
            <div
              ref={index + 1 === listCard.length ? (node) => setNode(node) : undefined}
              className="item"
              key={`_card${String(index)}`}
            >
              <Card {...item} />
            </div>
          ))}
        </div>
        { loading && <Loading modifiers={['blue']} />}
      </Animate>
    </Container>
  );
};

export default Search;
