import { Avatar, Box, Button, Flex, Text } from "@chakra-ui/react";
import React from "react";

const SuggestedHeader = () => {
  return (
    <>
      <Flex
        alignItems={"center"}
        justifyContent={"space-between"}
        fontSize={14}
        mb={4}
      >
        <Flex alignItems={"center"} gap={3}>
          <Box>
            <Avatar src="/profilepic.png" size={"sm"} alt="profile img" />
          </Box>
          <Text>asaprogrammer_</Text>
        </Flex>
        <Button
          color={"blue.500"}
          bg={"transparent"}
          fontWeight={"bold"}
          p={0}
          fontSize={14}
          _hover={{ color: "white" }}
          transition={"0.2s ease-in-out"}
        >
          Log out
        </Button>
      </Flex>
      <Flex
        justifyContent={"space-between"}
        alignItems={"center"}
        fontSize={14}
        my={2}
      >
        <Text color={"gray.400"} fontWeight={"bold"}>
          Suggested for you
        </Text>
        <Text>See All</Text>
      </Flex>
    </>
  );
};

export default SuggestedHeader;
