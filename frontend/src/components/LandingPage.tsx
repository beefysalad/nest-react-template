import { Box, Heading, Text } from '@chakra-ui/react';
import axios from 'axios';
import { useEffect, useState } from 'react';
export const LandingPage = () => {
  const [data, setData] = useState<string>('');
  useEffect(() => {
    const getApi = async (): Promise<void> => {
      const response = await axios.get('http://localhost:5000');
      if (response) {
        setData(response.data);
      }
    };
    getApi();
  }, []);
  return (
    <Box>
      <Heading textAlign='center'>{data}</Heading>
    </Box>
  );
};
