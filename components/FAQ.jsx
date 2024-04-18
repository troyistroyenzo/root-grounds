'use client'

import {
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  Flex,
  Text,
  Container,
} from '@chakra-ui/react';
import { ChevronDownIcon } from '@chakra-ui/icons';
import { useState } from 'react';

export default function SimpleAccordion() {
  const [faqItems, setFaqItems] = useState([
    {
      question: "How can I order?",
      answer: "All orders will be purchased through our order form. Note: Limited stock for each batch."
    },
    {
      question: "When will I get my beans?",
      answer: "All orders will be ready for delivery every Monday and will be shipped via customers preferred courier."
    },
    {
      question: "Any delivery charges?",
      answer: "Delivery charges will be shouldered by the customer."
    },
    {
      question: "Is Root & Grounds open to B2B partnerships?",
      answer: " Yes, definitely! Connect with us at rootandgrounds@gmail.com. Custom orders are also available within reason."
    }
  ]);

  return (
    <Flex
      minH={'100vh'}
      align={'center'}
      justify={'center'}>
      <Container>
        <Accordion allowMultiple width="100%" maxW="lg" rounded="lg">
          {faqItems.map((item, index) => (
            <AccordionItem key={index}>
              <AccordionButton
                display="flex"
                alignItems="center"
                justifyContent="space-between"
                p={4}>
                <Text fontSize="md">{item.question}</Text>
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
