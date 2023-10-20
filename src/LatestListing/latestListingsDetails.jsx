import React, { useState } from "react";
import { Flex, Image, Text, Box, Button, Icon } from "@chakra-ui/react";
import { LuBed } from "react-icons/lu";
import { BiBath } from "react-icons/bi";

import {
  infoStyling,
  subtitleStyling,
  priceStyling,
  titleStyling,
  infoIconStyling,
  ImgBtnStyling,
} from "./latestListingStyling";

function LatestListingsDetails({
  imageSrc,
  titleData,
  titleName,
  apartmentName,
  apartmentDetails,
  price,
  noOfBeds,
  noOfBaths,
  textIconColor,
  BtnColor,
}) {
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };
  return (
    <Flex
      gap="50px"
      flexDirection={{ base: "column", md: "column", lg: "row" }}
      alignItems="center"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      style={{
        transform: isHovered ? "scale(1.1)" : "scale(1)",
        transition: "transform 0.1s ease-out",
      }}
    >
      <Box
        flex={1}
        width={240}
        height={499.06}
        mr="50px"
        mb={{ base: "1px", md: "7px", lg: "10px" }}
        position="relative"
      >
        <Flex flexDirection="column">
          <Image src={imageSrc} width={340} height={340} borderRadius={30} />
          <Button
            position="absolute"
            bottom={{ base: "170px", md: "230px", lg: "230px" }}
            left={{ base: "15px", md: "13px", lg: "15px" }}
            background={BtnColor}
            style={{ ...ImgBtnStyling }}
            gap={1.5}
          >
            <Icon as={titleData} color={textIconColor}></Icon>
            <Text color={textIconColor}>{titleName}</Text>
          </Button>
        </Flex>

        <Flex flexDirection="column">
          <Text as="h3" style={{ ...priceStyling }}>
            $ {price}
          </Text>
          <Text as="h4" style={{ ...titleStyling }}>
            {apartmentName}
          </Text>
          <Text style={{ ...subtitleStyling }}>{apartmentDetails}</Text>
          <Flex flexDirection="row" mr={3}>
            <Icon style={{ ...infoIconStyling }} as={LuBed}></Icon>
            <Text style={{ ...infoStyling }}>{noOfBeds} Beds</Text>
            <Icon style={{ ...infoIconStyling }} as={BiBath} />
            <Text style={{ ...infoStyling }}>{noOfBaths} Baths</Text>
          </Flex>
        </Flex>
      </Box>
    </Flex>
  );
}

export default LatestListingsDetails;
