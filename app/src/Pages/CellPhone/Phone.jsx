import { Box, Flex, Select, Stack, Text } from "@chakra-ui/react";
import React, { useEffect } from "react";
import { FilterCom } from "../components/FilterCom";
import { nanoid } from "nanoid";
import { useSearchParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { Card } from "../components/Card";
import { fetchData } from "../../Redux/products/action";

export const Phone = () => {
  const phone = useSelector((store) => store.ecommerceData.phone);
  const dispatch = useDispatch();
  const [searchParams] = useSearchParams();
  useEffect(() => {
    if (phone?.length === 0) {
      let params = {
        category: searchParams.getAll("category"),
      };
      dispatch(fetchData(params));
    }
  }, [dispatch, phone?.length, searchParams]);
  console.log(phone);
  return (
    <>
      <Stack
        p={2}
        display={{ md: "flex" }}
        gap="20px"
        flexDirection={{ md: "row" }}
      >
        <Box flex={2}>
          <Box p={3} border={"1px solid"} borderColor="rgb(196,196,196)">
            <FilterCom />
          </Box>
        </Box>

        <Box flex={8}>
          <Box h={35} marginBottom={10} display={'flex'} gap='10px' alignItems={'center'} justifyContent={'end'}>
            <Text >Sort By : </Text>
            <Select w={'20%'}  placeholder="Select option">
              <option value="">Best Selling</option>
              <option value="l2h">Price: Low to High</option>
              <option value="h2l">Price: High to Low</option>
              <option value="">Costomer Ratings</option>
              <option value="">New Arrival</option>
            </Select>
          </Box>
          <Flex flexWrap="wrap" justifyContent="space-around">
            {phone.map((product) => {
              return <Card key={nanoid()} product={product} />;
            })}
          </Flex>
        </Box>
      </Stack>
    </>
  );
};
