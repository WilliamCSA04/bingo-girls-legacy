import PropTypes from './PropTypes';
import { Section as ChakraSection, VisuallyHidden } from '@chakra-ui/react';
import { Heading } from '../../atoms';

export default function Section({ children, title = '', hiddenTitle = false }) {
  return (
    <ChakraSection>
      {hiddenTitle ? (
        <VisuallyHidden>
          <Heading>{title}</Heading>
        </VisuallyHidden>
      ) : (
        <Heading>{title}</Heading>
      )}
      {children}
    </ChakraSection>
  );
}

Section.propTypes = {
  children: PropTypes.node.isRequired,
  title: PropTypes.string.isRequired,
};
