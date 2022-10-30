import React from "react";

import {
  Box,
  Center,
  // Heading,
  Text,
  Stack,
  Image,
  Avatar,
  useColorModeValue,
} from "@chakra-ui/react";

export default function BlogPostWithImage(props) {
  function isOpen(status) {
    let today = new Date().toLocaleDateString();
    if (props.courseDate >= today) {
      return (
        <Box
          as="button"
          borderRadius="md"
          // bg="tomato"
          bg="#d1a772"
          color="white"
          px={14}
          h={8}
          pos="relative"
          top={3}
          left="50%"
          transform="translateX(-50%)"
        >
          التسجيل متاح
        </Box>
      );
    } else {
      return <button className="dis-btn">التسجيل مغلق</button>;
    }
  }

  return (
    <Center py="10px" mt="20px">
      <Box
        maxW={"445px"}
        w={"full"}
        bg={useColorModeValue("white", "gray.900")}
        boxShadow={"2xl"}
        rounded={"md"}
        p={6}
        overflow={"hidden"}
      >
        <Box
          h={"250px"}
          bg={"gray.100"}
          mt={-6}
          mx={-6}
          mb={6}
          pos={"relative"}
          overflow={"hidden"}
        >
          <Image
            // borderRadius="lg"
            src={props.courseImg}
            layout={"fill"}
          />
        </Box>
        <Stack>
          <Text textAlign={"right"} letterSpacing={1.1} fontSize={"2xl"}>
            {props.courseName}
          </Text>
          <Text textAlign={"right"} color={"gray"}>
            {/* <Text
            textAlign={"right"}
            color={"gray"}
            whiteSpace="nowrap"
            overflow={"hidden"}
            textOverflow="ellipsis"
          > */}
            {props.courseDescription}
          </Text>
          <Text textAlign={"left"} color={"gray.500"}>
            {props.courseDate}
          </Text>
          <Stack mt={6} direction={"row"} spacing={4} align={"center"}>
            <Avatar src={props.avtImg} alt={"Author"} />
            <Text fontWeight={600}>{props.instructorName}</Text>
          </Stack>
        </Stack>
        {isOpen()}
      </Box>
    </Center>
  );
}
