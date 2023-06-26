import React from "react";

export const SigninContext = React.createContext({
  isOpen: false,
  onOpen: () => {},
  onClose: () => {},
});
