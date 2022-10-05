import React, { useRef } from 'react';
import { Swiper } from 'swiper/react';
import { useRouter } from 'next/router';
import SwiperCore, {
  Navigation,
  Pagination,
  Autoplay,
  Scrollbar,
} from 'swiper';
import { IoIosArrowBack, IoIosArrowForward } from 'react-icons/io';
import { NavigationOptions } from 'swiper/types/components/navigation';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

SwiperCore.use([Navigation, Pagination, Autoplay, Scrollbar]);

type CarouselPropsType = {
  className?: string;
  buttonClassName?: string;
  buttonSize?: 'default' | 'small';
  paginationVariant?: 'default' | 'circle';
  paginationPosition?: 'center' | 'left' | 'right';
  centeredSlides?: boolean;
  breakpoints?: {} | any;
  pagination?: {} | any;
  navigation?: {} | any;
  scrollbar?: {} | any;
  autoplay?: {} | any;
  children?: {} | any;
};

const Carousel: React.FunctionComponent<CarouselPropsType> = ({
  children,
  className = '',
  buttonClassName = '',
  buttonSize = 'default',
  paginationVariant = 'default',
  paginationPosition,
  breakpoints,
  autoplay = {
    delay: 4000,
  },
  ...props
}) => {
  const prevRef = useRef<HTMLButtonElement>(null);
  const nextRef = useRef<HTMLButtonElement>(null);
  const classPagination = paginationPosition
    ? ` pagination-${paginationPosition}`
    : '';
  return (
    <div
      className={`carouselWrapper relative ${className}${classPagination} ${
        paginationVariant === 'circle' ? 'dotsCircle' : ''
      }`}
    >
      <Swiper
        loop={true}
        autoplay={autoplay}
        breakpoints={breakpoints}
        navigation={{
          prevEl: prevRef.current ? prevRef.current : undefined,
          nextEl: nextRef.current ? nextRef.current : undefined,
        }}
        onInit={swiper => {
          // eslint-disable-next-line @typescript-eslint/ban-ts-comment
          // @ts-ignore
          // eslint-disable-next-line @typescript-eslint/ban-ts-comment
          // @ts-ignore
          // eslint-disable-next-line no-param-reassign
          // eslint-disable-next-line no-param-reassign
          swiper.params.navigation.prevEl = prevRef.current
          // eslint-disable-next-line @typescript-eslint/ban-ts-comment
          // @ts-ignore
          // eslint-disable-next-line no-param-reassign
          swiper.params.navigation.nextEl = nextRef.current
          swiper.navigation.update()
        }}
        {...props}
      >
        {children}
      </Swiper>
      <div className="flex items-center w-full absolute top-2/4 z-10">
        <button
          ref={prevRef}
          className="banner-carousel"
        >
        </button>
        <button
          ref={nextRef}
          className="banner-carousel"
        >
        </button>
      </div>
    </div>
  );
};

export default Carousel;
