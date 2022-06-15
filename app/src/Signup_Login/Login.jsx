import React from 'react';
import {
  Flex,
  Box,
  FormControl,
  FormLabel,
  Input,
  Checkbox,
  Stack,
  Button,
  Heading,
  Text,
  useColorModeValue,
  Divider,
} from "@chakra-ui/react";
import { FcGoogle } from "react-icons/fc";
import { FaApple,  FaFingerprint } from "react-icons/fa";

import { Center } from "@chakra-ui/react";
import { Link } from 'react-router-dom';

export default function Login() {
  return (
    <Flex
      minH={"100vh"}
      align={"center"}
      justify={"center"}
      bg={useColorModeValue("gray.50", "gray.800")}
    >
      <Stack spacing={8} mx={"auto"} maxW={"lg"} py={12} px={6}>
        <Stack align={"center"}>
          <Heading fontSize={"4xl"}>Sign in to Best Buy</Heading>
        </Stack>
        <Box
          rounded={"lg"}
          bg={useColorModeValue("white", "gray.700")}
          boxShadow={"lg"}
          p={8}
        >
          <Stack spacing={2}>
            <FormControl id="email">
              <FormLabel>Email address</FormLabel>
              <Input type="email" />
            </FormControl>
            <FormControl id="password">
              <FormLabel>Password</FormLabel>
              <Input type="password" />
            </FormControl>
            <Stack spacing={8}>
              <Stack
                direction={{ base: "column", sm: "row" }}
                align={"start"}
                justify={"space-between"}
              >
                <Checkbox>Remember me</Checkbox>
                <Link to='#' color={"blue.400"}>Forgot password?</Link>
              </Stack>
              <Button
                bg={"blue.400"}
                color={"white"}
                _hover={{
                  bg: "blue.500",
                }}
              >
                Sign in
              </Button>
            </Stack>
          </Stack>
          <Divider marginTop={5} border={"1px solid"} />
          {/* <Stack w={"100%"}> */}
            <All />
          {/* </Stack> */}
        </Box>
      </Stack>
    </Flex>
  );
}

function All() {
  return (
   
      <Stack spacing={2} >
        {/* Facebook */}
        <Button 
          bg={"white.400"}
          color={"blue"}
          _hover={{
            color: "white",
            bg: "blue",
          }}
          variant={"outline"}
          leftIcon={<FaFingerprint />}
        >
          <Center>
            <Text>Sign in with WebAuth</Text>
          </Center>
        </Button>

        {/* Google */}
        <Button
          bg={"white.400"}
          color={"blue"}
          _hover={{
            color: "white",
            bg: "blue",
          }}
          variant={"outline"}
          leftIcon={<FcGoogle />}
        >
          <Center>
            <Text>Sign in with Google</Text>
          </Center>
        </Button>

        {/* Apple */}
        <Button
          bg={"white.400"}
          color={"black"}
          _hover={{
            color: "white",
            bg: "black",
          }}
          variant={"outline"}
          leftIcon={<FaApple />}
        >
          <Center>
            <Text>Sign in with Apple</Text>
          </Center>
        </Button>
        <Text color={'gray.500'}>By continuing you agree to our Terms and Conditions, our Privacy Policy, and the My Best Buy® Program Terms.</Text>
        <Flex align={'center'}>
          <Heading fontSize={'16px'} >Don't have an account?</Heading>
          <Link to='/signup'>Create an account</Link>
        </Flex>
      </Stack>
    
  );
}
