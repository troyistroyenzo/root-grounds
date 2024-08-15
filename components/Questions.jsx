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
      question: "How can I order?",
      answer: "Click the 3D bag to order! You can also message us on any of our platforms to order. Alternatively, you can order through here: https://form.jotform.com/rootandgrounds/order-form"
    },
    {
      question: "What products do you have?",
      answer: "We currently sell coffee beans, sourdough and beef brisket."
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
