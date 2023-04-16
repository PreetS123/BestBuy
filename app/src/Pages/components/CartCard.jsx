import {
  Button,
  Heading,
  Image,
  Select,
  Text,
  Flex,
  Stack,
  VStack,
} from "@chakra-ui/react";
import React from "react";

export const CartCard = ({
  _id,
  image,
  desc,
  price,
  deleteCart,
  setValue,
}) => {
  return (
    <VStack
      border={"1px solid"}
      borderColor={"gray.300"}
      bg={"white"}
      fontSize={{ base: 8, md: 10, lg: 14 }}
      p={2}
    >
      <Flex
        w={"100%"}
        h={"200px"}
        justify={"space-between"}
        gap="20px"
        p={2}
        // style={{ border: "1px solid red" }}
      >
        <Stack flex={3} align='center' justifyContent={'space-between'} >
          <Image h={"70%"} w={"200px"} src={image} />
          <Text >{desc}</Text>
        </Stack>
        
        <Stack flex={1} align='center' justify={'center'}>
          <Select onChange={(e) => setValue(e.target.value)}>
            <option value={1}>1</option>
            <option value={2}>2</option>
            <option value={3}>3</option>
          </Select>
          <Button onClick={() => deleteCart(_id)} bg={"#fff"}
            color="maroon"
            _hover={{
              transform: "translateY(0px)",
              bg: "fff",
            }}>Remove</Button>
        </Stack>
        <Stack flex={1} align={'center'} justify={'center'}>
          <Heading fontSize={{base:8,md:10,lg:13}}>Price: ${price}</Heading>
        </Stack>
      </Flex>
    </VStack>
  );
};
