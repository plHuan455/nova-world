import React from 'react';
import ReactSlick, { CustomArrowProps, Settings } from 'react-slick';

export interface CarouselProps {
  settings?: Settings;
  asNavFor?: ReactSlick;
  ref?: React.RefObject<ReactSlick>;
  children: React.ReactNode;
}

interface ArrowProps extends CustomArrowProps {
  extendClassName?: string;
  variant?: 'light' | 'green' | 'normal' | 'large';
  onClick?: () =>void;
}

export const PrevArrow: React.FC<ArrowProps> = ({
  className,
  variant = 'light',
  extendClassName = '',
  onClick,
}) => (
  <div
    className={`${className} ${extendClassName} ${variant || ''} o-carousel_arrow prev `}
    onClick={onClick}
  />
);

export const NextArrow: React.FC<ArrowProps> = ({
  className,
  variant = 'light',
  extendClassName = '',
  onClick,
}) => (
  <div
    className={`${className} ${extendClassName} ${variant || ''} o-carousel_arrow next`}
    onClick={onClick}
  />
);

const Carousel = React.forwardRef<ReactSlick, CarouselProps>(
  ({
    settings, children, asNavFor,
  }, ref) => (
    <div className="o-carousel">
      <ReactSlick
        {...settings}
        {...(asNavFor && { asNavFor })}
        ref={ref}
      >
        {React.Children.map(children, (item) => (
          <div className="o-carousel_wrap">
            <div className="o-carousel_item">{item}</div>
          </div>
        ))}
      </ReactSlick>
    </div>
  ),
);

Carousel.defaultProps = {
  settings: {
    infinite: false,
    dots: false,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
    prevArrow: <PrevArrow variant="light" />,
    nextArrow: <NextArrow variant="light" />,
  },
};

export default Carousel;
