'use client'

import {
  Box,
  Container,
  Heading,
  Center,
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

const products = [
  {
    id: 1,
    food: 'Brazil Santos',
    price: '₱730 (250g)',
    image: "https://res.cloudinary.com/dlgyqy69b/image/upload/v1718341397/ground_jcyoii.png",
  },
  {
    id: 2,
    food: 'Ethiopia Sidamo',
    price: '₱730 (250g)',
    image: "https://res.cloudinary.com/dlgyqy69b/image/upload/v1718341373/ground_3_zvax8p.png",
  },
  {
    id: 3,
    food: 'Colombia',
    price: '₱670 (250g)',
    image: "https://res.cloudinary.com/dlgyqy69b/image/upload/v1718341372/ground_2_uk1ci3.png",
  },
  {
    id: 4,
    food: 'Vietnam',
    price: '₱450 (250g)',
    image: "https://res.cloudinary.com/dlgyqy69b/image/upload/v1718341373/ground_4_z2bhiz.png",
  },
  {
    id: 5,
    food: 'Mt. Apo',
    price: '₱460 (250g)',
    image: "https://res.cloudinary.com/dlgyqy69b/image/upload/v1718341397/ground_5_cwpx9d.png",
  },
  {
    id: 6,
    food: 'Bukidnon',
    price: '₱600 (250g)',
    image: "https://res.cloudinary.com/dlgyqy69b/image/upload/v1718341374/ground_6_cyappp.png",
  },
  {
    id: 7,
    food: 'Mindanao Blend',
    price: '₱630 (250g)',
    image: "https://res.cloudinary.com/dlgyqy69b/image/upload/v1718341374/ground_7_xnwnkn.png",
  },
  
  // {
  //   id: 8,
  //   bean: 'El Salvador',
  //   profile: 'Caramel Aroma, Grapefruit citrus Acidity, Caramel and Dark Chocolate Notes',
  //   color: '#008000', // Green
  //   price: '₱730 (250g)',

  // },
  // {
  //   id: 9,
  //   bean: 'Ethiopia Masha',
  //   profile: 'Fruity Aroma, Bright Acidity, Berries Flavor, Chocolate Finish',
  //   color: '#008000', // Green
  //   price: '₱1000 (250g)',
  // },
  // {
  //   id: 10,
  //   bean: 'Burundi Lampibo',
  //   profile: 'Slick Body, Dense Citrus Acidity, GrapeFruit and Peach Sweetness',
  //   color: '#008000', // Green
  //   price: '₱710 (250g)',
  //   visible: 'false',

  // },
  // {
  //   id: 11,
  //   bean: 'Brazil Cerrado',
  //   profile: 'Dark Chocolate, Citrus Acidity, Syrupy Body, Chocolate Flavor & Woody Finish',
  //   color: '#A52A2A', // Brown
  //   price: '₱550 (250g)',
  //   visible: 'false'
  // },
  
  // {
  //   id: 12,
  //   bean: 'Nicaragua',
  //   profile: ' Jasmine, chocolate, honey, and even black tea',
  //   color: '#000000', // Blue
  //   price: '₱660 (250g)',
  //   visible: 'false',
  // },
  // {
  //   id: 13,
  //   bean: 'Tanzania',
  //   profile: ' Jasmine, chocolate, honey, and even black tea',
  //   color: '#000000', // Blue
  //   price: '₱610 (250g)',
  //   visible: 'false',
  // },
  // {
  //   id: 14,
  //   bean: 'Bukidnon',
  //   profile: ' Jasmine, chocolate, honey, and even black tea',
  //   color: '#000000', // Blue
  //   price: '',
  //   visible: 'true',
  //   tagText: 'Coming soon',
  //   tagBg: 'black',
  // },
  
  // {
  //   id: 15,
  //   bean: 'Geisha',
  //   profile: 'Fruity, Brown Sugar, Caramel',
  //   color: '#000000', // Blue
  //   price: '',
  //   visible: 'true',
  //   tagText: 'Coming soon',
  //   tagBg: 'black',
  // },
  // {
  //   id: 16,
  //   bean: 'Dunamis Blend',
  //   profile: ' Powerful coffee punch for a monday morning. Dark, nutty, chocolate',
  //   color: '#000000', // Blue
  //   price: '',
  //   visible: 'true',
  //   tagText: 'Blend',
  //   tagBg: 'brown',
  // },

  
];



const ProductSimple = ({ food, description, image, price}) => {
  return (
    <Center py={12} fontFamily={'inter'}>
      <Box
        role={'group'}
        w={'full'}
        bg={useColorModeValue('white', 'gray.800')}
        boxShadow={'1xl'}
        rounded={'lg'}
        pos={'relative'}
        zIndex={1}>
        <Box
          rounded={'lg'}
          mt={-12}
          w={'full'}
          pos={'relative'}
          _after={{
            transition: 'all .3s ease',
            content: '""',
            w: 'full',
            h: 'full',
            pos: 'absolute',
            top: 5,
            left: 0,
            backgroundImage: `url(${image})`,
            filter: 'blur(15px)',
            zIndex: -1,
          }}
          _groupHover={{
            _after: {
              filter: 'blur(20px)',
            },
          }}>
          <Image
            rounded={'lg'}
            objectFit={'cover'}
            src={image}
            alt="#"
          />
        </Box>
        <Stack pt={10} align={'center'}>
          <Stack direction={'column'} align={'center'}>
            <Text fontWeight={600} fontSize={'xl'}>
            {price}
            </Text>
            {/* <Text textDecoration={'line-through'} color={'gray.600'}>
              $199
            </Text> */}
          </Stack>
        </Stack>

          <Box p={2} align={'center'}>
            <Text>
            {description}
            </Text>
          </Box>

      </Box>
    </Center>
  )
}


export default function GridListWithHeading() {
  return (
    <Box bg={'#E6ECE8'} >
      <Stack spacing={4} py={10} as={Container} maxW={'6xl'} textAlign={'center'}>
      <Heading fontSize={'3xl'} color={'black'} fontWeight={'500'} fontFamily={'Inter-Bold'}>Whole Foods</Heading>
        <Text color={'black'} fontFamily={'Inter'} fontSize={'xl'}>
          Single origin & local coffee beans.
        </Text>
      </Stack>
      <Container fontFamily={'Inter'} maxW={'4xl'} mt={100} p={10}>
        <SimpleGrid columns={{ base: 2, md: 2, lg: 3 }} spacing={10}>
          {products.map((product) => (
            <ProductSimple
            key={product.id}
            food={product.food}
            description={product.description}
            image={product.image}
            price={product.price}/>
          ))}
     
            
        </SimpleGrid>
      </Container>
    </Box>
  )
}