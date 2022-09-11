import {
  Box,
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
} from '@chakra-ui/react';
import { MdInvertColors } from 'react-icons/md';
import logo from '../assets/logo.png';
function Header() {
  const BEEFY_GITHUB_URL = 'https://github.com/beefysalad';
  const { colorMode, toggleColorMode } = useColorMode();
  const bg = useColorModeValue('gray.50', 'gray.800');
  return (
    <Box
      zIndex='1'
      w='full'
      position='fixed'
      top='0'
      left='0'
      bg={bg}
      boxShadow='md'
    >
      <Flex alignItems='center' px={{ base: '3', md: '5', lg: '8' }} py='3'>
        <Box>
          <Heading size='md'>
            <HStack>
              <Image src={logo} h='10' />
              <Link _hover={{ underline: 'none' }}>BeefySalad</Link>
            </HStack>
          </Heading>
        </Box>
        <Spacer />
        <Tooltip label='toggle color mode' hasArrow size='md' placement='auto'>
          <IconButton
            aria-label='toggle color mode'
            icon={<MdInvertColors />}
            variant='ghost'
            onClick={toggleColorMode}
            _hover={{ color: colorMode }}
          />
        </Tooltip>
      </Flex>
    </Box>
  );
}
export default Header;
