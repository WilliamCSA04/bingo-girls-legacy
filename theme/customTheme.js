import { extendTheme, theme } from '@chakra-ui/react';

const YOUTUBE_COLORS = {
  50: '#ffe1e1',
  100: '#ffb1b1',
  200: '#ff7f7f',
  300: '#ff4c4c',
  400: '#ff1a1a',
  500: '#e60000',
  600: '#b40000',
  700: '#810000',
  800: '#500000',
  900: '#210000',
};

const INSTAGRAM_COLORS = {
  50: '#e5ecff',
  100: '#b9c6fb',
  200: '#8d9ff2',
  300: '#6079eb',
  400: '#3453e4',
  500: '#1b39cb',
  600: '#132d9f',
  700: '#0b2073',
  800: '#041348',
  900: '#00051e',
};

const TIKTOK_COLORS = {
  50: '#f2f2f2',
  100: '#d9d9d9',
  200: '#bfbfbf',
  300: '#a6a6a6',
  400: '#8c8c8c',
  500: '#737373',
  600: '#595959',
  700: '#404040',
  800: '#262626',
  900: '#0d0d0d',
};

const TWITCH_COLORS = {
  50: '#f3ebff',
  100: '#d5c7ed',
  200: '#b7a4dd',
  300: '#9a7fce',
  400: '#7d5abe',
  500: '#6441a5',
  600: '#4e3281',
  700: '#37235d',
  800: '#21153a',
  900: '#0d0519',
};

const config = {
  initialColorMode: 'light',
  useSystemColorMode: false,
};

export default function customTheme() {
  const colors = {
    misthy: theme.colors.purple,
    liw: theme.colors.yellow,
    myu: theme.colors.red,
    primary: theme.colors.pink,
    secondary: theme.colors.green,
    youtube: YOUTUBE_COLORS,
    instagram: INSTAGRAM_COLORS,
    tiktok: TIKTOK_COLORS,
    twitch: TWITCH_COLORS,
  };
  return extendTheme({ colors, config });
}
