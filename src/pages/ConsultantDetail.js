import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import {
  Box, Button, Flex, Heading, Image, Text, VStack, List, ListItem, ListIcon,
  Divider, Container, Modal, ModalOverlay, ModalContent, ModalHeader,
  ModalFooter, ModalBody, ModalCloseButton, FormControl, FormLabel,
  Input, useDisclosure, Select, useToast
} from '@chakra-ui/react';
import { MdCheckCircle } from 'react-icons/md';

const ConsultantDetail = () => {
    const { id } = useParams(); // Assuming 'id' is used somewhere or to fetch data
    const { isOpen, onOpen, onClose } = useDisclosure();
    const [firstName, setFirstName] = useState('');
    const [email, setEmail] = useState('');
    const [packageDeal, setPackageDeal] = useState('');

    const toast = useToast(); // Initialize toast

    const handleSubmit = () => {
        console.log({ firstName, email, packageDeal }); // Example submission logic
        toast({
          title: "Added to cart",
          description: "Your items have been added to your cart.",
          status: "success",
          duration: 5000,
          isClosable: true,
          position: "top"
      });
      onClose(); // Close modal after submit
    };

    return (
        <Container maxW="container.xl" p={6} mt={{ base: 6, md: 20 }}>
            <Flex direction={{ base: "column", md: "row" }} gap={8} align="start">
                <Box flex="1" bg="white" p={6} borderRadius="lg" boxShadow="sm">
                    <Flex gap={6} mb={6} align="center">
                        <Image 
                            src="https://via.placeholder.com/200" 
                            alt="Profile Picture" 
                            objectFit="cover" 
                            borderRadius="full"
                            boxSize="150px"
                        />
                        <VStack align="start">
                            <Heading size="xl" color="gray.700">Travis D</Heading>
                            <Text color="gray.500" fontSize="xl">Stanford University</Text>
                        </VStack>
                    </Flex>
                    <Divider mb={5} />
                    <Heading size="lg" color="gray.700" mb={4}>Accomplishments</Heading>
                    <List spacing={3}>
                        <ListItem fontSize="lg">
                            <ListIcon as={MdCheckCircle} color="green.500" />
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit
                        </ListItem>
                        <ListItem fontSize="lg">
                            <ListIcon as={MdCheckCircle} color="green.500" />
                            Assumenda, quia temporibus eveniet a libero incidunt suscipit
                        </ListItem>
                        <ListItem fontSize="lg">
                            <ListIcon as={MdCheckCircle} color="green.500" />
                            Quidem, ipsam illum quis sed voluptatum quae eum fugit earum
                        </ListItem>
                    </List>
                </Box>
                <Box bg="white" p={6} borderRadius="lg" borderWidth="1px" maxW="sm">
                    <Heading size="lg" mb={4}>1-Hour Consulting</Heading>
                    <Text mb={6} fontSize="lg">
                        Description of the product with more detail to provide clarity and professionalism.
                    </Text>
                    <Button 
                        w="full" 
                        colorScheme="messenger" 
                        size="lg"
                        onClick={onOpen}
                    >
                        Continue
                    </Button>
                </Box>
            </Flex>

            {/* Modal for scheduling a call */}
            <Modal isOpen={isOpen} onClose={onClose}>
                <ModalOverlay />
                <ModalContent>
                    <ModalHeader>Schedule a Call</ModalHeader>
                    <ModalCloseButton />
                    <ModalBody pb={6}>
                        <FormControl>
                            <FormLabel>First name</FormLabel>
                            <Input placeholder="First name" value={firstName} onChange={(e) => setFirstName(e.target.value)} />
                        </FormControl>
                        <FormControl mt={4}>
                            <FormLabel>Email</FormLabel>
                            <Input placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} type="email" />
                        </FormControl>
                        <FormControl mt={4}>
                            <FormLabel>Package Deal</FormLabel>
                            <Select placeholder="Select package" value={packageDeal} onChange={(e) => setPackageDeal(e.target.value)}>
                                <option value="package1">Package 1</option>
                                <option value="package2">Package 2</option>
                            </Select>
                        </FormControl>
                    </ModalBody>
                    <ModalFooter>
                        <Button colorScheme="blue" mr={3} onClick={handleSubmit} as={'a'} href={`/checkout/${id}`}>
                            Checkout
                        </Button>
                        <Button onClick={onClose}>Cancel</Button>
                    </ModalFooter>
                </ModalContent>
            </Modal>
        </Container>
    );
}

export default ConsultantDetail;
