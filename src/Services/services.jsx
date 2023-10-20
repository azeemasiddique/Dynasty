import {
  Box,
  Flex,
  Text,
  Center,
  Stack,
  Card,
  CardBody,
  Heading,
  SimpleGrid,
  Icon,
} from "@chakra-ui/react";
import React from "react";

import { textStyle } from "./servicesStyling";
import { GoHome } from "react-icons/go";
import { FaBed } from "react-icons/fa";
import { AiOutlineSearch } from "react-icons/ai";
const Services = () => {
  return (
    <Flex
      flexDirection="column"
      alignItems="center"
      mt={40}
      background="#D4D4D4"
      // width="100vh"
    >
      <Center mt={20}>
        <Text style={{ ...textStyle }}>OUR SERVICES</Text>
      </Center>
      <Text
        fontStyle="Poppins"
        fontSize={{ base: "27.6px", md: "39.8px", lg: "39.8px" }}
        fontWeight={{ base: "600", md: "600", lg: "600" }}
        textAlign="center"
        pl={{ base: "10px" }}
      >
        Donec porttitor euismod dignissim
      </Text>

      <SimpleGrid
        flexDirection="row"
        columns={{ base: 1, md: 3 }}
        spacing={4}
        mt={4}
        justifyItems="center"
        mb={10}
      >
        <Card
          borderRadius={{ base: "20px", md: "30px", lg: "30px" }}
          width={{ base: "300px", md: "320px", lg: "340px" }}
          height={{ base: "239px", md: "313px", lg: "363px" }}
          boxShadow="3px 3px 10px 0px rgba(0,0,0,0.4)"
          overflow="hidden"
          variant="outline"
          mb="5px"
          m={{ base: "30px" }}
        >
          <Stack>
            <Center>
              <Box
                mt="40px"
                background="#4361EE"
                width={{ base: "60px", md: "75px", lg: "90px" }}
                height={{ base: "60px", md: "75px", lg: "90px" }}
                borderRadius="70px"
                display="flex"
                alignItems="center"
                justifyContent="center"
              >
                <Icon
                  width={{ base: "26px", md: "40px", lg: "48px" }}
                  height={{ base: "25.96px", md: "30px", lg: "34.4px" }}
                  borderRadius="0.64px"
                  color="white"
                  as={AiOutlineSearch}
                ></Icon>
              </Box>
            </Center>
            <CardBody>
              <Text
                fontFamily="Poppins"
                textAlign="center"
                fontWeight={500}
                fontSize={{ base: "16px", md: "19px", lg: "19.4px" }}
              >
                Buy a New Home
              </Text>
              <Text
                py="2"
                px="2"
                textAlign="center"
                fontWeight="400"
                fontFamily="Poppins"
                color="#808080"
                fontSize={{ base: "13.3px", md: "16px", lg: "16px" }}
              >
                Donec porttitor euismod dignissim. Nullam a lacinia ipsum, nec
                dignissim purus.
              </Text>
            </CardBody>
          </Stack>
        </Card>

        <Card
          borderRadius="30px"
          width={{ base: "300px", md: "320px", lg: "340px" }}
          height={{ base: "239px", md: "313px", lg: "363px" }}
          boxShadow="3px 3px 10px 0px rgba(0,0,0,0.4)"
          overflow="hidden"
          variant="outline"
          mb="5px"
          m={{ base: "30px" }}
        >
          <Stack>
            <Center>
              <Box
                mt="40px"
                background="#4361EE"
                width={{ base: "60px", md: "75px", lg: "90px" }}
                height={{ base: "60px", md: "75px", lg: "90px" }}
                borderRadius="70px"
                display="flex"
                alignItems="center"
                justifyContent="center"
              >
                <Icon
                  width={{ base: "26px", md: "40px", lg: "48px" }}
                  height={{ base: "25.96px", md: "30px", lg: "34.4px" }}
                  borderRadius="0.64px"
                  color="white"
                  as={GoHome}
                ></Icon>
              </Box>
            </Center>
            <CardBody>
              <Text
                fontFamily="Poppins"
                textAlign="center"
                fontWeight={500}
                fontSize={{ base: "16px", md: "19px", lg: "19.4px" }}
              >
                Sell a House
              </Text>
              <Text
                py="2"
                px="2"
                textAlign="center"
                fontWeight="400"
                fontFamily="Poppins"
                color="#808080"
                fontSize={{ base: "13.3px", md: "16px", lg: "16px" }}
              >
                Donec porttitor euismod dignissim. Nullam a lacinia ipsum, nec
                dignissim purus.
              </Text>
            </CardBody>
          </Stack>
        </Card>

        <Card
          borderRadius="30px"
          width={{ base: "300px", md: "320px", lg: "340px" }}
          height={{ base: "239px", md: "313px", lg: "363px" }}
          boxShadow="3px 3px 10px 0px rgba(0,0,0,0.4)"
          overflow="hidden"
          variant="outline"
          mb="5px"
          m={{ base: "30px" }}
        >
          <Stack>
            <Center>
              <Box
                mt="40px"
                background="#4361EE"
                width={{ base: "60px", md: "75px", lg: "90px" }}
                height={{ base: "60px", md: "75px", lg: "90px" }}
                borderRadius="70px"
                display="flex"
                alignItems="center"
                justifyContent="center"
              >
                <Icon
                  width={{ base: "26px", md: "40px", lg: "48px" }}
                  height={{ base: "25.96px", md: "30px", lg: "34.4px" }}
                  borderRadius="0.64px"
                  color="white"
                  as={FaBed}
                ></Icon>
              </Box>
            </Center>
            <CardBody>
              <Text
                fontFamily="Poppins"
                textAlign="center"
                fontWeight={500}
                fontSize={{ base: "16px", md: "19px", lg: "19.4px" }}
              >
                Rent a House
              </Text>
              <Text
                py="2"
                px="2"
                textAlign="center"
                fontWeight="400"
                fontFamily="Poppins"
                color="#808080"
                fontSize={{ base: "13.3px", md: "16px", lg: "16px" }}
              >
                Donec porttitor euismod dignissim. Nullam a lacinia ipsum, nec
                dignissim purus.
              </Text>
            </CardBody>
          </Stack>
        </Card>
      </SimpleGrid>
    </Flex>
  );
};

export default Services;
