import PropTypes from 'prop-types';
import styled from '@emotion/styled';
import { Box, chakra } from '@chakra-ui/react';

const Li = chakra.li;
export default function SwiperSlide({ children }) {
  return <Li>{children}</Li>;
}

SwiperSlide.propTypes = {
  children: PropTypes.node,
};
