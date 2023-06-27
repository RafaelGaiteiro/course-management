import { ViewIcon, ViewOffIcon } from "@chakra-ui/icons";
import {
  Box,
  Button,
  FormLabel,
  Input,
  InputGroup,
  InputRightElement,
} from "@chakra-ui/react";
import { useState } from "react";

type InputPasswordProps = {
  label: string;
  placeholder: string;
};

export const InputPassword = ({ label, placeholder }: InputPasswordProps) => {
  const [show, setShow] = useState(false);

  function handleClick() {
    setShow(!show);
  }

  return (
    <Box>
      <FormLabel htmlFor="name">{label}</FormLabel>
      <InputGroup size="md">
        <Input
          id="name"
          pr="4.5rem"
          type={show ? "text" : "password"}
          placeholder={placeholder}
        />
        <InputRightElement width="3rem">
          <Button size="sm" onClick={handleClick}>
            {show ? <ViewIcon /> : <ViewOffIcon />}
          </Button>
        </InputRightElement>
      </InputGroup>
    </Box>
  );
};
