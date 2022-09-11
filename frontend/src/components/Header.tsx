import {
  Avatar,
  Box,
  Button,
  Divider,
  Drawer,
  DrawerBody,
  DrawerContent,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  Flex,
  FormControl,
  FormLabel,
  Heading,
  HStack,
  IconButton,
  Image,
  Input,
  Link,
  Spacer,
  Textarea,
  Tooltip,
  useColorMode,
  useColorModeValue,
  useDisclosure,
  VStack,
} from '@chakra-ui/react';
import { MdInvertColors } from 'react-icons/md';
import logo from '../assets/logo.png';

import { BiMenu } from 'react-icons/bi';
import { AiOutlineClose } from 'react-icons/ai';
function Header() {
  const BEEFY_GITHUB_URL = 'https://github.com/beefysalad';
  const { colorMode, toggleColorMode } = useColorMode();
  const bg = useColorModeValue('gray.50', 'gray.800');
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <>
      <Box
        zIndex='1'
        w='full'
        position='fixed'
        top='0'
        left='0'
        bg={bg}
        boxShadow='lg'
      >
        <Flex alignItems='center' px={{ base: '3', md: '5', lg: '8' }} py='3'>
          <Box>
            <Heading size='md'>
              <HStack>
                <Link href='/' _hover={{ underline: 'none' }}>
                  BeefySalad
                </Link>
              </HStack>
            </Heading>
          </Box>
          <Spacer />

          <Spacer />
          <Tooltip
            label='toggle color mode'
            hasArrow
            size='md'
            placement='auto'
          >
            <IconButton
              aria-label='toggle color mode'
              icon={<MdInvertColors />}
              variant='ghost'
              onClick={toggleColorMode}
              _hover={{ color: colorMode }}
            />
          </Tooltip>
          <IconButton
            aria-label='open menu'
            icon={<BiMenu />}
            variant='ghost'
            _hover={{ color: colorMode }}
            onClick={onOpen}
          />
        </Flex>
      </Box>

      <Drawer isOpen={isOpen} placement='left' onClose={onClose}>
        <DrawerOverlay />
        <DrawerContent>
          <DrawerHeader>
            <HStack>
              <Image src={logo} h='10' />
              <Heading size='md'>BeefySalad</Heading>
            </HStack>
          </DrawerHeader>
          <DrawerBody>
            <Heading>Test</Heading>
          </DrawerBody>
          <DrawerFooter>
            <IconButton
              aria-label='open menu'
              icon={<AiOutlineClose />}
              variant='ghost'
              _hover={{ color: colorMode }}
              onClick={onClose}
            />
          </DrawerFooter>
        </DrawerContent>
      </Drawer>
    </>
  );
}
export default Header;
