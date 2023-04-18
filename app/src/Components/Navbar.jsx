import {
  Flex,
  Button,
  Input,
  Image,
  Divider,
  Drawer,
  DrawerBody,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  useDisclosure,
  HStack,
  Heading,
  InputGroup,
  InputRightElement,
  Menu,
  MenuButton,
  MenuList,
  MenuGroup,
  MenuItem,
  MenuDivider,
} from "@chakra-ui/react";
import { Link } from "react-router-dom";
import { FaArrowRight, FaBars, FaSearch } from "react-icons/fa";
import { FaShoppingCart } from "react-icons/fa";
import { BsTagFill } from "react-icons/bs";
import { useSelector } from "react-redux";

export const Navbar = () => {
  const cart = useSelector((store) => store.ecommerceData.cart);
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <>
      <Flex
        justify={"center"}
        align={"center"}
        style={{
          width: "100%",
          backgroundColor: "#1D34C8",
          position: "sticky",
          top: 0,
          zIndex:999,
        }}
      >
        <Flex w={"90%"} gap="10px" justify={"space-between"} align="center">
          <HStack flex={1}>
            <Link to="/">
              <Image
                boxSize="70px"
                bg={"none"}
                src="https://tse1.mm.bing.net/th?id=OIP.7d9ohKK2am7oCloUFeQn4wHaFb&pid=Api&P=0&w=79&h=75"
                alt="Best Buy"
              />
            </Link>
            <Button
              bg={"#1D34C8"}
              transition={"none"}
              borderRadius={"none"}
              color="#fff"
              fontSize={{ base: 14, sm: 18, md: 18, lg: 20 }}
              _hover={{
                bg: "#1D34C8",
                transition: "none",
              }}
              onClick={onOpen}
            >
              <FaBars style={{ fontSize: "18px" }} /> Menu
            </Button>
          </HStack>
          <InputGroup
            flex={3}
            size="md"
            display={{ base: "none", md: "block", lg: "block" }}
          >
            <Input
              pr="4.5rem"
              borderRadius={"0rem"}
              placeholder="What can we help you find today"
              bg={"#fff"}
            />
            <InputRightElement color={"gray.500"}>
              <FaSearch style={{ fontSize: "1.6rem" }} />
            </InputRightElement>
          </InputGroup>
          <HStack flex={1} float={"right"} justify={"flex-end"}>
            <Link to="/cart">
              <Button
                disabled={cart.length === 0}
                bg={"#0944B4"}
                _hover={{
                  bg: "#0944B4",
                  translate: "0px",
                }}
              >
                <FaShoppingCart
                  style={{ height: "35px", width: "30px", color: "#fff" }}
                />
              </Button>
            </Link>
            <Menu>
              <MenuButton as={Button} colorScheme="#1D34C8">
                My Account
              </MenuButton>
              <MenuList color="#fff" bg="#1D34C8">
                <MenuGroup title="My Account">
                  <Link to="/signup">
                    <MenuItem>Create your account</MenuItem>
                  </Link>
                  <Link to="/login">
                    <MenuItem>Sign-in </MenuItem>
                  </Link>
                </MenuGroup>
                <MenuDivider />
                <MenuGroup title="Help">
                  <MenuItem>Docs</MenuItem>
                  <MenuItem>FAQ</MenuItem>
                </MenuGroup>
              </MenuList>
            </Menu>
          </HStack>
        </Flex>
      </Flex>

      <Drawer placement={"left"} onClose={onClose} isOpen={isOpen}>
        <DrawerOverlay />
        <DrawerContent style={{ backgroundColor: "#1C31BB", color: "#fff" }}>
          <DrawerHeader borderBottomWidth="1px">
            <Heading fontSize={{ base: 10, md: 14, lg: 16 }}>
              <span>BESTBUY</span> <BsTagFill style={{ color: "yellow" }} />
            </Heading>
          </DrawerHeader>
          <DrawerBody>
            <Flex alignItems="center" justify={"space-between"} h={"40px"}>
              Deals <FaArrowRight />{" "}
            </Flex>
            <Flex alignItems="center" justify={"space-between"} h={"40px"}>
              Support & Services <FaArrowRight />
            </Flex>{" "}
            <Flex alignItems="center" justify={"space-between"} h={"40px"}>
              Brands <FaArrowRight />{" "}
            </Flex>{" "}
            <Flex alignItems="center" justify={"space-between"} h={"40px"}>
              Featured <FaArrowRight />{" "}
            </Flex>{" "}
            <Flex align="center" h={"50px"}>
              Shop by Department
            </Flex>
            <Divider />
            <Flex alignItems="center" justify={"space-between"} h={"40px"}>
              <Link to="#">Appliances </Link>
              <FaArrowRight />
            </Flex>{" "}
            <Flex alignItems="center" justify={"space-between"} h={"40px"}>
              {" "}
              <Link to="/phone">Cell Phones</Link> <FaArrowRight />{" "}
            </Flex>{" "}
            <Flex alignItems="center" justify={"space-between"} h={"40px"}>
              <Link to="/tv"> TV & Home Theater</Link> <FaArrowRight />{" "}
            </Flex>{" "}
            <Flex alignItems="center" justify={"space-between"} h={"40px"}>
              <Link to="/computer"> Computers & Tablets</Link> <FaArrowRight />{" "}
            </Flex>{" "}
            <Flex alignItems="center" justify={"space-between"} h={"40px"}>
              <Link to="/computer"> Computers & Tablets</Link> <FaArrowRight />{" "}
            </Flex>{" "}
            <Flex alignItems="center" justify={"space-between"} h={"40px"}>
              {" "}
              <Link to="/camera"> Cameras, Camcarders & Drones </Link>
              <FaArrowRight />{" "}
            </Flex>{" "}
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </>
  );
};
