import { ChakraProvider } from '@chakra-ui/react';
import theme from '../theme/theme';
import { BrowserRouter as Router } from 'react-router-dom';
import { createContext, useEffect, useState } from 'react';

interface AppProviderProps {
  children: React.ReactNode;
}
export type UsernameContextValue = {
  username: string;
  setUsername: (username: string) => void;
};
const UsernameDefaultValue = {
  username: JSON.parse(localStorage.getItem('username')!),
  setUsername: (username: string) => {},
};
export const UsernameContext =
  createContext<UsernameContextValue>(UsernameDefaultValue);

export const AppProvider = ({ children }: AppProviderProps) => {
  const [username, setUsername] = useState<string>(
    UsernameDefaultValue.username
  );
  useEffect(() => {
    localStorage.setItem('username', JSON.stringify(username));
  }, [username]);

  return (
    <UsernameContext.Provider value={{ username, setUsername }}>
      <Router>
        <ChakraProvider theme={theme}>{children}</ChakraProvider>
      </Router>
    </UsernameContext.Provider>
  );
};
