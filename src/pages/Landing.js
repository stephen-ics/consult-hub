import { Box, Button, Container, Flex, Heading, Image, Text, useBreakpointValue } from '@chakra-ui/react';
import React from 'react';

const Landing = () => {
  const buttonSize = useBreakpointValue({ base: 'md', md: 'lg' }); // Responsive button size
  const headingSize = useBreakpointValue({ base: '6xl', md: '8xl' }); // Responsive heading size
  const textSize = useBreakpointValue({ base: '2xl', md: '4xl' }); // Responsive text size

  return (
    <Container maxW="full" mt="10" p={0} centerContent overflow="hidden" mx={{base: 0, md:20}}>
      <Flex
        direction={{ base: 'column-reverse', md: 'row' }}
        justifyContent={'center'}
        alignItems={'center'}
        w="full"
        px={{ base: 4, md: 40 }}
        py={{ base: 10, md: 32 }}
      >
        <Box flex="1" textAlign={{ base: 'center', md: 'left' }}>
          <Heading fontSize={headingSize} lineHeight="shorter">
            ConsultHub
          </Heading>
          <Text fontSize={textSize} color='gray.600' my={5}>
            Empowering your consultancy needs with one click.
          </Text>
          <Button as={'a'} href={'/consultants'} size={buttonSize} colorScheme="teal" px={10}>
            Get Started
          </Button>
        </Box>
        <Box flex="1" display={{ base: 'flex', md: 'block' }} justifyContent={{ base: 'center', md: 'normal' }}>
          <Image 
            src="https://via.placeholder.com/500x500" 
            alt="Consultation" 
            objectFit="cover" 
            borderRadius="full" 
            boxSize={{ base: '300px', md: '500px' }}
            m={{ base: 4, md: 0 }}
          />
        </Box>
      </Flex>
    </Container>
  );
};

export default Landing;
