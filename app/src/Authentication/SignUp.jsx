import { Box, Button, Center, Flex, Input, Text } from "@chakra-ui/react";
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";

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
    <Flex w={"40%"} margin='auto' alignItems="center" justifyContent={"center"}>
      <Flex direction={"column"} h="600px" justifyContent="space-around">
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
      </Flex>
    </Flex>
  );
};
