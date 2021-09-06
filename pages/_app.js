import { ChakraProvider } from "@chakra-ui/react"
// 1. Import the extendTheme function
import { extendTheme, theme } from "@chakra-ui/react"
// 2. Extend the theme to include custom colors, fonts, etc
const colors = {
  misthy: theme.colors.purple,
  liw: theme.colors.yellow,
  myu: theme.colors.red,
  primary: theme.colors.pink,
  secondary: theme.colors.green,
}

const customTheme = extendTheme({ colors })

function MyApp({ Component, pageProps }) {
  return (
    <ChakraProvider theme={customTheme}>
      <Component {...pageProps} />
    </ChakraProvider>
  )
}
export default MyApp