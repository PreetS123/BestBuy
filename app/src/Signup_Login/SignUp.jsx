import {
  Box,
  Button,
  Center,
  Divider,
  Flex,
  Input,
  InputGroup,
  InputRightElement,
  Text,
} from "@chakra-ui/react";
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { FcGoogle } from "react-icons/fc";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import {userSignup} from '../Redux/Auth/Action';

export const SignUp = () => {
  const navigate = useNavigate();
  const dispatch=useDispatch();
  const [showPassword, setShowPassword] = useState(false);
  const [confirmPassword, setConfirmPassword] = useState(false);
  // const {isLoading,isError,token}=useSelector((state)=>state.auth);
  const [data, setData] = useState({});
  const handleChange = (e) => {
    const { name, value } = e.target;
    setData({
      ...data,
      [name]: value,
    })
  };
  const handleSubmit=()=>{
    dispatch(userSignup(data));
    navigate("/login");
  }
 

  return (
    <Flex
      w={"40%"}
      margin="100px auto"
      alignItems="center"
      justifyContent={"center"}
    >
      <Flex
        border={"1px solid"}
        p={4}
        borderColor="rgb(196,196,196)"
        direction={"column"}
        h="600px"
        justifyContent="space-around"
      >
        <Text fontWeight={700} fontSize={30} textAlign={"center"}>
          Create an Account
        </Text>
        <Text>
          Shopping for your business?
          <Link to="#">Create a bussiness account.</Link>
        </Text>

        <Box>
          <Input
            placeholder="Enter your first name here.."
            onChange={handleChange}
            name="firstname"
            type="text"
            required
          />
        </Box>
        <Box>
          <Input 
          placeholder="Enter your last name here..." 
          name="lastname" 
          type="text" 
          onChange={handleChange}
          required 
          />
        </Box>
        <Box>
          <Input
            placeholder="Enter your mobile number here"
            onChange={handleChange}
            name="mobileno"
            type="number"
            required
          />
        </Box>
        <Box>
          <Input
            placeholder="Enter your email here..."
            onChange={handleChange}
            name="email"
            type="email"
            required
          />
        </Box>
        <Box>
          <InputGroup>
          <Input
            placeholder="Create your password"
            onChange={handleChange}
            name="password"
            type={showPassword ? "text" : "password"}
            required
          />
          <InputRightElement h={"full"}>
                  <Button
                    variant={"ghost"}
                    onClick={() =>
                      setShowPassword((showPassword) => !showPassword)
                    }
                  >
                    {showPassword ? <FaEye style={{height:'25px',width:'25px'}}/> : <FaEyeSlash style={{height:'25px',width:'25px'}}/>}
                  </Button>
                </InputRightElement>
                </InputGroup>
        </Box>
        <Box>
          <InputGroup>
          <Input 
          placeholder="Confirm your password" 
          type='password'
          required />
          <InputRightElement h={"full"}>
                  <Button
                    variant={"ghost"}
                    onClick={() =>
                      setConfirmPassword((confirmPassword) => !confirmPassword)
                    }
                  >
                    {confirmPassword ? <FaEye style={{height:'25px',width:'25px'}}/> : <FaEyeSlash style={{height:'25px',width:'25px'}}/>}
                  </Button>
                </InputRightElement>
          </InputGroup>
        </Box>
        <Box>
          <Center p={8}>
            <Button
              w={"full"}
              maxW={"md"}
              colorScheme={"messenger"}
              onClick={ handleSubmit}
            >
              SUBMIT 
            </Button>
          </Center>
        </Box>
        <Divider border={"2px"} />
        <Button w={"full"} variant={"outline"} leftIcon={<FcGoogle />}>
          <Center>
            <Text>Sign in with Google</Text>
          </Center>
        </Button>
      </Flex>
    </Flex>
  );
};

