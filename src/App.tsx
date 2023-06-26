import { Box, useDisclosure } from "@chakra-ui/react";
import { NewAccountContext } from "./contexts/NewAccountContext";
import { Home } from "./pages/Home";
import { SigninContext } from "./contexts/SigninContext";

const App = () => {
  const newAccountDisclosure = useDisclosure();
  const signinDisclosure = useDisclosure();

  return (
    <NewAccountContext.Provider value={newAccountDisclosure}>
      <SigninContext.Provider value={signinDisclosure}>
        <Box p="15px">
          <Home />
        </Box>
      </SigninContext.Provider>
    </NewAccountContext.Provider>
  );
};

export default App;
