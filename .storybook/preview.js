import { ChakraProvider } from '@chakra-ui/react';

import * as NextImage from 'next/image';
import { customTheme } from '../theme';

const OriginalNextImage = NextImage.default;

Object.defineProperty(NextImage, 'default', {
  configurable: true,
  value: (props) => <OriginalNextImage {...props} unoptimized />,
});

const customizedTheme = customTheme();

export const decorators = [
  (Story) => (
    <ChakraProvider theme={customizedTheme}>
      <Story />
    </ChakraProvider>
  ),
];
