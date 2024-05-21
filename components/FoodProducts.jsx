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


const ProductSimple = ({ food, price, description, image}) => {
  return (
    <Center py={12}>
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
          <Heading fontSize={'2xl'} fontFamily={'body'} fontWeight={500}>
          {food}
          </Heading>
          <Box p={2} align={'center'}>
            <Text color={'gray.600'}>
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
          Sugar-free, soy-free, gluten-free: junk free produce that you need!
        </Text>
      </Stack>
      <Stack spacing={4} as={Container} maxW={'2xl'} textAlign={'center'}>
      </Stack>
      <Container fontFamily={'Inter'} maxW={'4xl'} mt={10}>
        <SimpleGrid columns={{ base: 2, md: 2, lg: 4 }} spacing={5}>
          {/* {features.map((feature) => (
            
          ))} */}
          <ProductSimple
            food={'Sourdough'}
            description={'Sourdough bread is lower in glycemic index compared to other breads, making it beneficial for blood sugar control.'}
            image={'https://homesteadandchill.com/wp-content/uploads/2019/02/simple-sourdough-bread-recipe-homestead-feature.jpeg'}/>
            <ProductSimple
            food={'Honey'}
            description={'Honey is a natural sweetener rich in antioxidants, which help reduce inflammation and support immune health.'}
            image={'https://img.freepik.com/premium-photo/honey-jar_920207-7369.jpg'}/>
        </SimpleGrid>
      </Container>
    </Box>
  )
}