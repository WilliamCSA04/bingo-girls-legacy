import { Link as ChakraLink } from '@chakra-ui/react';
import NextLink from 'next/link';

export default function Link({ children, ...props }) {
  return (
    <ChakraLink as={NextLink} {...props}>
      {children}
    </ChakraLink>
  );
}
