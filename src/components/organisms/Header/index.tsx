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
import { ModalContext } from "../../../contexts/ModalContext";

export const Header = () => {
  const { onOpen } = useContext(ModalContext);

  return (
    <>
      <Tabs variant="soft-rounded" colorScheme="green">
        <TabList display="flex" flexWrap="wrap" gap="20px">
          <Tab>Home</Tab>
          <Tab>Sobre</Tab>
          <Tab>Contato</Tab>
          <Button leftIcon={<AddIcon />} colorScheme="teal" onClick={onOpen}>
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
        </TabPanels>
      </Tabs>
    </>
  );
};
