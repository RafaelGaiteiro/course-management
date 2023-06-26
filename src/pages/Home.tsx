import { Box } from "@chakra-ui/react";
import { NewAccount } from "../components/organisms/NewAccount";
import { Header } from "../components/organisms/Header";

export const Home = () => {
  return (
    <Box>
      <Header />
      <NewAccount />
    </Box>
  );
};
