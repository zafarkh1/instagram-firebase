import { Box, Button, Flex, Img, Input, Text, VStack } from "@chakra-ui/react";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const AuthForm = () => {
  const [isLogin, setIsLogin] = useState(true);
  const navigate = useNavigate();
  const [inputs, setInputs] = useState({
    email: "",
    password: "",
    confirmPassword: "",
  });

  const handleAuth = () => {
    if (!inputs.email || !inputs.password) {
      alert("Please fill the all fields");
      return;
    }
    navigate("/");
  };

  return (
    <>
      <Box border={"1px solid gray"} borderRadius={4} padding={5}>
        <VStack>
          <Img src="/logo.png" h={24} cursor={"pointer"} alt="Instagram" />
          <Input
            placeholder="Email"
            type="email"
            value={inputs.email}
            onChange={(e) => setInputs({ ...inputs, email: e.target.value })}
          />
          <Input
            placeholder="Password"
            type="password"
            value={inputs.password}
            onChange={(e) => setInputs({ ...inputs, password: e.target.value })}
          />
          {!isLogin ? (
            <Input
              placeholder="Confirm password"
              type="password"
              value={inputs.confirmPassword}
              onChange={(e) =>
                setInputs({ ...inputs, confirmPassword: e.target.value })
              }
            />
          ) : null}
          <Button
            colorScheme="blue"
            w={"full"}
            size={"sm"}
            onClick={handleAuth}
          >
            {isLogin ? "Login" : "Sign up"}
          </Button>

          <Flex
            justifyContent={"center"}
            alignItems={"center"}
            w={"full"}
            my={4}
            gap={1}
          >
            <Box h={"1px"} bg={"gray.400"} flex={2} />
            <Text mx={1} color={"white"}>
              OR
            </Text>
            <Box h={"1px"} bg={"gray.400"} flex={2} />
          </Flex>

          <Flex
            justifyContent={"center"}
            alignItems={"center"}
            cursor={"pointer"}
          >
            <Img src="/google.png" w={5} alt="Google logo" />
            <Text mx={2} color={"blue.500"}>
              Log in with Google
            </Text>
          </Flex>
        </VStack>
      </Box>

      <Box border={"1px solid gray"} borderRadius={4} padding={5}>
        <Flex alignItems={"center"} justifyContent={"center"}>
          <Box mx={2}>
            {isLogin ? "Don't have an account?" : "Already have an account?"}
          </Box>
          <Box
            color={"blue.500"}
            cursor={"pointer"}
            onClick={() => setIsLogin(!isLogin)}
          >
            {isLogin ? "Sign up" : "Log in"}
          </Box>
        </Flex>
      </Box>
    </>
  );
};

export default AuthForm;
