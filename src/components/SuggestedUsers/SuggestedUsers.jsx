import React from "react";
import SuggestedUser from "./SuggestedUser";
import SuggestedHeader from "./SuggestedHeader";
import { Box, Link } from "@chakra-ui/react";

const SuggestedUsers = () => {
  return (
    <Box my={10}>
      <SuggestedHeader />
      <SuggestedUser avatar="/img1.png" username="olivia" followers={1352} />
      <SuggestedUser avatar="/img2.png" username="cristiano" followers={1085} />
      <SuggestedUser avatar="/img3.png" username="isla" followers={1400} />
      <SuggestedUser avatar="/img4.png" username="erling" followers={852} />
      <Box fontSize={12} color={"gray.500"} mt={5} alignSelf={"start"}>
        &#169; 2024 By{" "}
        <Link
          href="https://t.me/developer_plus_plus"
          target="_blank"
          color="blue.500"
          fontSize={14}
        >
          Zafar
        </Link>
      </Box>
    </Box>
  );
};

export default SuggestedUsers;
