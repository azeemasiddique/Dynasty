// import React, { useState } from "react";
// import {
//   Flex,
//   Heading,
//   Image,
//   Box,
//   Text,
//   Tabs,
//   TabIndicator,
//   TabList,
//   Tab,
//   TabPanel,
//   TabPanels,
//   Input,
//   Select,
//   Button,
//   Card,
//   Icon,
//   Link,
// } from "@chakra-ui/react";
// import { cardStyling, tabStyling } from "./homeStyling";
// import { GiSettingsKnobs } from "react-icons/gi";
// import { BsSearch } from "react-icons/bs";
// import room from "../Images/room.svg";
// const Content = () => {
//   const [activeTab, setActiveTab] = useState(0);

//   const handleTabChange = (index) => {
//     setActiveTab(index);
//   };

//   return (
//     <Flex
//      id = "content"
//      flexDirection={["column", "row"]}
//       justifyContent="space-between"
//       width="100%"
//       pl={4}
//       pr={4}
//       pb={4}
//     >

//       <Flex flexDirection="column" gap={4} flex="1" ml={20} mr={55}>
//         <Heading
//           fontSize={19.4}
//           fontFamily="Poppins"
//           fontWeight={400}
//           color="#4361EE"
//           mb={2.5}
//         >
//           REAL ESTATE
//         </Heading>
//         <Heading
//           as="h1"
//           fontSize={57}
//           fontWeight={600}
//           letterSpacing="0em"
//           fontFamily="Poppins"
//         >
//           Find a perfect
//           <br /> home you love..!
//         </Heading>
//         <Text
//           color="#808080"
//           fontFamily="Poppins"
//           fontSize={16}
//           fontWeight={400}
//           letterSpacing="0em"
//           textalign="left"
//         >
//           Etiam eget elementum elit. Aenean dignissim dapibus
//           <br /> vestibulum. Integer a dolor eu sapien sodales vulputate ac in
//           purus.
//         </Text>
//         <Image
//           src={room}
//           width="70%"
//           height="80%"
//           borderRadius="10%"
//           objectFit="cover"
//         />
//       </Flex>
//       <Flex flex="1" mr={20}>
//         <Card style={{ ...cardStyling }}>
//           <Box p={5}>
//             <Tabs isFitted variant="unstyled">
//               <TabList>
//                 <Tab
//                   onClick={() => handleTabChange(0)}
//                   style={{
//                     ...tabStyling,
//                     color: activeTab === 0 ? "#3A0CA3" : "#000000",
//                   }}
//                 >
//                   For Sale
//                 </Tab>
//                 <Tab
//                   onClick={() => handleTabChange(1)}
//                   style={{
//                     ...tabStyling,
//                     color: activeTab === 1 ? "#3A0CA3" : "#000000",
//                   }}
//                 >
//                   For Rent
//                 </Tab>
//               </TabList>
//               <TabIndicator
//                 mt="-1.5px"
//                 height="2px"
//                 bg="#3A0CA3"
//                 borderRadius="1px"
//               />
//               <TabPanels>
//                 <TabPanel>
//                   <Input
//                     placeholder="New York, San Francisco, etc"
//                     color="#AAAAAA"
//                     fontFamily="Poppins"
//                     fontWeight="400"
//                     fontSize={16}
//                     mb={6}
//                     mt={10}
//                   />
//                   <Select
//                     placeholder="Select Property Type"
//                     color="#AAAAAA"
//                     fontFamily="Poppins"
//                     fontWeight="400"
//                     fontSize={16}
//                     mb={6}
//                   >
//                     <option>Property 1</option>
//                     <option>Property 2</option>
//                   </Select>

//                   <Select
//                     placeholder="Select Rooms"
//                     color="#AAAAAA"
//                     fontFamily="Poppins"
//                     fontWeight="400"
//                     fontSize={16}
//                     mb={6}
//                   >
//                     <option>Room 1</option>
//                     <option>Room 2</option>
//                   </Select>
//                   <Flex flexDirection="row" alignItems="center">
//                     <Icon as={GiSettingsKnobs} boxSize={5} mr={4}></Icon>
//                     <Link
//                       color="#3A0CA3"
//                       fontSize={13.3}
//                       fontWeight={400}
//                       fontFamily="Poppins"
//                     >
//                       Advance Search
//                     </Link>
//                   </Flex>

