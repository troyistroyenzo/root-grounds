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
      <Heading fontSize={'3xl'} color={'black'} fontWeight={'500'} fontFamily={'Inter-Bold'}>Drinks</Heading>
        <Text color={'black'} fontFamily={'Inter'} fontSize={'xl'}>
          The best medicine made for man.
        </Text>
      </Stack>
      <Stack spacing={4} as={Container} maxW={'2xl'} textAlign={'center'}>
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