import { Avatar, Flex, Link, Text } from "@chakra-ui/react";

import { Link as RouterLink } from "react-router-dom";

const SuggestedHeader = () => {
  return (
    <>
      <Flex alignItems={"center"} justifyContent={"space-between"} w={"full"}>
        <Flex alignItems={"center"} gap={2}>
          <Avatar src="/profilepic.png" size={"lg"} name="profile img" />
          <Text fontSize={12} fontWeight={"bold"}>
            asaprogrammer_
          </Text>
        </Flex>
        <Link
          as={RouterLink}
          to={"/auth"}
          color={"blue.500"}
          fontWeight={"bold"}
          cursor={"pointer"}
          style={{ textDecoration: "none" }}
          p={0}
          fontSize={14}
          _hover={{ color: "white" }}
          transition={"0.2s ease-in-out"}
        >
          Log out
        </Link>
      </Flex>
      <Flex
        justifyContent={"space-between"}
        alignItems={"center"}
        fontSize={14}
        my={2}
      >
        <Text color={"gray.500"} fontWeight={"bold"} fontSize={12}>
          Suggested for you
        </Text>
        <Text _hover={{color: "gray.500"}} cursor={'pointer'} fontWeight={"bold"} fontSize={12}>
          See All
        </Text>
      </Flex>
    </>
  );
};

export default SuggestedHeader;
