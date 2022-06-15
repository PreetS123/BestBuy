import { Button, Center, Flex,Heading,Stack, Text} from "@chakra-ui/react";
import React, { useEffect } from "react";
import { FaArrowRight } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { getProductCart } from "../Redux/products/action";
import { CartCard } from "./components/CartCard";
import { nanoid } from "nanoid";

export const CartPage = () => {
  const cart = useSelector((store) => store.ecommerceData.cart);
  const dispatch = useDispatch();
  
  useEffect(() => {
    if (cart?.length === 0) {
     
      dispatch(getProductCart());
    }
  }, [dispatch, cart?.length]);
  console.log(cart);
  return (
    <div>
      <Flex flexDirection={"row"}>
        <Stack flex={4}>{
              cart.map(item=>(<CartCard key={nanoid()} product={item}/>))
        }</Stack>
        <Stack flex={1} spacing={3}>
          <Center>
            <Heading>Order Summary </Heading>
          </Center>
          <Stack>
            <Flex justify={"space-around"}>
              <Text>Original Price</Text>
              <Text>$</Text>
            </Flex>
            <Flex justify={"space-around"}>
              <Text>Savings</Text>
              <Text>-$</Text>
            </Flex>
            <Flex justify={"space-around"}>
              <Text>Shipping</Text>
              <Text>FREE</Text>
            </Flex>
            <Flex justify={"space-around"}>
              <Text>Estimated Sales Tax</Text>
              <Text>$</Text>
            </Flex>
          </Stack>
          <Stack>
            <Flex justify={"space-around"}>
              <Heading fontSize={16}>Total</Heading>
              <Heading fontSize={16}>$</Heading>
            </Flex>
            <Button bg={"yellow"}>
              <Center>Checkout</Center>
            </Button>
            <Text>Sign in to get My Best Buy™ Points</Text>
          </Stack>
          <Stack>
            <Heading>Looking for a lease to own option?</Heading>
            <Flex>
              <Text>Enjoy the tech you want today.</Text>
              <Link to="#">
                Learn more <FaArrowRight />{" "}
              </Link>
            </Flex>
          </Stack>
          <Stack>
            <Heading>Buying a gift for someone special?</Heading>
            <Text>Gift options can be added in checkout.</Text>
            <Link to="#">
              Learn more <FaArrowRight />
            </Link>
          </Stack>
        </Stack>
      </Flex>
    </div>
  );
};
