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

const features = [
    {
        "id": 1,
        "bean": "Raw Milk",
        "profile": "Unpasteurized milk with a rich flavor and higher nutrient content compared to pasteurized milk, offering potential benefits for bone health and digestion.",
        "color": "#000000",
        "price": "",
        "visible": "true",
        "tagText": "Coming soon",
        "tagBg": "black"
      },
      {
        "id": 2,
        "bean": "Kefir",
        "profile": "A fermented milk drink packed with probiotics for gut health, potentially boosting immunity and aiding digestion.",
        "color": "#000000",
        "price": "",
        "visible": "true",
        "tagText": "Coming soon",
        "tagBg": "black"
      },
      {
        "id": 3,
        "bean": "Sauerkraut",
        "profile": "Fermented cabbage rich in probiotics, promoting gut health and potentially enhancing immune function and digestion.",
        "color": "#000000",
        "price": "",
        "visible": "true",
        "tagText": "Coming soon",
        "tagBg": "black"
      },
      {
        "id": 4,
        "bean": "Matcha",
        "profile": "A finely ground green tea powder packed with antioxidants, providing a natural energy boost and potential health benefits.",
        "color": "#000000",
        "price": "",
        "visible": "true",
        "tagText": "Coming soon",
        "tagBg": "black"
      },
      {
        "id": 5,
        "bean": "Coconut Juice",
        "profile": "Refreshing and hydrating juice from young coconuts, rich in electrolytes and potentially beneficial for skin health and hydration.",
        "color": "#000000",
        "price": "",
        "visible": "true",
        "tagText": "Coming soon",
        "tagBg": "black"
      }

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
          The best medicine made for man.
        </Text>
      </Stack>
      <Stack spacing={4} as={Container} maxW={'2xl'} textAlign={'center'}>
      </Stack>
      <Container fontFamily={'Inter'} maxW={'4xl'} mt={10}>
        <SimpleGrid columns={{ base: 2, md: 2, lg: 4 }} spacing={5}>
        <ProductSimple
            food={'Goat Milk'}
            description={'Unpasteurized milk with a rich flavor and higher nutrient content compared to pasteurized milk, offering potential benefits for bone health and digestion.'}
            image={'https://img.freepik.com/premium-photo/milk-summer-farm-generate-ai_98402-20888.jpg'}/>
             <ProductSimple
            food={'Kefir'}
            description={'A fermented milk drink packed with probiotics for gut health, potentially boosting immunity and aiding digestion.'}
            image={'https://static.vecteezy.com/system/resources/previews/024/062/120/non_2x/a-bottle-of-traditional-russian-kefir-milk-ai-generated-free-photo.jpg'}/>
             <ProductSimple
            food={'Sauerkaut'}
            description={'Fermented cabbage rich in probiotics, promoting gut health and potentially enhancing immune function and digestion.'}
            image={'https://img.freepik.com/premium-photo/homemade-sauerkraut-jar-generative-ai_641010-16580.jpg'}/>
        </SimpleGrid>
      </Container>
    </Box>
  )
}