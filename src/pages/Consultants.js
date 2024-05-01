import { Box, Container, Heading, SimpleGrid, Text } from '@chakra-ui/react';
import React from 'react';
import Profile from '../components/Profile';

const Consultants = () => {
  return (
    <Box>
      <Box mb={8} textAlign="center">
        <Heading as="h1" size="xl" mb={6}>
          Welcome to My Website
        </Heading>
        <Text>Explore some profiles below:</Text>
      </Box>
      <Container maxW="65%">
        <Heading mb='7'>Recommendations</Heading>
        <SimpleGrid columns={[1, 2, 4, 5]} gap={6} minChildWidth="400px" my={6}>
          <Profile />
          <Profile />
          <Profile />
          <Profile />
          <Profile />
          <Profile />
          <Profile />
          <Profile />
          <Profile />
        </SimpleGrid>
      </Container>
    </Box>
  );
};

export default Consultants;
