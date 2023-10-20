// // import React from "react";
// // import { Flex, Text, Image, Box } from "@chakra-ui/react";
// // import {
// //   neighborhoodHeading,
// //   neighborhoodSubHeading,
// //   NImage1,
// //   NImage3,
// //   NImage4,
// //   NImage5,
// //   PTextStyling,
// //   PSubTextStyling,
// // } from "../styling.js";
// // import Property1 from "../Images/Property1.svg";
// // import Property2 from "../Images/Property2.svg";
// // import Property3 from "../Images/Property3.svg";
// // import Property4 from "../Images/Property4.svg";
// // import Property5 from "../Images/Property5.svg";
// // function Neighborhood() {
// //   return (
// //     <Flex flexDirection="column" padding="160px">
// //       <Text style={{ ...neighborhoodHeading }}>AREAS ACROSS THE TOWN</Text>
// //       <Text as="h2" style={{ ...neighborhoodSubHeading }}>
// //         Neighborhood Properties
// //       </Text>
// //       <Flex flexDirection="row" mt="px">
// //         <Box position="relative">
// //           <Image src={Property1} objectFit="cover" style={{ ...NImage1 }} />
// //           <Text
// //             as="h1"
// //             position="absolute"
// //             bottom="90px"
// //             left="40px"
// //             color="#FFFFFF"
// //             style={{ ...PTextStyling }}
// //           >
// //             216
// //           </Text>
// //           <Text
// //             as="h4"
// //             position="absolute"
// //             bottom="60px"
// //             left="40px"
// //             color="#FFFFFF"
// //             style={{ ...PSubTextStyling }}
// //           >
// //             New York City, NY
// //           </Text>
// //         </Box>
// //         <Box position="relative">
// //           <Image src={Property2} objectFit="cover" style={{ ...NImage1 }} />
// //           <Text
// //             as="h1"
// //             position="absolute"
// //             bottom="90px"
// //             left="40px"
// //             color="#FFFFFF"
// //             style={{ ...PTextStyling }}
// //           >
// //             141
// //           </Text>
// //           <Text
// //             as="h4"
// //             position="absolute"
// //             bottom="60px"
// //             left="40px"
// //             color="#FFFFFF"
// //             style={{ ...PSubTextStyling }}
// //           >
// //             Houston, TX
// //           </Text>
// //         </Box>
// //         <Box position="relative">
// //           <Image src={Property3} objectFit="cover" style={{ ...NImage3 }} />
// //           <Text
// //             as="h1"
// //             position="absolute"
// //             bottom="90px"
// //             left="40px"
// //             color="#FFFFFF"
// //             style={{ ...PTextStyling }}
// //           >
// //             212
// //           </Text>
// //           <Text
// //             as="h4"
// //             position="absolute"
// //             bottom="60px"
// //             left="40px"
// //             color="#FFFFFF"
// //             style={{ ...PSubTextStyling }}
// //           >
// //             San Diego, CA
// //           </Text>
// //         </Box>
// //       </Flex>
// //       <Flex flexDirection="row" mt="10px">
// //         <Box position="relative">
// //           <Image src={Property4} objectFit="cover" style={{ ...NImage4 }} />
// //           <Text
// //             as="h1"
// //             position="absolute"
// //             bottom="90px"
// //             left="40px"
// //             color="#FFFFFF"
// //             style={{ ...PTextStyling }}
// //           >
// //             183
// //           </Text>
// //           <Text
// //             as="h4"
// //             position="absolute"
// //             bottom="60px"
// //             left="40px"
// //             color="#FFFFFF"
// //             style={{ ...PSubTextStyling }}
// //           >
// //             Philadelphia, PA
// //           </Text>
// //         </Box>
// //         <Box position="relative">
// //           <Image src={Property5} objectFit="cover" style={{ ...NImage5 }} />
// //           <Text
// //             as="h1"
// //             position="absolute"
// //             bottom="90px"
// //             left="40px"
// //             color="#FFFFFF"
// //             style={{ ...PTextStyling }}
// //           >
// //             112
// //           </Text>
// //           <Text
// //             as="h4"
// //             position="absolute"
// //             bottom="60px"
// //             left="40px"
// //             color="#FFFFFF"
// //             style={{ ...PSubTextStyling }}
// //           >
// //             San Francisco, CA
// //           </Text>
// //         </Box>
// //       </Flex>
// //     </Flex>
// //   );
// // }

