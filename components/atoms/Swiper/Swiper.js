import PropTypes from 'prop-types';
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper';
import { Swiper as ReactSwipper } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

export default function Swiper({
  children,
  spaceBetween = 50,
  slidesPerView = 3,
  pagination = { clickable: true },
  scrollbar = { draggable: true },
  onSwiper = (swiper) => {},
  onSlideChange = () => {},
}) {
  return (
    <ReactSwipper
      modules={[Navigation, Pagination, Scrollbar, A11y]}
      spaceBetween={spaceBetween}
      slidesPerView={slidesPerView}
      navigation
      pagination={pagination}
      scrollbar={scrollbar}
      onSwiper={onSwiper}
      onSlideChange={onSlideChange}
    >
      {children}
    </ReactSwipper>
  );
}

Swiper.propTypes = {
  children: PropTypes.node,
  spaceBetween: PropTypes.number,
  slidesPerView: PropTypes.number,
  pagination: PropTypes.shape({
    clickable: PropTypes.bool,
  }),
  scrollbar: PropTypes.shape({
    draggable: PropTypes.bool,
  }),
  onSwiper: PropTypes.func,
  onSlideChange: PropTypes.func,
};
