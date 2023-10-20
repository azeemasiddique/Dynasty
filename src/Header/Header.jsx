import React, { useState } from "react";
import {
  Box,
  Flex,
  Text,
  Link,
  Icon,
  Menu,
  MenuList,
  MenuDivider,
  MenuItem,
  MenuGroup,
  Button,
  MenuButton,
} from "@chakra-ui/react";
import { linkStyle, NameTextStyle, NameIconTextStyle } from "./headerStyling";
import { AiOutlineHome } from "react-icons/ai";
import { CgProfile } from "react-icons/cg";
import { GiHamburgerMenu } from "react-icons/gi";

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <Flex
      justifyContent={{ base: "space-between" }}
      margin={{ base: "10px", lg: "none" }}
    >
      <Flex
        align="center"
        paddingY="1rem"
        // background="black"
        justifyContent="space-between"
        display={{ base: "none", md: "flex", lg: "flex" }}
      >
        <Box
          ml="14"
          mt="4.5"
          display={{ base: "none", md: "flex", lg: "flex" }}
        >
          <Link mr="5" style={linkStyle}>
            Home
          </Link>
          <Link mr="5" style={linkStyle}>
            About
          </Link>
          <Link mr="5" style={linkStyle}>
            Listings
          </Link>
          <Link mr="5" style={linkStyle}>
            Services
          </Link>
          <Link mr="5" style={linkStyle}>
            Blogs
          </Link>
        </Box>

        <Flex gap="3px" display={{ lg: "flex", md: "flex", base: "none" }}>
          <Box
            ml={{ lg: "90px" }}
            mt="4.5"
            flexDirection="row"
            w="50px"
            h="50px"
            top="55px"
            borderRadius="50%"
            backgroundColor="#3A0CA3"
            display="flex"
            alignItems="center"
            justifyContent="center"
          >
            <Icon as={AiOutlineHome} boxSize={5} color="white"></Icon>
          </Box>
          <Text style={NameTextStyle} mt="5.5">
            Rezilla
          </Text>
        </Flex>

        <Flex ml="300px" display={{ base: "none", md: "flex", lg: "flex" }}>
          <Icon as={CgProfile} boxSize={5} mr="2px"></Icon>
          <Link style={linkStyle}>Login</Link>
          <Text>/</Text>
          <Link style={linkStyle} mr="4">
            Register
          </Link>
        </Flex>

        <Flex
          paddingLeft="4"
          align="center"
          style={NameIconTextStyle}
          flexDirection="row"
          gap="1"
          display={{ base: "none", md: "flex", lg: "flex" }}
        >
          <Icon as={AiOutlineHome} boxSize={5} color="white"></Icon>
          <Text textColor="white">Add Listings</Text>
        </Flex>
      </Flex>
      <Flex
        // width="120vh"
        // margin="5px"
        display={{ lg: "none", md: "none", base: "flex" }}
        // justify="space-between"
      >
        <Flex flexDirection="row" align="center">
          <Flex
            // mt="4.5"
            w="50px"
            h="50px"
            borderRadius="50%"
            backgroundColor="#3A0CA3"
            alignItems="center"
            justifyContent="center"
          >
            <Icon as={AiOutlineHome} boxSize={5} color="white"></Icon>
          </Flex>

          <Text style={NameTextStyle}>Rezilla</Text>
        </Flex>
      </Flex>
      <Flex display={{ base: "flex", md: "none", lg: "none" }}>
        <Menu display={{ base: "block", md: "none", lg: "none" }}>
          <MenuButton
            as={Button}
            color="white"
            backgroundColor="#414BA4"
            // flexDirection="flex-end"
          >
            <Icon as={GiHamburgerMenu} boxSize={6} cursor="pointer" />
          </MenuButton>
          <MenuList>
            <MenuGroup>
              <MenuItem>
                <Link style={linkStyle}>Home</Link>
              </MenuItem>
              <MenuItem>
                <Link style={linkStyle}>About</Link>
              </MenuItem>
              <MenuItem>
                <Link style={linkStyle}>Listings</Link>
              </MenuItem>
              <MenuItem>
                <Link style={linkStyle}>Services</Link>
              </MenuItem>
              <MenuItem>
                <Link style={linkStyle}>Blogs</Link>
              </MenuItem>
            </MenuGroup>
            <MenuDivider />
            <MenuGroup>
              <MenuItem>
                <Flex>
                  <Icon
                    as={CgProfile}
                    boxSize={5}
                    mr="2px"
                    color="purple"
                  ></Icon>
                  <Link style={linkStyle} ml="6px" mr={2}>
                    Login
                  </Link>
                  <Text>/</Text>
                  <Link style={linkStyle} ml="2">
                    Register
                  </Link>
                </Flex>
              </MenuItem>
              <MenuItem>
                <Flex>
                  <Icon as={AiOutlineHome} boxSize={5} color="purple"></Icon>
                  <Text ml="6px" fontWeight="bold">
                    Add Listings
                  </Text>
                </Flex>
              </MenuItem>
            </MenuGroup>
          </MenuList>
        </Menu>
      </Flex>
    </Flex>
  );
};

export default Header;
