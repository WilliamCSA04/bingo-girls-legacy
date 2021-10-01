import { ChakraProvider } from '@chakra-ui/react';

export const decorators = [
  (Story) => (
    <ChakraProvider>
      <Story />
    </ChakraProvider>
  ),
];
