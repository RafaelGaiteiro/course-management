import { Box } from "@chakra-ui/react";
import { NewAccount } from "../components/organisms/NewAccount";
import { Header } from "../components/organisms/Header";
import { Signin } from "../components/organisms/Signin";

export const Home = () => {
  return (
    <Box>
      <Header />
      <NewAccount />
      <Signin />
    </Box>
  );
};
