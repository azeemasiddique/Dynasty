import React from "react";
import {
  Flex,
  Box,
  Avatar,
  Heading,
  Image,
  Text,
  Card,
  Stack,
  CardBody,
  Divider,
  SimpleGrid,
  CardFooter,
  Center,
  Icon,
} from "@chakra-ui/react";
import { cardheadingStyle, cardProfileText } from "../styling.js";
import profile from "../Images/profile.svg";
import stars from "../Images/stars.svg";
import { AiOutlineArrowLeft, AiOutlineArrowRight } from "react-icons/ai";
import { useBreakpointValue } from "@chakra-ui/react";

function Testimonials() {
  const displayBar = useBreakpointValue({ base: false, md: true, lg: true });
  return (
    <Flex
      flexDirection="row"
      justifyContent="space-between"
      width="100%"
      pl={4}
      pr={4}
      pb={4}
    >
      <SimpleGrid
        flexDirection="row"
        columns={{ base: 1, md: 2 }}
        mt={10}
        // spacing={5}
      >
        <Flex
          flexDirection="column"
          gap={4}
          flex="1"
          mt={{ base: "15px", md: "32px", lg: "32px" }}
          ml={{ base: "10px", md: "16px", lg: "20px" }}
          mr={{ base: "10px", md: "16px", lg: "55px" }}
        >
          <Heading
            fontSize={{ base: "16px", md: "19.4px", lg: "19.4px" }}
            fontFamily="Poppins"
            fontWeight={400}
            color="#4361EE"
            mb={2.5}
          >
            TESTIMONIALS
          </Heading>
          <Heading
            as="h2"
            noOfLines={2}
            fontSize={{ base: "27.6", md: "39.8px", lg: "39.8px" }}
            fontWeight={600}
            letterSpacing="0em"
            fontFamily="Poppins"
          >
            Look What Our Customers Say!
          </Heading>
          <Text
            color="#808080"
            fontFamily="Poppins"
            fontSize={{ base: "13.3px", md: "16px", lg: "16px" }}
            fontWeight={400}
            letterSpacing="0em"
            textalign="left"
          >
            Fusce venenatis tellus a felis scelerisque, non pulvinar est
            pellentesque.
          </Text>
          {displayBar && (
            <Flex flexDirection="row" gap={7} mt={9}>
              <Flex
                width={50}
                height={50}
                borderRadius={30}
                borderColor="#4361EE"
                borderWidth={2}
                justifyContent="center" // Center horizontally
                alignItems="center" // Center vertically
              >
                <Icon as={AiOutlineArrowLeft} style={{ color: "#4361EE" }} />
              </Flex>
              <Flex
                width={50}
                height={50}
                borderRadius={30}
                borderColor="#4361EE"
                borderWidth={2}
                justifyContent="center"
                alignItems="center"
              >
                <Icon as={AiOutlineArrowRight} style={{ color: "#4361EE" }} />
              </Flex>
            </Flex>
          )}
        </Flex>

        <Flex
          flexDirection="column"
          gap={4}
          flex="1"
          mt={{ base: "15px", md: "25px", lg: "50px" }}
          ml={{ base: "10px", md: "16px", lg: "20px" }}
          mr={{ base: "10px", md: "16px", lg: "55px" }}
        >
          <Card
            mt="10px"
            borderRadius="17px"
            boxShadow="3px 3px 10px 0px rgba(0,0,0,0.4)"
            direction={{ base: "row", md: "column" }}
            overflow="hidden"
            variant="outline"
            mb="5px"
          >
            <Stack>
              <CardBody>
                <Text as="h4" style={{ ...cardheadingStyle }}>
                  I highly recommend Jodi J. Appleby. She was attentive to our
                  needs and worked tirelessly to find us the perfect home. We
                  couldn't be happier with our new place!
                </Text>
              </CardBody>

              <Divider color="#D4D4D4" border="1px" />
              <CardFooter>
                <Flex spacing="4">
                  <Flex gap="4" alignItems="center" flexWrap="wrap">
                    <Avatar name="Segun Adebayo" src={profile} />

                    <Box>
                      <Text as="h4" style={{ ...cardProfileText }}>
                        Barbara D. Smith
                      </Text>
                    </Box>
                    <Box ml={70}>
                      <Image src={stars}></Image>
                    </Box>
                  </Flex>
                </Flex>
              </CardFooter>
            </Stack>
          </Card>
        </Flex>
      </SimpleGrid>
    </Flex>
  );
}

export default Testimonials;
