import { Box, Flex, Select, Stack, Text } from "@chakra-ui/react";
import React, { useEffect } from "react";
import { FilterCom } from "../components/FilterCom";
import { useSearchParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { Card } from "../components/Card";
import { fetchTVData, sortTVDataH2L, sortTVDataL2H } from "../../Redux/products/action";

export const Tv = () => {
  const tvdata = useSelector((store) => store.ecommerceData.tvdata);
  const dispatch = useDispatch();
  const [searchParams] = useSearchParams();
  useEffect(() => {
    if (tvdata?.length === 0) {
      let params = {
        category: searchParams.getAll("category"),
      };
      dispatch(fetchTVData(params));
    }
  }, [dispatch, tvdata?.length, searchParams]);
  console.log(tvdata);

  const handleChangeSortingOption=(e)=>{
    let val=e.target.value;
    if (val === 'l2h') {
      dispatch(sortTVDataL2H());
    } else if (val === 'h2l') {
      dispatch(sortTVDataH2L());
    }else{
      dispatch(fetchTVData());
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
              <option value="all">ALL</option>
              <option value="l2h">Price: Low to High</option>
              <option value="h2l">Price: High to Low</option>
              <option value="">Costomer Ratings</option>
              <option value="">New Arrival</option>
            </Select>
          </Box>
          <Flex flexWrap="wrap" justifyContent="space-around">
            {tvdata.map((product,i) => {
              return <Card key={i} product={product} />;
            })}
          </Flex>
        </Box>
      </Stack>
    </>
  );
}
