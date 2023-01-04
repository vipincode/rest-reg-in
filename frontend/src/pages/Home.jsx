import React from 'react';
import {
  Stack,
  Input,
  Heading,
  Box,
  Text,
  Container,
  Button,
} from '@chakra-ui/react';
import { FaQuestionCircle, FaTicketAlt } from 'react-icons/fa';

export const Home = () => {
  return (
    <Container maxW="lg">
      <Stack spacing={3} textAlign="center">
        <Heading as="h2" size="xl">
          What do you need help with?
        </Heading>
        <Text fontSize="md" fontWeight={600} color="#666">
          Please choose from an option bellow
        </Text>
        <Button colorScheme="blue" display="flex" alignItems="center" gap="4px">
          <FaQuestionCircle />
          Create new ticket
        </Button>
        <Button colorScheme="blue" display="flex" alignItems="center" gap="4px">
          <FaTicketAlt />
          View my ticket
        </Button>
      </Stack>
    </Container>
  );
};
