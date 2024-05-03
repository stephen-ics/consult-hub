import { Box, Container, Divider, Flex, Heading, SimpleGrid, Text } from '@chakra-ui/react';
import React from 'react';
import Profile from '../components/Profile';

const Consultants = () => {
  return (
    <Flex justifyContent="center" align="center" minHeight="100vh" py="5">
      <Container maxW="container.xl" mt="5">
        <Heading
          mb="5"
          textAlign="center"
          color="gray.800"
          fontSize={{ base: '2xl', md: '4xl' }}
          fontWeight="bold"
        >
          Recommendations
        </Heading>
        <Divider orientation="horizontal" mb="6" />
        <SimpleGrid columns={{ base: 1, sm: 2, md: 3, lg: 4 }} spacing="6">
          {Array.from({ length: 6 }).map((_, index) => (
            <Profile key={index} id={index + 1} />
          ))}
        </SimpleGrid>
      </Container>
    </Flex>
  );
};

export default Consultants;

// Accomplishments: string
// Full Name: string
// Title (E.g Student @ x University)
// I will... Short description
// Card Subtitle
// Card Description
// Image
