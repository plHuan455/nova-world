/* eslint-disable react/jsx-props-no-spreading */
import React, { useCallback, useRef } from 'react';
import { useLocation } from 'react-router-dom';

import Divider from 'components/atoms/Divider';
import Heading from 'components/atoms/Heading';
import Text from 'components/atoms/Text';
import Card, { CardProps } from 'components/molecules/Card';
import Animate from 'components/organisms/Animate';
import Container from 'components/organisms/Container';
import { InputSearch } from 'components/organisms/Header';

const Search: React.FC = () => {
  const { state: { keyword } } = useLocation<{keyword?: string}>();
  const refInputSearch = useRef<HTMLInputElement>(null);

  const handleClickSearch = useCallback(() => {
    console.log(refInputSearch.current?.value);
  }, []);

  const handleKeyDown = useCallback((event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === 'Enter') {
      console.log(refInputSearch.current?.value);
    }
  }, []);

  const dummy: CardProps[] = Array(7).fill({
    imgSrc: 'https://source.unsplash.com/random',
    title: 'Khai trương thương hiệu Koski tại phân kỳ the Tropicana - Novaworld Ho Tram',
    description: 'Bất động sản nghỉ dưỡng tại Việt Nam luôn được xem là phân khúc hấp dẫn trong mắt các nhà đầu tư.',
    href: '',
  });

  return (
    <Container>
      <Animate type="fadeInUp" extendClassName="title">
        <Heading type="h2">
          TÌM kIẾM
          <Divider />
        </Heading>
      </Animate>
      <Animate type="fadeInUp">
        <div className="input">
          <InputSearch
            defaultValue={keyword}
            handleClickSearch={handleClickSearch}
            onKeyDown={handleKeyDown}
            ref={refInputSearch}
          />
        </div>
        <div className="description">
          <Text type="p">
            <strong>3</strong>
            {' '}
            kết quả tìm thấy cho
            {' '}
            <strong>“NovaWorld”</strong>
          </Text>
        </div>
        <div className="list">
          {dummy.map((item, index) => (
            <div className="item" key={`_card${String(index)}`}>
              <Card {...item} />
            </div>
          ))}
        </div>
      </Animate>
    </Container>
  );
};

export default Search;
