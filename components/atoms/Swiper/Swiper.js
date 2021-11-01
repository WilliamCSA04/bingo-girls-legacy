import PropTypes from 'prop-types';
import { Flex } from '@chakra-ui/react';
export default function Swiper({ children }) {
  return (
    <Flex as="ul" listStyleType="none">
      {children}
    </Flex>
  );
}

Swiper.propTypes = {
  children: PropTypes.node,
};
