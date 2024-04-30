import { Container, Heading, SimpleGrid } from '@chakra-ui/react'
import React from 'react'

import Profile from '../components/Profile'

const Home = () => {
  return (
    <SimpleGrid columns={4} spacing={10} minChildWidth={250}>
      <Profile />
      <Profile />
      <Profile />
      <Profile />
      <Profile />
    </SimpleGrid>
  )
}

export default Home