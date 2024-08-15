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
  Center,
  Tag,
  Icon,
  useColorModeValue,
} from '@chakra-ui/react'
import { ReactElement } from 'react'
import { IoAnalyticsSharp, IoLogoBitcoin, IoSearchSharp, IoFood} from 'react-icons/io5'



const Feature = ({ subtext, text, icon, iconBg, label }) => {
  return (
    <Stack direction={'column'} align={'left'} p={'1rem'}>
      <Stack direction={'rows'} align={'left'}>
      <Flex bg={'#E8E6B3'} w={8} h={8} align={'center'} justify={'center'} rounded={'full'}>
        {icon} 
      </Flex>
      <Text fontFamily={'inter'} fontWeight={700}>{text}</Text>


      </Stack>
      
      <Text fontFamily={'inter'} fontWeight={400}>{subtext}</Text>
 
    </Stack>
    
  )
}



export default function SplitWithImage() {
  return (
    <Container bg={'linear-gradient(90deg, #e8e8e8, #f2e3da)'} maxWidth={'100%'} p={10} py={100}>
     
      <SimpleGrid columns={{ base: 1, md: 2 }} spacing={100}>
        <Stack spacing={4}>
          <Heading color={'black.900'} fontWeight={'600'} fontSize={'4xl'} fontFamily={'Inter-bold'} >What is Root & Grounds?</Heading>
          <Text color={'black.900'}fontSize={'md'}>
          We are a one-stop shop for curated single-origin and locally sourced beans, as well as super whole foods. Our brand is dedicated to promoting wellness and better food choices. Our mission is not only to offer superior produce but also to provide education on nutrition and fitness. 
          </Text>
          <Stack
            spacing={4}
            divider={
              <StackDivider borderColor={useColorModeValue('gray.100', 'gray.700')} />
            }>
          </Stack>
        </Stack>
        <Flex>
          <Image
            rounded={'md'}
            alt={'feature image'}
            src={
              'https://res.cloudinary.com/dlgyqy69b/image/upload/v1723702003/Frontend_Labels_1080_x_1350_px_dgi6i1.png'
            }
            objectFit={'cover'}
          />
        </Flex>
      </SimpleGrid>

      <Stack spacing={10} textAlign="left" mt={100}>
      <SimpleGrid columns={{ base: 1, md: 2 }} spacing={100}>
        <Stack spacing={4}>
          <Heading color={'black.900'} fontWeight={'600'} fontSize={'4xl'} fontFamily={'Inter-bold'} >Our Culture</Heading>
          <Text color={'black.900'}fontSize={'md'}>
          We foster a culture of collaboration with small cafes that strive to provide delicious and healthy produce. Our goal is for our clients to offer high-quality products, both local and imported. 
          </Text>
          <Stack
            spacing={4}
            divider={
              <StackDivider borderColor={useColorModeValue('gray.100', 'gray.700')} />
            }>
          </Stack>
        </Stack>
        <Flex>
          <Image
            rounded={'md'}
            alt={'feature image'}
            src={
              'https://res.cloudinary.com/dlgyqy69b/image/upload/v1720429180/gg00175849_ibowwr.png'
            }
            objectFit={'cover'}
          />
        </Flex>
      </SimpleGrid>
      </Stack>

     
  <Stack spacing={10} textAlign="left" mt={100}>
    <Heading color={'black.900'} fontWeight={'600'} fontSize={'4xl'} fontFamily={'Inter-bold'}>
      Why us?
    </Heading>
    <Text color={'black.900'} fontSize={'md'}>
      We aspire to be your ultimate destination for real food, leveraging highly scalable technology to ensure a smooth and enjoyable ordering experience.
    </Text>
    <Stack
      spacing={4}
      divider={
        <StackDivider borderColor={useColorModeValue('gray.100', 'gray.700')} />
      }
    >
      <Feature
        icon={'🥦'}
        iconBg={useColorModeValue('yellow.100', 'yellow.900')}
        text={'Fresh produce from the earth'}
        subtext={'We promote only whole foods, free from sugar, preservatives, stabilizers, or any additives.'}
      />
      <Feature
        icon={'🚚'}
        iconBg={useColorModeValue('green.100', 'green.900')}
        text={'Same Day Delivery & Batch Shipping'}
        subtext={'Enjoy multiple delivery options, supported by our robust backend that allows you to track your order.'}
      />
      <Feature
        icon={'🔁'}
        iconBg={useColorModeValue('purple.100', 'purple.900')}
        text={'Subscription Plans (coming soon)'}
        subtext={'Say goodbye to repetitive ordering! Soon, we will offer recurring orders for our loyal patrons.'}
      />
      <Feature
        icon={'💳'}
        iconBg={useColorModeValue('purple.100', 'purple.900')}
        text={'Integrated Payments (coming soon)'}
        subtext={'Get ready for seamless transactions! We will accept a wide range of payment methods, from GCash and bank transfers to Bitcoin.'}
      />
    </Stack>
  </Stack>


    </Container>

    
  )
}

