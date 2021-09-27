import React from 'react';

import Line1 from 'assets/images/featuredProduct/line_1.png';
import Line2 from 'assets/images/featuredProduct/line_2.png';
import Button from 'components/atoms/Button';
import Divider from 'components/atoms/Divider';
import Heading from 'components/atoms/Heading';
import Image from 'components/atoms/Image';
import Text from 'components/atoms/Text';
import Animate from 'components/organisms/Animate';
import Container from 'components/organisms/Container';
import useScrollInfinite from 'hooks/useScrollInfinite';
import mapModifiers from 'utils/functions';

export interface ProductCardProps {
  isReverse?: boolean;
  index: number;
  imgSrc: string;
  title?: string;
  description?: string;
  btnLabel?: string;
  btnLink?: string;
  target?: string;
}

export interface ProductProps {
  title?: string;
  data?: ProductCardProps[];
  handleLoadMore?: () => void;
}

const ProductCard: React.FC<ProductCardProps> = ({
  isReverse,
  imgSrc,
  index,
  title,
  description,
  btnLabel,
  btnLink,
  target,
}) => (
  <div className={mapModifiers('p-product_card', isReverse && 'reverse')}>
    <Animate type={isReverse ? 'scaleY' : 'scaleX'} extendClassName="thumbnail">
      <Image ratio="676x430" alt={title} imgSrc={imgSrc} />
    </Animate>
    <Animate type={isReverse ? 'slideInLeft' : 'slideInRight'} extendClassName="wrapper">
      <div className="content">
        <div className="serial">
          <Text modifiers={['110x120', 'fontPlayfair', 'platinum1', 'italic']}>
            {index < 9 ? `0${index + 1}` : index + 1}
          </Text>
        </div>
        <div className="name">
          <Text modifiers={['500', '38x60', 'cyanCobaltBlue']}>
            {title}
          </Text>
        </div>
        <div className="description">
          <Text modifiers={['400', '20x24', 'cyanCobaltBlue']}>
            {description}
          </Text>
        </div>
        <div className="button">
          <Button
            type="button"
            handleClick={() => {
              if (btnLink) {
                window.open(btnLink, target);
              }
            }}
          >
            {btnLabel}
          </Button>
        </div>
      </div>
    </Animate>
  </div>
);

const Product: React.FC<ProductProps> = ({
  title,
  data = [],
  handleLoadMore,
}) => {
  const { setNode } = useScrollInfinite(handleLoadMore);

  return (
    <>
      <div className="p-product_content">
        <Container>
          <Animate type="beatSmall" extendClassName="title">
            <Heading type="h2">
              {title}
              <Divider />
            </Heading>
          </Animate>
          <div className="list">
            {data.map((item, index) => {
              const isReverse = index % 2 === 1;
              return (
                <div
                  ref={index + 1 === data.length ? (node) => setNode(node) : undefined}
                  key={`_productcard${String(index)}`}
                >
                  <>
                    <div className="item">
                      <ProductCard
                        {...item}
                        isReverse={isReverse}
                        index={index}
                      />
                    </div>
                    {index !== data.length - 1 && (
                      <Animate type="scaleY" extendClassName={mapModifiers('line', isReverse && 'reverse')}>
                        <div style={{ backgroundImage: `url(${isReverse ? Line2 : Line1})` }} />
                      </Animate>
                    )}
                  </>
                </div>
              );
            })}
          </div>
        </Container>
      </div>
      <div className="p-product_waves" />
    </>
  );
};
export default Product;
