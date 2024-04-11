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
          We are an online shop aimed at delivering top-tier natural foods to your door step.
          </Text>
          <Stack
            spacing={4}
            divider={
              <StackDivider borderColor={useColorModeValue('gray.100', 'gray.700')} />
            }>
            <Feature
            
              iconBg={useColorModeValue('yellow.100', 'yellow.900')}
              text={'Freshly Roasted Single Origin Beans'}
            />
            <Feature
              
              iconBg={useColorModeValue('green.100', 'green.900')}
              text={'Honey, Raw Milk, Raw Cheese (Coming Soon)'}
            />
            <Feature

              iconBg={useColorModeValue('purple.100', 'purple.900')}
              text={'Fresh fruits and greens (Coming soon)'}
            />
          </Stack>
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
        <Stack spacing={4}>
          <Heading color={'black'} fontSize={'4xl'} fontFamily={'Inter-Bold'} >What are your prices?</Heading>
          <Text color={'black.900'} fontSize={'md'}>
          We source our products from different suppliers but ensure consistency in our produce.
          </Text>
          <Stack
            spacing={4}
            divider={
              <StackDivider borderColor={useColorModeValue('gray.100', 'gray.700')} />
            }>
            <a href='https://docs.google.com/document/d/1FED8tGpTMxd8k2zyBdKQADlN7tcXGLSXJJ_pIduu2Qs/edit?usp=sharing' target='_blank'>
            <Feature
              iconBg={useColorModeValue('yellow.100', 'yellow.900')}
              text={'Click Here to View Coffee Pricelist'}
            />
            </a>
          </Stack>
        </Stack>
        <Flex>
          <Image
            rounded={'md'}
            alt={'feature image'}
            src={
              'https://res.cloudinary.com/dlgyqy69b/image/upload/v1712733555/DALL_E_2024-04-10_15.11.24_-_Create_an_extremely_extended_ultra_panoramic_and_cinematic_hyperrealistic_mockup_of_a_high-quality_unbranded_coffee_bag_on_a_wooden_counter._The_view_muple9.webp'
            }
            objectFit={'cover'}
          />
        </Flex>
      </SimpleGrid>
    </Container>
  )
}