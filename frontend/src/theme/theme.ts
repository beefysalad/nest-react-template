import { extendTheme, type ThemeConfig } from '@chakra-ui/react';
import type { StyleFunctionProps } from '@chakra-ui/styled-system';
import { mode } from '@chakra-ui/theme-tools';

const config: ThemeConfig = {
  initialColorMode: 'dark',
  useSystemColorMode: false,
};

const theme = extendTheme(config, {
  styles: {
    global: (props: StyleFunctionProps) => ({
      body: {
        color: mode('gray.800', 'whiteAlpha.900')(props),
        // bg: mode('gray.50', 'gray.800')(props),
        bg: mode('gray.50', 'blackAlpha.900')(props),
      },
    }),
  },
  fonts: {
    heading: `'Poppins', sans-serif`,
    body: `'Inter', sans-serif`,
    mono: 'Menlo, monospace',
  },
  components: {
    Input: {
      variants: {
        filled: (props: StyleFunctionProps) => ({
          field: {
            borderRadius: 'md',
            _focus: {
              borderColor: 'teal.500',
            },
            bg: mode('gray.300', 'whiteAlpha.200')(props),
          },
        }),
      },
    },
    Textarea: {
      variants: {
        filled: (props: StyleFunctionProps) => ({
          borderRadius: 'md',
          _focus: {
            borderColor: 'teal.500',
          },
          bg: mode('gray.200', 'whiteAlpha.200')(props),
        }),
      },
    },
  },
});

export default theme;
