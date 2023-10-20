import React from "react";
import {
  Flex,
  Grid,
  Icon,
  Text,
  Link,
  InputGroup,
  Input,
  InputRightElement,
  Stack,
} from "@chakra-ui/react";
import { AiOutlineHome } from "react-icons/ai";
import { BiLogoLinkedin, BiLogoFacebook } from "react-icons/bi";
import { BsInstagram } from "react-icons/bs";
import {
  subscribeText,
  subscribeSubText,
  subscribeLinksText,
  inputStyling,
  iconsStyling,
} from "../styling.js";
import { AiOutlineArrowRight } from "react-icons/ai";
import { AiOutlinePhone, AiOutlineMail } from "react-icons/ai";

function Subscribe() {
  return (
    
    <Grid
      backgroundColor="#ECEFFD"
      flexDirection="row"
      spacing={{ lg: 4 }}
      gap={3}
      mt={40}
      // border="1px solid black"
      templateColumns={{ lg: "repeat(4, 1fr)", base: "repeat(1,1fr)" }}
    >
      <Flex
        colSpan={{ lg: 1 }}
        flexDirection="column"
        ml={{ lg: 20, md: 20 }}
        gap={5}
        alignItems={{ base: "center", lg: "left" }}
        paddingX={{ base: "20px", lg: "30px" }}
        // border="1px solid black"
      >
        <Flex flexDirection="row" gap={2} mt={9}>
          <Flex
            width={50}
            height={50}
            borderRadius={30}
            backgroundColor="#3A0CA3"
            borderWidth={2}
            justifyContent="center"
            alignItems="center"
          >
            <Icon as={AiOutlineHome} style={{ color: "white" }} />
          </Flex>
          <Text mt="6px" style={{ ...subscribeText }}>
            Rezilla
          </Text>
        </Flex>
        <Text
          style={{ ...subscribeSubText }}
          ml={{ base: 8, md: 1.5, lg: 1.5 }}
        >
          2728 Hickory StreetSalt Lake City, UT 84104
        </Text>
        <Flex flexDirection="row" gap={1.5}>
          <Icon
            as={AiOutlinePhone}
            style={{ color: "black" }}
            width="20px"
            height="20px"
          />
          <Text style={{ ...subscribeSubText }}>+1 206-214-2298</Text>
        </Flex>
        <Flex flexDirection="row" gap={1.5}>
          <Icon
            as={AiOutlineMail}
            style={{ color: "black" }}
            width="20px"
            height="20px"
          />
          <Text style={{ ...subscribeSubText }}>support@rezilla.com</Text>
        </Flex>
      </Flex>
      <Flex
        // border="1px solid black"
        colSpan={1}
        flexDirection="column"
        ml={{ lg: 40 }}
        mt="37px"
        gap={3}
        display={{ base: "none", lg: "flex", md: "flex" }}
      >
        <Text style={{ ...subscribeText }}>Quick Links</Text>
        <Link mt={7} style={{ ...subscribeLinksText }}>
          Home
        </Link>
        <Link style={{ ...subscribeLinksText }}>About</Link>
        <Link style={{ ...subscribeLinksText }}>Listings</Link>
        <Link style={{ ...subscribeLinksText }}>Services</Link>
        <Link style={{ ...subscribeLinksText }}>Blogs</Link>
        <Link style={{ ...subscribeLinksText }}>Became an agent</Link>
      </Flex>

      <Flex
        // border="1px solid black"
        colSpan={1}
        flexDirection="column"
        ml={40}
        mt="37px"
        gap={3}
        display={{ base: "none", lg: "flex" }}
      >
        <Text style={{ ...subscribeText }}>Discovery</Text>
        <Text mt={7} style={{ ...subscribeLinksText }}>
          Canada
        </Text>
        <Text style={{ ...subscribeLinksText }}>United States</Text>
        <Text style={{ ...subscribeLinksText }}>Germany</Text>
        <Text style={{ ...subscribeLinksText }}>Africa</Text>
        <Text style={{ ...subscribeLinksText }}>India</Text>
      </Flex>

      <Flex
        colSpan={2}
        flexDirection="column"
        ml={{ lg: 20 }}
        mt="37px"
        // border="1px solid black"
        gap={5}
        alignItems={{ base: "center" }}
        paddingX={{ base: "20px" }}
      >
        <Text
          style={{ ...subscribeText }}
          textAlign={{ base: "center", md: "left", lg: "left" }}
        >
          Subscribe to our NewsLetter!
        </Text>

        <Stack spacing={4}>
          <InputGroup>
            <Input placeholder="Email Address" style={{ ...inputStyling }} />
            <InputRightElement>
              <Flex
                mt={{ lg: 6 }}
                width={50}
                height={50}
                borderRadius={{ lg: "25px", md: "25px", base: "100px" }}
                background="#3A0CA3"
                justifyContent="center"
                alignItems="center"
              >
                <Icon as={AiOutlineArrowRight} style={{ color: "#FFFFFF" }} />
              </Flex>
            </InputRightElement>
          </InputGroup>
        </Stack>

        <Text style={{ ...subscribeText }}>Follow us on</Text>
        <Flex flexDirection="row" gap={4}>
          <Icon as={BiLogoLinkedin} style={{ ...iconsStyling }}></Icon>
          <Icon as={BiLogoFacebook} style={{ ...iconsStyling }}></Icon>
          <Icon as={BsInstagram} style={{ ...iconsStyling }}></Icon>
        </Flex>
      </Flex>
    </Grid>
    // </Flex>
  );
}

export default Subscribe;
