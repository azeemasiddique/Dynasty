import {
  Box,
  Flex,
  Text,
  Center,
  Image,
  Heading,
  SimpleGrid,
} from "@chakra-ui/react";
import React from "react";
import teamPerson1 from "../Images/teamPerson1.svg";
import teamPerson2 from "../Images/teamPerson2.svg";
import teamPerson3 from "../Images/teamPerson3.svg";
import teamPerson4 from "../Images/teamPerson4.svg";

import {
  neighborhoodHeading,
  neighborhoodSubHeading,
  teamImage,
  teamTextStyle,
  teamSubTextStyle,
} from "../styling.js";
function Team() {
  return (
    <Flex flexDirection="column" alignItems="center" m={15} mb={35}>
      <Center>
        <Text
          style={{ ...neighborhoodHeading }}
          fontSize={{ base: "16px", md: "17px", lg: "19.4px" }}
        >
          Introduce yourself to
        </Text>
      </Center>
      <Heading
        as="h2"
        style={{ ...neighborhoodSubHeading }}
        fontStyle="Poppins"
        fontSize={{ base: "27.6px", md: "34px", lg: "39.8px" }}
        textAlign="center"
        mb={10}
        ml={{ base: "5px", md: "18px", lg: "15px" }}
      >
        Our Team of Experts
      </Heading>

      <SimpleGrid
        flexDirection="row"
        columns={{ base: 2, md: 4 }}
        spacing={9}
        m={{ base: "6", md: "10", lg: "15" }}
        justifyItems="center"
        // mb={14}
      >
        <Box display="flex" flexDirection="column" alignItems="baseline">
          <Image src={teamPerson1} objectFit="cover" style={{ ...teamImage }} />
          <Text as="h3" style={{ ...teamTextStyle }}>
            Brendon M
          </Text>
          <Text as="h5" style={{ ...teamSubTextStyle }}>
            CEO & Founder
          </Text>
        </Box>
        <Box display="flex" flexDirection="column" alignItems="baseline">
          <Image src={teamPerson2} objectFit="cover" style={{ ...teamImage }} />
          <Text as="h3" style={{ ...teamTextStyle }}>
            Jodi J. Appleby
          </Text>
          <Text as="h5" style={{ ...teamSubTextStyle }}>
            Real Estate Developer
          </Text>
        </Box>
        <Box display="flex" flexDirection="column" alignItems="baseline">
          <Image src={teamPerson3} objectFit="cover" style={{ ...teamImage }} />
          <Text as="h3" style={{ ...teamTextStyle }}>
            Justin S. Meza
          </Text>
          <Text as="h5" style={{ ...teamSubTextStyle }}>
            Listing Agent
          </Text>
        </Box>
        <Box display="flex" flexDirection="column" alignItems="baseline">
          <Image src={teamPerson4} objectFit="cover" style={{ ...teamImage }} />
          <Text as="h3" style={{ ...teamTextStyle }}>
            Susan T. Smith
          </Text>
          <Text as="h5" style={{ ...teamSubTextStyle }}>
            Buyer's Agent
          </Text>
        </Box>
      </SimpleGrid>
    </Flex>
  );
}

export default Team;
