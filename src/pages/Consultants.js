import { Box, Container, Divider, Flex, Heading, SimpleGrid, Text } from '@chakra-ui/react';
import React from 'react';
import Profile from '../components/Profile';

const Consultants = () => {
  return (
    <Flex justifyContent={'center'}>
      <Container maxW="65%" mt='10'>
        <Heading mb='7' textAlign={{base: 'center', md: 'left'}} color='gray.800' fontSize={{base: '3xl', md:'4xl'}}>Recommendations</Heading>
        <Divider orientation='horizontal' />
        <SimpleGrid columns={[1, 2, 4, 5]} gap={6} minChildWidth={{base: '300px', md: '400'}} my={6}>
          <Profile id={1}/>
          <Profile id={2}/>
          <Profile id={3}/>
          <Profile id={4}/>
          <Profile id={5}/>
          <Profile id={6}/>
        </SimpleGrid>
      </Container>
    </Flex>
  );
};

export default Consultants;
