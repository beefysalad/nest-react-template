import { Container, Flex } from '@chakra-ui/react';
import Footer from './Footer';
import Header from './Header';
interface AppLayoutProps {
  children?: React.ReactNode;
}
const AppLayout = ({ children }: AppLayoutProps) => {
  return (
    <>
      <Header />
      <Container
        as={Flex}
        gap='5'
        flexDirection='column'
        justifyContent='start'
        alignItems='center'
        maxW='container.2xl'
        px={{ base: '4', md: '5', lg: '8' }}
        py={{ base: '2', md: '3' }}
        minH='100vh'
      >
        <Flex pt='20' flexDirection='column' w='full' h='full' flexGrow='1'>
          {children}
        </Flex>
        <Footer />
      </Container>
    </>
  );
};

export default AppLayout;
