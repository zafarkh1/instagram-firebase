import { Container, Flex } from "@chakra-ui/react";
import React from "react";
import ProfileHeader from "../../components/Profile/ProfileHeader";
import ProfileTabs from "../../components/Profile/ProfileTabs";
import ProfilePosts from "../../components/Profile/ProfilePosts";

const ProfilePage = () => {
  return (
    <Container maxW={"container.lg"} py={5}>
      <Flex
        direction={"column"}
        py={10}
        px={4}
        pl={{ base: 4, md: 10 }}
        mx={"auto"}
        w={"full"}
      >
        <ProfileHeader />
      </Flex>
      <Flex
        maxW={"full"}
        mx={"auto"}
        px={{ base: 2, sm: 4 }}
        borderTop={"1px solid"}
        borderColor={"whiteAlpha.500"}
				direction={'column'}
      >
        <ProfileTabs />
        <ProfilePosts />
      </Flex>
    </Container>
  );
};

export default ProfilePage;
