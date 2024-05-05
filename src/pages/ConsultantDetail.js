import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import {
  Box, Button, Flex, Heading, Image, Text, VStack, List, ListItem, ListIcon,
  Divider, Container, Modal, ModalOverlay, ModalContent, ModalHeader,
  ModalFooter, ModalBody, ModalCloseButton, FormControl, FormLabel,
  Input, useDisclosure, Select, Textarea, useToast
} from '@chakra-ui/react';
import { MdCheckCircle } from 'react-icons/md';

import consultantsData from '../data/consultants.json'

const ConsultantDetail = () => {
    const { id } = useParams(); // Assuming 'id' is used somewhere or to fetch data

    const [consultant, setConsultant] = useState(null);

    useEffect(() => {
      // Find the consultant with the matching `id`
      const foundConsultant = consultantsData.find(c => c.consultant_id.toString() === id);
      setConsultant(foundConsultant);
    }, [id]);

    console.log(consultant)

    const { isOpen, onOpen, onClose } = useDisclosure();
    const [firstName, setFirstName] = useState('');
    const [email, setEmail] = useState('');
    const [packageDeal, setPackageDeal] = useState('');

    const handleCheckout = async (event) => {
        try {
          const itemData = {
            title: consultant?.service,
            image_url: consultant?.image,
            price: consultant?.price
          };
    
          const response = await fetch('http://127.0.0.1:8000/checkout/create-checkout-session', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify(itemData)
          });
    
          const data = await response.json();
    
          if (response.ok) {
            window.open(data.url, '_blank');
          } else {
            throw new Error('Failed to create checkout session');
          }
        } catch (error) {
          console.error('Checkout Error:', error);
        }
      };    
      
    return (
        <Container maxW="container.xl" p={6} mt={{ base: 6, md: 20 }}>
            <Flex direction={{ base: "column", md: "row" }} gap={8} align="start">
                <Box flex="1" bg="white" p={6} borderRadius="lg" boxShadow="sm">
                    <Flex gap={6} mb={6} align="center">
                        <Image 
                            src={consultant?.image} 
                            alt="Profile Picture" 
                            objectFit="cover" 
                            borderRadius="full"
                            boxSize="150px"
                        />
                        <VStack align="start">
                            <Heading size="xl" color="gray.700">{consultant?.full_name}</Heading>
                            <Text color="gray.500" fontSize="xl">{consultant?.subtitle}</Text>
                        </VStack>
                    </Flex>
                    <Divider mb={5} />
                    <Heading size="lg" color="gray.700" mb={4}>Accomplishments</Heading>
                    <List spacing={3}>
                    {consultant?.accomplishments.map((accomplishment, index) => (
                        <ListItem key={index} fontSize="lg">
                        <ListIcon as={MdCheckCircle} color="green.500" />
                        {accomplishment}
                        </ListItem>
                    ))}
                    </List>
                </Box>
                <Box bg="white" p={6} borderRadius="lg" borderWidth="1px" maxW="sm">
                    <Heading size="lg" mb={4}>{consultant?.service}</Heading>
                    <Text mb={4} fontSize="lg">
                        {consultant?.service_description}
                    </Text>
                    <Text fontSize="2xl" fontWeight="bold" mb={6}>
                        Price: ${consultant?.price / 100} {/* Converts cents to dollars */}
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
                            <FormLabel>Full name</FormLabel>
                            <Input placeholder="Full name" value={firstName} onChange={(e) => setFirstName(e.target.value)} />
                        </FormControl>
                        <FormControl mt={4}>
                            <FormLabel>Specifications</FormLabel>
                            <Textarea
                                placeholder="Your specifications"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                size="sm"  // Adjust size as needed
                                resize="vertical"  // Allow resizing vertically
                            />
                        </FormControl>
                        <FormControl mt={4}>
                            <FormLabel>Package Deal</FormLabel>
                            <Select placeholder="Select package" value={packageDeal} onChange={(e) => setPackageDeal(e.target.value)}>
                                <option value="package1">{consultant?.service}</option>
                            </Select>
                        </FormControl>
                    </ModalBody>
                    <ModalFooter>
                        <Button colorScheme="blue" mr={3} onClick={handleCheckout}>
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
