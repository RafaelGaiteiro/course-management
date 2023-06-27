import {
  Alert,
  AlertIcon,
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

import { useContext, useState } from "react";
import { NewAccountContext } from "../../../contexts/NewAccountContext";
import { InputPassword } from "../../atoms/InputPassword";

export const NewAccount = () => {
  const { isOpen, onClose } = useContext(NewAccountContext);
  const [accountType, setAccountType] = useState("student");

  const handleAccountTypeChange = (
    event: React.ChangeEvent<HTMLSelectElement>
  ) => {
    setAccountType(event.target.value);
  };

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
                <FormLabel htmlFor="owner">Tipo da conta</FormLabel>
                <Select
                  id="owner"
                  defaultValue="student"
                  onChange={handleAccountTypeChange}
                >
                  <option value="student">Estudante</option>
                  <option value="institution">Instituição</option>
                </Select>
              </Box>
              {accountType === "student" ? (
                <>
                  <Box>
                    <FormLabel htmlFor="phone">ID de Estudante</FormLabel>
                    <Input id="phone" placeholder="ID de estudante" />
                  </Box>
                  <Box>
                    <FormLabel htmlFor="name">Nome</FormLabel>
                    <Input id="name" placeholder="Insira o seu nome" />
                  </Box>
                  <Box>
                    <FormLabel htmlFor="surname">Sobrenome</FormLabel>
                    <Input id="surname" placeholder="Insira o seu sobrenome" />
                  </Box>
                  <InputPassword
                    label="Senha"
                    placeholder="Insira a sua senha"
                  />
                  <InputPassword
                    label="Confirmação de Senha"
                    placeholder="Insira a sua senha"
                  />

                  <Box>
                    <FormLabel htmlFor="phone">Telefone</FormLabel>
                    <Input id="phone" placeholder="Insira o seu telefone" />
                  </Box>
                  <Box>
                    <FormLabel htmlFor="zipcode">CEP</FormLabel>
                    <Input id="zipcode" placeholder="Insira o seu CEP" />
                  </Box>
                  <Box>
                    <FormLabel htmlFor="street">Rua</FormLabel>
                    <Input id="street" placeholder="Insira a sua rua" />
                  </Box>
                  <Box>
                    <FormLabel htmlFor="neighborhood">Bairro</FormLabel>
                    <Input
                      id="neighborhood"
                      placeholder="Insira o seu bairro"
                    />
                  </Box>
                  <Box>
                    <FormLabel htmlFor="city">Cidade</FormLabel>
                    <Input id="city" placeholder="Insira a sua cidade" />
                  </Box>
                  <Box>
                    <FormLabel htmlFor="state">Estado</FormLabel>
                    <Input id="state" placeholder="Insira o seu estado" />
                  </Box>
                  <Box>
                    <FormLabel htmlFor="country">País</FormLabel>
                    <Input id="country" placeholder="Insira o seu país" />
                  </Box>
                  <Box>
                    <FormLabel htmlFor="number">Nº Residencial</FormLabel>
                    <Input
                      id="number"
                      placeholder="Insira o seu Nº residencial"
                    />
                  </Box>
                  <Box>
                    <FormLabel htmlFor="complement">
                      Insira um Complemento
                    </FormLabel>
                    <Input
                      id="complement"
                      placeholder="Insira um complemento"
                    />
                  </Box>
                  <Box>
                    <FormLabel htmlFor="reference">Referência</FormLabel>
                    <Input id="reference" placeholder="Insira uma referência" />
                  </Box>
                  <Box>
                    <FormLabel htmlFor="biography">Biografia</FormLabel>
                    <Textarea
                      id="biography"
                      placeholder="Esse sempre foi o meu sonho!"
                    />
                  </Box>
                </>
              ) : (
                <Alert status="warning">
                  <AlertIcon />
                  Desculpe, ainda não temos essa funcionalidade.
                </Alert>
              )}
            </Stack>
          </DrawerBody>
          <DrawerFooter borderTopWidth="1px">
            <Button variant="outline" mr={3} onClick={onClose}>
              Cancelar
            </Button>
            <Button colorScheme="blue">Cadastrar</Button>
          </DrawerFooter>
        </DrawerContent>
      </Drawer>
    </Box>
  );
};
