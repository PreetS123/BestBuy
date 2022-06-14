import { Box, Button, Center, Divider, Flex, Input, Text } from "@chakra-ui/react";
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { FcGoogle } from 'react-icons/fc';


export const SignUp = () => {
  const [Name, setName] = useState("");
  const [userMail, setuserMail] = useState("");
  const [userPassword, setUserPassword] = useState("");
  const [userMobile, setUserMobile] = useState("");

  const handleSubmit = (e) => {
    let userData = {
      name: Name,
      email: userMail,
      password: userPassword,
      mobile: userMobile,
    };
    console.log(userData);
  };

  return (
    <Flex   w={"40%"} margin='100px auto' alignItems="center" justifyContent={"center"}>
      <Flex border={'1px solid'} p={4} borderColor='rgb(196,196,196)' direction={"column"} h="600px" justifyContent="space-around">
        <Text fontWeight={700} fontSize={30} textAlign={'center'}>Create an Account</Text>
        <Text>
          Shopping for your business?
          <Link to="#">Create a bussiness account.</Link>
        </Text>

        <Box>
          <Input
            placeholder="First Name"
            onChange={(e) => setName(e.target.value)}
            required
          />
        </Box>
        <Box>
          <Input placeholder="Last Name" required />
        </Box>
        <Box>
          <Input
            placeholder="Email Address"
            onChange={(e) => setuserMail(e.target.value)}
            required
          />
        </Box>
        <Box>
          <Input
            placeholder="Password"
            onChange={(e) => setUserPassword(e.target.value)}
            required
          />
        </Box>
        <Box>
          <Input placeholder="Confirm Password" required />
        </Box>
        <Box>
          <Input
            placeholder="Mobile Phone Number"
            onChange={(e) => setUserMobile(e.target.value)}
            required
          />
        </Box>
        <Box>
          <Center p={8}>
            <Button
              w={"full"}
              maxW={"md"}
              colorScheme={"messenger"}
              onClick={() => handleSubmit()}
            >
              <Center>
                <Text>SUBMIT </Text>
              </Center>
            </Button>
          </Center>
        </Box>
        <Divider border={'2px'}/>
        <Button w={'full'} variant={'outline'} leftIcon={<FcGoogle />}>
          <Center>
            <Text>Sign in with Google</Text>
          </Center>
        </Button>
      </Flex>
    </Flex>
  );
};
