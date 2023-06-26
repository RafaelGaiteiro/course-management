import React from "react";

export const NewAccountContext = React.createContext({
  isOpen: false,
  onOpen: () => {},
  onClose: () => {},
});
