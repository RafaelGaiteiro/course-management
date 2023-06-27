import { Box } from "@chakra-ui/react";
import { NewAccount } from "../components/organisms/NewAccount";
import { Header } from "../components/organisms/Header";
import { Signin } from "../components/organisms/Signin";

export const Home = () => {
  return (
    <Box display="flex" justifyContent="center" alignItems="center">
      <Header />
      <NewAccount />
      <Signin />
    </Box>
  );
};
