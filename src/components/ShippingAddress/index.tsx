import React, { ReactNode } from "react";

import {
  Container,
  Title,
  ButtonAddress,
  TitleButton,
  TitleChange,
} from "./style";

interface ShippingAddressProps {
  children: ReactNode;
  title: string;
  change: string;
}

function ShippingAddress({ children, title, change }: ShippingAddressProps) {
  return (
    <Container>
      <Title>{children}</Title>
      <ButtonAddress>
        <TitleChange>{change}</TitleChange>
        <TitleButton>{title}</TitleButton>
      </ButtonAddress>
    </Container>
  );
}

export default ShippingAddress;
