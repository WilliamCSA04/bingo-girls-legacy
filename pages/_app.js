import { ChakraProvider } from '@chakra-ui/react';
import { customTheme } from '../theme';

const customizedTheme = customTheme();

function MyApp({ Component, pageProps }) {
  return (
    <ChakraProvider theme={customizedTheme}>
      <Component {...pageProps} />
    </ChakraProvider>
  );
}
export default MyApp;
