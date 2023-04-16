import {
  Box,
  Flex,
  Text,
  Button,
  Stack,
  useColorModeValue,
  Input,
  Image,
  MenuItem,
  MenuList,
  MenuButton,
  Menu,
  MenuDivider,
  Spacer,
  Divider,
} from "@chakra-ui/react";
import { Link } from "react-router-dom";
import { FaAngleDown, FaArrowRight, FaBars, FaSearch } from "react-icons/fa";
import {FaShoppingCart} from 'react-icons/fa';
import { useSelector } from "react-redux";

export const Navbar = () => {
  const cart = useSelector((store) => store.ecommerceData.cart);

  return (
    <Box
      marginBottom={"30px"}
      style={{
        width: "100%",
        // border:'5px solid red'
      }}
      fontSize={{ base: 8, sm: 12, md: 14, lg: 18 }}
    >
      <Flex
        bg={useColorModeValue("#0944B4 ", "#0944B4 ")}
        color={useColorModeValue("white.600", "white")}
        minH={"100px"}
        py={{ base: 2 }}
        px={{ base: 4 }}
        borderBottom={2}
        borderStyle={"solid"}
        borderColor={useColorModeValue("white.200", "white.900")}
        align={"center"}
      >
        <Spacer display={"flex"} w="20%">
          <Stack>
            <Link to="/">
              <Image
                boxSize="70px"
                bg={"none"}
                src="https://tse1.mm.bing.net/th?id=OIP.7d9ohKK2am7oCloUFeQn4wHaFb&pid=Api&P=0&w=239&h=175"
                alt="Best Buy"
              />
            </Link>
          </Stack>
          <Stack>
            <Menu>
              <MenuButton px={4} py={2} bg={"#0944B4"} color="white">
                <Flex fontSize={"4xl"} alignItems="center" gap="10px">
                  <Box>
                    <FaBars />
                  </Box>
                  <Text fontSize={{ base: 10, sm: 14, md: 16, lg: 18 }}>
                    {" "}
                    Menu
                  </Text>
                </Flex>
              </MenuButton>
              <MenuList
                fontSize={{ base: 10, sm: 12, md: 14, lg: 18 }}
                color={"gray.500"}
              >
                <MenuItem>
                  <Flex alignItems="center">
                    Deals <FaArrowRight />{" "}
                  </Flex>
                </MenuItem>
                <MenuItem>
                  <Flex alignItems="center">
                    Support & Services <FaArrowRight />
                  </Flex>{" "}
                </MenuItem>
                <MenuItem>
                  <Flex alignItems="center">
                    Brands <FaArrowRight />{" "}
                  </Flex>{" "}
                </MenuItem>
                <MenuItem>
                  <Flex alignItems="center">
                    Featured <FaArrowRight />{" "}
                  </Flex>{" "}
                </MenuItem>
                <MenuDivider />
                <MenuItem>
                  <Flex alignItems="center">Shop by Department</Flex>
                </MenuItem>
                <MenuItem>
                  <Flex alignItems="center">
                    <Link to="#">Appliances </Link>
                    <FaArrowRight />
                  </Flex>{" "}
                </MenuItem>
                <MenuItem>
                  <Flex alignItems="center">
                    {" "}
                    <Link to="/phone">Cell Phones</Link> <FaArrowRight />{" "}
                  </Flex>{" "}
                </MenuItem>
                <MenuItem>
                  <Flex alignItems="center">
                    <Link to="/tv"> TV & Home Theater</Link> <FaArrowRight />{" "}
                  </Flex>{" "}
                </MenuItem>
                <MenuItem>
                  <Flex alignItems="center">
                    <Link to="/computer"> Computers & Tablets</Link>{" "}
                    <FaArrowRight />{" "}
                  </Flex>{" "}
                </MenuItem>
                <MenuItem>
                  <Flex alignItems="center">
                    <Link to="/computer"> Computers & Tablets</Link>{" "}
                    <FaArrowRight />{" "}
                  </Flex>{" "}
                </MenuItem>
                <MenuItem>
                  <Flex alignItems="center">
                    {" "}
                    <Link to="/camera"> Cameras, Camcarders & Drones </Link>
                    <FaArrowRight />{" "}
                  </Flex>{" "}
                </MenuItem>
              </MenuList>
            </Menu>
          </Stack>
        </Spacer>
        <Spacer>
          <Stack display={{base:'none',md:'none',lg:'block'}}>
            <Flex gap="10px">
              <Input />
              <Button>
                <FaSearch color="grey" />
              </Button>
            </Flex>
          </Stack>
        </Spacer>
        <Spacer>
          <Stack
            float={"right"}
            marginRight="40px"
            color="white"
            fontSize={"4xl"}
            align="center"
          >
            <Flex
              align={"center"}
              fontSize={{ base: 12, sm: 14, md: 16, lg: 18 }}
            >
              <Link to="/cart">
                <Button disabled={cart.length===0} bg={'#0944B4'} _hover={{
                  bg:'#0944B4',
                  translate:'0px'
                }} >
                <FaShoppingCart style={{height:'35px',width:'30px'}}  />
                </Button>
              </Link>
            </Flex>
          </Stack>
        </Spacer>
      </Flex>
      <Divider />
      <Box bg={"#0944B4"}>
        <Flex
          direction={"flex"}
          color="white"
          alignItems={"center"}
          justify={"space-around"}
          h={"50px"}
        >
          <Stack>
            <Text>
              <Link to="#">Top Deals</Link>
            </Text>
          </Stack>
          <Stack>
            <Text>
              <Link to="#">Deal of the Day</Link>
            </Text>
          </Stack>
          <Stack>
            <Text>
              <Link to="#">Totaltech Membership</Link>
            </Text>
          </Stack>
          <Stack>
            <Text>
              <Link to="#">Credit Cards</Link>
            </Text>
          </Stack>
          <Stack>
            <Text>
              <Link to="#">Gift Cards</Link>
            </Text>
          </Stack>
          <Stack>
            <Text>
              <Link to="#">Gift Ideas</Link>
            </Text>
          </Stack>
          <Stack>
            <Menu>
              <MenuButton
                px={4}
                py={2}
                bg={useColorModeValue("#0944B4 ", "#0944B4 ")}
                color="white"
              >
                <Flex alignItems="center">
                  {" "}
                  Account <FaAngleDown />{" "}
                </Flex>
              </MenuButton>
              <MenuList fontWeight="500" p="2%">
                <MenuItem>
                  <Text color="black" fontSize={"12px"}>
                    Becoming a My Best Buy® member comes with easy order
                    tracking, rewards, offers and more.
                  </Text>
                </MenuItem>
                <MenuItem>
                  <Box w="100%" color="black">
                    <Link to="/login">Sign In</Link>
                  </Box>
                </MenuItem>
                <MenuItem>
                  <Box w="100%" color="black">
                    <Link to="/signup">Create an Account</Link>
                  </Box>
                </MenuItem>
                <MenuItem>
                  <Flex color="black" justify={"space-around"}>
                    <Link to="#">Order & Purchase</Link>{" "}
                    <Text fontSize={"8px"}>track,change,cancel</Text>
                  </Flex>
                </MenuItem>
                <MenuItem>
                  <Flex color="black" justify={"space-around"}>
                    <Link to="#"> Your Product </Link>
                    <Text fontSize={"8px"}>Support,Guide</Text>
                  </Flex>
                </MenuItem>
              </MenuList>
            </Menu>
          </Stack>
        </Flex>
      </Box>
    </Box>
  );
};
