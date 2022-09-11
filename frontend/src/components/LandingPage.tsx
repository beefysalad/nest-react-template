import {
  Box,
  Button,
  Container,
  Flex,
  Heading,
  Input,
  Text,
  useToast,
  VStack,
} from '@chakra-ui/react';
import axios from 'axios';
import { useEffect, useState, useContext } from 'react';
import { UsernameContext } from '../providers/AppProviders';
import io, { Socket } from 'socket.io-client';
import { useNavigate } from 'react-router-dom';
export const { REACT_APP_API_URL } = process.env;
export const LandingPage = () => {
  const [socket, setSocket] = useState<Socket>();
  const [data, setData] = useState<string>('');
  const [text, setText] = useState<string>('');
  const { username, setUsername } = useContext(UsernameContext);
  const navigate = useNavigate();
  const toast = useToast();

  useEffect(() => {
    const newSocket = io(REACT_APP_API_URL!);
    setSocket(newSocket);
  }, [setSocket]);

  useEffect(() => {
    const getApi = async (): Promise<void> => {
      const response = await axios.get(REACT_APP_API_URL!);
      if (response) {
        setData(response.data);
        console.log(data);
      }
    };
    getApi();
  }, [data]);
  const handleButtonClick = (): void => {
    if (text.length <= 0) {
      toast({
        title: 'Failed',
        description: 'Username cannot be empty',
        status: 'error',
        duration: 3000,
        isClosable: true,
        position: 'bottom-right',
        variant: 'subtle',
      });
    } else {
      socket?.emit('username', text);
      setUsername(text);
      setText('');
      navigate('/message');
    }
  };
  return (
    <Box mt='5rem' as={Container}>
      <Heading textAlign='center'>BeefySalad Chat App</Heading>
      <Flex
        alignItems='center'
        justifyContent='center'
        flexDirection='column'
        mt='2rem'
        width='100%'
      >
        <VStack width='70%'>
          <Input
            value={text}
            onChange={(e) => setText(e.target.value)}
            variant='filled'
            placeholder='Enter your username'
          />
          <Button
            onClick={handleButtonClick}
            colorScheme='teal'
            variant='outline'
          >
            Enter Chat Room
          </Button>
        </VStack>
      </Flex>
    </Box>
  );
};
