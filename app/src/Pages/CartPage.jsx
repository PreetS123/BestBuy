import { Button, Center, Flex, Heading, Stack, Text } from "@chakra-ui/react";
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
  const cart = useSelector((store) => store.ecommerceData.cart);
  const [cartData, setCartData] = useState([]);
  const [value, setValue] =useState(1);
  const dispatch = useDispatch();

  useEffect(() => {
    if (cart?.length === 0) {
      dispatch(getProductCart());
    }
    setCartData(cart);
  }, [dispatch]);

  const deleteCart = (id) => {
    console.log('deleteCart',id);
    axios
      .delete(`http://localhost:8080/cart/${id}`)
      .then((res) => {
        const deleted = cart.filter((el) => el._id !== id);
        setCartData(deleted);
        dispatch(getProductCart())
      });
  };
  // console.log(cart);

    
    let cartTotal= cart.reduce((acc,item)=>{
      return acc+ Number(item.price);
    },0)
    // console.log('totalval',cartTotal);

     let tax= Math.round(cartTotal*0.18);

     let printTotal= cart.reduce((acc,item)=>{
       return acc+Number(item.print);
     },0)
    //  console.log('printval',printTotal);
   
     let saving=printTotal-cartTotal;
      
    //  console.log(value);
  return (
    <>
      <Flex flexDirection={"row"} gap="20px" bg={"gray.50"} w={'90%'} m={'auto'}>
        <Stack flex={4}>
          {cart.map((item) => (
            <CartCard key={nanoid()} {...item} deleteCart={deleteCart} setValue={setValue} />
          ))}
        </Stack>
        <Stack
          bg={"white"}
          flex={1}
          justify={"space-around"}
          p={4}
          spacing={3}
          border={"1px solid"}
          borderColor={"gray.300"}
          height={'fit-content'}
          gap={{base:'10px',md:'20px',lg:'20px'}}
        >
          <Center>
            <Heading fontSize={{base:'20px',md:'25px',lg:'28px'}}>Order Summary </Heading>
          </Center>
          <Stack textAlign={'center'}>
            <Flex justify={"space-between"}>
              <Text>Original Price</Text>
              <Text>${printTotal}</Text>
            </Flex>
            <Flex justify={"space-between"}>
              <Text>Savings</Text>
              <Text>${saving}</Text>
            </Flex>
            <Flex justify={"space-between"}>
              <Text>Shipping</Text>
              <Text>FREE</Text>
            </Flex>
            <Flex justify={"space-between"}>
              <Text>Estimated Sales Tax</Text>
              <Text>${tax}</Text>
            </Flex>
          </Stack>
          <Stack>
            <Flex justify={"space-around"}>
              <Heading fontSize={16}>Total</Heading>
              <Heading fontSize={16}>${(cartTotal+tax)}</Heading>
            </Flex>
            <Button bg={"yellow"}>
              <Center>
                <Link to="/checkout">Checkout</Link>
              </Center>
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
