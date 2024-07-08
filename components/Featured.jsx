'use client'

import {
  Box,
  chakra,
  Flex,
  SimpleGrid,
  Stat,
  StatLabel,
  Image,
  StatNumber,
  useColorModeValue,
  Stack,
} from '@chakra-ui/react'
import { ReactNode } from 'react'
import { BsPerson } from 'react-icons/bs'
import { FiServer } from 'react-icons/fi'
import { GoLocation } from 'react-icons/go'

function StatsCard(props) {
  const { title, stat, source } = props
  return (
    <Stat
      px={{ base: 1, md: 1 }}
      py={'5'}
      borderColor={useColorModeValue('gray.800', 'gray.500')}
      rounded={'lg'}>
      <Stack align={'center'} textAlign={'center'}>
        {/* <StatNumber fontSize={'2xl'} fontWeight={'medium'}>
          {title}
        </StatNumber> */}
        <Image
          rounded={'md'}
          maxWidth={'75%'}
          alt={'feature image'}
          src={source}
        />
      </Stack>
    </Stat>
  )
}

export default function BasicStatistics() {
  return (
    <Box bg={'#E6ECE8'} maxW="7xl" mx={'auto'} pt={5} px={{ base: 2, sm: 12, md: 17 }}>
      <chakra.h1 textAlign={'center'} fontSize={'4xl'} py={10} fontWeight={'bold'}>
        New Featured Products
      </chakra.h1>
      <SimpleGrid columns={{ base: 1, md: 3 }} spacing={{ base: 5, lg: 8 }}>
      <StatsCard title={'Sourdough Bread'} source={'https://res.cloudinary.com/dlgyqy69b/image/upload/v1720427672/SOURDOUGH_cd34mo.png'} />
        <StatsCard title={'Bukidnon Coffee Beans'} source={'https://res.cloudinary.com/dlgyqy69b/image/upload/v1720427673/SOURDOUGH_2_cwg8fn.png'} />
        <StatsCard title={'Smoked Beef Belly'} source={'https://res.cloudinary.com/dlgyqy69b/image/upload/v1720431300/SOURDOUGH_5_lvi1dd.png'} />
      </SimpleGrid>
    </Box>
  )
}
