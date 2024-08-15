'use client'

import {
  Box,
  Flex,
  Heading,
  Text,
  Stack,
  Container,
  Image,
  Link,
} from '@chakra-ui/react'

// Example JSON data for clients with URLs
const clientsData = [
  {
    avatarSrc:
      'https://res.cloudinary.com/dlgyqy69b/image/upload/v1723706398/logo_2_-_Copy_tgymdf.png',
    name: 'Perk Cup Coffee',
    link: 'https://www.facebook.com/coffeeperkcup', // Add the link to the client's website
  },
  {
    avatarSrc:
      'https://res.cloudinary.com/dlgyqy69b/image/upload/v1723706403/OFFICIAL_BROWN_VER_LOGO_afziqv.png',
    name: 'Culinary Arts Club HG',
    link: 'https://www.instagram.com/culinaryartsclub.hu/', // Add the link to the client's website
  },
]

export default function ClientsGrid() {
  return (
    <Box
      fontFamily={'inter'}
      margin={'2rem'}
      bg={'linear-gradient(90deg, #e8e8e8, #f2e3da)'}
      py={16}
    >
      <Container maxW={'7xl'} as={Stack} spacing={12}>
        <Stack spacing={0} align={'center'}>
          <Heading fontFamily={'inter'}>Our Clients</Heading>
          <Text>First hand experience of our products.</Text>
        </Stack>
        <Flex
          direction={{ base: 'column', md: 'row' }}
          align={'center'}
          justify={'center'}
          wrap={'wrap'}
          gap={10}
        >
          {clientsData.map((client, index) => (
            <Link key={index} href={client.link} isExternal>
              <Stack align={'center'} spacing={4}>
                <Image
                  boxSize={'100px'}
                  objectFit={'contain'}
                  src={client.avatarSrc}
                  alt={`${client.name} logo`}
                />
                <Text fontWeight={600}>{client.name}</Text>
              </Stack>
            </Link>
          ))}
        </Flex>
      </Container>
    </Box>
  )
}
