import { Flex, Img, Text } from "@chakra-ui/react";

const GoogleAuth = () => {
  return (
    <Flex justifyContent={"center"} alignItems={"center"} cursor={"pointer"}>
      <Img src="/google.png" w={5} alt="Google logo" />
      <Text mx={2} color={"blue.500"}>
        Log in with Google
      </Text>
    </Flex>
  );
};

export default GoogleAuth;
