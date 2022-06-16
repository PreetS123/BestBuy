import {
  Box,
  Button,
  Divider,
  Flex,
  Grid,
  GridItem,
  Heading,
  Image,
  Stack,
  Text,
} from "@chakra-ui/react";
import React from "react";
import { Link } from "react-router-dom";

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
    <>
      <Flex h={"600px"} gap="20px">
        <Stack
          flex={2}
          justifyContent="center"
          alignItems={"center"}
          backgroundImage={`url("https://pisces.bbystatic.com/image2/BestBuy_US/dam/MMT-510776_2022TopDeals-GHPApp-LV-55adde1f-dd0b-48d7-9a08-b28bbc00187d.jpg")`}
        >
          <Button h={10} w={20} varient={"outline"} color={"blue"}>
            Shop Now
          </Button>
        </Stack>
        <Flex direction={"column"} flex={3}>
          <Flex flex={2} p={2} border={"1px solid"} borderColor={"gray.500"}>
            {tppicks.map((val) => {
              return (
                <div
                  style={{
                    gap: "20px",
                    justifyContent: "center",
                    textAlign: "center",
                  }}
                >
                  <Crd id={val.id} image={val.image} url={val.url} />
                </div>
              );
            })}
          </Flex>
          <Flex justify={"space-around"} flex={3}>
            <Box
              border={"1px solid"}
              h={"70%"}
              display="flex"
              flexDirection={"column"}
              justifyContent="space-around"
              p={2}
            >
              <Button w={40} bg={"blue"} color="white">
                <span>Outlet</span> <span>Deals</span>
              </Button>
              <Image
                h={"60%"}
                src="https://pisces.bbystatic.com/image2/BestBuy_US/Gallery/ClearanceOpenBox_White-217158.png;maxHeight=230;maxWidth=330"
              />
              <Link to="#">View outlet deals</Link>
            </Box>
            <Box
              border={"1px solid"}
              h={"70%"}
              display="flex"
              flexDirection={"column"}
              justifyContent="space-around"
            >
              <Heading fontSize={16}>Continue</Heading>
              <Image
                h={"50%"}
                src="https://pisces.bbystatic.com/image2/BestBuy_US/images/products/6500/6500470_sd.jpg;maxHeight=428;maxWidth=644"
              />
              <Link to="#">TCL - 43" Class 4-Series 4k UHD HD</Link>
              <Link to="#">Go to Cart</Link>
            </Box>
          </Flex>
        </Flex>
      </Flex>

      <Stack bg={"white"} marginTop={"30px"} p={4}>
        <Heading
          borderBottom={"1px solid"}
          borderColor={"gray.200"}
          textDecoration={"underline"}
        >
          You viewed
        </Heading>
        <Link to="#">Manage all your recently viewed items</Link>
        <Flex height={300} gap="20px" p={4} justify={"space-around"}>
          <Flex
            direction={"column"}
            alignItems={"center"}
            justify={"space-around"}
            h={"full"}
            border={"1px solid"}
            borderColor="gray.200"
          >
            <Image
              h={"60%"}
              w={"70%"}
              src="https://pisces.bbystatic.com/image2/BestBuy_US/images/products/6483/6483692_sd.jpg;maxHeight=400;maxWidth=400"
            />
            <Text>Google - Pixel 6 Pro 128GB - Stormy Black </Text>
          </Flex>
          <Flex
            direction={"column"}
            alignItems={"center"}
            justify={"space-around"}
            h={"full"}
            border={"1px solid"}
            borderColor="gray.200"
          >
            <Image
              h={"60%"}
              w={"70%"}
              src="https://pisces.bbystatic.com/image2/BestBuy_US/images/products/6458/6458645_sd.jpg;maxHeight=400;maxWidth=400"
            />
            <Text>Toshiba - 55" Class C350 Series LED 4K</Text>
          </Flex>
          <Flex
            direction={"column"}
            alignItems={"center"}
            justify={"space-around"}
            h={"full"}
            border={"1px solid"}
            borderColor="gray.200"
          >
            <Image
              h={"60%"}
              w={"70%"}
              src="https://pisces.bbystatic.com/image2/BestBuy_US/images/products/6500/6500470_sd.jpg;maxHeight=400;maxWidth=400"
            />
            <Text>TCL - 43" Class 4-Series 4K UHD HDR Smart</Text>
          </Flex>
          <Flex
            direction={"column"}
            alignItems={"center"}
            justify={"space-around"}
            h={"full"}
            border={"1px solid"}
            borderColor="gray.200"
          >
            <Image
              h={"60%"}
              w={"70%"}
              src="https://pisces.bbystatic.com/image2/BestBuy_US/images/products/4900/4900942_sd.jpg;maxHeight=214;maxWidth=278"
            />
            <Text>Apple - AirPods Pro </Text>
          </Flex>
          <Flex
            direction={"column"}
            alignItems={"center"}
            justify={"space-around"}
            h={"full"}
            border={"1px solid"}
            borderColor="gray.200"
          >
            <Image
              h={"60%"}
              w={"70%"}
              src="https://pisces.bbystatic.com/image2/BestBuy_US/images/products/5721/5721600_sd.jpg;maxHeight=214;maxWidth=278"
            />
            <Text>MacBook Air 13.3" Laptop</Text>
          </Flex>
          <Flex
            direction={"column"}
            alignItems={"center"}
            justify={"space-around"}
            h={"full"}
            border={"1px solid"}
            borderColor="gray.200"
          >
            <Image
              h={"60%"}
              w={"70%"}
              src="https://pisces.bbystatic.com/image2/BestBuy_US/dam/SOL-93899-iphone13-pro-pol_der-f73f557f-62fd-4937-9f7d-1aba33288b71.jpg;maxHeight=504;maxWidth=740"
            />
            <Text>iPhone 13 Pro </Text>
          </Flex>
        </Flex>
      </Stack>

      <div
        style={{
          height: "105px",
          display: "grid",
          gridTemplateColumns: "repeat(2,1fr)",
          gap: "20px",
          justifyContent: "space-around",
          fontWeight: "500",
          fontSize: "20px",
          margin: "20px 10px",
        }}
      >
        <div
          style={{
            display: "flex",
            backgroundColor: "rgb(196,196,196)",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              gap: "50px",
            }}
          >
            <div>
              <img
                src="https://pisces.bbystatic.com/image2/BestBuy_US/dam/GL-65963-confident-210831-c34d2a74-8b79-41cd-8161-b9987666f7d6.png;maxHeight=72;maxWidth=72"
                alt=""
              />
            </div>

            <div>
              {" "}
              <Heading fontSize={15}>Shop safely and confidently</Heading>
              <Text fontSize={12} color={"blue"}>
                See our safety procedure
              </Text>
            </div>
          </div>
        </div>
        <div
          style={{
            display: "flex",
            backgroundColor: "rgb(196,196,196)",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              gap: "50px",
            }}
          >
            <div>
              <img
                src="https://pisces.bbystatic.com/image2/BestBuy_US/dam/GL-65963-expert-210831-70c599ed-fc34-47d8-9b93-85f899d93c8f.png;maxHeight=72;maxWidth=72"
                alt=""
              />
            </div>

            <div>
              {" "}
              <Heading fontSize={15}>Get help shopping from home.</Heading>
              <Text fontSize={12} color={"blue"}>
                Shop with an Expert
              </Text>
            </div>
          </div>
        </div>
      </div>

      <div
        style={{
          backgroundColor: "yellow",
          height: "60px",
          width: "100%",
          margin: "10px 10px",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-evenly",
          display: "flex",
        }}
      >
        <Heading>Insignia air fryers product recall .</Heading>
        <Link to="#" color="blue">
          Learn more.
        </Link>
      </div>
      <Flex p={2} h={500} bg={"gray.100"} justify={"space-around"}>
        <Stack
          p={10}
          h={"full"}
          w={"47%"}
          backgroundImage={`url('https://pisces.bbystatic.com/image2/BestBuy_US/dam/subghp-MMT-555591-windows-fcc6f1ef-675e-463d-bee8-64bd19088fbb.jpg')`}
        >
          <Heading>Save up to $500</Heading>
          <Text>on select Windows laptops.</Text>
          <Text>Minimum savings is $30</Text>
          <Button w={40} bg={"blue"} color="white">
            Shop Now
          </Button>
        </Stack>
        <Stack
          p={10}
          h={"full"}
          w="47%"
          backgroundImage={`url('https://pisces.bbystatic.com/image2/BestBuy_US/dam/subghp-MMT-555591-tv-4ef8f148-989d-4846-ae5c-65854b349e5b.jpg')`}
        >
          <Heading>Smart TVs</Heading>
          <Text>as low as $109.99</Text>
          <Button w={40} bg={"blue"} color={"white"}>
            Shop Now
          </Button>
        </Stack>
      </Flex>
      <Stack border={"1px solid"} borderColor={"gray.200"}>
        <Flex direction={"row"} justify={"space-around"}>
          <Flex>
            <Image src="https://pisces.bbystatic.com/image2/BestBuy_US/Gallery/gl-37875-app-curbside-vpe_der-149659.png;maxHeight=144;maxWidth=144" />
            <Box>
              <Heading>Ready in one hour</Heading>
              <Text>with Store or Curbside Pickup.</Text>
            </Box>
          </Flex>
          <Flex>
            <Image src="https://pisces.bbystatic.com/image2/BestBuy_US/Gallery/gl-app-vpe-freeshippin_der1-206852.png;maxHeight=144;maxWidth=144" />
            <Box>
              <Heading>Free Next-Day Delivery</Heading>
              <Text>on thousands of items.</Text>
            </Box>
          </Flex>
          <Flex>
            <Image src="https://pisces.bbystatic.com/image2/BestBuy_US/Gallery/gl-app-vpe-freeshippin_der1-206852.png;maxHeight=144;maxWidth=144" />
            <Box>
              <Heading>Ready in one hour</Heading>
              <Text>Order by 3 p.m., get it by 8 p.m.</Text>
              <Text>Order by 2 p.m. Sunday.</Text>
            </Box>
          </Flex>
        </Flex>
      </Stack>

      <Flex
        h={"170px"}
        backgroundImage={`url("https://pisces.bbystatic.com/image2/BestBuy_US/dam/gl62892-tt-skinny-bg-lg-4ed9a87a-ca73-4e7a-8610-0f2159f2239b.jpg")`}
      >
        <Flex padding={10} direction={"column"}>
          <Image
            w={"80px"}
            h="50px"
            src="https://tse2.mm.bing.net/th?id=OIP.L3mUmJfZ497TODJtlpGTUgHaGy&pid=Api&P=0&w=176&h=161"
          />
          <Heading color={"white"}>totaltech</Heading>
          <Box w={150} color="blue" bg={"white"} textAlign="center">
            Learn More
          </Box>
        </Flex>
        <Box border={'1px solid'} borderColor='white'></Box>
        <Flex padding={10} direction={"column"} color='white' w='50%'>
          <Heading>The membership you and your tech deserve.</Heading>
          <Text>
            Best Buy Totaltech™ provides 24/7/365 tech support, up to 24 months
            of product protection with active membership, free standard
            installation and so much more. Terms and conditions apply.
          </Text>
        </Flex>
      </Flex>

      <Stack h={600} p={6}>
          {/* 1st parent div */}
          <div
            style={{
              display: "grid",
              gap:'30px',
              gridTemplateColumns: "repeat(3,1fr)",
              height: "500px",
              width: "100%",
              color:'blue'
            }}
          >
            <div
              style={{
                height: "100%",
                width: "100%",
                gap:'10px',
                backgroundColor: "#EFF1F1 ",
                display: "grid",
                gridTemplateColumns: "repeat(2,1fr)",
                padding:'2%'
              }}
            >
              {/* 1st */}
              <div
                style={{
                  height: "250px",
                  width: "100%",
                  backgroundColor: "none",
                }}
              >
                <img
                  style={{ height: "80%", width: "100%" }}
                  src="https://pisces.bbystatic.com/image2/BestBuy_US/dam/GL-72996-flex-persona-fg-220509-6016e3c8-f983-4ac2-8dc9-b241bf9812da.jpg;maxHeight=432;maxWidth=432"
                  alt=""
                />
                <h3>
                  For Chill dads
                </h3>
              </div>
              {/* 2nd */}
              <div
                style={{
                  height: "250px",
                  width: "100%",
                  backgroundColor: "none",
                }}
              >
                <img
                  style={{ height: "80%", width: "100%" }}
                  src="https://pisces.bbystatic.com/image2/BestBuy_US/dam/GL-72996-flex-persona-outdoors-220509-510c4e8d-b671-4e4c-b1ec-8fd8c41bcd13.jpg;maxHeight=432;maxWidth=432"
                  alt=""
                />
                <h3>For outdoorsy dads</h3>
              </div>
              {/* 3rd */}
              <div
                style={{
                  height: "250px",
                  width: "100%",
                  backgroundColor: "none",
                }}
              >
                <img
                  style={{ height: "80%", width: "100%" }}
                  src="https://pisces.bbystatic.com/image2/BestBuy_US/dam/GL-72996-flex-persona-fitness-220509-9d40595e-4ce1-4d7d-8eb4-9d0c9c26e64f.jpg;maxHeight=432;maxWidth=432"
                  alt=""
                />
                <h3>For exercise-loving dads</h3>
              </div>
              {/* 4rth */}
              <div
                style={{
                  height: "250px",
                  width: "100%",
                  backgroundColor: "none",
                }}
              >
                <img
                  style={{ height: "80%", width: "100%" }}
                  src="https://pisces.bbystatic.com/image2/BestBuy_US/dam/GL-72996-flex-persona-chef-220509-ea150d50-2edd-4735-ae5c-a6523eea7f37.jpg;maxHeight=432;maxWidth=432"
                  alt=""
                />
                <h3>For chef dads</h3>
              </div>
            </div>

            {/* 2nd parent div */}
            <div
              style={{
                height: "100%",
                width: "100%",
                backgroundColor: "#EFF1F1 ",
                display: "grid",
                gridTemplateColumns: "repeat(2,1fr)",
                padding:'2%',
                 gap:'10px'
              }}
            >
              {/* 1st */}
              <div
                style={{
                  height: "250px",
                  width: "100%",
                }}
              >
                <img
                  style={{ height: "80%", width: "100%" }}
                  src="https://pisces.bbystatic.com/image2/BestBuy_US/dam/GL-73044-flex-persona-little-220516-9c86109f-7477-4382-9033-bb1a7d45a00f.jpg;maxHeight=432;maxWidth=432"
                  alt=""
                />
                <h3>
                  For little grads
                </h3>
              </div>
              {/* 2nd */}
              <div
                style={{
                  height: "250px",
                  width: "100%",

                }}
              >
                <img
                  style={{ height: "80%", width: "100%" }}
                  src="https://pisces.bbystatic.com/image2/BestBuy_US/dam/GL-73044-flex-persona-middle-220516-5cb33289-f4ed-4e09-ac3e-2ba0e695496b.jpg;maxHeight=432;maxWidth=432"
                  alt=""
                />
                <h3>For middle school grades</h3>
              </div>
              {/* 3rd */}
              <div
                style={{
                  height: "250px",
                  width: "100%",
            
                }}
              >
                <img
                  style={{ height: "80%", width: "100%" }}
                  src="https://pisces.bbystatic.com/image2/BestBuy_US/dam/GL-73044-flex-persona-high-220516-30b898c1-65bb-4bcc-8c86-86f1bafda292.jpg;maxHeight=432;maxWidth=432"
                  alt=""
                />
                <h3>For high school grads</h3>
              </div>
              {/* 4rth */}
              <div
                style={{
                  height: "250px",
                  width: "100%",
            
                }}
              >
                <img
                  style={{ height: "80%", width: "100%" }}
                  src="https://pisces.bbystatic.com/image2/BestBuy_US/dam/GL-73044-flex-persona-college-220516-7a6d93f6-df65-46e3-be9c-a114e1204842.jpg;maxHeight=432;maxWidth=432"
                  alt=""
                />
                <h3>For college grade</h3>
              </div>
            </div>

            {/* 3rf parent div */}
            <div
              style={{
                height: "100%",
                width: "100%",
                backgroundColor: "#EFF1F1 ",
                display: "grid",
                gridTemplateColumns: "repeat(2,1fr)",
              }}
            >
              {/* 3rd */}
              {/* 1st */}
              <div
                style={{
                  height: "250px",
                  width: "100%",
                
                }}
              >
                <img
                  style={{ height: "80%", width: "100%" }}
                  src="https://pisces.bbystatic.com/image2/BestBuy_US/dam/GL-74510-Explore-mentorship-220606-bec44b7f-cec2-4932-b5c0-0950e649fa6e.jpg;maxHeight=432;maxWidth=432"
                  alt=""
                />
                <h3>
                  Teach access means brighter furtures
                </h3>
              </div>
              {/* 2nd */}
              <div
                style={{
                  height: "250px",
                  width: "100%",
                  backgroundColor: "none",
                }}
              >
                <img
                  style={{ height: "80%", width: "100%" }}
                  src="https://pisces.bbystatic.com/image2/BestBuy_US/dam/GL-74510-Explore-more-love-220606-7dccad72-4487-4593-9c7c-56a5c2afa038.jpg;maxHeight=432;maxWidth=432"
                  alt=""
                />
                <h3>More celebration. More Love.</h3>
              </div>
              {/* 3rd */}
              <div
                style={{
                  height: "250px",
                  width: "100%",
                  backgroundColor: "none",
                }}
              >
                <img
                  style={{ height: "80%", width: "100%" }}
                  src="https://pisces.bbystatic.com/image2/BestBuy_US/dam/GL-73679-flex-circular-eco-220509-e952af56-a1b6-477d-8a25-2ed4159c74e0.jpg;maxHeight=432;maxWidth=432"
                  alt=""
                />
                <h3>Sustainability is a part og our ecosystem</h3>
              </div>
              {/* 4rth */}
              <div
                style={{
                  height: "250px",
                  width: "100%",
                  backgroundColor: "none",
                }}
              >
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

        <Stack>
            <Heading>Our featured offers</Heading>
            <Divider/>
            <Flex direction={'column'} >
                <Flex>

                </Flex>
                <Flex></Flex>
            </Flex>
        </Stack>

    </>
  );
};




const Crd = (props) => {
  return (
    <>
      <div>
        <img src={props.image} alt="Special Deals" />
      </div>
      <div>
        <span>{props.url}</span>
      </div>
    </>
  );
};
