import React from "react";
import { Flex, Text, Center, Heading, SimpleGrid } from "@chakra-ui/react";
import blogImg1 from "../Images/blogImg1.svg";
import blogImg2 from "../Images/blogImg2.svg";
import blogImg3 from "../Images/blogImg3.svg";
import blogTag1 from "../Images/blogTag1.svg";
import blogTag2 from "../Images/blogTag2.svg";
import blogTag3 from "../Images/blogTag3.svg";
import BlogDetails from "../Blogs/blogDetails";
import { blogsTextStyle, blogsSubTextStyle } from "../styling.js";

function Blogs() {
  const listings = [
    {
      tagImgSrc: blogTag1,
      imageSrc: blogImg1,
      titleName: "Top 10 Home Buying Mistakes to Avoid",
      subtitleExp:
        "Etiam eget elementum elit. Aenean dignissim dapibus vestibulum",
    },
    {
      tagImgSrc: blogTag2,
      imageSrc: blogImg2,
      titleName: "How to Stage Your Home for a Quick Sale",
      subtitleExp:
        "Nullam odio lacus, dictum quis pretium congue, vehicula venenatis nunc.",
    },
    {
      tagImgSrc: blogTag3,
      imageSrc: blogImg3,
      titleName: "5 Tips for First-Time Home Sellers",
      subtitleExp:
        "In hac habitasse platea dictumst. Phasellus vel velit vel augue maximus.",
    },
  ];

  return (
    <Flex
      id="blogs"
      flexDirection="column"
      alignItems="center"
      mt={19}
      background="#3A0CA3"
    >
      <Center>
        <Text mt={20} color="#FFFFFF" style={{ ...blogsTextStyle }}>
          WHAT’S TRENDING
        </Text>
      </Center>
      <Text mt="4" style={{ ...blogsSubTextStyle }} color="#FFFFFF">
        Latest Blogs & Posts
      </Text>

      <SimpleGrid columns={{ base: 1, lg: 3 }} mt={4} mb={10}>
        {listings.map((listing, index) => (
          <BlogDetails
            key={index}
            tagImgSrc={listing.tagImgSrc}
            imageSrc={listing.imageSrc}
            titleName={listing.titleName}
            subtitleExp={listing.subtitleExp}
          />
        ))}
      </SimpleGrid>
    </Flex>
  );
}

export default Blogs;
