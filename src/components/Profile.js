import { AspectRatio, Box, Card, CardBody, CardFooter, Heading, Image, Text, VStack } from '@chakra-ui/react';
import React from 'react';

const Profile = ({ id }) => {
  return (
    <Card maxW="sm" borderRadius="lg" overflow="hidden" color='gray.800' as={'a'} href={`/consultants/${id}`}>
      <AspectRatio ratio={4 / 3}>
        <Image src="https://via.placeholder.com/150" alt="Profile Picture" objectFit="cover" />
      </AspectRatio>
      <Box p={1}>
        <CardBody>
          <VStack align="stretch">
            <Text fontSize="3xl" fontWeight={500} color='gray.700' my={-2}>Stephen Ni</Text>
            <Text fontSize="lg" color='gray.600' mb={-2}>This is a sample description ahahah</Text>
          </VStack>
        </CardBody>
        <CardFooter pt='0' pb='2'>
          <Text fontSize="3xl" fontWeight="500" color='gray.700'>From $5</Text>
        </CardFooter>
      </Box>
    </Card>
  );
}

export default Profile;
