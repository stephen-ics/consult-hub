import { Box, Button, Card, CardHeader, CardBody, CardFooter, Container, Divider, Flex, Heading, Image, List, ListItem, ListIcon, Spacer, Text } from '@chakra-ui/react';
import React from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import { MdCheckCircle } from 'react-icons/md';

const ConsultantDetail = () => {
    const { id }  = useParams();
  return (
    <Container maxW='65%'>
      <Flex justifyContent={'space-around'} mt={{base: 16, md: 20}}>   
        <Box>
          <Heading color='gray.700'>Header</Heading>
          <Divider mb={10} orientation='horizontal' />
          <Flex>
            <Image src="https://via.placeholder.com/150" alt="Profile Picture" objectFit="cover" borderRadius={'full'}/>
            <Flex direction={'column'} ml={20}>
              <Text fontWeight={500} fontSize={'4xl'} color='gray.800'> Travis D </Text>
              <Text color='gray.600' fontSize={'2xl'}>Stanford University</Text>
            </Flex>
          </Flex>
          <Heading mt={10} color='gray.700'>Accomplishments</Heading>
          <List spacing={3} fontSize='xl' color='gray.600' mt={3}>
            <ListItem>
              <ListIcon as={MdCheckCircle} color='green.500' />
              Lorem ipsum dolor sit amet, consectetur adipisicing elit
            </ListItem>
            <ListItem>
              <ListIcon as={MdCheckCircle} color='green.500' />
              Assumenda, quia temporibus eveniet a libero incidunt suscipit
            </ListItem>
            <ListItem>
              <ListIcon as={MdCheckCircle} color='green.500' />
              Quidem, ipsam illum quis sed voluptatum quae eum fugit earum
            </ListItem>
            {/* You can also use custom icons from react-icons */}
            <ListItem>
              <ListIcon as={MdCheckCircle} color='green.500' />
              Quidem, ipsam illum quis sed voluptatum quae eum fugit earum
            </ListItem>
          </List>
        </Box>
        <Card maxW='md' p='4'>
          <CardHeader>
          <Heading size='md' mb={-20}>1-Hour consulting</Heading>
          </CardHeader>
          <CardBody>
            <Text fontSize={'lg'}>Description of the product jasdhkjsdshdjkhsjdhasjkd asjkdhkjasdhkjsdshdjkhsjdhasjkd asjkdhkjasdhkjsdshdjkd.</Text>
          </CardBody>
          <CardFooter>
            <Button w='100%' colorScheme='messenger'>Contact Now</Button>
          </CardFooter>
      </Card>
      </Flex>
    </Container>
    
  )
}

export default ConsultantDetail