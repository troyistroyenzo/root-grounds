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
} from '@chakra-ui/react'
import { CheckIcon } from '@chakra-ui/icons'

// Replace test data with your own
const features = [
    {
      id: 1,
      bean: 'Brazil Santos',
      profile: 'Chocolate Aroma, Smooth Body, Mild Acidity, Bakers Chocolate',
    },
    {
      id: 2,
      bean: 'Brazil Dutra',
      profile: 'Caramel Aroma, Citrus Acidity, Syrupy Body, Chocolate Flavor & Finish',
    },
    {
      id: 3,
      bean: 'Brazil Cerrado',
      profile: 'Dark Chocolate, Citrus Acidity, Syrupy Body, Chocolate Flavor & Woody Finish',
    },
    {
      id: 4,
      bean: 'Guatemala Huehuetenango',
      profile: 'Orange Aroma, Smooth Body, Mild Acidity, Orange Notes',
    },
    {
      id: 5,
      bean: 'Colombia',
      profile: 'Sweet and Nutty Aroma, Mild Acidity, Chocolate Finish, Nutty Aftertaste',
    },
    {
      id: 6,
      bean: 'El Salvador',
      profile: 'Caramel Aroma, Grapefruit citrus Acidity, Caramel and Dark Chocolate Notes',
    },
    {
      id: 7,
      bean: 'Ethiopia Sidamo',
      profile: 'Jasmine Flower Aroma, Juicy Body, Lemon Acidity, Clean Finish',
    },
    {
      id: 8,
      bean: 'Ethiopia Masha',
      profile: 'Fruity Aroma, Bright Acidity, Berries Flavor, Chocolate Finish',
    },
    {
      id: 9,
      bean: 'Burundi Lampibo',
      profile: 'Slick Body, Dense Citrus Acidity, GrapeFruit and Peach Sweetness',
    },
    {
      id: 10,
      bean: 'Vietnam',
      profile: 'Burnt Wood and Nutty Aroma, Mild Acidity, Medium Body, Nutty and Wood Notes w hint of Cacao Nibs',
    },
  ];
  

export default function GridListWithHeading() {
  return (
    <Box p={4}>
      <Stack spacing={4} as={Container} maxW={'3xl'} textAlign={'center'}>
        <Heading fontSize={'3xl'}>Whole Beans ☕</Heading>
        <Text color={'gray.600'} fontSize={'xl'}>
          Here are some of our offerings
        </Text>
      </Stack>

      <Container maxW={'6xl'} mt={10}>
        <SimpleGrid columns={{ base: 1, md: 2, lg: 4 }} spacing={10}>
          {features.map((feature) => (
            <HStack key={feature.id} align={'top'}>
              <Box color={'green.400'} px={2}>
                <Icon as={CheckIcon} />
              </Box>
              <VStack align={'start'}>
                <Text fontWeight={600}>{feature.bean}</Text>
                <Text color={'gray.600'}>{feature.profile}</Text>
              </VStack>
            </HStack>
          ))}
        </SimpleGrid>
      </Container>
    </Box>
  )
}