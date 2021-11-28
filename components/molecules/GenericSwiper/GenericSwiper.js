import { Children } from 'react';
import { Swiper } from '../../atoms';

export default function GenericSwiper({ children, ...props }) {
  const listOfChildren = Children.toArray(children);
  return (
    <>
      <Swiper items={listOfChildren} {...props} />
    </>
  );
}
