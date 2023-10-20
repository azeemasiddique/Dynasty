import React, { useState } from "react";
import {
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
  Flex,
  Link,
} from "@chakra-ui/react";
import { cardStyling, tabStyling } from "./homeStyling";
import { GiSettingsKnobs } from "react-icons/gi";
import { BsSearch } from "react-icons/bs";
const MyForm = () => {
  const [activeTab, setActiveTab] = useState(0);

  const handleTabChange = (index) => {
    setActiveTab(index);
  };

  return (
    <Card style={cardStyling}>
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
  );
};

export default MyForm;
