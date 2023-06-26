import React from "react";
import { Container } from "./styles";

interface IDefaultContainer {
  children: React.ReactNode;
}

export const DefaultContainer = ({ children }: IDefaultContainer) => {
  return <Container>{children}</Container>;
};
