import React from "react";
import { Flex, Text, Image, Button } from "@chakra-ui/react";
import agentPic from "../Images/agentPic.svg";
import { agentText, agentSubText, agentButtonText } from "../styling.js";

function Agent() {
  return (
    <Flex
      flexDirection={{ base: "column-reverse", md: "row", lg: "row" }}
      background="#3A0CA3"
      width={{ base: "333px", md: "900px", lg: "1100px" }}
      height={{ base: "531px", md: "270px", lg: "260px" }}
      mt="120px"
      ml={{ base: "20px", md: "45px", lg: "70px" }}
      borderRadius={{ base: "20px", lg: "40px" }}
      alignItems="center"
      justifyContent={{ lg: "space-between" }}
      gap={4}
      p={{ base: "20px", lg: "90px" }}
    >
      <Image
        src={agentPic}
        alt="Image"
        objectFit="cover"
        boxSize="260px"
      ></Image>

      <Flex flexDirection={{ lg: "row", base: "column" }} gap={6}>
        <Flex
          width={{ lg: "344px" }}
          height={{ lg: "137px" }}
          flexDirection="column"
          gap={6}
        >
          <Text style={{ ...agentText }} color="#FFFFFF">
            Become a Agent
          </Text>
          <Text style={{ ...agentSubText }} color="#FFFFFF">
            Fusce venenatis tellus a felis scelerisque. venenatis tellus a felis
            scelerisque.
          </Text>
        </Flex>

        <Button
          as="h5"
          borderRadius="30px"
          color="#3A0CA3"
          background="#FFFFFF"
          style={{ ...agentButtonText }}
        >
          Register Now
        </Button>
      </Flex>
    </Flex>
  );
}

export default Agent;
