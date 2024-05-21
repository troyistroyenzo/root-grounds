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
    id: 1,
    bean: 'Brazil Santos',
    profile: 'Chocolate Aroma, Smooth Body, Mild Acidity, Bakers Chocolate',
    color: '#A52A2A', // Brown
    price: '',
    tagText: 'Best Seller',
    tagBg: 'green.300',
    visible: 'true'
  },
  {
    id: 2,
    bean: 'Ethiopia Sidamo',
    profile: 'Jasmine Flower Aroma, Juicy Body, Lemon Acidity, Clean Finish',
    color: '#0000FF', // Blue
    price: '',
    tagText: 'Best Seller',
    tagBg: 'green.300',
    visible: 'true',
  },
  {
    id: 3,
    bean: 'Colombia',
    profile: 'Sweet and Nutty Aroma, Mild Acidity, Chocolate Finish, Nutty Aftertaste',
    color: '#008000', // Green
    price: '',
    tagText: 'Best Seller',
    tagBg: 'green.300',
    visible: 'true'
  },
  {
    id: 4,
    bean: 'Vietnam',
    profile: 'Burnt Wood and Nutty Aroma, Mild Acidity, Medium Body, Nutty and Wood Notes w hint of Cacao Nibs',
    color: '#0000FF', // Blue
    price: '',
    visible: 'true',
    tagText: 'Best seller',
    tagBg: 'green.300',
  },
  {
    id: 5,
    bean: 'Mt. Apo',
    profile: 'Chocolate, citrus, nutty, fruity, floral, caramel, spice.',
    color: '#A52A2A', // Brown
    price: '',
    visible: 'true',
    tagText: 'Best seller',
    tagBg: 'green.300',
  },
  {
    id: 6,
    bean: 'Guatemala',
    profile: 'Orange Aroma, Smooth Body, Mild Acidity, Orange Notes',
    color: '#FFA500', // Orange
    price: '',
    visible: 'false'
  },
  {
    id: 7,
    bean: 'Brazil Dutra',
    profile: 'Caramel Aroma, Citrus Acidity, Syrupy Body, Chocolate Flavor & Finish',
    color: '#FFA500', // Orange
    price: '',
    tagText: '',
    tagBg: 'yellow.300',
    visible: 'false'
  },
  {
    id: 8,
    bean: 'El Salvador',
    profile: 'Caramel Aroma, Grapefruit citrus Acidity, Caramel and Dark Chocolate Notes',
    color: '#008000', // Green
    price: '',

  },
  {
    id: 9,
    bean: 'Ethiopia Masha',
    profile: 'Fruity Aroma, Bright Acidity, Berries Flavor, Chocolate Finish',
    color: '#008000', // Green
    price: '',
  },
  {
    id: 10,
    bean: 'Burundi Lampibo',
    profile: 'Slick Body, Dense Citrus Acidity, GrapeFruit and Peach Sweetness',
    color: '#008000', // Green
    price: '',
    visible: 'false',

  },
  
  {
    id: 11,
    bean: 'Brazil Cerrado',
    profile: 'Dark Chocolate, Citrus Acidity, Syrupy Body, Chocolate Flavor & Woody Finish',
    color: '#A52A2A', // Brown
    price: '',
    visible: 'false'
  },
  
  {
    id: 12,
    bean: 'Nicaragua',
    profile: ' Jasmine, chocolate, honey, and even black tea',
    color: '#000000', // Blue
    price: '',
    visible: 'false',
  },
  {
    id: 13,
    bean: 'Tanzania',
    profile: ' Jasmine, chocolate, honey, and even black tea',
    color: '#000000', // Blue
    price: '',
    visible: 'false',
  },
  {
    id: 14,
    bean: 'Bukidnon',
    profile: ' Jasmine, chocolate, honey, and even black tea',
    color: '#000000', // Blue
    price: '',
    visible: 'true',
    tagText: 'Coming soon',
    tagBg: 'black',
  },
  
  {
    id: 15,
    bean: 'Geisha',
    profile: 'Fruity, Brown Sugar, Caramel',
    color: '#000000', // Blue
    price: '',
    visible: 'true',
    tagText: 'Coming soon',
    tagBg: 'black',
  },
  {
    id: 16,
    bean: 'Dunamis Blend',
    profile: ' Powerful coffee punch for a monday morning. Dark, nutty, chocolate',
    color: '#000000', // Blue
    price: '',
    visible: 'true',
    tagText: 'Blend',
    tagBg: 'brown',
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
      <Heading fontSize={'3xl'} color={'black'} fontWeight={'500'} fontFamily={'Inter-Bold'}>Coffee Beans.</Heading>
        <Text color={'black'} fontFamily={'Inter'} fontSize={'xl'}>
          The best beans in town... no seriously.
        </Text>
      </Stack>
      <Stack spacing={4} as={Container} maxW={'2xl'} textAlign={'center'}>
      <Image
            rounded={'md'}
            alt={'feature image'}
            src={
              'https://res.cloudinary.com/dlgyqy69b/image/upload/v1712558819/DALL_E_2024-04-08_14.46.13_-_Create_a_panoramic_image_featuring_a_series_of_specialty_and_single_origin_coffee_beans_each_from_a_different_country._Each_bean_is_visually_represen_myw1nf.webp'
            }
            objectFit={'fit'}
            objectPosition={'center'}
          />
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