import {
  Box,
  Button,
  Divider,
  Flex,
  Heading,
  Image,
  Stack,
  Text,
  useColorModeValue,
  HStack,
} from "@chakra-ui/react";
import React from "react";
import { Link } from "react-router-dom";
import { nanoid } from "nanoid";
import "./Home.css";

var tppicks = [
  {
    id: 1,
    image:
      "https://pisces.bbystatic.com/image2/BestBuy_US/images/products/6215/6215932_sd.jpg;maxHeight=214;maxWidth=278",
    url: "Apple Watch Series 7(GPS) 41mm Midnight...",
  },
  {
    id: 2,
    image:
      "https://pisces.bbystatic.com/image2/BestBuy_US/images/products/6487/6487447_sd.jpg;maxHeight=214;maxWidth=278",
    url: "Apple-iPhone 13 Pro Max 5G 128GB-Alpine Gree...",
  },
  {
    id: 3,
    image:
      "https://pisces.bbystatic.com/image2/BestBuy_US/images/products/4901/4901809_sd.jpg;maxHeight=214;maxWidth=278",
    url: "Apple-10.2-Inch iPad (Latest Model) with Wi-Fi...",
  },
  {
    id: 4,
    image:
      "https://pisces.bbystatic.com/image2/BestBuy_US/images/products/5721/5721600_sd.jpg;maxHeight=214;maxWidth=278",
    url: "Steel|Series-Apex Pro TKL Wired Mechanical...",
  },
];

