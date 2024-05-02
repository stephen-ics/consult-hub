import { Box, Container, Heading, Spacer } from '@chakra-ui/react';
import React from 'react'
import { useParams, useNavigate } from 'react-router-dom'

const ConsultantDetail = () => {
    const { id }  = useParams();
  return (
    <Container maxW='65%' bg='blue.600'>
      <Heading mt={{base: 16, md: 20}}>First Name</Heading>
    </Container>
  )
}

export default ConsultantDetail