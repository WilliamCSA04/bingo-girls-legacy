import { Children } from 'react';
import { Swiper, SwiperSlide } from '../../atoms';

export default function GenericSwiper({ children, props }) {
  const listOfChildren = Children.toArray(children);
  console.log(listOfChildren);
  return (
    <Swiper {...props}>
      {Children.map(listOfChildren, (child, index) => (
        <SwiperSlide key={index}>{child}</SwiperSlide>
      ))}
    </Swiper>
  );
}