// // export default Neighborhood;

// import React from "react";
// import { Flex, Text, Image, Box , useBreakpointValue } from "@chakra-ui/react";
// import {
//   neighborhoodHeading,
//   neighborhoodSubHeading,
//   NImage1,
//   NImage3,
//   NImage4,
//   NImage5,
//   PTextStyling,
//   PSubTextStyling,
// } from "../styling.js";
// import Property1 from "../Images/Property1.svg";
// import Property2 from "../Images/Property2.svg";
// import Property3 from "../Images/Property3.svg";
// import Property4 from "../Images/Property4.svg";
// import Property5 from "../Images/Property5.svg";
// function Neighborhood() {
//   const isSmallScreen = useBreakpointValue({ base: true, md: false });

//   return (
//     <Flex
//       flexDirection="column"
//       mt={{ base: "40px" }}
//       padding={{ lg: "160px", base: "40px" }}
//     >
//       <Text style={{ ...neighborhoodHeading }}>AREAS ACROSS THE TOWN</Text>
//       <Text style={{ ...neighborhoodSubHeading }}>Neighborhood Properties</Text>
//       <Flex flexDirection="row" mt="px">

//         <Box position="relative">
//           <Image src={Property1} objectFit="cover" style={{ ...NImage1 }} />
//           <Text
//             as="h1"
//             position="absolute"
//             bottom="90px"
//             left="40px"
//             color="#FFFFFF"
//             style={{ ...PTextStyling }}
//           >
//             216
//           </Text>
//           <Text
//             as="h4"
//             position="absolute"
//             bottom="60px"
//             left="40px"
//             color="#FFFFFF"
//             style={{ ...PSubTextStyling }}
//           >
//             New York City, NY
//           </Text>
//         </Box>
//         <Box position="relative">
//           <Image src={Property2} objectFit="cover" style={{ ...NImage1 }} />
//           <Text
//             as="h1"
//             position="absolute"
//             bottom="90px"
//             left="40px"
//             color="#FFFFFF"
//             style={{ ...PTextStyling }}
//           >
//             141
//           </Text>
//           <Text
//             as="h4"
//             position="absolute"
//             bottom="60px"
//             left="40px"
//             color="#FFFFFF"
//             style={{ ...PSubTextStyling }}
//           >
//             Houston, TX
//           </Text>
//         </Box>
//         <Box position="relative">
//           <Image src={Property3} objectFit="cover" style={{ ...NImage3 }} />
//           <Text
//             as="h1"
//             position="absolute"
//             bottom="90px"
//             left="40px"
//             color="#FFFFFF"
//             style={{ ...PTextStyling }}
//           >
//             212
//           </Text>
//           <Text
//             as="h4"
//             position="absolute"
//             bottom="60px"
//             left="40px"
//             color="#FFFFFF"
//             style={{ ...PSubTextStyling }}
//           >
//             San Diego, CA
//           </Text>
//         </Box>
//       </Flex>
//       <Flex flexDirection="row" mt="10px">
//         <Box position="relative">
//           <Image src={Property4} objectFit="cover" style={{ ...NImage4 }} />
//           <Text
//             as="h1"
//             position="absolute"
//             bottom="90px"
//             left="40px"
//             color="#FFFFFF"
//             style={{ ...PTextStyling }}
//           >
//             183
//           </Text>
//           <Text
//             as="h4"
//             position="absolute"
//             bottom="60px"
//             left="40px"
//             color="#FFFFFF"
//             style={{ ...PSubTextStyling }}
//           >
//             Philadelphia, PA
//           </Text>
//         </Box>
//         <Box position="relative">
//           <Image src={Property5} objectFit="cover" style={{ ...NImage5 }} />
//           <Text
//             as="h1"
//             position="absolute"
//             bottom="90px"
//             left="40px"
//             color="#FFFFFF"
//             style={{ ...PTextStyling }}
//           >
//             112
//           </Text>
//           <Text
//             as="h4"
//             position="absolute"
//             bottom="60px"
//             left="40px"
//             color="#FFFFFF"
//             style={{ ...PSubTextStyling }}
//           >
//             San Francisco, CA
//           </Text>
//         </Box>
//       </Flex>
//     </Flex>
//   );
// }

