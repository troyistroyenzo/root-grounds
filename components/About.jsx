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
import { FaInstagram, FaTwitter, FaYoutube, FaFacebook} from 'react-icons/fa'

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
          <Heading color={'black'} fontSize={'4xl'} fontFamily={'Inter-Bold'} >What is Root & Grounds?</Heading>
          <Text color={'black.900'} fontSize={'md'}>
          We deliver premium natural foods directly to your doorstep. We are doing coffee first then maybe other food like sourdough, raw honey, and many other delicious foods👀
          </Text>
          <Stack
            spacing={4}
            divider={
              <StackDivider borderColor={useColorModeValue('gray.100', 'gray.700')} />
            }>
              <a href='https://www.facebook.com/rootandgrounds/' target='_blank'>
              <Feature
                iconBg={useColorModeValue('blue.400', 'blue.900')}
                icon={FaInstagram}
                text={'Facebook Page'}
              />
              </a>
              <a href='https://www.instagram.com/rootandgrounds/' target='_blank'>
              <Feature
                iconBg={useColorModeValue('purple.700', 'blue.900')}
                icon={FaInstagram}
                text={'Instagram Page'}
              />
              </a>
          </Stack>
        </Stack>
        <Flex>
          <Image
            rounded={'md'}
            alt={'feature image'}
            src={
              'https://res.cloudinary.com/dlgyqy69b/image/upload/v1713165845/Mockup_1.5x_paxd3n.png'
            }
            objectFit={'cover'}
          />
        </Flex>
      </SimpleGrid>
    </Container>
  )
}