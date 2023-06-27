import { createContext } from "react";

export const SigninContext = createContext({
  isOpen: false,
  onOpen: () => {},
  onClose: () => {},
});
