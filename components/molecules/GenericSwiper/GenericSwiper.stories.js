import GenericSwiper from '.';

export default {
  title: 'Swiper',
  component: GenericSwiper,
};

export const TextSwiper = () => {
  return (
    <GenericSwiper>
      <p>slide 1</p>
      <p>slide 2</p>
      <p>slide 3</p>
      <p>slide 4</p>
      <p>slide 5</p>
      <p>slide 6</p>
    </GenericSwiper>
  );
};
