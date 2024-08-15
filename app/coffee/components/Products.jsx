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

const localProducts = [
  {
    id: 1,
    food: 'Mindanao Blend',
    price: '₱1809',
    image: "https://res.cloudinary.com/dlgyqy69b/image/upload/v1723704794/2_ke8bpq.png",
    description: "Bright lemon and sweet calamansi, tropical fruit with a hint of baker's chocolate, and a syrupy body with nutty and caramel notes."
  },

  
  {
    id: 5,
    food: 'Mt. Apo',
    description: 'Lemon vibes, smooth body, hints of bakers chocolate and nuttiness.',
    price: '₱310  ',
    image: "https://res.cloudinary.com/dlgyqy69b/image/upload/v1723704797/3_wqxr0z.png",
  },

  {
    id: 5,
    food: 'Bukidnon',
    price: '₱310  ',
    description: 'Sweet calamansi, tropical fruit, syrupy body, and caramel finish.',
    image: "https://res.cloudinary.com/dlgyqy69b/image/upload/v1723706140/Frontend_Labels_iyhlxi.png",
  },


  
  // {
  //   id: 8,
  //   bean: 'El Salvador',
  //   profile: 'Caramel Aroma, Grapefruit citrus Acidity, Caramel and Dark Chocolate Notes',
  //   color: '#008000', // Green
  //   price: '₱730  ',

  // },
  // {
  //   id: 9,
  //   bean: 'Ethiopia Masha',
  //   profile: 'Fruity Aroma, Bright Acidity, Berries Flavor, Chocolate Finish',
  //   color: '#008000', // Green
  //   price: '₱1000  ',
  // },
  // {
  //   id: 10,
  //   bean: 'Burundi Lampibo',
  //   profile: 'Slick Body, Dense Citrus Acidity, GrapeFruit and Peach Sweetness',
  //   color: '#008000', // Green
  //   price: '₱710  ',
  //   visible: 'false',

  // },
  // {
  //   id: 11,
  //   bean: 'Brazil Cerrado',
  //   profile: 'Dark Chocolate, Citrus Acidity, Syrupy Body, Chocolate Flavor & Woody Finish',
  //   color: '#A52A2A', // Brown
  //   price: '₱550  ',
  //   visible: 'false'
  // },
  
  // {
  //   id: 12,
  //   bean: 'Nicaragua',
  //   profile: ' Jasmine, chocolate, honey, and even black tea',
  //   color: '#000000', // Blue
  //   price: '₱660  ',
  //   visible: 'false',
  // },
  // {
  //   id: 13,
  //   bean: 'Tanzania',
  //   profile: ' Jasmine, chocolate, honey, and even black tea',
  //   color: '#000000', // Blue
  //   price: '₱610  ',
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

const singleOriginProducts = [
  {
    id: 2,
    food: 'Ethiopia Sidamo',
    price: '₱719 ',
    description: 'Floral jasmine with a juicy body and a clean, lemony finish.',
    image: "https://res.cloudinary.com/dlgyqy69b/image/upload/v1723707666/9_ecn2rq.png",
  },
  {
    id: 3,
    food: 'Colombia',
    price: '₱649  ',
    description: 'Sweet and nutty aroma, mild acidity, chocolate finish, and nutty aftertaste.',
    image: "https://res.cloudinary.com/dlgyqy69b/image/upload/v1723707666/8_wol9of.png",
  },
  {
    id: 4,
    food: 'Vietnam',
    price: '₱439  ',
    description: 'Edgy burnt wood and nutty aroma with a hint of cacao nibs.',
    image: "https://res.cloudinary.com/dlgyqy69b/image/upload/v1723704795/5_qkodja.png",
  },
  {
    id: 7,
    food: 'Brazil Santos',
    price: '₱589  ',
    description: 'Like a chill chocolate bar, smooth with a hint of mild acidity.',
    image: "https://res.cloudinary.com/dlgyqy69b/image/upload/v1723704797/4_clvdio.png",
  },
];




const ProductSimple = ({ food, description, image, price}) => {
  return (
    <Center py={5} fontFamily={'inter'}>
      <Box
        role={'group'}
        w={'full'}
        bg={useColorModeValue('white', 'gray.800')}
        rounded={'lg'}
        pos={'relative'}
        zIndex={1}>
        <Box
          rounded={'lg'}
          mt={-12}
          w={'full'}
          pos={'relative'}>
          <Image
            objectFit={'cover'}
            src={image}
            alt="coffee flavor single origin label"
          />
        </Box>
        <Stack margin={5} textAlign={'left'}>
          <Stack direction={'column'}>
            <Text fontWeight={900} fontSize={'lg'} color={'#ff6600'} textAlign={'left'}>
            From {price}
            </Text>
            <Text fontWeight={400}>
              {description}
            </Text>
          </Stack>
        </Stack>


          

      </Box>
    </Center>
  )
}


export default function GridListWithHeading() {
  return (
    <Box bg={'linear-gradient(90deg, #e8e8e8, #f2e3da)'} >
      <Container fontFamily={'Inter'} maxW={'4xl'} p={5}>
      <Stack spacing={4} py={10} as={Container} maxW={'6xl'} textAlign={'center'}>
      <Heading fontSize={'3xl'} color={'black'} fontWeight={'500'} fontFamily={'Inter-Bold'}>Local Coffee Beans</Heading>
        <Text color={'black'} fontFamily={'Inter'} fontSize={'xl'} >
          Local coffee beans sourced from Balutakay Coffee Farmers Association (BACOFA)
        </Text>
      </Stack>
        <SimpleGrid columns={{ base: 1, md: 2, lg: 2 }} spacing={10} mt={5}>
          {localProducts.map((product) => (
            <ProductSimple
            key={product.id}
            food={product.food}
            description={product.description}
            image={product.image}
            price={product.price}/>
          ))}
        </SimpleGrid>

      </Container>

      <Container fontFamily={'Inter'} maxW={'4xl'} p={5}>
      <Stack spacing={4} py={10} as={Container} maxW={'6xl'} textAlign={'left'}>
      <Heading fontSize={'3xl'} color={'black'} fontWeight={'500'} fontFamily={'Inter-Bold'}>Single Origin Beans</Heading>
      <Text color={'black'} fontFamily={'Inter'} fontSize={'xl'} >
          Imported beans from different countries.
        </Text>
      </Stack>
        <SimpleGrid columns={{ base: 1, md: 2, lg: 2 }} spacing={10} mt={10}>
          {singleOriginProducts.map((product) => (
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