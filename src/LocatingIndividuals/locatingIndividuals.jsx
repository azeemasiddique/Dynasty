import React from "react";
import {
  Flex,
  Heading,
  Image,
  Text,
  Card,
  Stack,
  CardBody,
  Center,
} from "@chakra-ui/react";
import Rectangle14 from "../Images/Rectangle14.svg";
import Rectangle15 from "../Images/Rectangle15.svg";
import Rectangle16 from "../Images/Rectangle16.svg";
import home from "../Images/home.svg";
import { cardHeading } from "./locationIndividuals.js";
import usericon from "../Images/usericon.svg";

const LocatingIndividuals = () => {
  return (
    <Flex
      id="about"
      direction={["column", "column", "row"]} // Stack vertically on small screens, horizontally on larger screens
      justifyContent="space-between"
      pl={4}
      pr={4}
      pb={4}
      mt={30}
    >
      <Flex
        flexDirection="column"
        gap={4}
        flex="1"
        mt={4}
        ml={[0, 20, 55]}
        mr={[0, 0, 20]}
      >
        <Heading
          fontSize={["18px", "18px", "19.4px"]}
          fontFamily="Poppins"
          fontWeight={400}
          color="#4361EE"
          mb={2.5}
          textAlign="left"
        >
          WHO ARE WE
        </Heading>
        <Text
          fontSize={["27.6px", "33px", "39.8px"]}
          fontWeight={600}
          letterSpacing="0em"
          fontFamily="Poppins"
          textAlign="left"
        >
          Assisting individuals in locating the appropriate real estate.
        </Text>
        <Text
          color="#808080"
          fontFamily="Poppins"
          fontSize={["14.5px", "14.5px", "16px"]}
          fontWeight={400}
          letterSpacing="0em"
          textAlign={["left", "center", "left"]}
        >
          Donec porttitor euismod dignissim. Nullam a lacinia ipsum, nec
          dignissim purus. Nulla convallis ipsum molestie nibh malesuada, ac
          malesuada leo volutpat.
        </Text>
        <Card
          mt="10px"
          borderRadius="17px"
          boxShadow="3px 3px 10px 0px rgba(0,0,0,0.4)"
          direction={{ base: "row", lg: "row" }}
          overflow="hidden"
          variant="outline"
          mb="5px"
          width={["333px", "100%", "400px"]}
          height={["117px", "131px", "131px"]}
        >
          <Center ml={[0, 8]}>
            <Image width="40px" height="39.68" src={home} alt="Home Icon" />
          </Center>
          <Stack>
            <CardBody>
              <Heading as="h4" style={cardHeading}>
                Donec porttitor euismod
              </Heading>
              <Text py="2">
                Nullam a lacinia ipsum, nec dignissim purus. Nulla
              </Text>
            </CardBody>
          </Stack>
        </Card>

        <Card
          borderRadius="17px"
          boxShadow="3px 3px 10px 0px rgba(0,0,0,0.4)"
          direction={{ base: "row", sm: "row" }}
          overflow="hidden"
          variant="outline"
          width={["333px", "100%", "400px"]}
          height={["117px", "131px", "131px"]}
        >
          <Center ml={[0, 8]}>
            <Image width="40px" height="39.68" src={usericon} alt="User Icon" />
          </Center>
          <Stack>
            <CardBody>
              <Heading as="h4" style={cardHeading}>
                Donec porttitor euismod
              </Heading>
              <Text py="2">
                Nullam a lacinia ipsum, nec dignissim purus. Nulla
              </Text>
            </CardBody>
          </Stack>
        </Card>
      </Flex>
      <Flex flex="1" mr={20} mt={4}>
        <Image
          src={Rectangle14}
          width={["170px", "277px", "280px"]}
          height={["260px", "280px", "500px"]}
          borderRadius={{ base: "20px", md: "30px", lg: "30px" }}
          objectFit="cover"
        />
        <Flex flexDirection="column">
          <Image
            src={Rectangle15}
            width={["143px", "277px", "277px"]}
            height={["141px", "280px", "280px"]}
            borderRadius={{ base: "20px", md: "30px", lg: "30px" }}
            objectFit="cover"
          />
          <Image
            src={Rectangle16}
            width={["143px", "277px", "277px"]}
            height={["100px", "280px", "180px"]}
            borderRadius={{ base: "20px", md: "30px", lg: "30px" }}
            objectFit="cover"
          />
        </Flex>
      </Flex>
    </Flex>
  );
};

export default LocatingIndividuals;
