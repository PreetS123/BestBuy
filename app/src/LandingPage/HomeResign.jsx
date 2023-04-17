import {
  Box,
  Button,
  Flex,
  HStack,
  Heading,
  Image,
  Link,
  Stack,
  Text,
  VStack,
} from "@chakra-ui/react";
import React from "react";
import "./Home.css";

export const HomeResign = () => {
  return (
    <Box w={"100%"} mb={10}>
      {/* 1st box starts here */}
      <Flex p={2} gap={5} direction={{ base: "column", md: "row", lg: "row" }}>
        <VStack className="homepage_firstbx_one">
          <Heading mt={4} fontSize={{ base: "12px", md: "14px", lg: "18px" }}>
            Save upto $700 on select model
          </Heading>
          <Text fontSize={{ base: "12px", md: "14px", lg: "16px" }}>
            Minimum savings is $50
          </Text>
        </VStack>
        <VStack className="homepage_firstbx_two">
          <Stack
            p={2}
            border={"1px solid #E5E7E9"}
            className="homepage_first_today_pick"
          >
            <Heading
              fontSize={{ base: "8px", md: "10px", lg: "12px" }}
              align={"start"}
            >
              Today's top picks
            </Heading>
            <HStack spacing={"10px"}>
              <VStack align={"center"}>
                <Image
                  h={"80px"}
                  src="https://pisces.bbystatic.com/image2/BestBuy_US/images/products/5721/5721600_sd.jpg;maxHeight=94;maxWidth=158"
                />
                <Link to="#" alignItems={"end"} className="linkText">
                  Macbook Air 13" Laptop - Apple M1 ch...
                </Link>
              </VStack>
              <VStack align={"center"}>
                <Image
                  h={"80px"}
                  src="https://pisces.bbystatic.com/image2/BestBuy_US/images/products/6523/6523225_sd.jpg;maxHeight=94;maxWidth=158"
                />
                <Link to="#" alignItems={"end"} className="linkText">
                  Sony - PlayStation 5 God of War Ragnok...
                </Link>
              </VStack>
              <VStack align={"center"}>
                <Image
                  h={"80px"}
                  src="https://pisces.bbystatic.com/image2/BestBuy_US/images/products/6504/6504381_sd.jpg;maxHeight=94;maxWidth=178"
                />
                <Link to="#" alignItems={"end"} className="linkText">
                  Dell - Inspiron 2-in-1 14" FHD + Touch...
                </Link>
              </VStack>
              <VStack
                align={"center"}
                display={{ base: "none", md: "block", lg: "block" }}
              >
                <Image
                  h={"80px"}
                  src="https://pisces.bbystatic.com/image2/BestBuy_US/images/products/6401/6401722_sd.jpg;maxHeight=94;maxWidth=158"
                />
                <Link to="#" alignItems={"end"} className="linkText">
                  Samsung - 65" Class 7 Series LED 4k...
                </Link>
              </VStack>
            </HStack>
          </Stack>
          <HStack spacing={"20px"}>
            <Flex
              border={"1px solid #E5E7E9"}
              p={2}
              h={"250px"}
              direction={"column"}
              justify={"space-between"}
            >
              <Heading
                fontSize={{ base: "16px", md: "18px", lg: "18px" }}
                p={2}
                bg={"blue"}
                w={"fit-content"}
              >
                <span style={{ color: "#F3DF0F" }}>Outlet</span>
                <span style={{ color: "#fff" }}>Deals</span>
              </Heading>
              <Image src="https://pisces.bbystatic.com/image2/BestBuy_US/Gallery/ClearanceOpenBox_White-217158.png;maxHeight=130;maxWidth=200" />

              <Link to="#" className="linkText">
                View outlet deals
              </Link>
            </Flex>
            <Flex
              border={"1px solid #E5E7E9"}
              p={2}
              h={"250px"}
              direction={"column"}
              justify={"space-between"}
            >
              <Text>Top Deals</Text>
              <Image src="https://pisces.bbystatic.com/image2/BestBuy_US/images/products/5721/5721600_sd.jpg;maxHeight=138;maxWidth=204" />
              <Link to="#" className="linkText">
                Mackbook Air 13.3" Laptop - Apple M1....
              </Link>
              <Heading fontSize={{ base: "10px", md: "12px", lg: "14px" }}>
                $999.99
              </Heading>
              <Link to="#" className="linkText">
                View outlet deals
              </Link>
            </Flex>
          </HStack>
        </VStack>
      </Flex>

      {/* 2nd box starts here */}
      <Flex className="homepage_secondbx">
        <HStack
          align={"center"}
          margin="auto"
          mt={10}
          w={{ base: "100%", md: "60%", lg: "60%" }}
          spacing={"24px"}
        >
          <Flex direction="column" align={"center"}>
            <Heading
              color="#fff"
              fontSize={{ base: "8px", md: "14px", lg: "16px" }}
            >
              BESTBUY
            </Heading>
            <Heading
              color="#fff"
              mb={2}
              fontSize={{ base: "8px", md: "18px", lg: "20px" }}
            >
              totaltech
            </Heading>
            <Button style={{ color: "blue", borderRadius: "0px" }}>
              Learn More
            </Button>
          </Flex>
          <Flex direction={"column"}>
            <Heading
              color="#fff"
              fontSize={{ base: "8px", md: "18px", lg: "20px" }}
            >
              The membership you and your tech deserve.
            </Heading>
            <Text
              w={{ base: "100%", md: "70%", lg: "70%" }}
              color="#fff"
              fontSize={{ base: "5px", md: "10px", lg: "12px" }}
            >
              Best Buy Totaltech™ provides 24/7/365 tech support, up to 24
              months of product protection with active membership, free standard
              installation and so much more. Terms and conditions apply.
            </Text>
          </Flex>
        </HStack>
      </Flex>

      {/* 3rd box starts here */}
      <Flex
        direction={{ base: "column", md: "row", lg: "row" }}
        gap={"20px"}
        className="homepage_thirdbx"
      >
        <VStack className="homepage_thirdbx_one">
          <Heading fontSize={{ base: "10px", md: "18px", lg: "20px" }}>
            Mackbook
          </Heading>
          <Heading fontSize={{ base: "10px", md: "18px", lg: "20px" }}>
            Save up to $700
          </Heading>
          <Text fontSize={{ base: "10px", md: "14px", lg: "18px" }}>
            on select models.
          </Text>
          <Text fontSize={{ base: "10px", md: "14px", lg: "18px" }}>
            Minimum savings is $100
          </Text>
        </VStack>
        <VStack className="homepage_thirdbx_two">
          <Heading fontSize={{ base: "10px", md: "18px", lg: "20px" }}>
            Sustainability Activated
          </Heading>
          <Text fontSize={{ base: "10px", md: "12px", lg: "18px" }}>
            Eco-friendly solutions to upgrade your home while doing good for the
            environment.
          </Text>
        </VStack>
        <VStack align={"center"} className="homepage_thirdbx_three">
          <Button
            color={"blue"}
            fontSize={{ base: "10px", md: "10px", lg: "12px" }}
          >
            Shop Now
          </Button>
        </VStack>
      </Flex>

      {/* our featured box starts here */}
      <Stack p={2}>
        <Heading fontSize={{ base: "14px", md: "18px", lg: "22px" }}>
          Our featured offers
        </Heading>
        <Flex
          direction={{ base: "column", md: "row", lg: "row" }}
          justify={"center"}
          p={2}
          borderTop={"1px solid #E5E7E9"}
          gap={"20px"}
        >
          <Flex direction="column" p={2}>
            <Image
              margin={"auto"}
              h={300}
              w={{ base: "100%", md: "250px", lg: "300px" }}
              src="https://pisces.bbystatic.com/image2/BestBuy_US/dam/MMT-672433_pol_COPE_DER-124ddbe4-4fcf-4833-abd9-f1d626c6dd78.jpg;maxHeight=500;maxWidth=400"
            />
            <Heading
              mt={4}
              fontSize={{ base: "16px", md: "16px", lg: "20px" }}
              color="blue"
            >
              Save up to $100 on Samsung Galaxy Watch.
            </Heading>
            <Text fontSize={{ base: "12px", md: "14px", lg: "14px" }}>
              Minimun savings is $30
            </Text>
          </Flex>
          <Flex direction="column" p={2}>
            <Image
              margin={"auto"}
              h={300}
              w={{ base: "100%", md: "250px", lg: "300px" }}
              src="https://pisces.bbystatic.com/image2/BestBuy_US/dam/pol-MMT-672456-230417_DER-15e5dc3b-9acb-4296-b245-7c86f955d3bb.jpg;maxHeight=504;maxWidth=400"
            />
            <Heading
              mt={4}
              fontSize={{ base: "16px", md: "16px", lg: "20px" }}
              color="blue"
            >
              Save up to $120 an select HP Printer
            </Heading>
            <Text fontSize={{ base: "12px", md: "14px", lg: "14px" }}>
              Minimun savings is $20
            </Text>
          </Flex>
          <Flex direction="column" p={2}>
            <Image
              margin="auto"
              h={300}
              w={{ base: "100%", md: "250px", lg: "300px" }}
              src="https://pisces.bbystatic.com/image2/BestBuy_US/dam/pol-MMT-668381-der-d4da9f50-1804-4d80-ad77-b0dca35a43d4.jpg;maxHeight=500;maxWidth=400"
            />
            <Heading
              mt={4}
              fontSize={{ base: "16px", md: "16px", lg: "20px" }}
              color="blue"
            >
              Save on select LEGO
            </Heading>
            <Text fontSize={{ base: "12px", md: "14px", lg: "14px" }}>
              Check out LEGO Super Mario, LEGO Marvel,
              <br /> LEGO City and other builds for kids and adults.
            </Text>
          </Flex>
        </Flex>
      </Stack>

      {/* gift ideas and expert shopping details */}
      <Flex
        direction={{ base: "column", md: "row", lg: "row" }}
        gap={"10px"}
        p={2}
      >
        <Flex
          bg={"#EFEEEA"}
          p={2}
          flex={5}
          justify={"center"}
          align={"center"}
          border={"1px solid #979693"}
        >
          <Image
            borderRadius={"50%"}
            w={"50px"}
            h={"50px"}
            src="https://pisces.bbystatic.com/image2/BestBuy_US/dam/gl-77114-giftideas-ep-ghp-half_der-4ed4c996-c753-4780-8867-ab5a6a3ba4a1.png;maxHeight=52;maxWidth=52"
          />
          <Flex direction="column" justify={"flex-start"}>
            <Heading
              fontSize={{ base: "18px", md: "16px", lg: "18px" }}
              color="#636362"
            >
              Gift Ideas.
            </Heading>
            <Text fontSize={{ base: "13px", md: "10px", lg: "13px" }}>
              Cover your entire list in one stop.
            </Text>
            <Link to="#" className="linkText">
              Shop Now
            </Link>
          </Flex>
        </Flex>
        <Flex
          bg="#EFEEEA"
          p={2}
          flex={5}
          justify={"center"}
          align="center"
          border={"1px solid #979693"}
        >
          <Image
            borderRadius={"50%"}
            w={"50px"}
            h={"50px"}
            src="https://pisces.bbystatic.com/image2/BestBuy_US/dam/GL-65963-expert-210831-70c599ed-fc34-47d8-9b93-85f899d93c8f.png;maxHeight=52;maxWidth=52"
          />
          <Flex direction="column" justify={"flex-start"}>
            <Heading
              fontSize={{ base: "18px", md: "16px", lg: "18px" }}
              color="#636362"
            >
              Shop with an expert, right from home.
            </Heading>
            <Text fontSize={{ base: "13px", md: "10px", lg: "13px" }}>
              Call, chat, video chat or in-home consultation.
            </Text>
            <Link to="#" className="linkText">
              Shop with an expert
            </Link>
          </Flex>
        </Flex>
      </Flex>

      {/* free shipping ready in one day */}
      <Flex
        mt={4}
        direction={{ base: "column", md: "row", lg: "row" }}
        gap={"30px"}
        justify={"space-around"}
        align="center"
      >
        <HStack justify={"center"} align="center">
          <Image src="https://pisces.bbystatic.com/image2/BestBuy_US/Gallery/gl-vpe-freeshippin_der1-206853.png;maxHeight=60;maxWidth=60" />
          <VStack align={"flex-start"}>
            <Heading fontSize={{ base: "10px", md: "18px", lg: "20px" }}>
              Free shipping
            </Heading>
            <Text fontSize={{ base: "10px", md: "18px", lg: "20px" }}>
              on orders $35 and up.
            </Text>
          </VStack>
        </HStack>
        <HStack>
          <Image src="https://pisces.bbystatic.com/image2/BestBuy_US/Gallery/gl-34525-app-vpe-storepickup1-206866.png;maxHeight=60;maxWidth=60" />
          <VStack align={"flex-start"}>
            <Heading fontSize={{ base: "10px", md: "18px", lg: "20px" }}>
              Ready in one hour
            </Heading>
            <Text fontSize={{ base: "10px", md: "18px", lg: "20px" }}>
              with Store Pickup.
            </Text>
          </VStack>
        </HStack>
        <HStack>
          <Image src="https://pisces.bbystatic.com/image2/BestBuy_US/Gallery/gl-vpe-freeshippin_der1-206853.png;maxHeight=60;maxWidth=60" />
          <VStack align={"flex-start"}>
            <Heading fontSize={{ base: "10px", md: "18px", lg: "20px" }}>
              Same day delivery
            </Heading>
          </VStack>
        </HStack>
      </Flex>

      {/* deal of the day and open box deal */}
      <Flex
        mt={4}
        h={"400px"}
        direction={"row-reverse"}
        align={"flex-end"}
        gap={"10px"}
      >
        <VStack className="dealofday">
          <Heading
            style={{ position: "relative", top: "70%" }}
            fontSize={{ base: "10px", md: "10px", lg: "12px" }}
          >
            Save when you shop BestBuy Outlets deal.
          </Heading>
        </VStack>
        <VStack className="outletimage">
          <Heading
            fontSize={{ base: "8px", md: "12px", lg: "14px" }}
            color="#fff"
            style={{ position: "relative", top: "70%" }}
          >
            Great deals. Every day.
          </Heading>
        </VStack>
      </Flex>
    </Box>
  );
};
