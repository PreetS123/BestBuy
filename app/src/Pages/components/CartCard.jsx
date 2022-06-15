import { Button, Heading, Image, Select, Text ,Flex,Stack} from "@chakra-ui/react";
import React from "react";
import { Link } from "react-router-dom";

import {useDispatch} from 'react-redux';
import { deleteProductCart } from "../../Redux/products/action";


export const CartCard = ({ product }) => {
  const dispatch=useDispatch()
    const deleteCart=({id})=>{
        // axios.delete(`http://localhost:8080/cart/${product.id}`)
       console.log(id)
        dispatch(deleteProductCart(id))
    }
  return (
    <div>
      <Flex h={'250px'} justify={'space-evenly'} p={4} >
        <Stack flex={2}>
          <Image maxH={'200px'} src={product.image} />
        </Stack>
        <Stack flex={1}>
          <Text>{product.desc}</Text>
        </Stack>
        <Flex direction={'column'}>
            <Text><span fontWeight={'500'}>PickUp:</span>{product.pickup}</Text>
            <Text><span fontWeight={'500'}>Shipping:</span>{product.shipping}</Text>
        </Flex>
        <Stack flex={1}>
          <Select>
            <option value={1}>1</option>
            <option value={2}>2</option>
            <option value={3}>3</option>
          </Select>
          <button onClick={deleteCart(product.id)}>Remove</button>
        </Stack>
        <Stack>
          <Heading fontSize={13}>${product.price}</Heading>
          <Button bg={"maroon"}>Save ${product.saving}</Button>
          <Text>Was ${product.print}</Text>
        </Stack>
      </Flex>
    </div>
  );
};
