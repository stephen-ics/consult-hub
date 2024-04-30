import React from 'react';
import { Flex, Heading, Spacer, Text, Button, Box, HStack } from '@chakra-ui/react';

const Navbar = () => {
  return (
    <Flex as="nav" alignItems="center" p="10px">
      <Heading as="h1">Title</Heading>
      <Spacer />

      <HStack spacing="30px">

        <Text>Text</Text>
        <Button>Logout</Button>

      </HStack>
    </Flex>
  );
};

export default Navbar;
