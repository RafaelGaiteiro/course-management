import { Box, useDisclosure } from "@chakra-ui/react";
import { ModalContext } from "./contexts/ModalContext";
import { Home } from "./pages/Home";

const App = () => {
  const modalDisclosure = useDisclosure();

  return (
    <ModalContext.Provider value={modalDisclosure}>
      <Box p="15px">
        <Home />
      </Box>
    </ModalContext.Provider>
  );
};

export default App;
