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
        "id": 1,
        "food": "Sourdough",
        "description": "A tangy and flavorful bread made through a slow fermentation process, known for its digestive benefits and unique taste.",
        "image" : "https://homesteadandchill.com/wp-content/uploads/2019/02/simple-sourdough-bread-recipe-homestead-feature.jpeg",
      },
      {
        "id": 2,
        "food": "Honey",
        "description": "A natural sweetener with various health benefits, including antioxidants and soothing properties for throat health.",
        "image" : "https://img.freepik.com/premium-photo/honey-jar_920207-7369.jpg"
      },
      {
        "id": 3,
        "food": "Feta Cheese",
        "description": "A nutrient-rich cheese made from unpasteurized milk, preserving its natural enzymes and probiotics for digestive health.",
        "image" : "https://img.freepik.com/premium-photo/mediterranean-feta-cheese-generative-ai_94628-14968.jpg",
      },
      {
        "id": 4,
        "food": "Kimchi",
        "description": " rich in probiotics, vitamins, and antioxidants, supporting gut health, boosting immunity, and enhancing overall well-being.",
        "image" : "https://img.freepik.com/premium-photo/ai-generated-homemade-traditional-korean-kimchi-cuisine-fermented-vegetables-food-with-various-spices-everyday-meal_858705-286.jpg",
      },
      {
        "id": 5,
        "food": "Sauerkraut",
        "description": "Fermented cabbage rich in probiotics, promoting gut health and potentially enhancing immune function and digestion.",
        "image": "https://img.freepik.com/premium-photo/homemade-sauerkraut-jar-generative-ai_641010-16580.jpg"  // Replace with the actual image path
      },

];


const ProductSimple = ({ food, description, image}) => {
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
          height={'230px'}
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
            height={230}
            width={3182}
            objectFit={'cover'}
            src={image}
            alt="#"
          />
        </Box>
        <Stack pt={10} align={'center'}>
          <Heading fontSize={'2xl'}fontFamily={'Inter-Bold'}  fontWeight={500}>
          {food}
          </Heading>
          <Box p={2} align={'center'}>
            <Text>
            {description}
            </Text>
          </Box>
        </Stack>
      </Box>
    </Center>
  )
}


export default function GridListWithHeading() {
  return (
    <Box>
      <Stack spacing={4} py={1} as={Container} maxW={'6xl'} textAlign={'center'}>
      <Heading fontSize={'3xl'} color={'black'} fontWeight={'500'} fontFamily={'Inter-Bold'}>Whole Foods</Heading>
        <Text color={'black'} fontFamily={'Inter'} fontSize={'xl'}>
          You are what you eat, so eat better foods. 😉
        </Text>
      </Stack>
      <Stack spacing={4} as={Container} maxW={'2xl'} textAlign={'center'}>
      </Stack>
      <Container fontFamily={'Inter'} maxW={'4xl'} mt={10}>
        <SimpleGrid columns={{ base: 2, md: 2, lg: 3 }} spacing={5}>
          {products.map((product) => (
            <ProductSimple
            key={product.id}
            food={product.food}
            description={product.description}
            image={product.image}/>
          ))}
     
            
        </SimpleGrid>
      </Container>
    </Box>
  )
}