import React from 'react';
import { Box, Button, Flex, FormControl, FormLabel, Heading, Image, Input, Stack, Text } from '@chakra-ui/react';

const Checkout = () => {
  return (
    <Flex minH="80vh" p={5} alignItems="start" justifyContent="space-around" wrap="wrap">
      {/* Left side: Billing and Payment Forms */}
      <Box w={{ base: "100%", lg: "60%" }} p={5} shadow="md" borderWidth="1px" borderRadius="lg">
        <Flex direction="column" gap={10}>
          {/* Billing Information Form */}
          <Box>
            <Heading size="lg" mb={4}>Billing Information</Heading>
            <Stack spacing={3}>
              <FormControl id="firstName">
                <FormLabel>First Name</FormLabel>
                <Input placeholder="Enter your first name" />
              </FormControl>
              <FormControl id="lastName">
                <FormLabel>Last Name</FormLabel>
                <Input placeholder="Enter your last name" />
              </FormControl>
              <FormControl id="email">
                <FormLabel>Email Address</FormLabel>
                <Input type="email" placeholder="Enter your email" />
              </FormControl>
            </Stack>
          </Box>
          {/* Payment Options Form */}
          <Box>
            <Heading size="lg" mb={4}>Payment Options</Heading>
            <Stack spacing={3}>
              <FormControl id="cardName">
                <FormLabel>Name on Card</FormLabel>
                <Input placeholder="Name as it appears on card" />
              </FormControl>
              <FormControl id="cardNumber">
                <FormLabel>Credit Card Number</FormLabel>
                <Input placeholder="1234 5678 9101 1121" />
              </FormControl>
              <Flex gap={2}>
                <FormControl id="expiryDate" flex="1">
                  <FormLabel>Expiry Date</FormLabel>
                  <Input placeholder="MM/YY" />
                </FormControl>
                <FormControl id="cvv" flex="1">
                  <FormLabel>CVV</FormLabel>
                  <Input placeholder="CVV" />
                </FormControl>
              </Flex>
            </Stack>
          </Box>
        </Flex>
      </Box>

      {/* Right side: Package Details Card */}
      <Flex direction="column" w={{ base: "100%", lg: "30%" }} alignItems="center" p={5} shadow="md" borderWidth="1px" borderRadius="lg" mt={{ base: 5, lg: 0 }}>
        <Image src="https://via.placeholder.com/150" alt="Consulting Service" boxSize="150px" mb={4} />
        <Text fontSize="xl" fontWeight="bold">1-Hour Consulting Service</Text>
        <Text fontSize="md" color="gray.600">Detailed description of the package benefits and features.</Text>
        <Button mt={4} colorScheme="teal" size="lg">Confirm and Pay</Button>
      </Flex>
    </Flex>
  );
};

export default Checkout;
