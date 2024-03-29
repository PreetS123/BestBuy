import {
  Box,
  chakra,
  Container,
  Link,
  SimpleGrid,
  Stack,
  Text,
  VisuallyHidden,
  Input,
  useColorModeValue,
  Flex,
} from "@chakra-ui/react";
import {useLocation} from "react-router-dom";
import {
  FaArrowRight,
  FaFacebookF,
  FaInstagram,
  FaPinterestP,
  FaPrint,
  FaTwitter,
  FaYoutube,
} from "react-icons/fa";

const SocialButton = ({ children, label, href }) => {
  return (
    <chakra.button
      bg={useColorModeValue("blackAlpha.100", "whiteAlpha.100")}
      rounded={"full"}
      w={8}
      h={8}
      cursor={"pointer"}
      as={"a"}
      href={href}
      display={"inline-flex"}
      alignItems={"center"}
      justifyContent={"center"}
      transition={"background 0.3s ease"}
      _hover={{
        bg: useColorModeValue("blackAlpha.200", "whiteAlpha.200"),
      }}
    >
      <VisuallyHidden>{label}</VisuallyHidden>
      {children}
    </chakra.button>
  );
};

const ListHeader = ({ children }) => {
  return (
    <Text fontWeight={"500"} fontSize={"lg"} mb={2}>
      {children}
    </Text>
  );
};