//                   <Button
//                     mt={30}
//                     textalign="center"
//                     borderRadius={50}
//                     color="white"
//                     background="#3A0CA3"
//                     width="100%"
//                     height="50px"
//                     fontFamily="Poppins"
//                     fontSize={16}
//                   >
//                     <Icon as={BsSearch} boxSize={5} color="white" mr={4}></Icon>
//                     Search
//                   </Button>
//                 </TabPanel>
//                 <TabPanel>
//                   <Input
//                     placeholder="New York, San Francisco, etc"
//                     color="#AAAAAA"
//                     fontFamily="Poppins"
//                     fontWeight="400"
//                     fontSize={16}
//                     mb={6}
//                     mt={10}
//                   />
//                   <Select
//                     placeholder="Select Property Type"
//                     color="#AAAAAA"
//                     fontFamily="Poppins"
//                     fontWeight="400"
//                     fontSize={16}
//                     mb={6}
//                   >
//                     <option>Property 1</option>
//                     <option>Property 2</option>
//                   </Select>

//                   <Select
//                     placeholder="Select Rooms"
//                     color="#AAAAAA"
//                     fontFamily="Poppins"
//                     fontWeight="400"
//                     fontSize={16}
//                     mb={7}
//                   >
//                     <option>Room 1</option>
//                     <option>Room 2</option>
//                   </Select>
//                   <Flex flexDirection="row" alignItems="center">
//                     <Icon as={GiSettingsKnobs} boxSize={5} mr={4}></Icon>
//                     <Text
//                       color="#3A0CA3"
//                       fontSize={13.3}
//                       fontWeight={400}
//                       fontFamily="Poppins"
//                     >
//                       Advance Search
//                     </Text>
//                   </Flex>

//                   <Button
//                     mt={50}
//                     textalign="center"
//                     borderRadius={50}
//                     color="white"
//                     background="#3A0CA3"
//                     width="100%"
//                     height="50px"
//                     fontFamily="Poppins"
//                     fontSize={16}
//                   >
//                     <Icon as={BsSearch} boxSize={5} color="white" mr={4}></Icon>
//                     Search
//                   </Button>
//                 </TabPanel>
//               </TabPanels>
//             </Tabs>
//           </Box>
//         </Card>
//       </Flex>
//     </Flex>
//   );
// };

