import {
  Avatar,
  AvatarGroup,
  Button,
  Flex,
  Text,
  VStack,
} from "@chakra-ui/react";
import React from "react";
import useUserProfileStore from "../../store/userProfileStore";

const ProfileHeader = () => {
  const { userProfile } = useUserProfileStore();
  return (
    <Flex
      direction={{ base: "column", sm: "row" }}
      gap={{ base: 4, sm: 10 }}
      py={10}
    >
      <AvatarGroup
        size={{ base: "xl", md: "2xl" }}
        alignSelf={"flex-start"}
        mx={"auto"}
      >
        <Avatar src={userProfile.profilePicURL} name="Profile img" />
      </AvatarGroup>

      <VStack alignItems={"flex-start"} gap={2} mx={"auto"} flex={1}>
        <Flex
          direction={{ base: "column", sm: "row" }}
          gap={4}
          justifyContent={{ base: "center", sm: "flex-start" }}
          alignItems={"center"}
          w={"full"}
        >
          <Text fontSize={{ base: "sm", md: "lg" }}>
            {userProfile.username}
          </Text>
          <Flex justifyContent={"center"} alignItems={"center"} gap={4}>
            <Button
              bg={"white"}
              color={"black"}
              size={{ base: "xs", md: "sm" }}
              _hover={{ bg: "whiteAplha.800" }}
            >
              Edit Profile
            </Button>
          </Flex>
        </Flex>

        <Flex alignItems={"center"} gap={{ base: 2, sm: 4 }}>
          <Text fontSize={{ base: "xs", md: "sm" }}>
            <Text as={"span"} fontWeight={"bold"} mr={1}>
              {userProfile.posts.length}
            </Text>
            Posts
          </Text>
          <Text fontSize={{ base: "xs", md: "sm" }}>
            <Text as={"span"} fontWeight={"bold"} mr={1}>
              {userProfile.follwers.length}
            </Text>
            Followers
          </Text>
          <Text fontSize={{ base: "xs", md: "sm" }}>
            <Text as={"span"} fontWeight={"bold"} mr={1}>
              {userProfile.following.length}
            </Text>
            Following
          </Text>
        </Flex>

        <Flex alignItems={"center"} gap={4}>
          <Text fontSize={"sm"} fontWeight={"bold"}>
            {userProfile.fullName}
          </Text>
        </Flex>
        <Text fontSize={"sm"}>{userProfile.bio}</Text>
      </VStack>
    </Flex>
  );
};

export default ProfileHeader;
