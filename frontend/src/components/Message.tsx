import {
  Box,
  Button,
  Heading,
  HStack,
  Input,
  VStack,
  useToast,
  Container,
  Flex,
  Text,
  useColorModeValue,
  Spacer,
  Image,
  Avatar,
} from '@chakra-ui/react';
import patrick from '../assets/patrek.jpeg';
import { useEffect, useState, useContext } from 'react';
import io, { Socket } from 'socket.io-client';
import { UsernameContext } from '../providers/AppProviders';
import { useNavigate } from 'react-router-dom';
import { AiOutlineSend } from 'react-icons/ai';
import { HiOutlineArrowNarrowLeft } from 'react-icons/hi';
import { FiUsers } from 'react-icons/fi';
import Moment from 'moment';
export const { REACT_APP_API_URL } = process.env;
export interface MessageInterface {
  username: string;
  message: string;
  date: string;
}
export const Message = () => {
  const [socket, setSocket] = useState<Socket>();
  const [messages, setMessages] = useState<MessageInterface[]>([]);
  const bg = useColorModeValue('gray.100', 'whiteAlpha.100');
  const bg2 = useColorModeValue('gray.200', 'whiteAlpha.100');
  const bg3 = useColorModeValue('gray.200', 'whiteAlpha.50');

  console.log(REACT_APP_API_URL);
  const [text, setText] = useState<string>('');
  const toast = useToast();
  const { username } = useContext(UsernameContext);

  const navigate = useNavigate();
  const sendMessage = (message: string, username: string) => {
    const date = Moment(new Date()).calendar();
    socket?.emit('message', { message, username, date });
  };
  useEffect(() => {
    if (!username) {
      navigate('/');
    }
  }, []);

  useEffect(() => {
    const newSocket = io(REACT_APP_API_URL!);
    setSocket(newSocket);
  }, [setSocket]);
  const messageListener = async (data: MessageInterface) => {
    setMessages((messages) => [...messages, data]);
  };
  const userListener = (user: string) => {
    toast({
      title: `${user} has connected`,
      status: 'success',
      position: 'top-right',
      variant: 'subtle',
      duration: 9000,
      isClosable: true,
    });
  };
  const handleButtonClick = (e: any) => {
    e.preventDefault();
    if (text.length <= 0) {
      toast({
        title: 'Failed',
        description: 'Message cannot be empty',
        status: 'error',
        duration: 3000,
        isClosable: true,
        position: 'bottom',
        variant: 'subtle',
      });
      return;
    } else {
      setText('');
      sendMessage(text, username);
    }
  };
  useEffect(() => {
    socket?.on('message', messageListener);
    socket?.on('username', userListener);
    return () => {
      socket?.off('message', messageListener);
      socket?.off('username', userListener);
    };
  }, [socket]);

  return (
    <Box>
      <Heading textAlign='center'>Messages for {username}</Heading>
      <Box
        bg={bg}
        // width='50%'
        width={{ base: '100%', md: '50%' }}
        mx='auto'
        my='5rem'
        rounded='15'
        overflow='hidden'
      >
        <Flex direction='column'>
          <Box padding='2rem' bg={bg3}>
            <HStack>
              <Image
                src={patrick}
                alt='patrick'
                boxSize='40px'
                rounded='100%'
              />
              <Heading>Saladus Chat Room</Heading>
              <Spacer />
              <Button
                display={{ base: 'none', md: 'block' }}
                colorScheme='teal'
              >
                Leave
              </Button>
            </HStack>

            <Text>#pakyutopi</Text>
          </Box>
          <HStack>
            <Box
              h='25rem'
              maxH='24rem'
              maxW='10rem'
              w='100%'
              padding='1rem'
              display={{ base: 'none', md: 'block' }}
              bg={bg3}
            >
              <Heading as='h2' size='lg'>
                <HStack>
                  <FiUsers />
                  <Text>Users</Text>
                </HStack>
              </Heading>
              <Text>Todo hehe</Text>
            </Box>
            <Box
              overflowY='scroll'
              h='25rem'
              maxH='24rem'
              padding='2rem'
              w='100%'
            >
              {messages.map((message, index) => {
                return (
                  <Box mb='1rem'>
                    <HStack key={index}>
                      <Avatar name={message.username} />
                      <Box
                        key={index}
                        bg={bg2}
                        p='1rem'
                        borderRadius='1rem'
                        w='100%'
                      >
                        <HStack>
                          <Text as='b' fontSize='xl'>
                            {message.username.toUpperCase()}
                          </Text>
                          <Text as='i' fontSize='xs'>
                            {message.date}
                          </Text>
                        </HStack>

                        <Text>{message.message}</Text>
                      </Box>
                    </HStack>
                  </Box>
                );
              })}
            </Box>
          </HStack>
        </Flex>
        <Box maxH='5rem' h='5rem' padding='1rem' bg={bg3}>
          <Flex direction='column'>
            <form onSubmit={handleButtonClick}>
              <HStack>
                <Input
                  value={text}
                  onChange={(e) => setText(e.target.value)}
                  placeholder='Enter your message here...'
                  variant='filled'
                />
                <Button
                  leftIcon={<AiOutlineSend />}
                  colorScheme='teal'
                  variant='outline'
                  onClick={handleButtonClick}
                >
                  Send
                </Button>
              </HStack>
            </form>
          </Flex>
        </Box>
      </Box>
    </Box>
  );
};
