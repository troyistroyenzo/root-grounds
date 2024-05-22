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
  Center,
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
    "drink": "Raw Milk",
    "description": "Unpasteurized milk with a rich flavor and higher nutrient content compared to pasteurized milk, offering potential benefits for bone health and digestion.",
    "image": "https://img.freepik.com/premium-photo/milk-summer-farm-generate-ai_98402-20888.jpg"  // Replace with the actual image path
  },
  {
    "id": 2,
    "drink": "Kefir",
    "description": "A fermented milk drink packed with probiotics for gut health, potentially boosting immunity and aiding digestion.",
    "image": "https://static.vecteezy.com/system/resources/previews/024/062/120/non_2x/a-bottle-of-traditional-russian-kefir-milk-ai-generated-free-photo.jpg"  // Replace with the actual image path
  },
  {
    "id": 3,
    "drink": "Matcha",
    "description": "A finely ground green tea powder packed with antioxidants, providing a natural energy boost and potential health benefits.",
    "image": "https://img.freepik.com/premium-photo/green-matcha-tea-powder-falling-generated-with-ai_147325-1549.jpg"  // Replace with the actual image path
  },
  {
    "id": 4,
    "drink": "Coconut Juice",
    "description": "Refreshing and hydrating juice from young coconuts, rich in electrolytes and potentially beneficial for skin health and hydration.",
    "image": "https://img.freepik.com/premium-photo/refreshing-coconut-juice-minimal-style-ai-generated_804788-34461.jpg"  // Replace with the actual image path
  },
  {
    "id": 5 ,
    "drink": "Kombucha",
    "description": "Refreshing and hydrating juice from young coconuts, rich in electrolytes and potentially beneficial for skin health and hydration.",
    "image": "https://static.vecteezy.com/system/resources/previews/034/972/200/non_2x/ai-generated-generative-ai-homemade-fermented-kombucha-drink-healthy-tea-natural-probiotic-flavored-drink-free-photo.jpg"  // Replace with the actual image path
  }
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
      <Heading fontSize={'3xl'} color={'black'} fontWeight={'500'} fontFamily={'Inter-Bold'}>Drinks</Heading>
        <Text color={'black'} fontFamily={'Inter'} fontSize={'xl'}>
          The best medicine made for man.
        </Text>
      </Stack>
      <Stack spacing={4} as={Container} maxW={'2xl'} textAlign={'center'}>
      </Stack>
      <Container fontFamily={'Inter'} maxW={'4xl'} mt={10}>
        <SimpleGrid columns={{ base: 2, md: 2, lg: 3 }} spacing={5}>
        {products.map((product) => (
            <ProductSimple
            key={product.id}
            food={product.drink}
            description={product.description}
            image={product.image}/>
          ))}
        </SimpleGrid>
      </Container>
    </Box>
  )
}