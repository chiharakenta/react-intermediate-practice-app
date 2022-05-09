import { ChakraProvider } from '@chakra-ui/react';
import { FC } from 'react';
import { Router } from 'router/Router';
import { theme } from 'theme/theme';

export const App: FC = () => {
  return (
    <ChakraProvider theme={theme}>
      <Router />
    </ChakraProvider>
  );
};
