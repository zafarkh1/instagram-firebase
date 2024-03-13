import { Flex, Img, Text } from "@chakra-ui/react";

const GoogleAuth = ({prefix}) => {
  return (
    <Flex justifyContent={"center"} alignItems={"center"} cursor={"pointer"}>
      <Img src="/google.png" w={5} alt="Google logo" />
      <Text mx={2} color={"blue.500"}>
        {prefix} with Google
      </Text>
    </Flex>
  );
};

export default GoogleAuth;
