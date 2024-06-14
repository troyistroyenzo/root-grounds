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
    <Container bg={'#E6ECE8'} maxWidth={'100%'} p={100}>
      <SimpleGrid columns={{ base: 1, md: 2 }} spacing={100}>
        <Stack spacing={4}>
          <Heading color={'black'} fontWeight={'600'} fontSize={'4xl'} fontFamily={'Inter-bold'} >The Founder</Heading>
          <Text color={'black.900'} fontSize={'md'}>
          Hi, I am Troy, founder of Root and Grounds. As an athlete, I prioritize black coffee and healthy produce. Root and Grounds offers single-origin coffee beans and whole foods, aiming to provide natural, unadulterated options in a world filled with additives. I believe in promoting a healthier lifestyle through our curated picks, sharing them with those who value quality and health.
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
            height={'70%'}
            width={'100%'}
            src={
              'https://res.cloudinary.com/dlgyqy69b/image/upload/v1718344254/photo_6226581576012119391_y_on5nv5.jpg'
            }
            objectFit={'cover'}
          />
        </Flex>
      </SimpleGrid>
      <SimpleGrid columns={{ base: 1, md: 2 }} spacing={100}>
        <Stack spacing={4}>
          <Heading color={'black'} fontWeight={'600'} fontSize={'4xl'} fontFamily={'Inter-bold'} >What is Root & Grounds?</Heading>
          <Text color={'black.900'} fontSize={'md'}>
          We are a curation of single origin & local beans and super whole foods. 👀
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
      </SimpleGrid>

      <Center>
  <Stack spacing={10} textAlign="center" mt={100}>
    <Heading color={'black'} fontWeight={'600'} fontSize={'4xl'} fontFamily={'Inter-bold'}>
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
</Center>

    </Container>

    
  )
}

