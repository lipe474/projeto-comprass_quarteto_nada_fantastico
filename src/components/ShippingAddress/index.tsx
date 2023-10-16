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
}

function ShippingAddress({
  children,
  title,
  change,
  onModal,
  customStyle,
}: ShippingAddressProps) {
  return (
    <Container>
      <Title>{children}</Title>
      <ButtonAddress
        testID="shippingAddess"
        style={customStyle}
        onPress={onModal}
      >
        <TitleChange>{change}</TitleChange>
        <TitleButton>{title}</TitleButton>
      </ButtonAddress>
    </Container>
  );
}

export default ShippingAddress;
