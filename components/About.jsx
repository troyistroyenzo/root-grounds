'use client'

import {
  Container,
  SimpleGrid,
  Image,
  Flex,
  Heading,
  Text,
  Stack,
  StackDivider,
  Icon,
  useColorModeValue,
} from '@chakra-ui/react'
import { ReactElement } from 'react'

const Feature = ({ text, icon, iconBg }) => {
  return (
    <Stack direction={'row'} align={'center'}>
      <Flex w={8} h={8} align={'center'} justify={'center'} rounded={'full'} bg={iconBg}>
        {icon}
      </Flex>
      <Text fontFamily={'inter'} fontWeight={600}>{text}</Text>
    </Stack>
  )
}

export default function SplitWithImage() {
  return (
    <Container maxW={'lg'} py={250}>
      <SimpleGrid columns={{ base: 1, md: 2 }} spacing={10}>
        <Stack spacing={4}>
          {/* <Text
            textTransform={'uppercase'}
            color={'blue.400'}
            fontWeight={600}
            fontSize={'sm'}
            bg={useColorModeValue('blue.50', 'blue.900')}
            p={2}
            alignSelf={'flex-start'}
            rounded={'md'}>
            About Us
          </Text> */}
          <Heading color={'black'} fontSize={'4xl'} fontFamily={'inter'} >What is Root & Ground?</Heading>
          <Text color={'black.900'} fontSize={'md'} fontWeight={'500'}>
          Delivering top-tier Specialty and Single Origin Coffee Beans directly to your doorstep. Taste the quality and uniqueness with every sip.
          </Text>
          {/* <Stack
            spacing={4}
            divider={
              <StackDivider borderColor={useColorModeValue('gray.100', 'gray.700')} />
            }>
            <Feature
            
              iconBg={useColorModeValue('yellow.100', 'yellow.900')}
              text={'Business Planning'}
            />
            <Feature
              
              iconBg={useColorModeValue('green.100', 'green.900')}
              text={'Financial Planning'}
            />
            <Feature

              iconBg={useColorModeValue('purple.100', 'purple.900')}
              text={'Market Analysis'}
            />
          </Stack> */}
        </Stack>
        <Flex>
          <Image
            rounded={'md'}
            alt={'feature image'}
            src={
              'https://res.cloudinary.com/dlgyqy69b/image/upload/v1712555468/FINAL_RENDER_j6faxc.png'
            }
            objectFit={'cover'}
          />
        </Flex>
      </SimpleGrid>
    </Container>
  )
}