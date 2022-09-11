import { Box, Center, Flex, Link, Spacer, Text } from '@chakra-ui/react';

interface FooterProps {
  children?: React.ReactNode;
}
const Footer = ({ children }: FooterProps) => {
  return (
    <Box w='full' h='auto' py='5'>
      <Flex justifyContent='center'>
        <Text fontSize='xs'>
          Copyright &copy; 2022 :{' '}
          <Link
            href='https://github.com/beefysalad/ts-todo-application'
            target='_blank'
          >
            Saladu
          </Link>
        </Text>
      </Flex>
    </Box>
  );
};
export default Footer;
