import React from "react";
import SuggestedUser from "./SuggestedUser";
import SuggestedHeader from "./SuggestedHeader";
import { Box } from "@chakra-ui/react";

const SuggestedUsers = () => {
  return (
    <Box my={10}>
      <SuggestedHeader />
      <SuggestedUser avatar="/img1.png" username="leo" />
      <SuggestedUser avatar="/img2.png" username="cristiano" />
      <SuggestedUser avatar="/img3.png" username="leo" />
      <SuggestedUser avatar="/img4.png" username="leo" />
    </Box>
  );
};

export default SuggestedUsers;
