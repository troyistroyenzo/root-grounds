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
        "food": "Malunggay Powder",
        "description": "Known for its multivitamin, it supports muscle recovery, reduces inflammation, and enhances energy levels, making it the ultimate superfood for athletes",
        "image": "https://img.freepik.com/premium-photo/photo-moringa-leaf-powder-generate-ai_661039-1240.jpg"
      },
      {
        "id": 2,
        "food": "Spirulina",
        "description": "This natural superfood boosts endurance, aids in muscle recovery, and supports overall vitality, perfect for enhancing athletic performance.",
        "image" : "https://img.freepik.com/premium-photo/fresh-spirulina-drink-glass-spirulina-powder-bowl-dark-backgroundai-generated_1048944-6019427.jpg"
      },
      {
        "id": 3,
        "food": "Barley",
        "description": " It supports heart health by lowering cholesterol levels, aids in digestion due to its high fiber content, and helps regulate blood sugar levels.",
        "image" : "https://img.freepik.com/premium-photo/photo-raw-barley-grain-generated-by-ai_911060-18091.jpg"
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
      <Heading fontSize={'3xl'} color={'black'} fontWeight={'500'} fontFamily={'Inter-Bold'}>Athletic Greens</Heading>
        <Text color={'black'} fontFamily={'Inter'} fontSize={'xl'}>
          Super foods for the athlete.
        </Text>
      </Stack>
      <Stack spacing={4} as={Container} maxW={'2xl'} textAlign={'center'}>
      </Stack>
      <Container fontFamily={'Inter'} maxW={'4xl'} mt={10}>
        <SimpleGrid columns={{ base: 2, md: 2, lg: 3}} spacing={5}>
        {products.map((product) => (
            <ProductSimple
              key={product.id}
              food={product.food}
              description={product.description}
              image={product.image}
            />
          ))}
        </SimpleGrid>
      </Container>
    </Box>
  )
}