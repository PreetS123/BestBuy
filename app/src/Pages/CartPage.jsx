import { Button, Center, Flex,Heading,Stack, Text} from "@chakra-ui/react";
import React, { useEffect } from "react";
import { FaArrowRight } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { getProductCart } from "../Redux/products/action";
import { CartCard } from "./components/CartCard";
import { nanoid } from "nanoid";
import axios from "axios";
import { useState } from "react";

export const CartPage = () => {
  const [cartData,setCartData]=useState([]);
  // const [value, setValue] =useState(0);
  const cart = useSelector((store) => store.ecommerceData.cart);
  const dispatch = useDispatch();
  
  useEffect(() => {
    if (cart?.length === 0) {
     
      dispatch(getProductCart());
    }
    setCartData(cart)
  }, [dispatch, cart?.length]);
  

    const deleteCart=(id)=>{
        axios.delete(`http://localhost:8080/cart/${id}`).then(res=>{
          const deleted=cart.filter((el) => el.id!==id)
          setCartData(deleted)
        })
   
        // console.log("deleteproduct:",id)
    }
    // console.log(cart);
    
  // const call = (cartData) => {
  //   var subTotal = cartData.reduce(function (acc, elem) {
  //     return acc + elem.price ;
  //   }, 0);
  //   setValue(subTotal);
  // };
  //   console.log(value)
  return (
    <>
      <Flex  flexDirection={"row"} gap='20px' p={6} bg={'gray.50'}>
        <Stack flex={4} >{
              cartData.map(item=>(<CartCard key={nanoid()} {...item} deleteCart={deleteCart}/>))
        }</Stack>
        <Stack bg={'white'} flex={1} justify={'space-around'} p={4} spacing={3} border={'1px solid'} borderColor={'gray.300'}>
          <Center>
            <Heading>Order Summary </Heading>
          </Center>
          <Stack>
            <Flex justify={"space-around"}>
              <Text>Original Price</Text>
              <Text>$1212.98</Text>
            </Flex>
            <Flex justify={"space-around"}>
              <Text>Savings</Text>
              <Text>-$150</Text>
            </Flex>
            <Flex justify={"space-around"}>
              <Text>Shipping</Text>
              <Text>FREE</Text>
            </Flex>
            <Flex justify={"space-around"}>
              <Text>Estimated Sales Tax</Text>
              <Text>$1162.98</Text>
            </Flex>
          </Stack>
          <Stack>
            <Flex justify={"space-around"}>
              <Heading fontSize={16}>Total</Heading>
              <Heading fontSize={16}>$1162.98</Heading>
            </Flex>
            <Button  bg={"yellow"}>
              <Center><Link to='/checkout'>Checkout</Link></Center>
            </Button>
            <Text>Sign in to get My Best Buy™ Points</Text>
          </Stack>
          <Stack>
            <Heading fontSize={18}>Looking for a lease to own option?</Heading>
            <Flex>
              <Text>Enjoy the tech you want today.</Text>
              <Link to="#">
                Learn more <FaArrowRight />{" "}
              </Link>
            </Flex>
          </Stack>
          <Stack>
            <Heading fontSize={16}>Buying a gift for someone special?</Heading>
            <Text>Gift options can be added in checkout.</Text>
            <Link to="#">
              Learn more <FaArrowRight />
            </Link>
          </Stack>
        </Stack>
      </Flex>
    </>
  );
};
