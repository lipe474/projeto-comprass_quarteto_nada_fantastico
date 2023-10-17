import React, { ReactNode } from "react";
import { StyleProp, ViewStyle, View, Text } from "react-native";

import {
  Container,
  Title,
  ButtonAddress,
  TitleButton,
  TitleChange,
  TextTitle,
  TextAddres,
  PagMethod,
} from "./style";

interface ShippingAddressProps {
  children?: ReactNode;
  titleName?: string;
  titleAddress?: string;
  titleCity?: string;
  title?: string;
  change?: string;
  onAddress?: () => void;
  customStyle?: StyleProp<ViewStyle>;
}

function ShippingAddress({
  children,
  title,
  titleName,
  titleAddress,
  titleCity,
  change,
  onAddress,
  customStyle,
}: ShippingAddressProps) {
  return (
    <Container>
      <Title>{children}</Title>
      <ButtonAddress
        testID="shippingAddess"
        style={customStyle}
        onPress={onAddress}
      >
        <TitleChange>{change}</TitleChange>
        <TitleButton>{title}</TitleButton>
        <View style={{ justifyContent: "center", alignSelf: "center" }}>
          <TextTitle>{titleName}</TextTitle>
          <TextAddres>{titleAddress}</TextAddres>
          <TextAddres>{titleCity}</TextAddres>
        </View>
      </ButtonAddress>
    </Container>
  );
}

export default ShippingAddress;
