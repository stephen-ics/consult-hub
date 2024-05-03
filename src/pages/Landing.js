import { Box, Button, Container, Flex, Heading, Image, SimpleGrid, Text } from '@chakra-ui/react';
import React from 'react';
import Profile from '../components/Profile';

const Landing = () => {
  return (
      <Container maxW='100%' mt={'60'}>
        <Flex justifyContent={'space-evenly'} alignItems={'center'}>
          <Box>
            <Flex direction={'column'}>
              <Heading fontSize={'8xl'}>ConsultHub</Heading>
              <Text fontSize={'4xl'} mb={'10'} color='gray.600'>Small Description</Text>
              <Button as={'a'} href={'/consultants'} minH={16}>Get Started</Button>
            </Flex>
          </Box>
          <Box>
            <Image height='500' src="https://via.placeholder.com/150" alt="Profile Picture" objectFit="cover" />
          </Box>
        </Flex>
      </Container>
  );
};

export default Landing;
