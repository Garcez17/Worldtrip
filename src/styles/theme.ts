import { extendTheme } from '@chakra-ui/react';

export const theme = extendTheme({
  colors: {
    yellow: {
      "500": '#FFBA08',
    },
    gray: {
      "900": '#000000',
      "500": '#47585B',
      "300": '#999999',
      "200": '#DADADA',
      "100": '#F5F8FA',
      "50": '#FFFFFF',
    }
  },
  fonts: {
    heading: 'Poppins',
    body: 'Poppins',
  },
  styles: {
    global: {
      body: {
        bg: 'gray.50',
        color: 'gray.500'
      }
    }
  }
})