import { AspectRatio, Box, Card, CardBody, CardFooter, Heading, Image, Text, VStack } from '@chakra-ui/react';
import React from 'react';

const Profile = () => {
  return (
    <Card maxW="sm" borderRadius="lg" overflow="hidden" color='gray.800'>
      <AspectRatio ratio={4 / 3}>
        <Image src="https://via.placeholder.com/150" alt="Profile Picture" objectFit="cover" />
      </AspectRatio>
      <Box p={2}>
        <CardBody>
          <VStack align="stretch">
            <Heading size="lg">Stephen Ni</Heading>
            <Text fontSize="lg">This is a sample description ahahah</Text>
          </VStack>
        </CardBody>
        <CardFooter pt='0' pb='2'>
          <Text fontSize="3xl" fontWeight="bold">From $5</Text>
        </CardFooter>
      </Box>
    </Card>
  );
}

export default Profile;