// export default Content;
import React, { useState } from "react";
import {
  Flex,
  Grid,
  Heading,
  Image,
  Box,
  Text,
  Tabs,
  TabIndicator,
  TabList,
  Tab,
  TabPanel,
  TabPanels,
  Input,
  Select,
  Button,
  Card,
  Icon,
  Link,
  GridItem,
} from "@chakra-ui/react";
import { cardStyling, tabStyling } from "./homeStyling";
import { GiSettingsKnobs } from "react-icons/gi";
import { BsSearch } from "react-icons/bs";
import room from "../Images/room.svg";
const Content = () => {
  const [activeTab, setActiveTab] = useState(0);

  const handleTabChange = (index) => {
    setActiveTab(index);
  };

  return (
    <Grid
      templateColumns={{
        lg: "repeat(2, 4fr)",
        md: "repeat(2,1fr)",
        base: "repeat(1,1fr)",
      }}
      gap={9}
      // border="1px solid blue"
      textAlign="left"
      marginX={{ lg: "139px", md: "100px", base: "30px" }}
      marginY="40px"
    >
      <GridItem w="100%" textAlign="left" gap={2}>
        <Text
          fontSize={{ lg: "19.4px", md: "17px", base: "16px" }}
          fontFamily="Poppins"
          fontWeight={400}
          color="#4361EE"
        >
          REAL ESTATE
        </Text>
        <Text
          fontSize={{ base: "39.8px", md: "45px", lg: "57.3px" }}
          fontWeight={600}
          letterSpacing="0em"
          fontFamily="Poppins"
        >
          Find a perfect home you love..!
        </Text>
        <Text
          color="#808080"
          fontFamily="Poppins"
          fontSize={{ lg: "16px", base: "13.3px", md: "14px" }}
          fontWeight={400}
          letterSpacing="0em"
        >
          Etiam eget elementum elit. Aenean dignissim dapibus
          <br /> vestibulum. Integer a dolor eu sapien sodales vulputate ac in
          purus.
        </Text>
        <Image
          mt={{ base: "15px" }}
          src={room}
          // width={{ lg: "540px", base: "333px" }}
          // height={{ lg: "340px", base: "449px" }}
          width={{ lg: "70%", base: "100%" }}
          height={{ lg: "50%", base: "50%" }}
          borderRadius="10%"
          objectFit="cover"
        />
      </GridItem>
      <GridItem w="100%">
        <Card style={{ ...cardStyling }}>
          <Box p={5}>
            <Tabs isFitted variant="unstyled">
              <TabList>
                <Tab
                  onClick={() => handleTabChange(0)}
                  style={{
                    ...tabStyling,
                    color: activeTab === 0 ? "#3A0CA3" : "#000000",
                  }}
                >
                  For Sale
                </Tab>
                <Tab
                  onClick={() => handleTabChange(1)}
                  style={{
                    ...tabStyling,
                    color: activeTab === 1 ? "#3A0CA3" : "#000000",
                  }}
                >
                  For Rent
                </Tab>
              </TabList>
              <TabIndicator
                mt="-1.5px"
                height="2px"
                bg="#3A0CA3"
                borderRadius="1px"
              />
              <TabPanels>
                <TabPanel>
                  <Input
                    placeholder="New York, San Francisco, etc"
                    color="#AAAAAA"
                    fontFamily="Poppins"
                    fontWeight="400"
                    fontSize={16}
                    mb={6}
                    mt={10}
                  />
                  <Select
                    placeholder="Select Property Type"
                    color="#AAAAAA"
                    fontFamily="Poppins"
                    fontWeight="400"
                    fontSize={16}
                    mb={6}
                  >
                    <option>Property 1</option>
                    <option>Property 2</option>
                  </Select>

                  <Select
                    placeholder="Select Rooms"
                    color="#AAAAAA"
                    fontFamily="Poppins"
                    fontWeight="400"
                    fontSize={16}
                    mb={6}
                  >
                    <option>Room 1</option>
                    <option>Room 2</option>
                  </Select>
                  <Flex flexDirection="row" alignItems="center">
                    <Icon as={GiSettingsKnobs} boxSize={5} mr={4}></Icon>
                    <Link
                      color="#3A0CA3"
                      fontSize={13.3}
                      fontWeight={400}
                      fontFamily="Poppins"
                    >
                      Advance Search
                    </Link>
                  </Flex>

                  <Button
                    mt={30}
                    textalign="center"
                    borderRadius={50}
                    color="white"
                    background="#3A0CA3"
                    width="100%"
                    height="50px"
                    fontFamily="Poppins"
                    fontSize={16}
                  >
                    <Icon as={BsSearch} boxSize={5} color="white" mr={4}></Icon>
                    Search
                  </Button>
                </TabPanel>
                <TabPanel>
                  <Input
                    placeholder="New York, San Francisco, etc"
                    color="#AAAAAA"
                    fontFamily="Poppins"
                    fontWeight="400"
                    fontSize={16}
                    mb={6}
                    mt={10}
                  />
                  <Select
                    placeholder="Select Property Type"
                    color="#AAAAAA"
                    fontFamily="Poppins"
                    fontWeight="400"
                    fontSize={16}
                    mb={6}
                  >
                    <option>Property 1</option>
                    <option>Property 2</option>
                  </Select>

                  <Select
                    placeholder="Select Rooms"
                    color="#AAAAAA"
                    fontFamily="Poppins"
                    fontWeight="400"
                    fontSize={16}
                    mb={7}
                  >
                    <option>Room 1</option>
                    <option>Room 2</option>
                  </Select>
                  <Flex flexDirection="row" alignItems="center">
                    <Icon as={GiSettingsKnobs} boxSize={5} mr={4}></Icon>
                    <Text
                      color="#3A0CA3"
                      fontSize={13.3}
                      fontWeight={400}
                      fontFamily="Poppins"
                    >
                      Advance Search
                    </Text>
                  </Flex>

                  <Button
                    mt={50}
                    textalign="center"
                    borderRadius={50}
                    color="white"
                    background="#3A0CA3"
                    width="100%"
                    height="50px"
                    fontFamily="Poppins"
                    fontSize={16}
                  >
                    <Icon as={BsSearch} boxSize={5} color="white" mr={4}></Icon>
                    Search
                  </Button>
                </TabPanel>
              </TabPanels>
            </Tabs>
          </Box>
        </Card>
      </GridItem>
    </Grid>
  );
};

export default Content;
