import { Box, Image, LinkBox, LinkOverlay, Text, VStack } from '@chakra-ui/react';
import React from 'react';

const Profile = ({ id }) => {
  return (
    <LinkBox as="article" maxW="sm" p="5" borderWidth="1px" rounded="lg" overflow="hidden">
      <Box>
        <Image 
          borderRadius="lg"
          src="https://via.placeholder.com/150" 
          alt="Profile Picture" 
          objectFit="cover"
          htmlWidth="100%"
        />
      </Box>
      <VStack align="stretch" mt="3">
        <LinkOverlay href={`/consultants/${id}`} style={{ textDecoration: 'none' }}>
          <Text fontSize="xl" fontWeight="bold" color="gray.700">Stephen Ni</Text>
        </LinkOverlay>
        <Text fontSize="md" color="gray.500">This is a sample description ahahah</Text>
        <Text fontSize="2xl" fontWeight="semibold" color="gray.800" mt="4">From $5</Text>
      </VStack>
    </LinkBox>
  );
}

export default Profile;
