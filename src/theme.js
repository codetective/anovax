import { extendTheme } from '@chakra-ui/react';

const colors = {
  primary: {
    100: '#3F4688',
    200: '#E8694F',
    300: '#9CA4B4',
    400: '#9C9CB4',
  },
};
const config = {
  initialColorMode: 'light',
  useSystemColorMode: false,
};
const customTheme = extendTheme({ colors, config });

export default customTheme;
