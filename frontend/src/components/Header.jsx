import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Heading, Box, Divider, Button } from '@chakra-ui/react';
import { AiOutlineUser, AiOutlineLogout } from 'react-icons/ai';
import { VscSignIn } from 'react-icons/vsc';
import { useDispatch, useSelector } from 'react-redux';
import { logout, reset } from '../features/auth/authSlice';

export const Header = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { user } = useSelector((state) => state.auth);

  const onLogout = () => {
    dispatch(logout());
    dispatch(reset());
    navigate('/');
  };

  return (
    <Box
      as="header"
      padding="20px 30px"
      display="flex"
      gap="24px"
      alignItems="center"
      justifyContent="space-between"
      borderBottom="1px solid #ddd"
      marginBottom="30px"
    >
      <Link to="/">
        <Heading as="h2" size="md" noOfLines={1}>
          Support Desk
        </Heading>
      </Link>
      <Box as="nav" display="flex" gap="24px" alignItems="center">
        {user ? (
          <Button size="xs" colorScheme="blue" onClick={onLogout}>
            <AiOutlineLogout /> Sign out
          </Button>
        ) : (
          <>
            <Link to="/register">
              <Box display="flex" gap="4px" alignItems="center">
                <AiOutlineUser />
                Register
              </Box>
            </Link>
            <Link to="/login">
              <Box display="flex" gap="4px" alignItems="center">
                <VscSignIn />
                Sign In
              </Box>
            </Link>
          </>
        )}
      </Box>
    </Box>
  );
};
