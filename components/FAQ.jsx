'use client'

import {
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  Flex,
  Text,
  Container,
  Stack,
  Heading,
} from '@chakra-ui/react';
import { ChevronDownIcon } from '@chakra-ui/icons';
import { useState } from 'react';

export default function SimpleAccordion() {
  const [faqItems, setFaqItems] = useState([
    {
      question: "How 2 order?",
      answer: "Order through our official order form."
    },
    {
      question: "When will I get my beans?",
      answer: "We do batch orders so times may vary (3-5 days) and will be shipped via customers preferred courier."
    },
    {
      question: "Any delivery charges?",
      answer: "Delivery charges will be shouldered by the customer. (because we can't cover everyones shipping!)"
    },
    {
      question: "Where can you deliver?",
      answer: "Anywhere in metro manila. We don't have any way to ship outside the city but we will soon ;)"
    },
    {
      question: "Are you open to B2B partnerships?",
      answer: " Yes, definitely! Connect with us at rootandgrounds@gmail.com. Custom orders are also available within reason."
    }
  ]);

  return (
    <Flex
    bg={'#E6ECE8'} 
      minH={'30vh'}
      py={'10vh'}
      align={'center'}
      justify={'center'}>
      <Container>
      <Stack spacing={4} py={19} as={Container} maxW={'3xl'} textAlign={'center'}>
        <Heading fontSize={'3xl'} color={'black'} fontWeight={'500'} fontFamily={'Inter-Bold'}>FAQs</Heading>
        <Text color={'black'} fontFamily={'Inter'} fontSize={'xl'}>
          Got questions? We got you! 🤔
          <br/>
        </Text>
      </Stack>
        <Accordion allowMultiple width="100%" maxW="lg" rounded="lg">
          {faqItems.map((item, index) => (
            <AccordionItem key={index}>
              <AccordionButton
                display="flex"
                alignItems="center"
                justifyContent="space-between"
                p={4}>
                <Text fontSize="md" fontWeight={600}>{item.question}</Text>
                <ChevronDownIcon fontSize="24px" />
              </AccordionButton>
              <AccordionPanel pb={4}>
                <Text color="gray.600">
                  {item.answer}
                </Text>
              </AccordionPanel>
            </AccordionItem>
          ))}
        </Accordion>
      </Container>
    </Flex>
  );
}