export const Footer = () => {
  const location= useLocation();
  let pathname= location.pathname;
  // console.log("pathname",pathname);
  const bgWhite = useColorModeValue("white.500", "white.300");
  const bg2=useColorModeValue("blackAlpha.100", "whiteAlpha.100");
  
  return (
    <Box
      bg={useColorModeValue("gray.50", "gray.900")}
      color={useColorModeValue("gray.700", "gray.200")}
    >
    {pathname!=="/login" && pathname!=="/signup"?(
      <Container
        as={Stack}
        p="4%"
        maxW={"10xl"}
        py={10}
        borderTop={"1px solid"}
      >
        <SimpleGrid
          templateColumns={{ sm: "1fr 1fr", md: "4fr 2fr" }}
          spacing={8}
        >
          <Box>
            <SimpleGrid
              marginBottom={"30px"}
              templateColumns={{ sm: "1fr 1fr", md: "1fr 1fr 1fr" }}
              spacing={8}
              fontSize={{ base: 10, md: 14, lg: 16 }}
            >
              <Stack align={"flex-start"}>
                <ListHeader>Order & Purchases</ListHeader>
                <Link href={"#"} color='#1985F1'>Check Order Status</Link>
                <Link href={"#"} color='#1985F1'>Shipping, Delivery & Pickup</Link>
                <Link href={"#"} color='#1985F1'>Returns & Exchanges</Link>
                <Link href={"#"} color='#1985F1'>Price Match Guarantee</Link>
                <Link href={"#"} color='#1985F1'>Product Recalls</Link>
                <Link href={"#"} color='#1985F1'>Trade-In Program</Link>
                <Link href={"#"} color='#1985F1'>Gift Cards</Link>
              </Stack>
              <Stack align={"flex-start"}>
                <ListHeader>Support & Services</ListHeader>
                <Link href={"#"} color='#1985F1'>Visit our Support Center</Link>
                <Link href={"#"} color='#1985F1'>Shop with an Expert</Link>
                <Link href={"#"} color='#1985F1'>Schedule a Service</Link>
                <Link href={"#"} color='#1985F1'>Manage an Appointment</Link>
                <Link href={"#"} color='#1985F1'>Protection & Support Plans</Link>
                <Link href={"#"} color='#1985F1'>Haul Away & Recycling</Link>
                <Link href={"#"} color='#1985F1'>Contact Us</Link>
              </Stack>
              <Stack align={"flex-start"}>
                <ListHeader>Partnerships</ListHeader>
                <Link href={"#"} color='#1985F1'>Affiliate Program</Link>
                <Link href={"#"} color='#1985F1'>Advertise with Us</Link>
                <Link href={"#"} color='#1985F1'>Developers</Link>
                <Link href={"#"} color='#1985F1'>Best Buy Health</Link>
                <Link href={"#"} color='#1985F1'>Best Buy Education</Link>
              </Stack>
            </SimpleGrid>
            <SimpleGrid
              marginBottom={"30px"}
              templateColumns={{ sm: "1fr 1fr", md: "1fr 1fr 1fr" }}
              spacing={8}
              fontSize={{ base: 10, md: 14, lg: 16 }}
            >
              <Stack align={"flex-start"}>
                <ListHeader>Payment Options</ListHeader>
                <Link href={"#"} color='#1985F1'>My Best Buy* Credit Card</Link>
                <Link href={"#"} color='#1985F1'>Pay Your Bill at Citibank</Link>
                <Link href={"#"} color='#1985F1'>Lease to Own</Link>
              </Stack>
              <Stack align={"flex-start"}>
                <ListHeader>Rewards & Membership</ListHeader>
                <Link href={"#"} color='#1985F1'>Best Buy Totaltech</Link>
                <Link href={"#"} color='#1985F1'>My Best Buy</Link>
                <Link href={"#"} color='#1985F1'>View Points & Certificates</Link>
                <Link href={"#"} color='#1985F1'>Member Offers</Link>
              </Stack>
              <Stack align={"flex-start"}>
                <ListHeader>About Best Buy</ListHeader>
                <Link href={"#"} color='#1985F1'>Corporate Information</Link>
                <Link href={"#"} color='#1985F1'>Careers</Link>
                <Link href={"#"} color='#1985F1'>
                  Corporate Responsibility & Sustainability
                </Link>
                <Link href={"#"} color='#1985F1'>Discover & Learn</Link>
              </Stack>
            </SimpleGrid>
          </Box>
          <Stack
            h='fit-content'
            align={"flex-start"}
            p="2%"
            bg={bgWhite}
          >
            <Flex
              p="3%"
              h={"70%"}
              direction={"column"}
              justifyContent="space-around"
              bg={bgWhite}
              border="1px solid rgb(196,196,196)"
              gap='10px'
            >
              <Stack direction={"column"}>
                <ListHeader fontSize={{base:10,md:14,lg:16}}>Get the latest deals and more.</ListHeader>
                <Box>
                  <Input
                    placeholder={"Your email address"}
                    bg={bg2}
                    border={0}
                    _focus={{
                      bg: "whiteAlpha.300",
                    }}
                  />
                </Box>
                <Box>
                  <Input
                    type="submit"
                    bg={"blue"}
                    color="white"
                    border={0}
                    _focus={{
                      bg: "blue.300",
                    }}
                  />
                </Box>
              </Stack>
              <Stack spacing={6}>
                <Flex>
                  <Box fontSize={{base:20,md:34,lg:46}} marginRight="20px" color={"blue"}>
                    {/* <Logo  /> */}
                    <FaPrint width={'16px'} />
                  </Box>
                  <Text fontSize={{base:10,md:14,lg:16}} fontWeight="500">
                    Best Buy app <br />
                    <Link to="#">
                      {" "}
                      Learn more <FaArrowRight />
                    </Link>
                  </Text>
                </Flex>
                <Stack direction={"row"} spacing={6}>
                  <SocialButton
                    label={"Facebook"}
                    href={"https://www.facebook.com/bestbuy"}
                  >
                    <FaFacebookF />
                  </SocialButton>
                  <SocialButton
                    label={"Twitter"}
                    href={"https://twitter.com/BestBuy"}
                  >
                    <FaTwitter />
                  </SocialButton>
                  <SocialButton
                    label={"Instagram"}
                    href={"https://www.instagram.com/bestbuy/"}
                  >
                    <FaInstagram />
                  </SocialButton>
                  <SocialButton
                    label={"Printerest"}
                    href={"https://in.pinterest.com/bestbuy/"}
                  >
                    <FaPinterestP />
                  </SocialButton>
                  <SocialButton
                    label={"YouTube"}
                    href={"https://www.youtube.com/user/bestbuy"}
                  >
                    <FaYoutube />
                  </SocialButton>
                </Stack>
              </Stack>
            </Flex>
          </Stack>
        </SimpleGrid>
        <Text fontSize={{base:10,md:14,lg:16}}>
          How was your experience?{" "}
          <Link to="#">Give feedback about our website</Link>
        </Text>
      </Container>
      ):""}
      <Box
        borderTop={"1px solid"}
        bg={useColorModeValue("gray.50", "gray.900")}
        color={useColorModeValue("gray.700", "gray.200")}
        p={"1%"}
      >
        <Container
          display={{base:'none',lg:'block'}}
          as={Stack}
          maxW={"10xl"}
          py={4}
          direction={{ base: "column", md: "row" }}
          spacing={4}
          justify={{ base: "space-around", md: "space-between" }}
          align={{ base: "center", md: "center" }}
          fontSize={{ base: 10, md: 14, lg: 16 }}
        >
          <Stack direction={"row"} spacing={6}>
            <Link href={"#"} color='#1985F1'>Accessibility</Link>
            <Link href={"#"} color='#1985F1'>Terms & Conditions</Link>
            <Link href={"#"} color='#1985F1'>Privacy</Link>
            <Link href={"#"} color='#1985F1'>Interest-Based Ads</Link>
            <Link href={"#"} color='#1985F1'>California Privacy Rights</Link>
            <Link href={"#"} color='#1985F1'>Do Not Sell My Personal Information</Link>
            <Link href={"#"} color='#1985F1' display={{base:'none',md:'block',lg:'block'}}>California Supply Chain Transparancy Act </Link>
          </Stack>
        </Container>
        <Text fontSize={{ base: 10, md: 14, lg: 16 }}>
          In-store pricing may vary. Prices and offers are subject to change. ©
          2022 Best Buy. All rights reserved. BEST BUY, the BEST BUY logo, the
          tag design, and MY BEST BUY are trademarks of Best Buy and its
          affiliated companies.
        </Text>
      </Box>
    </Box>
  );
};
