import { chakra } from '@chakra-ui/react';
import PropTypes from 'prop-types';
import { Children } from 'react';
import AliceCarousel from 'react-alice-carousel';
import '../../../node_modules/react-alice-carousel/lib/alice-carousel.css';

const Carousel = chakra(AliceCarousel);

export default function Swiper({ children, ...props }) {
  const listOfChildren = Children.toArray(children);

  return <Carousel items={listOfChildren} {...props} />;
}

Swiper.propTypes = {
  children: PropTypes.node,
};
