import React, { useState } from "react";
import { Flex, Heading, Text, Button } from "@chakra-ui/react";
import { buttonStyling } from "./latestListingStyling";
import list1 from "../Images/list1.svg";
import list2 from "../Images/list2.svg";
import list3 from "../Images/list3.svg";
import { AiFillFire, AiFillHome } from "react-icons/ai";
import { BsCurrencyDollar } from "react-icons/bs";
import LatestListingsDetails from "./latestListingsDetails";
const LatestListing = () => {
  const [isAllPressed, setIsAllPressed] = useState(false);
  const [isSellPressed, setIsSellPressed] = useState(false);
  const [isRentPressed, setIsRentPressed] = useState(false);

  const handleAllClick = () => {
    setIsAllPressed(!isAllPressed);
    setIsSellPressed(false);
    setIsRentPressed(false);
  };

  const handleSellClick = () => {
    setIsSellPressed(!isSellPressed);
    setIsAllPressed(false);
    setIsRentPressed(false);
  };

  const handleRentClick = () => {
    setIsRentPressed(!isRentPressed);
    setIsAllPressed(false);
    setIsSellPressed(false);
  };
  const listings = [
    {
      imageSrc: list1,
      titleData: AiFillFire,
      titleName: "Popular",
      apartmentName: "Tranquil Haven in the Woods",
      apartmentDetails: "103 Wright CourtBurien, WA 98168",
      price: "5,970",
      noOfBeds: "4",
      noOfBaths: "3",
      textIconColor: "#FF1111",
      BtnColor: "#FFE1E1",
    },
    {
      imageSrc: list2,
      titleData: AiFillHome,
      titleName: "New Listings",
      apartmentName: "Serene Retreat by the Lake",
      apartmentDetails: "1964 Jehovah Drive, VA 22408",
      price: "1,970",
      noOfBeds: "3",
      noOfBaths: "2",
      textIconColor: "#119BFF",
      BtnColor: "#D7EEFF",
    },
    {
      imageSrc: list3,
      titleData: BsCurrencyDollar,
      titleName: "Discounted Prices",
      apartmentName: "Charming Cottage in the Meadow",
      apartmentDetails: "1508 Centennial Farm RoadHarlan, 51537",
      price: "3,450",
      noOfBeds: "4",
      noOfBaths: "4",
      textIconColor: "#00CE3A",
      BtnColor: "#F1FFF1",
    },
    {
      imageSrc: list1,
      titleData: AiFillFire,
      titleName: "Popular",
      apartmentName: "Grand Estate on the Hilltop",
      apartmentDetails: "103 Wright CourtBurien, WA 98168",
      price: "2,389",
      noOfBeds: "3",
      noOfBaths: "2",
      textIconColor: "#FF1111",
      BtnColor: "#FFE1E1",
    },
  ];
  return (
    <Flex
      id="latestListings"
      // direction={["row", "column"]} // Stack vertically on small screens, horizontally on larger screens
      // align={["justify", "center"]}
      flexDirection="row"
      // background="blue"
      // justifyContent="space-between"
      width="100%"
      pl={4}
      pr={4}
      pb={4}
    >
      <Flex
        flexDirection="column"
        gap={4}
        mt={55}
        ml={{ base: "30px", lg: "20px" }}
        mr={{ base: "30px", lg: "20px" }}
      >
        <Heading
          fontSize={19.4}
          fontFamily="Poppins"
          fontWeight={500}
          color="#4361EE"
          mb={2.5}
        >
          CHECKOUT OUR NEW
        </Heading>

        <Flex
          flexDirection={{ lg: "row", md: "row", base: "column" }}
          justifyContent="space-between"
          pr="45px"
        >
          <Flex flexDirection="column" alignItems="left">
            <Heading
              as="h2"
              fontSize={{ base: "27.6px", md: "33px", lg: "39.8px" }}
              fontWeight={600}
              letterSpacing="0em"
              fontFamily="Poppins"
              noOfLines={2}
            >
              Latest Listed Properties
            </Heading>
            <Text
              color="#808080"
              fontFamily="Poppins"
              fontSize={{ base: "13.3px", md: "15px", lg: "16px" }}
              fontWeight={400}
              letterSpacing="0em"
              textalign="justify"
            >
              Donec porttitor euismod dignissim. Nullam a lacinia ipsum, nec
              dignissim purus.
            </Text>
          </Flex>

          <Flex flexDirection="column" alignItems="left">
            <Flex
              mt={{ base: "10px" }}
              gap={{ lg: "4px", md: "3px", base: "5px" }}
              flexDirection="row"
            >
              <Button
                onClick={handleAllClick}
                background={isAllPressed ? "#3A0CA3" : "#FFFFFF"}
                color={isAllPressed ? "white" : "#3A0CA3"}
                style={buttonStyling}
              >
                All
              </Button>
              <Button
                onClick={handleSellClick}
                background={isSellPressed ? "#3A0CA3" : "#FFFFFF"}
                color={isSellPressed ? "white" : "#3A0CA3"}
                style={buttonStyling}
              >
                Sell
              </Button>
              <Button
                onClick={handleRentClick}
                background={isRentPressed ? "#3A0CA3" : "#FFFFFF"}
                color={isRentPressed ? "white" : "#3A0CA3"}
                style={buttonStyling}
              >
                Rent
              </Button>
            </Flex>
          </Flex>
        </Flex>
        <Flex flexDirection={{ lg: "row", md: "row", base: "column" }} gap={5}>
          {listings.map((listing, index) => (
            <LatestListingsDetails
              key={index}
              imageSrc={listing.imageSrc}
              titleData={listing.titleData}
              titleName={listing.titleName}
              apartmentName={listing.apartmentName}
              apartmentDetails={listing.apartmentDetails}
              price={listing.price}
              noOfBeds={listing.noOfBeds}
              noOfBaths={listing.noOfBaths}
              textIconColor={listing.textIconColor}
              BtnColor={listing.BtnColor}
            />
          ))}
        </Flex>
      </Flex>
    </Flex>
  );
};

export default LatestListing;
