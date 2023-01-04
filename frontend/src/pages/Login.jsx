import React from 'react';
import { useNavigate } from 'react-router-dom';
import {
  Stack,
  Input,
  Heading,
  Box,
  Text,
  Container,
  Button,
  Spinner,
} from '@chakra-ui/react';
import { FaSignInAlt } from 'react-icons/fa';
import { toast } from 'react-toastify';
import { useDispatch, useSelector } from 'react-redux';
import { login, reset } from '../features/auth/authSlice';

export const Login = () => {
  const [formData, setFormData] = React.useState({
    email: '',
    password: '',
  });

  const { email, password } = formData;

  // Access redux data
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { user, isLoading, isSuccess, isError, message } = useSelector(
    (state) => state.auth
  );

  React.useEffect(() => {
    if (isError) {
      toast.error(message);
    }
    // Redirect
    if (isSuccess || user) {
      navigate('/');
    }
    dispatch(reset());
  }, [isError, isLoading, isSuccess, navigate, message, user, dispatch]);

  const onChange = (e) => {
    setFormData((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };

  const onSubmit = (e) => {
    e.preventDefault();
    const userData = {
      email,
      password,
    };
    dispatch(login(userData));
  };

  if (isLoading) {
    return (
      <Spinner
        thickness="4px"
        speed="0.65s"
        emptyColor="gray.200"
        color="blue.500"
        size="lg"
      />
    );
  }

  return (
    <Container maxW="lg">
      <Box display="flex" alignItems="center" justifyContent="center" gap="4px">
        <FaSignInAlt />
        <Heading as="h2" size="md" noOfLines={1}>
          SignIn
        </Heading>
      </Box>
      <Box textAlign="center">
        <Text fontSize="md" fontWeight={600} color="#666">
          Please login to get support
        </Text>
      </Box>
      <Box marginTop={30}>
        <Stack spacing={3}>
          <Input
            type="email"
            name="email"
            value={email}
            onChange={onChange}
            variant="outline"
            placeholder="Email"
            required
          />
          <Input
            type="password"
            name="password"
            value={password}
            onChange={onChange}
            variant="outline"
            placeholder="Password"
            required
          />

          <Button onClick={onSubmit} colorScheme="blue">
            Sign In
          </Button>
        </Stack>
      </Box>
    </Container>
  );
};
