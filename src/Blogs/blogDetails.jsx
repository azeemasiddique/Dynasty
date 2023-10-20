// import React from "react";
// import { Flex, SimpleGrid, Text, Box, Image } from "@chakra-ui/react";
// import {
//   blogsImageStyle,
//   blogsTitleTextStyle,
//   blogsTagImageStyle,
//   blogsSubTitleStyle,
// } from "../styling.js";
// function BlogDetails({ tagImgSrc, imageSrc, titleName, subtitleExp }) {
//   return (
//     <Flex
//       flexDirection="column"
//       alignItems="center"
//       ml={{ base: "0px", md: "30px", lg: "45px" }}
//       mb={10}
//     >
//       <SimpleGrid
//         flexDirection="row"
//         columns={{ base: 1, md: 3 }}
//         mt={10}
//         // spacing={5}
//       >
//         <Box
//           display="flex"
//           flexDirection="column"
//           width="300px"
//           height="500px"
//           borderRadius="md"
//         >
//           <Box position="relative">
//             <Image
//               src={imageSrc}
//               objectFit="cover"
//               style={{ ...blogsImageStyle }}
//             />
//             <Image
//               src={tagImgSrc}
//               position="absolute"
//               top="4.5px"
//               left="35px"
//               objectFit="cover"
//               style={{ ...blogsTagImageStyle }}
//             />
//           </Box>
//           <Text as="h3" style={{ ...blogsTitleTextStyle }} color="#FFFFFF">
//             {titleName}
//           </Text>
//           <Text mt={3} style={{ ...blogsSubTitleStyle }} color="#D4D4D4">
//             {subtitleExp}
//           </Text>
//         </Box>
//       </SimpleGrid>
//     </Flex>
//   );
// }

// export default BlogDetails;
import React from "react";
import { Flex, SimpleGrid, Text, Box, Image } from "@chakra-ui/react";
import {
  blogsImageStyle,
  blogsTitleTextStyle,
  blogsTagImageStyle,
  blogsSubTitleStyle,
} from "../styling.js";
function BlogDetails({ tagImgSrc, imageSrc, titleName, subtitleExp }) {
  return (
    <Flex
      flexDirection="column"
      alignItems="center"
      ml={{ base: "10px", md: "30px", lg: "45px" }}
      mb={7}
    >
      <SimpleGrid
        flexDirection="row"
        columns={{ base: 1, md: 3, lg: 3 }}
        mt={10}
      >
        <Box
          // margin="10px"
          display="flex"
          flexDirection="column"
          width="300px"
          // height="500px"
          borderRadius="md"
        >
          <Box position="relative">
            <Image
              src={imageSrc}
              objectFit="cover"
              style={{ ...blogsImageStyle }}
            />
            <Image
              src={tagImgSrc}
              position="absolute"
              top="4.5px"
              left="35px"
              objectFit="cover"
              style={{ ...blogsTagImageStyle }}
            />
          </Box>

          <Text
            as="h2"
            pl={{ base: "20px" }}
            style={{ ...blogsTitleTextStyle }}
            color="#FFFFFF"
          >
            {titleName}
          </Text>
          <Text
            mt={3}
            pl={{ base: "20px" }}
            style={{ ...blogsSubTitleStyle }}
            color="#D4D4D4"
          >
            {subtitleExp}
          </Text>
        </Box>
      </SimpleGrid>
    </Flex>
  );
}

export default BlogDetails;
