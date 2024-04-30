'use client'

import {
  Box,
  Container,
  Heading,
  SimpleGrid,
  Icon,
  Text,
  Stack,
  HStack,
  VStack,
  Flex,
  Image,
  useColorModeValue,
  Tag,
  StackDivider,
} from '@chakra-ui/react'
import { CheckCircleIcon, CheckIcon } from '@chakra-ui/icons'
import { CiCircleAlert, CiCoffeeBean } from 'react-icons/ci';
import { CircleGeometry } from 'three';
import { TbChartHistogram, TbCircle1Filled } from 'react-icons/tb';
import { BiChevronRightCircle, BiCoffeeTogo, BiSolidCoffeeBean } from 'react-icons/bi';
import { GiCircleCage, GiCoffee, GiCoffeeBeans} from 'react-icons/gi';

const features = [
    {
        "id": 1,
        "bean": "Sourdough",
        "profile": "A tangy and flavorful bread made through a slow fermentation process, known for its digestive benefits and unique taste.",
        "color": "#000000",
        "price": "",
        "visible": "true",
        "tagText": "Coming soon",
        "tagBg": "black"
      },
      {
        "id": 2,
        "bean": "Honey",
        "profile": "A natural sweetener with various health benefits, including antioxidants and soothing properties for throat health.",
        "color": "#000000",
        "price": "",
        "visible": "true",
        "tagText": "Coming soon",
        "tagBg": "black"
      },
      {
        "id": 3,
        "bean": "Raw Cheese",
        "profile": "A nutrient-rich cheese made from unpasteurized milk, preserving its natural enzymes and probiotics for digestive health.",
        "color": "#000000",
        "price": "",
        "visible": "true",
        "tagText": "Coming soon",
        "tagBg": "black"
      },

];

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


export default function GridListWithHeading() {
  return (
    <Box p={4}>
      <Stack spacing={4} py={19} as={Container} maxW={'3xl'} textAlign={'center'}>
      <Heading fontSize={'3xl'} color={'black'} fontWeight={'500'} fontFamily={'Inter-Bold'}>Whole Foods</Heading>
        <Text color={'black'} fontFamily={'Inter'} fontSize={'xl'}>
          Sugar-free, soy-free, gluten-free: junk free produce that you need!
        </Text>
      </Stack>
      <Stack spacing={4} as={Container} maxW={'2xl'} textAlign={'center'}>
      </Stack>
      <Container  fontFamily={'Inter'} maxW={'2xl'} mt={10}>
        <SimpleGrid columns={{ base: 2, md: 2, lg: 4 }} spacing={10}>
          {features.map((feature) => (
            <HStack key={feature.id} align={'left'}>
               
              <VStack align={'left'}>
                <Box columns={{ base: 2, md: 2, lg: 4 }}>
              {feature.visible === 'true' && (
                  <Tag
                  key={feature.id}
                  size={'sm'}
                  bg={feature.tagBg}
                  color={'white'}
                  style={{ visibility: feature.visible === 'true' ? 'visible' : 'hidden' }}>
                  {feature.tagText}
                </Tag>
                )}
                </Box>
                <Text fontWeight={500} fontSize={'2xl'}>{feature.bean}
                </Text>
                <Text fontWeight={400} fontSize={'lg'}>{feature.price}</Text>
                <Text color={'black'} fontSize={'sm'}>{feature.profile}</Text>
                
              </VStack>
              
            </HStack>
          ))}
        </SimpleGrid>
      </Container>
    </Box>
  )
}