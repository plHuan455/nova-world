import React, {
  useCallback, useEffect, useMemo, useRef, useState,
} from 'react';
import { useLocation } from 'react-router-dom';

import Divider from 'components/atoms/Divider';
import Heading from 'components/atoms/Heading';
import Loading from 'components/atoms/Loading';
import Text from 'components/atoms/Text';
import Card from 'components/molecules/Card';
import Animate from 'components/organisms/Animate';
import Container from 'components/organisms/Container';
import { InputSearch } from 'components/organisms/Header';
import useScrollInfinite from 'hooks/useScrollInfinite';
import { getSearchService } from 'services/search';
import { SearchItem } from 'services/search/type';
import { getImageURL } from 'utils/functions';

interface SearchProps {
  title: string;
}

const PAGE = {
  PAGE_INITIAL: 1,
  LIMIT: 3,
};

const Search: React.FC<SearchProps> = ({ title }) => {
  const { state } = useLocation<{keyword?: string}>();
  const refInputSearch = useRef<HTMLInputElement>(null);
  const [value, setValue] = useState('');
  const [loading, setLoading] = useState(false);
  const [meta, setMeta] = useState<Meta>();
  const [dataSearch, setDataSearch] = useState<SearchItem[]>([]);

  const [keyWord, setKeyWord] = useState('');
  console.log(meta, loading);
  const fetchCardList = useCallback(async (page, keyword) => {
    try {
      setLoading(true);
      setKeyWord(keyword);
      const res = await getSearchService({
        limit: PAGE.LIMIT,
        page,
        keyword,
      });
      if (page === 1) {
        setDataSearch(res.data);
      } else {
        setDataSearch([...dataSearch, ...res.data]);
      }
      setMeta(res.meta);
      setLoading(false);
    } catch (error) {
      setLoading(false);
    }
  }, [dataSearch]);

  const handleClickSearch = useCallback(() => {
    fetchCardList(1, value);
  }, [value, fetchCardList]);

  const handleKeyDown = useCallback((event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === 'Enter') {
      fetchCardList(1, value);
    }
  }, [fetchCardList, value]);

  useEffect(() => {
    setValue(state?.keyword || '');
  }, [state]);

  const listCard = useMemo(() => dataSearch.map((item) => ({
    imgSrc: getImageURL(item?.thumbnail),
    title: item?.title,
    description: item?.description,
    href: item?.slug,
  })), [dataSearch]);

  useEffect(() => {
    fetchCardList(1, state?.keyword);
    setKeyWord(state?.keyword || '');
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [state?.keyword]);

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
          />
        </div>
        <div className="description">
          <Text type="p">
            <>
              <strong>{listCard.length}</strong>
              {' '}
              kết quả tìm thấy cho
              {' '}
              <strong>{`“${keyWord}”`}</strong>
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
