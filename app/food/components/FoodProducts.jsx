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
        "price" : "₱379 / kg",
        "description": "A tangy and flavorful bread made through a slow fermentation process, known for its digestive benefits and unique taste.",
        "image" : "https://res.cloudinary.com/dlgyqy69b/image/upload/v1718693560/viber_image_2024-05-21_14-53-26-655_eohoaw.jpg",
      },
      {
        "id": 2,
        "food": "Smoked US Beef Brisket",
        "price" : "₱1500 / kg",
        "description": "US Beef brisket smoked in acacia wood.",
        "image" : "https://res.cloudinary.com/dlgyqy69b/image/upload/v1718693778/photo_6309734178677177270_y_cklogs.jpg",
      },
      {
        "id": 3,
        "food": "Honey",
        "description": "A natural sweetener with various health benefits, including antioxidants and soothing properties for throat health.",
        "image" : "https://img.freepik.com/premium-photo/honey-jar_920207-7369.jpg"
      },
      {
        "id": 4,
        "food": "Feta Cheese",
        "description": "A nutrient-rich cheese made from unpasteurized milk, preserving its natural enzymes and probiotics for digestive health.",
        "image" : "https://img.freepik.com/premium-photo/mediterranean-feta-cheese-generative-ai_94628-14968.jpg",
      },
      {
        "id": 5,
        "food": "Kimchi",
        "description": " rich in probiotics, vitamins, and antioxidants, supporting gut health, boosting immunity, and enhancing overall well-being.",
        "image" : "https://img.freepik.com/premium-photo/ai-generated-homemade-traditional-korean-kimchi-cuisine-fermented-vegetables-food-with-various-spices-everyday-meal_858705-286.jpg",
      },
      {
        "id": 6,
        "food": "Sauerkraut",
        "description": "Fermented cabbage rich in probiotics, promoting gut health and potentially enhancing immune function and digestion.",
        "image": "https://img.freepik.com/premium-photo/homemade-sauerkraut-jar-generative-ai_641010-16580.jpg"  // Replace with the actual image path
      }, 

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
        align={'center'}
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
          <Stack direction={'row'} align={'center'}>
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
            image={product.image}
            price={product.price}/>
          ))}
     
            
        </SimpleGrid>
      </Container>
    </Box>
  )
}