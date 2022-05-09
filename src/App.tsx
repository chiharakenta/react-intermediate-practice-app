import { Button, ChakraProvider } from '@chakra-ui/react';
import { FC } from 'react';
import { theme } from 'theme/theme';

export const App: FC = () => {
  return (
    <ChakraProvider theme={theme}>
      <Button colorScheme="teal">ボタン</Button>
      <p>ああああああ</p>
    </ChakraProvider>
  );
};
