import React from "react";
import { Avatar, Button, Flex, Text } from "@chakra-ui/react";

const SuggestedUser = ({ avatar, username }) => {
  return (
    <>
      <Flex justifyContent={"space-between"} alignItems={"center"} my={4}>
        <Flex gap={3} alignItems={"center"}>
          <Avatar src={avatar} size={"sm"} name={username} />
          <Flex direction={"column"} alignItems={"flex-start"}>
            <Text>{username}</Text>
            <Text fontSize={12} color={"gray.300"}>
              1000 followers
            </Text>
          </Flex>
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
          Follow
        </Button>
      </Flex>
    </>
  );
};

export default SuggestedUser;
