import { useEffect, useState, useContext } from "react";
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
import { NewAccountContext } from "../../../contexts/NewAccountContext";
import { InputPassword } from "../../atoms/InputPassword";
import { fetchCep } from "../../../services/fetchCep"; // Substitua pelo local onde seu fetchCep se encontra.

export const NewAccount = () => {
  const { isOpen, onClose } = useContext(NewAccountContext);
  const [accountType, setAccountType] = useState("student");
  const [cep, setCep] = useState("");
  const [address, setAddress] = useState({
    street: "",
    neighborhood: "",
    city: "",
    state: "",
  });

  const handleAccountTypeChange = (
    event: React.ChangeEvent<HTMLSelectElement>
  ) => {
    setAccountType(event.target.value);
  };

  useEffect(() => {
    if (cep.length === 8) {
      fetchCep(cep)
        .then((data) => {
          setAddress({
            street: data.logradouro,
            neighborhood: data.bairro,
            city: data.localidade,
            state: data.uf,
          });
        })
        .catch((error) => {
          console.error("Erro ao buscar CEP:", error);
        });
    }
  }, [cep]);

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
                    <Input
                      id="phone"
                      type="number"
                      placeholder="Insira o seu telefone"
                    />
                  </Box>
                  <Box>
                    <FormLabel htmlFor="zipcode">CEP</FormLabel>
                    <Input
                      id="zipcode"
                      type="number"
                      placeholder="Insira o seu CEP"
                      value={cep}
                      onChange={(e) => setCep(e.target.value)}
                    />
                  </Box>
                  <Box>
                    <FormLabel htmlFor="street">Rua</FormLabel>
                    <Input
                      id="street"
                      placeholder="Insira a sua rua"
                      value={address.street}
                      onChange={(e) =>
                        setAddress({ ...address, street: e.target.value })
                      }
                    />
                  </Box>
                  <Box>
                    <FormLabel htmlFor="neighborhood">Bairro</FormLabel>
                    <Input
                      id="neighborhood"
                      placeholder="Insira o seu bairro"
                      value={address.neighborhood}
                      onChange={(e) =>
                        setAddress({ ...address, neighborhood: e.target.value })
                      }
                    />
                  </Box>
                  <Box>
                    <FormLabel htmlFor="city">Cidade</FormLabel>
                    <Input
                      id="city"
                      placeholder="Insira a sua cidade"
                      value={address.city}
                      onChange={(e) =>
                        setAddress({ ...address, city: e.target.value })
                      }
                    />
                  </Box>
                  <Box>
                    <FormLabel htmlFor="state">Estado</FormLabel>
                    <Input
                      id="state"
                      placeholder="Insira o seu estado"
                      value={address.state}
                      onChange={(e) =>
                        setAddress({ ...address, state: e.target.value })
                      }
                    />
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
