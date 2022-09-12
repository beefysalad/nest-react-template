import {
  Box,
  Drawer,
  DrawerBody,
  DrawerContent,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  Flex,
  Heading,
  HStack,
  IconButton,
  Image,
  Link,
  Spacer,
  Tooltip,
  useColorMode,
  useColorModeValue,
  useDisclosure,
} from '@chakra-ui/react';
import { MdInvertColors } from 'react-icons/md';
import logo from '../assets/logo.png';

import { BiMenu } from 'react-icons/bi';
import { AiOutlineClose } from 'react-icons/ai';
import { UsernameContext } from '../providers/AppProviders';
import { useContext } from 'react';
function Header() {
  const BEEFY_GITHUB_URL = 'https://github.com/beefysalad';
  const { colorMode, toggleColorMode } = useColorMode();
  const bg = useColorModeValue('gray.50', 'blackAlpha.900');
  const bg2 = useColorModeValue('gray.50', 'blackAlpha.700');
  const { isOpen, onOpen, onClose } = useDisclosure();
  const { username } = useContext(UsernameContext);
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
                <Image src={logo} alt='logo' boxSize='40px' />
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
          <DrawerHeader bg={bg2}>
            <HStack>
              <Image src={logo} h='10' />
              <Heading size='md'>BeefySalad</Heading>
            </HStack>
          </DrawerHeader>
          <DrawerBody bg={bg2}>
            <Heading textAlign='center'>Hi {username}</Heading>
          </DrawerBody>
          <DrawerFooter bg={bg2}>
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
