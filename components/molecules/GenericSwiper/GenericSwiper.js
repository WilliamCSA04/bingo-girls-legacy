import React from 'react';
import { Swiper, SwiperSlide } from '../../atoms';

export default function GenericSwiper(props) {
  return (
    <Swiper {...props}>
      {React.Children.map((Child) => {
        <SwiperSlide>
          <Child />
        </SwiperSlide>;
      })}
    </Swiper>
  );
}
