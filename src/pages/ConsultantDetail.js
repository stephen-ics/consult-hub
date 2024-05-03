import { Box, Button, Flex, Heading, Image, Text, VStack, List, ListItem, ListIcon, Divider, Container, Link } from '@chakra-ui/react';
import React from 'react';
import { useParams } from 'react-router-dom';
import { MdCheckCircle } from 'react-icons/md';

const ConsultantDetail = () => {
    const { id } = useParams(); // Assuming 'id' is used somewhere or to fetch data

    return (
        <Container maxW="container.xl" p={6} mt={{base: 6, md: 20}}>
            <Flex direction={{ base: "column", md: "row" }} gap={8} align="start">
                <Box flex="1" bg="white" p={6} borderRadius="lg">
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
                <Box bg="white" p={6} borderRadius="lg" borderWidth='1px' maxW="sm">
                    <Heading size="lg" mb={4}>1-Hour Consulting</Heading>
                    <Text mb={6} fontSize="lg">
                        Description of the product with more detail to provide clarity and professionalism.
                    </Text>
                    <Button 
                        w="full" 
                        colorScheme="messenger" 
                        size="lg"
                        as={Link} 
                        href="https://calendly.com/stephenni1234/stephen" 
                        target="_blank"
                    >
                        Schedule a Call
                    </Button>
                </Box>
            </Flex>
        </Container>
    );
}

export default ConsultantDetail;
