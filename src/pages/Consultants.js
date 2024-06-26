import { Box, Container, Divider, Flex, Heading, SimpleGrid, Text } from '@chakra-ui/react';
import React from 'react';
import Profile from '../components/Profile';

import consultantsData from '../data/consultants.json'

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
        {consultantsData.map((consultant, index) => (
            <Profile
              key={consultant.consultant_id}
              id={consultant.consultant_id}
              fullName={consultant.full_name}
              subtitle={consultant.subtitle}
              accomplishments={consultant.accomplishments}
              service={consultant.service}
              serviceDescription={consultant.service_description}
              image={consultant.image}
              price={consultant.price}
            />
          ))}
        </SimpleGrid>
      </Container>
    </Flex>
  );
};

export default Consultants;