import { Box, Flex, Select, Stack, Text } from "@chakra-ui/react";
import React, { useEffect } from "react";
import { FilterCom } from "../components/FilterCom";
import { useSearchParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { Card } from "../components/Card";
import { fetchLaptopData, sortLaptopDataH2L, sortLaptopDataL2H } from "../../Redux/products/action";

export const Computer = () => {
  const laptop = useSelector((store) => store.ecommerceData.laptop);
  const dispatch = useDispatch();
  const [searchParams] = useSearchParams();
  useEffect(() => {
    if (laptop?.length === 0) {
      let params = {
        category: searchParams.getAll("category"),
      };
      dispatch(fetchLaptopData(params));
    }
  }, [dispatch, laptop?.length, searchParams]);
  // console.log(laptop);
  const handleChangeSortingOption=(e)=>{
    let val=e.target.value;
    if (val === 'l2h') {
      dispatch(sortLaptopDataL2H());
    } else if (val === 'h2l') {
      dispatch(sortLaptopDataH2L());
    }else{
      dispatch(fetchLaptopData());
    }
  }
  return (
    <>
      <Stack
        p={2}
        display={{ md: "flex" }}
        gap="20px"
        flexDirection={{ md: "row"}}
      >
        <Box flex={2}>
          <Box p={3} border={"1px solid"} borderColor="rgb(196,196,196)">
            <FilterCom />
          </Box>
        </Box>

        <Box flex={8}>
          <Box h={35} marginBottom={10} display={'flex'} gap='10px' alignItems={'center'} justifyContent={'end'}>
            <Text >Sort By : </Text>
            <Select w={'20%'}  placeholder="Select option" onChange={(e)=>handleChangeSortingOption(e)}>
              <option value="all">All</option>
              <option value="l2h">Price: Low to High</option>
              <option value="h2l">Price: High to Low</option>
            </Select>
          </Box>
          <Flex flexWrap="wrap" justifyContent="space-around">
            {laptop.map((product,i) => {
              return <Card key={i} product={product} />;
            })}
          </Flex>
        </Box>
      </Stack>
    </>
  );
}
