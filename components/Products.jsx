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
  Image
} from '@chakra-ui/react'
import { CheckCircleIcon, CheckIcon } from '@chakra-ui/icons'
import { CiCircleAlert, CiCoffeeBean } from 'react-icons/ci';
import { CircleGeometry } from 'three';
import { TbChartHistogram, TbCircle1Filled } from 'react-icons/tb';
import { BiChevronRightCircle, BiCoffeeTogo } from 'react-icons/bi';
import { GiCircleCage, GiCoffeeBeans } from 'react-icons/gi';

const features = [
  {
    id: 1,
    bean: 'Brazil Santos',
    profile: 'Chocolate Aroma, Smooth Body, Mild Acidity, Bakers Chocolate',
    color: '#A52A2A', // Brown
  },
  {
    id: 2,
    bean: 'Brazil Dutra',
    profile: 'Caramel Aroma, Citrus Acidity, Syrupy Body, Chocolate Flavor & Finish',
    color: '#FFA500', // Orange
  },
  {
    id: 3,
    bean: 'Brazil Cerrado',
    profile: 'Dark Chocolate, Citrus Acidity, Syrupy Body, Chocolate Flavor & Woody Finish',
    color: '#A52A2A', // Brown
  },
  {
    id: 4,
    bean: 'Guatemala Huehuetenango',
    profile: 'Orange Aroma, Smooth Body, Mild Acidity, Orange Notes',
    color: '#FFA500', // Orange
  },
  {
    id: 5,
    bean: 'Colombia',
    profile: 'Sweet and Nutty Aroma, Mild Acidity, Chocolate Finish, Nutty Aftertaste',
    color: '#008000', // Green
  },
  {
    id: 6,
    bean: 'El Salvador',
    profile: 'Caramel Aroma, Grapefruit citrus Acidity, Caramel and Dark Chocolate Notes',
    color: '#008000', // Green
  },
  {
    id: 7,
    bean: 'Ethiopia Sidamo',
    profile: 'Jasmine Flower Aroma, Juicy Body, Lemon Acidity, Clean Finish',
    color: '#0000FF', // Blue
  },
  {
    id: 8,
    bean: 'Ethiopia Masha',
    profile: 'Fruity Aroma, Bright Acidity, Berries Flavor, Chocolate Finish',
    color: '#008000', // Green
  },
  {
    id: 9,
    bean: 'Burundi Lampibo',
    profile: 'Slick Body, Dense Citrus Acidity, GrapeFruit and Peach Sweetness',
    color: '#008000', // Green
  },
  {
    id: 10,
    bean: 'Vietnam',
    profile: 'Burnt Wood and Nutty Aroma, Mild Acidity, Medium Body, Nutty and Wood Notes w hint of Cacao Nibs',
    color: '#0000FF', // Blue
  },
];

export default function GridListWithHeading() {
  return (
    <Box p={4}>
      <Stack spacing={4} as={Container} maxW={'3xl'} textAlign={'center'}>
        <Heading fontSize={'3xl'} color={'black'} fontFamily={'Inter-Bold'}>Product Offerings</Heading>
        <Text color={'black'} fontFamily={'Inter'} fontSize={'xl'}>
          Here are some of the flavors we got for you 👀
        </Text>
      </Stack>
      <Flex>
          <Image
            rounded={'md'}
            alt={'feature image'}
            src={
              'https://res.cloudinary.com/dlgyqy69b/image/upload/v1712558819/DALL_E_2024-04-08_14.46.13_-_Create_a_panoramic_image_featuring_a_series_of_specialty_and_single_origin_coffee_beans_each_from_a_different_country._Each_bean_is_visually_represen_myw1nf.webp'
            }
            objectFit={'cover'}
          />
        </Flex>
      <Container  fontFamily={'Inter'} maxW={'6xl'} mt={10}>
        <SimpleGrid columns={{ base: 1, md: 2, lg: 4 }} spacing={10}>
          {features.map((feature) => (
            <HStack key={feature.id} align={'left'}>
               
              <Box color={feature.color} px={2}>
                <Icon as={GiCoffeeBeans} w={'100%'} />
              </Box>
              <VStack align={'left'}>
                
                <Text fontWeight={600} fontSize={'2xl'}>{feature.bean}</Text>
                
                <Text color={'black'}>{feature.profile}</Text>
                
              </VStack>
              
            </HStack>
          ))}
        </SimpleGrid>
      </Container>
    </Box>
  )
}