// export default Neighborhood;

// import React from "react";
// import { Flex, Text, Image, Box } from "@chakra-ui/react";
// import {
//   neighborhoodHeading,
//   neighborhoodSubHeading,
//   NImage1,
//   NImage3,
//   NImage4,
//   NImage5,
//   PTextStyling,
//   PSubTextStyling,
// } from "../styling.js";
// import Property1 from "../Images/Property1.svg";
// import Property2 from "../Images/Property2.svg";
// import Property3 from "../Images/Property3.svg";
// import Property4 from "../Images/Property4.svg";
// import Property5 from "../Images/Property5.svg";
// function Neighborhood() {
//   return (
//     <Flex flexDirection="column" padding="160px">
//       <Text style={{ ...neighborhoodHeading }}>AREAS ACROSS THE TOWN</Text>
//       <Text as="h2" style={{ ...neighborhoodSubHeading }}>
//         Neighborhood Properties
//       </Text>
//       <Flex flexDirection="row" mt="px">
//         <Box position="relative">
//           <Image src={Property1} objectFit="cover" style={{ ...NImage1 }} />
//           <Text
//             as="h1"
//             position="absolute"
//             bottom="90px"
//             left="40px"
//             color="#FFFFFF"
//             style={{ ...PTextStyling }}
//           >
//             216
//           </Text>
//           <Text
//             as="h4"
//             position="absolute"
//             bottom="60px"
//             left="40px"
//             color="#FFFFFF"
//             style={{ ...PSubTextStyling }}
//           >
//             New York City, NY
//           </Text>
//         </Box>
//         <Box position="relative">
//           <Image src={Property2} objectFit="cover" style={{ ...NImage1 }} />
//           <Text
//             as="h1"
//             position="absolute"
//             bottom="90px"
//             left="40px"
//             color="#FFFFFF"
//             style={{ ...PTextStyling }}
//           >
//             141
//           </Text>
//           <Text
//             as="h4"
//             position="absolute"
//             bottom="60px"
//             left="40px"
//             color="#FFFFFF"
//             style={{ ...PSubTextStyling }}
//           >
//             Houston, TX
//           </Text>
//         </Box>
//         <Box position="relative">
//           <Image src={Property3} objectFit="cover" style={{ ...NImage3 }} />
//           <Text
//             as="h1"
//             position="absolute"
//             bottom="90px"
//             left="40px"
//             color="#FFFFFF"
//             style={{ ...PTextStyling }}
//           >
//             212
//           </Text>
//           <Text
//             as="h4"
//             position="absolute"
//             bottom="60px"
//             left="40px"
//             color="#FFFFFF"
//             style={{ ...PSubTextStyling }}
//           >
//             San Diego, CA
//           </Text>
//         </Box>
//       </Flex>
//       <Flex flexDirection="row" mt="10px">
//         <Box position="relative">
//           <Image src={Property4} objectFit="cover" style={{ ...NImage4 }} />
//           <Text
//             as="h1"
//             position="absolute"
//             bottom="90px"
//             left="40px"
//             color="#FFFFFF"
//             style={{ ...PTextStyling }}
//           >
//             183
//           </Text>
//           <Text
//             as="h4"
//             position="absolute"
//             bottom="60px"
//             left="40px"
//             color="#FFFFFF"
//             style={{ ...PSubTextStyling }}
//           >
//             Philadelphia, PA
//           </Text>
//         </Box>
//         <Box position="relative">
//           <Image src={Property5} objectFit="cover" style={{ ...NImage5 }} />
//           <Text
//             as="h1"
//             position="absolute"
//             bottom="90px"
//             left="40px"
//             color="#FFFFFF"
//             style={{ ...PTextStyling }}
//           >
//             112
//           </Text>
//           <Text
//             as="h4"
//             position="absolute"
//             bottom="60px"
//             left="40px"
//             color="#FFFFFF"
//             style={{ ...PSubTextStyling }}
//           >
//             San Francisco, CA
//           </Text>
//         </Box>
//       </Flex>
//     </Flex>
//   );
// }

// export default Neighborhood;

