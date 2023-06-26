import {
  Box,
  Button,
  Drawer,
  DrawerBody,
  DrawerCloseButton,
  DrawerContent,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  FormLabel,
  Input,
  Select,
  Stack,
  Textarea,
} from "@chakra-ui/react";

import { useContext } from "react";
import { NewAccountContext } from "../../../contexts/NewAccountContext";

export const NewAccount = () => {
  const { isOpen, onClose } = useContext(NewAccountContext);

  return (
    <Box>
      <Drawer isOpen={isOpen} placement="right" onClose={onClose}>
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton />
          <DrawerHeader borderBottomWidth="1px">
            Criar uma nova conta
          </DrawerHeader>

          <DrawerBody>
            <Stack spacing="24px">
              <Box>
                <FormLabel htmlFor="name">Nome</FormLabel>
                <Input id="name" placeholder="Insira o seu nome" />
              </Box>
              <Box>
                <FormLabel htmlFor="surname">Sobrenome</FormLabel>
                <Input id="surname" placeholder="Insira o seu sobrenome" />
              </Box>
              <Box>
                <FormLabel htmlFor="username">Nome de Usuário</FormLabel>
                <Input
                  id="username"
                  placeholder="Insira o seu Nome de Usuário"
                />
              </Box>
              <Box>
                <FormLabel htmlFor="phone">Telefone</FormLabel>
                <Input id="phone" placeholder="Insira o seu telefone" />
              </Box>
              <Box>
                <FormLabel htmlFor="owner">Tipo de conta</FormLabel>
                <Select id="owner" defaultValue="segun">
                  <option value="segun">Estudante</option>
                  <option value="kola">Instituição</option>
                </Select>
              </Box>
              <Box>
                <FormLabel htmlFor="phone">ID de Estudante</FormLabel>
                <Input id="phone" placeholder="Insira o ID de Estudante" />
              </Box>
              <Box>
                <FormLabel htmlFor="desc">Descrição</FormLabel>
                <Textarea id="desc" placeholder="Insira uma descrição" />
              </Box>
            </Stack>
          </DrawerBody>
          <DrawerFooter borderTopWidth="1px">
            <Button variant="outline" mr={3} onClick={onClose}>
              Cancelar
            </Button>
            <Button colorScheme="blue">Continuar</Button>
          </DrawerFooter>
        </DrawerContent>
      </Drawer>
    </Box>
  );
};
