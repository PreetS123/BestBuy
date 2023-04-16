import {
  Box,
  Button,
  Flex,
  Heading,
  Image,
  Stack,
  Text,
  useColorModeValue,
} from "@chakra-ui/react";
import { nanoid } from "nanoid";
import { FaRegObjectGroup, FaTruck } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import { addProductCart } from "../../Redux/products/action";

export const Card = ({ product }) => {
  const uniqueid = nanoid();
  console.log('product',product);
  // const params=useParams(id)
  const dispatch = useDispatch();
  const cart = useSelector((store) => store.ecommerceData.cart);


  const addToCartHandler = (payload) => {
    // console.log('item added to cart',payload);
    dispatch(addProductCart(payload));
  };
  return (
    <Flex w={"100%"} py={4}>
      <Stack
        w={{ sm: "100%", md: "100%" }}
        height={{ sm: "476px", md: "30rem" }}
        direction={{ base: "column", md: "row", sm: "row" }}
        bg={useColorModeValue("white", "gray.900")}
        borderTop="1px"
        borderColor="rgb(196,196,196)"
        padding={10}
        gap={6}
      >
        <Flex flex={1}>
          <Image objectFit="cover" boxSize="100%" src={product.image} />
        </Flex>
        <Stack flex={1} flexDirection="column" p={1} pt={2}>
          <Text>Sponsered</Text>

          <Text fontWeight={600} color={"gray.500"} size="sm" mb={4}>
            {product.desc}
          </Text>
          <Text>{product.count}</Text>
          <Flex
            justifyContent={"space-around"}
            color={useColorModeValue("gray.700", "gray.400")}
            px={3}
          >
            <Box>
              <span>Model: </span> {product.model}
            </Box>
            <Box>
              <span>SKU: </span> {product._id}
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
                {/* <Heading fontSize={"16px"}>Pickup:</Heading> */}
                 {product.pickup}
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
                {/* <Heading fontSize={"16px"}>Shipping: </Heading>{" "} */}
                {product.shipping}
              </Flex>
              <Text color={"gray.400"}>
                This item is only available in certain markets.
              </Text>
              <NavLink to="#">Estimate for 969339</NavLink>
            </Box>
          </Stack>
        </Stack>
        <Stack flex={1} flexDirection="column" p={1} pt={2}>
          <Heading>${product.price}</Heading>
          <Text>with activation today</Text>
          <Flex display={"flex"}>
            <Button
              h={"30px"}
              bg={"maroon"}
              color="white"
              fontWeight={500}
              _hover={{
                transform: "translateY(0px)",
                bg: "maroon",
              }}
            >
              Save $ {Number(product.print) - Number(product.price)}
            </Button>{" "}
            <Text>Was ${product.print}</Text>
          </Flex>
          <Text fontWeight={500}>{product.offer}</Text>
          <Button
            rounded={"none"}
            w={"full"}
            mt={8}
            size={"lg"}
            py={"7"}
            bg={useColorModeValue("yellow", "orange.900")}
            color={useColorModeValue("white", "white.500")}
            textTransform={"uppercase"}
            _hover={{
              transform: "translateY(2px)",
              boxShadow: "lg",
            }}
            onClick={() => addToCartHandler(product)}
            disabled={cart.length>4}
          >
            {" "}
            ADD TO CART
          </Button>
        </Stack>
      </Stack>
    </Flex>
  );
};
