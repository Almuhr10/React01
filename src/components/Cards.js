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
  // To check if the course date expired or still available
  function isOpen() {
    let today = new Date().toLocaleDateString();
    if (props.courseDate >= today) {
      return <button className="dis-btn-available">التسجيل متاح</button>;
    } else {
      return <button className="dis-btn-closed">التسجيل مغلق</button>;
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
          <Text textAlign={"left"} letterSpacing={1.1} fontSize={"2xl"}>
            {props.courseName}
          </Text>
          {/* <Text textAlign={"right"} color={"gray"}> */}
          <Text className="textDesc">{props.courseDescription}</Text>
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
