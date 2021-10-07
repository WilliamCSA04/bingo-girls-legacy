import { extendTheme, theme } from '@chakra-ui/react';

export default function customTheme() {
  const colors = {
    misthy: theme.colors.purple,
    liw: theme.colors.yellow,
    myu: theme.colors.red,
    primary: theme.colors.pink,
    secondary: theme.colors.green,
  };
  return extendTheme({ colors });
}
