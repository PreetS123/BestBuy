import {
  Box,
  Button,
  Center,
  Flex,
  Heading,
  Image,
  Stack,
  Text,
  useColorModeValue,
} from "@chakra-ui/react";
import { nanoid } from "nanoid";
import { FaRegObjectGroup, FaTruck } from "react-icons/fa";
import { NavLink } from "react-router-dom";
export const Card = ({
  image,
  desc,
  model,
  rate,
  count,
  pickup,
  shipping,
  price,
  saving,
  print,
  offer,
}) => {
  return (
    <Flex w={"100%"} py={4}>
      <Stack
        w={{ sm: "100%", md: "100%" }}
        height={{ sm: "476px", md: "30rem" }}
        direction={{ base: "column", md: "row" }}
        bg={useColorModeValue("white", "gray.900")}
        borderTop="1px"
        borderColor="rgb(196,196,196)"
        padding={10}
        gap={6}
      >
        <Flex flex={1}>
          <Image objectFit="cover" boxSize="100%" src={image} />
        </Flex>
        <Stack flex={1} flexDirection="column" p={1} pt={2}>
          <Text>Sponsered</Text>

          <Text fontWeight={600} color={"gray.500"} size="sm" mb={4}>
            {desc}
          </Text>
          <Text>{count}</Text>
          <Flex
            justifyContent={"space-around"}
            color={useColorModeValue("gray.700", "gray.400")}
            px={3}
          >
            <Box>
              <span>Model: </span> {model}
            </Box>
            <Box>
              <span>SKU: </span> {nanoid()}
            </Box>
          </Flex>
          <Stack direction={"column"} mt={6}>
            <Heading fontSize={"20px"} color="green">
              Get it today
            </Heading>
            <Box>
              <Flex display={"flex"} alignItems={"center"}>
                <Text fontSize="2xl" marginRight={"5px"}>
                  {" "}
                  <FaRegObjectGroup />{" "}
                </Text>
                <Heading fontSize={"16px"}>Pickup:</Heading> {pickup}
              </Flex>
              <Text color={"gray.400"}>
                Act Fast - Only few left at your store!
              </Text>
              <NavLink to="#">See all pickup locations</NavLink>
            </Box>
            <Box>
              <Flex alignItems={"center"}>
                <Text fontSize="2xl" marginRight={"5px"}>
                  <FaTruck />
                </Text>
                <Heading fontSize={"16px"}>Shipping: </Heading> {shipping}
              </Flex>
              <Text color={"gray.400"}>
                This item is only available in certain markets.
              </Text>
              <NavLink to="#">Estimate for 969339</NavLink>
            </Box>
          </Stack>
        </Stack>
        <Stack flex={1} flexDirection="column" p={1} pt={2}>
          <Heading>${price}</Heading>
          <Text>with activation today</Text>
          <Flex display={"flex"}>
            <Button h={"30px"} bg={"maroon"} color="white" fontWeight={500}>
              Save ${saving}
            </Button>{" "}
            <Text>Was ${print}</Text>
          </Flex>
          <Text fontWeight={500}>{offer}</Text>
          <Button w="80%" bg={"blue"} color="white">
            {" "}
            ADD TO CART
          </Button>
        </Stack>
      </Stack>
    </Flex>
  );
};
