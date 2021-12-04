import PropTypes from 'prop-types';
import { Box, VisuallyHidden } from '@chakra-ui/react';
import { SectionTitle } from '../../molecules';

export default function Section({ children, title = '', hiddenTitle = false }) {
  return (
    <Box as="section">
      {hiddenTitle ? (
        <VisuallyHidden>
          <SectionTitle>{title}</SectionTitle>
        </VisuallyHidden>
      ) : (
        <SectionTitle>{title}</SectionTitle>
      )}
      {children}
    </Box>
  );
}

Section.propTypes = {
  children: PropTypes.node.isRequired,
  title: PropTypes.string.isRequired,
};
