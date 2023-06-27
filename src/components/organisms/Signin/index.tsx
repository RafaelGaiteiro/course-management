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
  Stack,
} from "@chakra-ui/react";

import { useContext } from "react";
import { SigninContext } from "../../../contexts/SigninContext";
import { InputPassword } from "../../atoms/InputPassword";

export const Signin = () => {
  const { isOpen, onClose } = useContext(SigninContext);

  return (
    <Box>
      <Drawer isOpen={isOpen} placement="right" onClose={onClose}>
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton />
          <DrawerHeader borderBottomWidth="1px">
            Entrar em uma conta
          </DrawerHeader>
          <DrawerBody>
            <Stack spacing="24px">
              <Box>
                <FormLabel htmlFor="name">Usuário</FormLabel>
                <Input id="name" placeholder="Insira o seu usuário" />
              </Box>
              <InputPassword label="Senha" placeholder="Insira a sua senha" />
            </Stack>
          </DrawerBody>
          <DrawerFooter borderTopWidth="1px">
            <Button variant="outline" mr={3} onClick={onClose}>
              Cancelar
            </Button>
            <Button colorScheme="blue">Entrar</Button>
          </DrawerFooter>
        </DrawerContent>
      </Drawer>
    </Box>
  );
};
