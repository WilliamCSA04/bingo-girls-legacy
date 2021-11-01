import PropTypes from 'prop-types';
import { Box } from '@chakra-ui/react';

export default function SwiperSlide({ children }) {
  return <Box>{children}</Box>;
}

SwiperSlide.propTypes = {
  children: PropTypes.node,
};
