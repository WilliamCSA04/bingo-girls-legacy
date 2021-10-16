import PropTypes from 'prop-types';
import { Box, VisuallyHidden } from '@chakra-ui/react';
import { Heading } from '../../atoms';

export default function Section({ children, title = '', hiddenTitle = false }) {
  return (
    <Box as="section">
      {hiddenTitle ? (
        <VisuallyHidden>
          <Heading>{title}</Heading>
        </VisuallyHidden>
      ) : (
        <Heading>{title}</Heading>
      )}
      {children}
    </Box>
  );
}

Section.propTypes = {
  children: PropTypes.node.isRequired,
  title: PropTypes.string.isRequired,
};
