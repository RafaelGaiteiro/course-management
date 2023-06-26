import { AddIcon } from "@chakra-ui/icons";
import {
  Button,
  Tab,
  TabList,
  TabPanel,
  TabPanels,
  Tabs,
} from "@chakra-ui/react";

import { useContext } from "react";
import { NewAccountContext } from "../../../contexts/NewAccountContext";
import { SigninContext } from "../../../contexts/SigninContext";

export const Header = () => {
  // Contexts
  const { onOpen: openNewAccount } = useContext(NewAccountContext);
  const { onOpen: openSignin } = useContext(SigninContext);

  return (
    <>
      <Tabs variant="soft-rounded" colorScheme="green">
        <TabList display="flex" flexWrap="wrap" gap="20px">
          <Tab>Home</Tab>
          <Tab>Sobre</Tab>
          <Tab>Contato</Tab>
          <Button colorScheme="blue" onClick={openSignin}>
            Entrar
          </Button>
          <Button
            leftIcon={<AddIcon />}
            colorScheme="teal"
            onClick={openNewAccount}
          >
            Abrir uma Conta
          </Button>
        </TabList>
        <TabPanels>
          <TabPanel>
            <p>one!</p>
          </TabPanel>
          <TabPanel>
            <p>two!</p>
          </TabPanel>
          <TabPanel>
            <p>three!</p>
          </TabPanel>
        </TabPanels>
      </Tabs>
    </>
  );
};
