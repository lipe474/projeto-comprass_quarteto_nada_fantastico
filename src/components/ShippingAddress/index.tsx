import React, { ReactNode } from "react";
import { StyleProp, ViewStyle, View, Text } from "react-native";

import {
  Container,
  Title,
  ButtonAddress,
  TitleButton,
  TitleChange,
  PagMethod,
} from "./style";

interface ShippingAddressProps {
  children?: ReactNode;
  title?: string;
  change?: string;
  onModal?: () => void;
  customStyle?: StyleProp<ViewStyle>;
  data?: string;
}

function ShippingAddress({
  children,
  title,
  change,
  onModal,
  customStyle,
  data,
}: ShippingAddressProps) {
  return (
    <Container>
      <Title>{children}</Title>
      <ButtonAddress style={customStyle} onPress={onModal}>
        <TitleChange>{change}</TitleChange>
        <TitleButton>{title}</TitleButton>
      </ButtonAddress>
    </Container>
  );
}

export default ShippingAddress;
