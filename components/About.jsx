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
      <Flex bg={'yellow'} w={8} h={8} align={'center'} justify={'center'} rounded={'full'}>
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
    <Container maxW={'md'} py={250}>
      <SimpleGrid columns={{ base: 1, md: 2 }} spacing={100}>

        <Stack spacing={4}>
          <Heading color={'black'} fontWeight={'600'} fontSize={'4xl'} fontFamily={'Bowlby'} >What is Root & Grounds?</Heading>
          <Text color={'black.900'} fontSize={'md'}>
          We deliver premium natural foods directly to your doorstep. We are doing coffee first then maybe other food like sourdough, raw honey, and many other delicious foods 👀
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
              'https://res.cloudinary.com/dlgyqy69b/image/upload/v1713165845/Mockup_1.5x_paxd3n.png'
            }
            objectFit={'cover'}
          />
        </Flex>

        <Stack spacing={4}>
          <Heading color={'black'} fontWeight={'600'} fontSize={'4xl'} fontFamily={'Bowlby'} >Why us?</Heading>
          <Text color={'black.900'} fontSize={'md'}>
          We want to be your go-to real food platform. We leverage highly scalable technology to make your ordering experience smooth and fun.
          </Text>
          <Stack
            spacing={4}
            divider={
              <StackDivider borderColor={useColorModeValue('gray.100', 'gray.700')} />
            }>
              <Feature
              icon={'🥦'}
              iconBg={useColorModeValue('yellow.100', 'yellow.900')}
              text={'Fresh produce from the earth'}
              subtext={'We do promote only whole foods. No sugar, preservatives, stabilisers or any of that jazz.'}
              />
              <Feature
              icon={'🚚'}
              iconBg={useColorModeValue('green.100', 'green.900')}
              text={'Same Day Delivery & Batch Shipping'}
              subtext={'We provide customers with numerous delivery options, coupled with our powerful backend that allows you to even track your order.'}
            />
            <Feature
              icon={'🔁'}
              iconBg={useColorModeValue('purple.100', 'purple.900')}
              text={'Subscription Plans'} 
              subtext={'Ordering over and over can be tiring. That is why we will soon integrate recurring orders for our loyal patrons'}
            />
            <Feature
              icon={'💳'}
              iconBg={useColorModeValue('purple.100', 'purple.900')}
              text={'Integrated Payments (coming soon'}
              subtext={'We will be accepting a wide array of payment methods: from gcash, bank all the way to bitcoin!'}
            />
          </Stack>
        </Stack>

        
      </SimpleGrid>
    </Container>
  )
}