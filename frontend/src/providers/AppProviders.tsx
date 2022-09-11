import { ChakraProvider } from '@chakra-ui/react';
import theme from '../theme/theme';
import { BrowserRouter as Router } from 'react-router-dom';
interface AppProviderProps {
  children: React.ReactNode;
}
export const AppProvider = ({ children }: AppProviderProps) => {
  return (
    <Router>
      <ChakraProvider theme={theme}>{children}</ChakraProvider>
    </Router>
  );
};
