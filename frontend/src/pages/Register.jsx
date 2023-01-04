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
import { FaUser } from 'react-icons/fa';
import { toast } from 'react-toastify';
import { useDispatch, useSelector } from 'react-redux';
import { register, reset } from '../features/auth/authSlice';

export const Register = () => {
  const [formData, setFormData] = React.useState({
    name: '',
    email: '',
    password: '',
    password2: '',
  });

  const { name, email, password, password2 } = formData;
  const navigate = useNavigate();
  // Access redux data
  const dispatch = useDispatch();
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
    if (password != password2) {
      toast.error('Password do not match');
    } else {
      const userData = {
        name,
        email,
        password,
      };
      dispatch(register(userData));
    }
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
        <FaUser />
        <Heading as="h2" size="md" noOfLines={1}>
          Register
        </Heading>
      </Box>
      <Box textAlign="center">
        <Text fontSize="md" fontWeight={600} color="#666">
          Please create an account
        </Text>
      </Box>
      <Box marginTop={30}>
        <Stack spacing={3}>
          <Input
            type="text"
            name="name"
            value={name}
            onChange={onChange}
            variant="outline"
            placeholder="Name"
            required
          />
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
          <Input
            type="password"
            name="password2"
            value={password2}
            onChange={onChange}
            variant="outline"
            placeholder="Confirm password"
            required
          />
          <Button onClick={onSubmit} colorScheme="blue">
            Register now
          </Button>
        </Stack>
      </Box>
    </Container>
  );
};
