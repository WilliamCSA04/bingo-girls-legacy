import PropTypes from 'prop-types';
import { Flex } from '@chakra-ui/react';
import Carousel from 'react-elastic-carousel';
export default function Swiper({ children }) {
  return <Carousel>{children}</Carousel>;
}

Swiper.propTypes = {
  children: PropTypes.node,
};