import React from "react";
import { Flex, Text, Image, Box, GridItem, Grid } from "@chakra-ui/react";
import {
  neighborhoodHeading,
  neighborhoodSubHeading,
  NImage1,
  NImage3,
  NImage4,
  NImage5,
  PTextStyling,
  PSubTextStyling,
} from "../styling.js";
import Property1 from "../Images/Property1.svg";
import Property2 from "../Images/Property2.svg";
import Property3 from "../Images/Property3.svg";
import Property4 from "../Images/Property4.svg";
import Property5 from "../Images/Property5.svg";

function Neighborhood() {
  return (
    <Flex
      flexDirection="column"
      mt={{ base: "40px" }}
      alignItems="left"
      justifyContent="center"
      // paddingX="10px"

      padding={{ lg: "160px", base: "10px" }}
    >
      <Text style={{ ...neighborhoodHeading }}>AREAS ACROSS THE TOWN</Text>
      <Text style={{ ...neighborhoodSubHeading }}>Neighborhood Properties</Text>

      <Grid
        templateColumns={{
          base: "repeat(2, 1fr)",
          md: "repeat(3, 1fr)",
          lg: "repeat(3,1fr)",
        }}
        // border="2px solid green"
        gap={{ base: 2 }}
      >
        <GridItem w="100%">
          <Box position="relative">
            <Image src={Property1} objectFit="cover" style={{ ...NImage1 }} />
            <Text
              as="h1"
              position="absolute"
              bottom={{ lg: "90px", base: "110px" }}
              left="40px"
              color="#FFFFFF"
              style={{ ...PTextStyling }}
            >
              216
            </Text>
            <Text
              position="absolute"
              bottom="60px"
              left="40px"
              color="#FFFFFF"
              style={{ ...PSubTextStyling }}
            >
              New York City, NY
            </Text>
          </Box>
        </GridItem>
        <GridItem>
          <Box position="relative">
            <Image src={Property2} objectFit="cover" style={{ ...NImage1 }} />
            <Text
              position="absolute"
              bottom="90px"
              left="40px"
              color="#FFFFFF"
              style={{ ...PTextStyling }}
            >
              141
            </Text>
            <Text
              position="absolute"
              bottom="60px"
              left="40px"
              color="#FFFFFF"
              style={{ ...PSubTextStyling }}
            >
              Houston, TX
            </Text>
          </Box>
        </GridItem>
        <GridItem w="100%">
          <Box position="relative">
            <Image src={Property3} objectFit="cover" style={{ ...NImage3 }} />
            <Text
              as="h1"
              position="absolute"
              bottom="90px"
              left="40px"
              color="#FFFFFF"
              style={{ ...PTextStyling }}
            >
              212
            </Text>
            <Text
              as="h4"
              position="absolute"
              bottom="60px"
              left="40px"
              color="#FFFFFF"
              style={{ ...PSubTextStyling }}
            >
              San Diego, CA
            </Text>
          </Box>
        </GridItem>
        <GridItem w="100%">
          <Box position="relative">
            <Image src={Property4} objectFit="cover" style={{ ...NImage4 }} />
            <Text
              as="h1"
              position="absolute"
              bottom="90px"
              left="40px"
              color="#FFFFFF"
              style={{ ...PTextStyling }}
            >
              183
            </Text>
            <Text
              as="h4"
              position="absolute"
              bottom="60px"
              left="40px"
              color="#FFFFFF"
              style={{ ...PSubTextStyling }}
            >
              Philadelphia, PA
            </Text>
          </Box>
        </GridItem>
        <GridItem w="100%" colSpan={{ lg: 2 }}>
          <Box position="relative">
            <Image src={Property5} objectFit="cover" style={{ ...NImage5 }} />
            <Text
              as="h1"
              position="absolute"
              bottom={{ lg: "90px", base: "110px" }}
              left="40px"
              color="#FFFFFF"
              style={{ ...PTextStyling }}
            >
              112
            </Text>
            <Text
              as="h4"
              position="absolute"
              bottom="60px"
              left="40px"
              color="#FFFFFF"
              style={{ ...PSubTextStyling }}
            >
              San Francisco, CA
            </Text>
          </Box>
        </GridItem>
      </Grid>
    </Flex>
  );
}

export default Neighborhood;
