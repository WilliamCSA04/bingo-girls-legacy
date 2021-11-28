import { Swiper } from '../../atoms';

export default function GenericSwiper({ children, ...props }) {
  return (
    <>
      <Swiper {...props}>{children}</Swiper>
    </>
  );
}
