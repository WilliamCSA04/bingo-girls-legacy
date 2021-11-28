import PropTypes from 'prop-types';
import styled from '@emotion/styled';
import { Box, chakra } from '@chakra-ui/react';

const Li = chakra.li;
export default function SwiperSlide({ children }) {
  return <div>{children}</div>;
}

SwiperSlide.propTypes = {
  children: PropTypes.node,
};
