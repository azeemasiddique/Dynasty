import React from "react";
import { Icon, Text, Flex, Box, Image, HStack, Spacer } from "@chakra-ui/react";
import {
  AiFillEnvironment,
  AiOutlinePhone,
  AiOutlineMail,
} from "react-icons/ai";
import Header from "../../src/Header/Header.jsx";
import Rectangle4 from "../Images/Rectangle4.svg";
import Content from "./content";
import LocatingIndividuals from "../../src/LocatingIndividuals/locatingIndividuals";
import LatestListing from "../LatestListing/latestListing";
import Services from "../Services/services";
import Neighborhood from "../NeighborhoodProperties/neighborhood";
import Team from "../Team/team";
import Blogs from "../Blogs/blogs";
import Testinomials from "../Testimonials/testimonials";
import Subscribe from "../Subscribe/subscribe";
import Agent from "../Agent/agent";
import { useBreakpointValue } from "@chakra-ui/react";

const Home = () => {
  const displayBar = useBreakpointValue({ base: false, md: true, lg: true });
  const flexWidth = useBreakpointValue({ md: "100%", lg: "100%" });

  const imageWidth = useBreakpointValue({
    base: "100%",
    md: "100%",
    lg: "100%",
  });

  return (
    // width={{ md: "min-content" }}
    <Box id="home">
      {displayBar && (
        <Flex
          flexDirection="row"
          // direction={["column", "row"]}
          align={["start", "center"]}
          p={3}
          borderRadius="lg"
          boxShadow="lg"
          width={flexWidth}
          bg="#3A0CA3"
        >
          <HStack ml={30} align="center" spacing={2}>
            <Icon as={AiFillEnvironment} w={6} h={6} color="white" />
            <Text
              fontFamily="Poppins"
              fontSize={13.3}
              fontWeight={400}
              color="white"
            >
              Rezilla, 18 Grattan St, Brooklyn
            </Text>
          </HStack>
          <Spacer />

          <HStack align="center" spacing={2}>
            <Icon as={AiOutlinePhone} w={6} h={6} color="white" />
            <Text
              fontFamily="Poppins"
              fontSize={13.3}
              fontWeight={400}
              color="white"
            >
              {" "}
              +1 206-214-2298
            </Text>
          </HStack>

          <HStack ml={10} mr={10} align="center" spacing={2}>
            <Icon as={AiOutlineMail} w={8} h={8} color="white" />
            <Text
              fontFamily="Poppins"
              fontSize={13.3}
              fontWeight={400}
              color="white"
            >
              support@rezilla.com
            </Text>
          </HStack>
        </Flex>
      )}
      <Box position="relative">
        <Flex width={imageWidth}>
          <Image
            src={Rectangle4}
            width={imageWidth}
            height="100vh"
            objectFit="cover"
            zIndex="-1"
            position="absolute"
          />
        </Flex>
        <Header />
        <div style={{ marginBottom: "35px" }}></div>
        <Content />
        <LocatingIndividuals />
        <LatestListing />
        <Services />
        <Neighborhood />

        <Team />
        <Blogs />
        <Testinomials />
        <Agent />
        <Subscribe />
      </Box>
    </Box>
  );
};

export default Home;