export const Home = () => {
  return (
    <Box 
    style={{ 
      width: "100%", 
      // border:"5px solid red" 
      }}>
      {/* first box  */}
      <Flex
        direction={{ base: "column", md: "row", lg: "row" }}
        h={{ base: "fit-content", md: "600px", lg: "600px" }}
      >
        <Stack
          flex={2}
          p={2}
          justifyContent="center"
          alignItems={"center"}
          backgroundImage={`url("https://pisces.bbystatic.com/image2/BestBuy_US/dam/MMT-510776_2022TopDeals-GHPApp-LV-55adde1f-dd0b-48d7-9a08-b28bbc00187d.jpg")`}
        >
          <Button
            h={10}
            w={20}
            bg={useColorModeValue("blue.600", "blue.900")}
            color={useColorModeValue("white", "blue.100")}
            p={4}
            _hover={{
              transform: "translateY(2px)",
              boxShadow: "lg",
            }}
          >
            Shop Now
          </Button>
        </Stack>
        <Flex direction={"column"} flex={3} gap="5px">
          <Flex flex={2} p={2} border={"1px solid"} borderColor={"gray.300"}>
            {tppicks.map((val) => {
              return (
                <div
                  style={{
                    gap: "20px",
                    justifyContent: "center",
                    textAlign: "center",
                  }}
                >
                  <Crd key={nanoid()} image={val.image} url={val.url} />
                </div>
              );
            })}
          </Flex>
          <Flex justify={"space-around"} flex={3}>
            <Box
              border={"1px solid"}
              borderColor={"gray.300"}
              h={"70%"}
              display="flex"
              flexDirection={"column"}
              justifyContent="space-around"
              p={2}
              gap="8px"
            >
              <Button
                w={40}
                bg={"blue"}
                color="white"
                _hover={{
                  transform: "translateY(2px)",
                  boxShadow: "lg",
                }}
              >
                <span>Outlet</span> <span>Deals</span>
              </Button>
              <Image
                h={"50%"}
                src="https://pisces.bbystatic.com/image2/BestBuy_US/Gallery/ClearanceOpenBox_White-217158.png;maxHeight=230;maxWidth=330"
              />
              <Link to="#">View outlet deals</Link>
            </Box>
            <Box
              border={"1px solid"}
              borderColor={"gray.300"}
              h={"70%"}
              display="flex"
              flexDirection={"column"}
              justifyContent="space-around"
            >
              <Heading fontSize={16}>Continue</Heading>
              <Image
                h={{ base: "30%", md: "40%", lg: "40%" }}
                src="https://pisces.bbystatic.com/image2/BestBuy_US/images/products/6500/6500470_sd.jpg;maxHeight=428;maxWidth=644"
              />
              <Link to="#">TCL - 43" Class 4-Series 4k UHD HD</Link>
              <Link to="/cart">Go to Cart</Link>
            </Box>
          </Flex>
        </Flex>
      </Flex>

      {/* You viewed box starts here 2nd Box */}

     

      {/* 3rd div starts from here */}

      <HStack
        spacing='20px'
        mb={2}
        mt={4}
        p={2}
      >
        <Box
          w={{base:'100%',lg:'50%'}}

          style={{
            display: "flex",
            backgroundColor: "rgb(196,196,196)",
            alignItems: "center",
            justifyContent: "center",
          }}
          
        >
           <Box
            style={{
              display: "flex",
              flexDirection: "row",
              gap: "50px",
            }}
          >
            <Box>
              <img
                src="https://pisces.bbystatic.com/image2/BestBuy_US/dam/GL-65963-confident-210831-c34d2a74-8b79-41cd-8161-b9987666f7d6.png;maxHeight=72;maxWidth=72"
                alt=""
              />
            </Box>

            <Box p={2}>
              {" "}
              <Heading fontSize={15}>Shop safely and confidently</Heading>
              <Text fontSize={12} color={"blue"}>
                See our safety procedure
              </Text>
            </Box>
           </Box>
        </Box>
        <Box
          w={{base:'100%',lg:'50%'}}
          style={{
            display: "flex",
            backgroundColor: "rgb(196,196,196)",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Box
            style={{
              display: "flex",
              flexDirection: "row",
              gap: "50px",
            }}
          >
            <Box>
              <img
                src="https://pisces.bbystatic.com/image2/BestBuy_US/dam/GL-65963-expert-210831-70c599ed-fc34-47d8-9b93-85f899d93c8f.png;maxHeight=72;maxWidth=72"
                alt=""
              />
            </Box>

            <Box p={2}>
              {" "}
              <Heading fontSize={15}>Get help shopping from home.</Heading>
              <Text fontSize={12} color={"blue"}>
                Shop with an Expert
              </Text>
            </Box>
          </Box>
        </Box>
      </HStack>

      {/* 4th div starts from here  */}

      <Stack
        w={"100%"}
        h={"60px"}
        backgroundColor={"yellow"}
        justify="center"
        align="center"
      >
        <Flex
          w={{ base: "100%", md: "70%", lg: "50%" }}
          align="center"
          justify="space-around"
        >
          <Heading fontSize={{ base: "12px", md: "20px", lg: "20px" }}>
            Insignia air fryers product recall .
          </Heading>
          <Link
            to="#"
            color="blue"
            fontSize={{ base: "10px", md: "20px", lg: "20px" }}
          >
            Learn more.
          </Link>
        </Flex>
      </Stack>

      {/* 5th div starts here */}

      <Flex
        p={2}
        gap="15px"
        w="100%"
        h={{ base: 300, md: 400, lg: 500 }}
        bg={"gray.100"}
        justify={"space-around"}
      >
        <Stack
          p={{ base: 4, md: 4, lg: 10 }}
          h={"full"}
          w={"47%"}
          backgroundImage={`url('https://pisces.bbystatic.com/image2/BestBuy_US/dam/subghp-MMT-555591-windows-fcc6f1ef-675e-463d-bee8-64bd19088fbb.jpg')`}
        >
          <Heading fontSize={{ base: 15, md: 18, lg: 22 }}>
            {" "}
            Save up to $500
          </Heading>
          <Text fontSize={{ base: 12, md: 14, lg: 16 }}>
            on select Windows laptops.
          </Text>
          <Text fontSize={{ base: 12, md: 14, lg: 16 }}>
            Minimum savings is $30
          </Text>
          <Button
            w={{ base: 20, lg: 40 }}
            fontSize={{ base: 12, md: 14, lg: 16 }}
            bg={"blue"}
            color="white"
            _hover={{
              transform: "translateY(2px)",
              boxShadow: "lg",
            }}
          >
            Shop Now
          </Button>
        </Stack>
        <Stack
          p={10}
          h={"full"}
          w="47%"
          backgroundImage={`url('https://pisces.bbystatic.com/image2/BestBuy_US/dam/subghp-MMT-555591-tv-4ef8f148-989d-4846-ae5c-65854b349e5b.jpg')`}
        >
          <Heading fontSize={{ base: 15, md: 18, lg: 22 }}>Smart TVs</Heading>
          <Text fontSize={{ base: 12, md: 14, lg: 16 }}>as low as $109.99</Text>
          <Button
            w={{ base: 20, lg: 40 }}
            fontSize={{ base: 12, md: 14, lg: 16 }}
            bg={"blue"}
            color={"white"}
            _hover={{
              transform: "translateY(2px)",
              boxShadow: "lg",
            }}
          >
            Shop Now
          </Button>
        </Stack>
      </Flex>

      {/* 6th div starts from here */}
      <Stack
        border={"1px solid"}
        borderColor={"gray.200"}
        align="center"
        justify="center"
      >
        <Flex
          gap="10px"
          direction={{ base: "column", md: "row", lg: "row" }}
          align="center"
          justify={"space-around"}
        >
          <Flex gap="5px" justify="space-around" align="center">
            <Image
              flex={2}
              src="https://pisces.bbystatic.com/image2/BestBuy_US/Gallery/gl-37875-app-curbside-vpe_der-149659.png;maxHeight=144;maxWidth=144"
            />
            <Box flex={3}>
              <Heading fontSize={{ base: 15, md: 18, lg: 22 }}>
                Ready in one hour
              </Heading>
              <Text fontSize={{ base: 12, md: 14, lg: 16 }}>
                with Store or Curbside Pickup.
              </Text>
            </Box>
          </Flex>
          <Flex gap="5px" justify="space-around" align="center">
            <Image src="https://pisces.bbystatic.com/image2/BestBuy_US/Gallery/gl-app-vpe-freeshippin_der1-206852.png;maxHeight=144;maxWidth=144" />
            <Box fontSize={{ base: "10px", md: "20px", lg: "20px" }}>
              <Heading fontSize={{ base: 15, md: 18, lg: 22 }}>
                Free Next-Day Delivery
              </Heading>
              <Text fontSize={{ base: 12, md: 14, lg: 16 }}>
                on thousands of items.
              </Text>
            </Box>
          </Flex>
          <Flex gap="5px" justify="space-around" align="center">
            <Image src="https://pisces.bbystatic.com/image2/BestBuy_US/Gallery/gl-app-vpe-freeshippin_der1-206852.png;maxHeight=144;maxWidth=144" />
            <Box fontSize={{ base: "10px", md: "20px", lg: "20px" }}>
              <Heading fontSize={{ base: 15, md: 18, lg: 22 }}>
                Ready in one hour
              </Heading>
              <Text fontSize={{ base: 12, md: 14, lg: 16 }}>
                Order by 3 p.m., get it by 8 p.m.
              </Text>
              <Text fontSize={{ base: 12, md: 14, lg: 16 }}>
                Order by 2 p.m. Sunday.
              </Text>
            </Box>
          </Flex>
        </Flex>
      </Stack>

      {/* 7th div totaltech div */}
      <Flex
        h={"170px"}
        w={"100%"}
        backgroundImage={`url("https://pisces.bbystatic.com/image2/BestBuy_US/dam/gl62892-tt-skinny-bg-lg-4ed9a87a-ca73-4e7a-8610-0f2159f2239b.jpg")`}
      >
        <Flex padding={10} direction={"column"} justify="center" align="center">
          <Image
            w={"80px"}
            h="50px"
            src="https://tse2.mm.bing.net/th?id=OIP.L3mUmJfZ497TODJtlpGTUgHaGy&pid=Api&P=0&w=176&h=161"
          />
          <Heading color={"white"} fontSize={{ base: 15, md: 18, lg: 22 }}>
            totaltech
          </Heading>
          <Box
            w={150}
            color="blue"
            bg={"white"}
            textAlign="center"
            fontSize={{ base: 12, md: 14, lg: 18 }}
          >
            Learn More
          </Box>
        </Flex>
        <Box border={"1px solid"} borderColor="white"></Box>
        <Flex gap="5px" padding={10} direction={"column"} color="white" w="70%">
          <Heading fontSize={{ base: 14, md: 16, lg: 20 }}>
            The membership you and your tech deserve.
          </Heading>
          <Text fontSize={{ base: 12, md: 14, lg: 16 }}>
            Best Buy Totaltech™ provides 24/7/365 tech support, up to 24 months
            of product protection with active membership, free standard
            installation and so much more. Terms and conditions apply.
          </Text>
        </Flex>
      </Flex>

      {/* 8th div  */}

      <Stack h={{ base: "fit-content", lg: 600 }} p={6}>
        {/* 1st parent div */}
        <div className="first_parent">
          <div className="parent_inside">
            {/* 1st */}
            <div className="first">
              <img
                style={{ height: "80%", width: "100%" }}
                src="https://pisces.bbystatic.com/image2/BestBuy_US/dam/GL-72996-flex-persona-fg-220509-6016e3c8-f983-4ac2-8dc9-b241bf9812da.jpg;maxHeight=432;maxWidth=432"
                alt=""
              />
              <h3>For Chill dads</h3>
            </div>
            {/* 2nd */}
            <div className="first">
              <img
                style={{ height: "80%", width: "100%" }}
                src="https://pisces.bbystatic.com/image2/BestBuy_US/dam/GL-72996-flex-persona-outdoors-220509-510c4e8d-b671-4e4c-b1ec-8fd8c41bcd13.jpg;maxHeight=432;maxWidth=432"
                alt=""
              />
              <h3>For outdoorsy dads</h3>
            </div>
            {/* 3rd */}
            <div className="first">
              <img
                style={{ height: "80%", width: "100%" }}
                src="https://pisces.bbystatic.com/image2/BestBuy_US/dam/GL-72996-flex-persona-fitness-220509-9d40595e-4ce1-4d7d-8eb4-9d0c9c26e64f.jpg;maxHeight=432;maxWidth=432"
                alt=""
              />
              <h3>For exercise-loving dads</h3>
            </div>
            {/* 4rth */}
            <div className="first">
              <img
                style={{ height: "80%", width: "100%" }}
                src="https://pisces.bbystatic.com/image2/BestBuy_US/dam/GL-72996-flex-persona-chef-220509-ea150d50-2edd-4735-ae5c-a6523eea7f37.jpg;maxHeight=432;maxWidth=432"
                alt=""
              />
              <h3>For chef dads</h3>
            </div>
          </div>

          {/* 2nd parent div */}
          <div className="parent_inside">
            {/* 1st */}
            <div className="first">
              <img
                style={{ height: "80%", width: "100%" }}
                src="https://pisces.bbystatic.com/image2/BestBuy_US/dam/GL-73044-flex-persona-little-220516-9c86109f-7477-4382-9033-bb1a7d45a00f.jpg;maxHeight=432;maxWidth=432"
                alt=""
              />
              <h3>For little grads</h3>
            </div>
            {/* 2nd */}
            <div className="first">
              <img
                style={{ height: "80%", width: "100%" }}
                src="https://pisces.bbystatic.com/image2/BestBuy_US/dam/GL-73044-flex-persona-middle-220516-5cb33289-f4ed-4e09-ac3e-2ba0e695496b.jpg;maxHeight=432;maxWidth=432"
                alt=""
              />
              <h3>For middle school grades</h3>
            </div>
            {/* 3rd */}
            <div className="first">
              <img
                style={{ height: "80%", width: "100%" }}
                src="https://pisces.bbystatic.com/image2/BestBuy_US/dam/GL-73044-flex-persona-high-220516-30b898c1-65bb-4bcc-8c86-86f1bafda292.jpg;maxHeight=432;maxWidth=432"
                alt=""
              />
              <h3>For high school grads</h3>
            </div>
            {/* 4rth */}
            <div className="first">
              <img
                style={{ height: "80%", width: "100%" }}
                src="https://pisces.bbystatic.com/image2/BestBuy_US/dam/GL-73044-flex-persona-college-220516-7a6d93f6-df65-46e3-be9c-a114e1204842.jpg;maxHeight=432;maxWidth=432"
                alt=""
              />
              <h3>For college grade</h3>
            </div>
          </div>

          {/* 3rf parent div */}
          <div className="parent_inside">
            {/* 3rd */}
            {/* 1st */}
            <div className="first">
              <img
                style={{ height: "80%", width: "100%" }}
                src="https://pisces.bbystatic.com/image2/BestBuy_US/dam/GL-74510-Explore-mentorship-220606-bec44b7f-cec2-4932-b5c0-0950e649fa6e.jpg;maxHeight=432;maxWidth=432"
                alt=""
              />
              <h3>Teach access means brighter furtures</h3>
            </div>
            {/* 2nd */}
            <div className="first">
              <img
                style={{ height: "80%", width: "100%" }}
                src="https://pisces.bbystatic.com/image2/BestBuy_US/dam/GL-74510-Explore-more-love-220606-7dccad72-4487-4593-9c7c-56a5c2afa038.jpg;maxHeight=432;maxWidth=432"
                alt=""
              />
              <h3>More celebration. More Love.</h3>
            </div>
            {/* 3rd */}
            <div className="first">
              <img
                style={{ height: "80%", width: "100%" }}
                src="https://pisces.bbystatic.com/image2/BestBuy_US/dam/GL-73679-flex-circular-eco-220509-e952af56-a1b6-477d-8a25-2ed4159c74e0.jpg;maxHeight=432;maxWidth=432"
                alt=""
              />
              <h3>Sustainability is a part og our ecosystem</h3>
            </div>
            {/* 4rth */}
            <div className="first">
              <img
                style={{ height: "80%", width: "100%" }}
                src="https://pisces.bbystatic.com/image2/BestBuy_US/dam/GL-73679-flex-tablet-ttc-220509-1f7bc22c-3346-4a3a-9ace-031b35eb2c8e.jpg;maxHeight=432;maxWidth=432"
                alt=""
              />
              <h3>Commited to making a difference</h3>
            </div>
          </div>
        </div>
      </Stack>

      {/* 9th div */}
      <Stack p={2} marginBottom={30}>
        <Heading fontSize={{ base: 20, lg: 22 }}>Our Featured Offers</Heading>
        <Divider />
        <Flex direction={"column"}>
          <Flex
            h={600}
            border={"1px solid"}
            borderColor={"gray.200"}
            fontSize={{ base: "10px", md: "20px", lg: "20px" }}
            direction={{base:'column',lg:'row'}}
          >
            <Flex
              p={2}
              borderRight={"1px solid"}
              borderColor={"gray.300"}
              h={"full"}
              justify={"space-around"}
              display="column"
            >
              <Image
                h={"70%"}
                w={"80%"}
                src="https://pisces.bbystatic.com/image2/BestBuy_US/dam/SOL-93899-iphone13-pro-pol_der-f73f557f-62fd-4937-9f7d-1aba33288b71.jpg;maxHeight=504;maxWidth=740"
              />
              <Box>
                <Heading
                  color={"blue"}
                  fontSize={{ base: "10px", md: "18px", lg: "20px" }}
                >
                  iPhone 13 Pro <br /> Save up to $800
                </Heading>
                <Text color={"gray.500"}>
                  with qualified activation and trade-in of iPhone
                </Text>
              </Box>
            </Flex>
            <Flex
              p={2}
              borderRight={"1px solid"}
              borderColor={"gray.300"}
              h={"full"}
              justify={"space-around"}
              display="column"
            >
              <Image
                h={"70%"}
                w={"80%"}
                src="https://pisces.bbystatic.com/image2/BestBuy_US/dam/pol-MMT-552481_der-992f5ee6-c7cc-4a54-879e-5fb01fae0462.jpg;maxHeight=504;maxWidth=740"
              />
              <Box>
                <Heading
                  color={"blue"}
                  fontSize={{ base: "10px", md: "20px", lg: "20px" }}
                >
                  Gifts for gaming dads.
                </Heading>
                <Text color={"gray.500"}>
                  Find an assortment og games, from new hits to classic titles,
                  plus an array of accessories
                </Text>
              </Box>
            </Flex>
            <Flex
              p={2}
              borderRight={"1px solid"}
              borderColor={"gray.300"}
              h={"full"}
              justify={"space-around"}
              display="column"
            >
              <Image
                h={"70%"}
                w={"80%"}
                src="https://pisces.bbystatic.com/image2/BestBuy_US/dam/pol_microsoft-happy-guy-v2-0620-3a7b8bc1-22dd-4fc9-8cf6-905382572981.jpg;maxHeight=504;maxWidth=740"
              />
              <Box>
                <Heading
                  color={"blue"}
                  fontSize={{ base: "10px", md: "20px", lg: "20px" }}
                >
                  Introducing Surface Laptop Co 2.
                </Heading>
                <Text color={"gray.500"}>
                  Sleek, light, on the go performance.
                </Text>
              </Box>
            </Flex>
          </Flex>
          <Flex
            direction={{base:'column',lg:'row'}}
            h={600}
            border={"1px solid"}
            p={2}
            borderColor={"gray.300"}
            fontSize={{ base: "10px", md: "20px", lg: "20px" }}
          >
            <Flex
              p={2}
              borderRight={"1px solid"}
              borderColor={"gray.300"}
              h={"full"}
              justify={"space-around"}
              display="column"
            >
              <Image
                h={"70%"}
                w={"80%"}
                src="https://pisces.bbystatic.com/image2/BestBuy_US/dam/mmt-557424-apple-tv-pol_der-81ccc21e-4d16-428e-aaa0-93003a919044.jpg;maxHeight=504;maxWidth=740"
              />
              <Box>
                <Heading
                  color={"blue"}
                  fontSize={{ base: "10px", md: "20px", lg: "20px" }}
                >
                  Apple TV 4K (2nd gen) <br />
                  Save $50 on the 32GB or 64GB model.
                </Heading>
                <Text color={"gray.500"}>
                  with qualified activation and trade-in of iPhone
                </Text>
              </Box>
            </Flex>
            <Flex
              p={2}
              borderRight={"1px solid"}
              borderColor={"gray.300"}
              h={"full"}
              justify={"space-around"}
              display="column"
            >
              <Image
                h={"70%"}
                w={"80%"}
                src="https://pisces.bbystatic.com/image2/BestBuy_US/dam/MMT-549477_pol_COPE_DER-bb7580c0-afa1-4b6b-9775-d78aa1be89e3.jpg;maxHeight=504;maxWidth=740"
              />
              <Box>
                <Heading
                  color={"blue"}
                  fontSize={{ base: "10px", md: "20px", lg: "20px" }}
                >
                  Save up to $100 on select wearables.
                </Heading>
                <Text color={"gray.500"}>
                  Find an assortment og games, from new hits to classic titles,
                  plus an array of accessories
                </Text>
              </Box>
            </Flex>
            <Flex
              p={2}
              borderRight={"1px solid"}
              borderColor={"gray.300"}
              h={"full"}
              justify={"space-around"}
              display="column"
            >
              <Image
                h={"70%"}
                w={"80%"}
                src="https://pisces.bbystatic.com/image2/BestBuy_US/dam/MMT-552448-speakers-pol-der-f2233e68-2161-4487-b9c7-4e1c2cf72a25.jpg;maxHeight=504;maxWidth=740"
              />
              <Box>
                <Heading
                  color={"blue"}
                  fontSize={{ base: "10px", md: "20px", lg: "20px" }}
                >
                  Save up to 25% on select on speakers.
                </Heading>
                <Text color={"gray.500"}>
                  Take your audio to the next level with theater speakers.
                </Text>
              </Box>
            </Flex>
          </Flex>
        </Flex>
      </Stack>

      {/* 10th div */}
      <Stack p={4} w="100%" style={{ overflow: "hidden" }}>
        <Heading fontSize={{ base: "10px", md: "20px", lg: "25px" }}>
          Related items you've viewed
        </Heading>
        <Divider />
        <Flex
          height={{ base: "fit-content", md: 300, lg: 300 }}
          direction={{ base: "column", lg: "row" }}
          p={4}
          justify={"space-between"}
          gap={"10px"}
        >
          <Flex
            direction={"column"}
            alignItems={"center"}
            justify={"space-between"}
            h={"full"}
            w={{ base: "auto", md: "200px", lg: "250px" }}
            border={"1px solid"}
            borderColor="gray.200"
            p={2}
          >
            <Image
              h={{ base: "40%", lg: "60%" }}
              w={"70%"}
              src="https://pisces.bbystatic.com/image2/BestBuy_US/images/products/6450/6450783_sd.jpg;maxHeight=272;maxWidth=400"
            />
            <Text fontSize={{ base: 8, md: 10, lg: 12 }} align="center">
              Best Buy essential, Tilting TV Wall Mount for Moat 47-84' TVa -
              Black
            </Text>
            <Text
              fontSize={{ base: 15, md: 18, lg: 20 }}
              fontWeight={{ base: 300, lg: 500 }}
              style={{ verticalAlign: "bottom" }}
            >
              $39.99
            </Text>
          </Flex>
          <Flex
            direction={"column"}
            alignItems={"center"}
            justify={"space-between"}
            w={{ base: "auto", md: "200px", lg: "250px" }}
            h={"full"}
            p={2}
            border={"1px solid"}
            borderColor="gray.200"
          >
            <Image
              h={{ base: "40%", lg: "60%" }}
              w={"70%"}
              src="https://pisces.bbystatic.com/image2/BestBuy_US/images/products/6483/6483636_sd.jpg;maxHeight=272;maxWidth=400"
            />
            <Text fontSize={{ base: 8, md: 10, lg: 12 }} align="center">
              Goggle - Pixel 6 Pro 128GB (unlocked)- Stormy Black
            </Text>
            <Text
              fontSize={{ base: 15, md: 18, lg: 20 }}
              fontWeight={{ base: 300, lg: 500 }}
              style={{ verticalAlign: "bottom" }}
            >
              $799.00
            </Text>
          </Flex>
          <Flex
            direction={"column"}
            alignItems={"center"}
            justify={"space-between"}
            w={{ base: "auto", md: "200px", lg: "250px" }}
            h={"full"}
            p={2}
            border={"1px solid"}
            borderColor="gray.200"
          >
            <Image
              h={{ base: "40%", lg: "60%" }}
              w={"70%"}
              src="https://pisces.bbystatic.com/image2/BestBuy_US/images/products/6451/6451333_sd.jpg;maxHeight=272;maxWidth=400"
            />
            <Text fontSize={{ base: 8, md: 12, lg: 14 }} align="center">
              Best Buy essential Full Motion TV Wall Mount for 47-84" TVa
            </Text>
            <Text
              fontSize={{ base: 15, md: 18, lg: 20 }}
              fontWeight={{ base: 300, lg: 500 }}
              style={{ verticalAlign: "bottom" }}
            >
              $59.99
            </Text>
          </Flex>
          <Flex
            direction={"column"}
            alignItems={"center"}
            justify={"space-between"}
            w={{ base: "auto", md: "200px", lg: "250px" }}
            h={"full"}
            p={2}
            border={"1px solid"}
            borderColor="gray.200"
          >
            <Image
              h={{ base: "40%", lg: "60%" }}
              w={"70%"}
              src="https://pisces.bbystatic.com/image2/BestBuy_US/images/products/6451/6451090cv11d.jpg;maxHeight=272;maxWidth=400"
            />
            <Text fontSize={{ base: 8, md: 10, lg: 12 }} align="center">
              Best Buy essential, Fixed TV Wall Mount for Moat 47-84' TVa -
              Black
            </Text>
            <Text
              fontSize={{ base: 15, md: 18, lg: 20 }}
              fontWeight={{ base: 300, lg: 500 }}
              style={{ verticalAlign: "bottom" }}
            >
              $29.99
            </Text>
          </Flex>
          <Flex
            direction={"column"}
            alignItems={"center"}
            justify={"space-between"}
            w={{ base: "auto", md: "200px", lg: "250px" }}
            h={"full"}
            p={2}
            border={"1px solid"}
            borderColor="gray.200"
          >
            <Image
              h={{ base: "40%", lg: "60%" }}
              w={"70%"}
              src="https://pisces.bbystatic.com/image2/BestBuy_US/images/products/6483/6483699_sd.jpg;maxHeight=272;maxWidth=400"
            />
            <Text fontSize={{ base: 8, md: 10, lg: 14 }} align="center">
              Google - Pixel 6 128GB - Stormy Black
            </Text>
            <Text
              fontSize={{ base: 15, md: 18, lg: 20 }}
              fontWeight={{ base: 300, lg: 500 }}
              style={{ verticalAlign: "bottom" }}
            >
              $599.99
            </Text>
          </Flex>
          <Flex
            direction={"column"}
            alignItems={"center"}
            justify={"space-between"}
            w={{ base: "auto", md: "200px", lg: "250px" }}
            h={"full"}
            p={2}
            border={"1px solid"}
            borderColor="gray.200"
          >
            <Image
              h={{ base: "40%", lg: "60%" }}
              w={"70%"}
              src="https://pisces.bbystatic.com/image2/BestBuy_US/images/products/6452/6452361cv11d.jpg;maxHeight=272;maxWidth=400"
            />
            <Text fontSize={{ base: 8, md: 10, lg: 14 }} align="center">
              Best Buy essential, Extended TV Wall Mount for Moat 32-70' TVa -
              Black
            </Text>
            <Text
              fontSize={{ base: 15, md: 18, lg: 20 }}
              fontWeight={{ base: 300, lg: 500 }}
              style={{ verticalAlign: "bottom" }}
            >
              $49.99
            </Text>
          </Flex>
          
        </Flex>
      </Stack>

      {/* 11th div  */}
      <Stack
        p={4}
        style={{ overflow: "hidden" }}
        fontSize={{ base: "10px", md: "20px", lg: "20px" }}
      >
        <Heading fontSize={{ base: "20px", md: "25px", lg: "25px" }}>
          Trending deals
        </Heading>
        <Divider />
        <Flex
          height={{ base: "fit-content", md: 300, lg: 300 }}
          gap={"10px"}
          p={4}
          justify={"space-between"}
          direction={{ base: "column", lg: "row" }}
        >
          <Flex
            direction={"column"}
            alignItems={"center"}
            justify={"space-between"}
            h={"full"}
            border={"1px solid"}
            borderColor="gray.200"
            w={{ base: "auto", md: "200px", lg: "250px" }}
            p={2}
          >
            <Image
              h={{ base: "40%", lg: "60%" }}
              w={"70%"}
              src="https://pisces.bbystatic.com/image2/BestBuy_US/images/products/6215/6215932_sd.jpg;maxHeight=272;maxWidth=400"
            />
            <Text fontSize={{ base: 10, md: 10, lg: 12 }} align="center">
              Apple Watch Series 7(GPs) 41mm Midnight Aluminium Case{" "}
            </Text>
            <Text
              fontSize={{ base: 15, md: 18, lg: 20 }}
              fontWeight={{ base: 300, lg: 500 }}
              style={{ verticalAlign: "bottom" }}
            >
              $39.99
            </Text>
          </Flex>
          <Flex
            direction={"column"}
            alignItems={"center"}
            justify={"space-between"}
            h={"full"}
            border={"1px solid"}
            borderColor="gray.200"
            w={{ base: "auto", md: "200px", lg: "250px" }}
            p={2}
          >
            <Image
              h={{ base: "40%", lg: "60%" }}
              w={"70%"}
              src="https://pisces.bbystatic.com/image2/BestBuy_US/images/products/4900/4900942_sd.jpg;maxHeight=272;maxWidth=400"
            />
            <Text fontSize={{ base: 10, md: 10, lg: 12 }} align="center">
              Apple - AirPods Pro(with Magsafe Charging Case)
            </Text>
            <Text
              fontSize={{ base: 15, md: 18, lg: 20 }}
              fontWeight={{ base: 300, lg: 500 }}
              style={{ verticalAlign: "bottom" }}
            >
              $179.99
            </Text>
          </Flex>
          <Flex
            direction={"column"}
            alignItems={"center"}
            justify={"space-between"}
            h={"full"}
            border={"1px solid"}
            borderColor="gray.200"
            w={{ base: "auto", md: "200px", lg: "250px" }}
            p={2}
          >
            <Image
              h={{ base: "40%", lg: "60%" }}
              w={"70%"}
              src="https://pisces.bbystatic.com/image2/BestBuy_US/images/products/6494/6494441_sd.jpg;maxHeight=272;maxWidth=400"
            />
            <Text fontSize={{ base: 10, md: 10, lg: 12 }} align="center">
              Samsung - Galaxy S22 Ultra 256GB (Unlocked) - Phantom Black
            </Text>
            <Text
              fontSize={{ base: 15, md: 18, lg: 20 }}
              fontWeight={{ base: 300, lg: 500 }}
              style={{ verticalAlign: "bottom" }}
            >
              $999.99
            </Text>
          </Flex>
          <Flex
            direction={"column"}
            alignItems={"center"}
            justify={"space-between"}
            h={"full"}
            border={"1px solid"}
            borderColor="gray.200"
            w={{ base: "auto", md: "200px", lg: "250px" }}
            p={2}
          >
            <Image
              h={{ base: "40%", lg: "60%" }}
              w={"70%"}
              src="https://pisces.bbystatic.com/image2/BestBuy_US/images/products/6474/6474501_rd.jpg;maxHeight=272;maxWidth=400"
            />
            <Text fontSize={{ base: 10, md: 10, lg: 12 }} align="center">
              GoPro - HERO10 Black Action Camera
            </Text>
            <Text
              fontSize={{ base: 15, md: 18, lg: 20 }}
              fontWeight={{ base: 300, lg: 500 }}
              style={{ verticalAlign: "bottom" }}
            >
              $399.99
            </Text>
          </Flex>
          <Flex
            direction={"column"}
            alignItems={"center"}
            justify={"space-between"}
            h={"full"}
            border={"1px solid"}
            borderColor="gray.200"
            w={{ base: "auto", md: "200px", lg: "250px" }}
            p={2}
          >
            <Image
              h={{ base: "40%", lg: "60%" }}
              w={"70%"}
              src="https://pisces.bbystatic.com/image2/BestBuy_US/images/products/6401/6401727_sd.jpg;maxHeight=272;maxWidth=400"
            />
            <Text fontSize={{ base: 10, md: 10, lg: 12 }} align="center">
              Lenovo - Chromebook Duet -10.1* Touch Screen Tablet - 4GB
            </Text>
            <Text
              fontSize={{ base: 15, md: 18, lg: 20 }}
              fontWeight={{ base: 300, lg: 500 }}
            >
              $189.99
            </Text>
          </Flex>
          <Flex
            direction={"column"}
            alignItems={"center"}
            justify={"space-between"}
            h={"full"}
            border={"1px solid"}
            borderColor="gray.200"
            w={{ base: "auto", md: "200px", lg: "250px" }}
            p={2}
          >
            <Image src="https://pisces.bbystatic.com/image2/BestBuy_US/images/products/6342/6342362_sd.jpg;maxHeight=272;maxWidth=400" />
            <Text fontSize={{ base: 10, md: 10, lg: 12 }} align="center">
              Apple TV 4K , 32GB (2nd Generation) (Latest Model) - Black
            </Text>
            <Text
              fontSize={{ base: 15, md: 18, lg: 20 }}
              fontWeight={{ base: 300, lg: 500 }}
            >
              $149.99
            </Text>
          </Flex>
         
        </Flex>
      </Stack>

      {/* 12 th div */}
      <Flex
        // margin={"40px"}
        justify={"space-around"}
        alignItems="center"
        gap="40px"
        h={{ base: "fit-content", md: 300, lg: 300 }}
        w={{ base: "70%", lg: "40%" }}
        flexDirection={{ base: "column", md: "row", lg: "row" }}
        mb={"50px"}
        mt={"40px"}
      >
        <Flex
          h={300}
          direction={"column"}
          justify={"space-around"}
          border={"1px solid"}
          borderColor={"gray.300"}
          p={10}
          fontSize={{ base: "10px", md: "16px", lg: "16px" }}
        >
          <Image
            h={"70%"}
            w={"80%"}
            src="https://pisces.bbystatic.com/image2/BestBuy_US/Gallery/GL-37400-pol-dotd-190823_der-98962.png;maxHeight=280;maxWidth=412"
          />
          <Heading fontSize={{ base: "10px", md: "16px", lg: "18px" }}>
            Deal of the Day.
          </Heading>
          <Text>Great deals. Every day.</Text>
        </Flex>
        <Flex
          h={300}
          direction={"column"}
          justify={"space-around"}
          border={"1px solid"}
          borderColor={"gray.300"}
          p={10}
          fontSize={{ base: "10px", md: "16px", lg: "16px" }}
        >
          <Image
            h={"70%"}
            w={"80%"}
            src="https://pisces.bbystatic.com/image2/BestBuy_US/Gallery/GL-37504-pol-outlet-190823-98410.png;maxHeight=280;maxWidth=412"
          />
          <Heading color={"blue.600"} fontSize={{ base: 10, md: 12, lg: 16 }}>
            Clearence, open-box and more.
          </Heading>
          <Text fontSize={{ base: 10, md: 12, lg: 14 }}>
            Save when you shop the Best Buy Outlet for clearence, open-box,
            refurbished and pre-owned items.
          </Text>
        </Flex>
      </Flex>

      <Stack
        p={2}
        h={{ base: "fit-content", md: "150px", lg: "150px" }}
        backgroundColor={"blue"}
      >
        <Flex
          w={{ base: "90%", md: "80%", lg: "70%" }}
          flexDirection={{ base: "column", md: "row", lg: "row" }}
          margin="auto"
          alignItems={"center"}
          justify={"space-around"}
          p={4}
          gap="10px"
          fontSize={{ base: "10px", md: "14px", lg: "20px" }}
        >
          <Image
            w={150}
            h={{ base: "70px", lg: "100%" }}
            src="https://pisces.bbystatic.com/image2/BestBuy_US/dam/GL-66611-cb-fs-211018-6dd3346e-0ef8-458c-b16d-5ff2264fbb11.png"
          />
          <Box>
            <Heading
              color="white"
              fontSize={{ base: "10px", md: "14px", lg: "16px" }}
            >
              Apply today and get{" "}
              <span style={{ color: "yellow" }}> 10% back</span>
            </Heading>
            <Text
              color={"white"}
              fontSize={{ base: "10px", md: "12px", lg: "16px" }}
            >
              in rewards on your first day of purchase when you are approved for
              the Card.
            </Text>
          </Box>

          <Button
            fontSize={{ base: "10px", md: "12px", lg: "16px" }}
            w={{ base: "fit-content", lg: 150 }}
            p={2}
            bg={"yellow"}
          >
            Learn More
          </Button>
        </Flex>
      </Stack>

      {/* last div */}

      <Stack w={"100%"} marginBottom="100px" marginTop={"30px"} p={2}>
        <Heading fontSize={22}>Featured Products</Heading>
        <Divider />
        <Flex
          flexDirection={{ base: "column", lg: "row" }}
          height={{ base: "fit-content", md: 300, lg: 300 }}
          gap={"10px"}
          p={4}
          justify={"space-between"}
        >
          <Flex
            direction={"column"}
            alignItems={"center"}
            justify={"space-between"}
            h={"full"}
            border={"1px solid"}
            borderColor="gray.200"
            p={2}
          >
            <Image
              h={{ base: "40%", lg: "60%" }}
              w={"70%"}
              src="https://pisces.bbystatic.com/image2/BestBuy_US/images/products/6398/6398119_sd.jpg;maxHeight=150;maxWidth=225"
            />
            <Text fontSize={{ base: 10, md: 10, lg: 14 }} align="center">
              Samsung - Galaxy 13.3" 4K Ultra HD Touch- Screen Chromebook -
              Intel Core i7{" "}
            </Text>
            <Text
              fontSize={{ base: 15, md: 18, lg: 20 }}
              fontWeight={{ base: 300, lg: 500 }}
              style={{ verticalAlign: "bottom" }}
            >
              $539.99
            </Text>
          </Flex>
          <Flex
            direction={"column"}
            alignItems={"center"}
            justify={"space-between"}
            h={"full"}
            border={"1px solid"}
            borderColor="gray.200"
            p={2}
          >
            <Image
              h={{ base: "40%", lg: "60%" }}
              w={"70%"}
              src="https://pisces.bbystatic.com/image2/BestBuy_US/images/products/6484/6484736_sd.jpg;maxHeight=150;maxWidth=225"
            />
            <Text fontSize={{ base: "10px", md: "14px", lg: "16px" }}>
              Citizen - CZ Smart 44mm Black IP Stainlss Steel Case Hvbrid Heart
              Rate
            </Text>
            <Text
              fontSize={{ base: 15, md: 18, lg: 20 }}
              fontWeight={{ base: 300, lg: 500 }}
              style={{ verticalAlign: "bottom" }}
            >
              $279.99
            </Text>
          </Flex>
          <Flex
            direction={"column"}
            alignItems={"center"}
            justify={"space-between"}
            h={"full"}
            border={"1px solid"}
            borderColor="gray.200"
            p={2}
          >
            <Image
              h={{ base: "40%", lg: "60%" }}
              w={"70%"}
              src="https://pisces.bbystatic.com/image2/BestBuy_US/images/products/6502/6502273_sd.jpg;maxHeight=150;maxWidth=225"
            />
            <Text fontSize={{ base: 10, md: 10, lg: 14 }} align="center">
              ario - Essential Sportlight 4 Camerass and Yard Sign,
              Indoor/Outdoor
            </Text>
            <Text
              fontSize={{ base: 15, md: 18, lg: 20 }}
              fontWeight={{ base: 300, lg: 500 }}
              style={{ verticalAlign: "bottom" }}
            >
              $349.99
            </Text>
          </Flex>
          <Flex
            direction={"column"}
            alignItems={"center"}
            justify={"space-between"}
            h={"full"}
            border={"1px solid"}
            borderColor="gray.200"
            p={2}
          >
            <Image
              h={{ base: "40%", lg: "60%" }}
              w={"70%"}
              src="https://pisces.bbystatic.com/image2/BestBuy_US/images/products/6502/6502943_sd.jpg;maxHeight=150;maxWidth=225"
            />
            <Text fontSize={{ base: 10, md: 10, lg: 14 }} align="center">
              HP - Victua 15.6" Gaming Laptop - Intel Core i7-1265DH- 16GB
              Memory
            </Text>
            <Text
              fontSize={{ base: 15, md: 18, lg: 20 }}
              fontWeight={{ base: 300, lg: 500 }}
              style={{ verticalAlign: "bottom" }}
            >
              $1399.99
            </Text>
          </Flex>
          <Flex
            direction={"column"}
            alignItems={"center"}
            justify={"space-between"}
            h={"full"}
            border={"1px solid"}
            borderColor="gray.200"
            p={2}
          >
            <Image
              h={{ base: "40%", lg: "60%" }}
              w={"70%"}
              src="https://pisces.bbystatic.com/image2/BestBuy_US/images/products/6430/6430060_sd.jpg;maxHeight=150;maxWidth=225"
            />
            <Text fontSize={{ base: 10, md: 10, lg: 14 }} align="center">
              Amazon - Echo dot (4th Gen) Smart speaker with Alexa - Charcol
            </Text>
            <Text
              fontSize={{ base: 15, md: 18, lg: 20 }}
              fontWeight={{ base: 300, lg: 500 }}
              style={{ verticalAlign: "bottom" }}
            >
              $27.99
            </Text>
          </Flex>
          <Flex
            direction={"column"}
            alignItems={"center"}
            justify={"space-between"}
            h={"full"}
            border={"1px solid"}
            borderColor="gray.200"
            p={2}
          >
            <Image
              h={{ base: "40%", lg: "60%" }}
              w={"70%"}
              src="https://pisces.bbystatic.com/image2/BestBuy_US/images/products/6416/6416337_sd.jpg;maxHeight=150;maxWidth=225"
            />
            <Text fontSize={{ base: 10, md: 10, lg: 14 }} align="center">
              Ario - Essential Spotlight Camera - indoor/Outdoor Wire-Free 1080
              Security Camera
            </Text>
            <Text
              fontSize={{ base: 15, md: 18, lg: 20 }}
              fontWeight={{ base: 300, lg: 500 }}
              style={{ verticalAlign: "bottom" }}
            >
              $99.99
            </Text>
          </Flex>
          
        </Flex>
      </Stack>
    </Box>
  );
};

const Crd = (props) => {
  return (
    <Flex
      direction={"column"}
      align="center"
      justify={"center"}
      gap={{ base: "5px" }}
    >
      <Box
        h={{ base: "50px", sm: "100px", md: "120px", lg: "150px" }}
        w={{ base: "50px", sm: "80px", md: "100px", lg: "120px" }}
      >
        <Image h={"100%"} w={"100%"} src={props.image} alt="Special Deals" />
      </Box>
      <Box>
        <Text fontSize={{ base: "8px", sm: "10px", md: "12px", lg: "14px" }}>
          {props.url}
        </Text>
      </Box>
    </Flex>
  );
};
