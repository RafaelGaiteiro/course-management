import { createContext } from "react";

export const NewAccountContext = createContext({
  isOpen: false,
  onOpen: () => {},
  onClose: () => {},
});
