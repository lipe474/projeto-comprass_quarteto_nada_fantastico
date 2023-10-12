import {
  Container,
  ContentContainer,
  CounterButton,
  CounterButtonsContainer,
  CounterContainer,
  Image,
  RemoveButton,
  Text,
  Title
} from "./style";

import IncreaseSVG from "@assets/icons/increase.svg";
import DecreaseSVG from "@assets/icons/decrease.svg";
import TrashSVG from "@assets/icons/trash.svg";

import { useState } from "react";
import { ImageSourcePropType, StyleSheet } from "react-native";

type CartItemProps = {
  title: string;
  price: number;
  image: ImageSourcePropType;
  quantity: number;
  onQuantityChange: (newQuantity: number) => void;
  removeItem?: () => void;
};

export function CartItem({
  title,
  price,
  image,
  quantity,
  onQuantityChange,
  removeItem
}: CartItemProps) {
  function incrementQuantity() {
    onQuantityChange(quantity + 1);
  }

  function decrementQuantity() {
    if (quantity > 0) {
      onQuantityChange(quantity - 1);
    }
  }

  return (
    <Container style={style.shadow}>
      <Image source={image} resizeMode="contain" />

      <ContentContainer>
        <Title>{title}</Title>

        <CounterContainer>
          <CounterButtonsContainer>
            <CounterButton onPress={decrementQuantity}>
              <DecreaseSVG />
            </CounterButton>
            <Text>{quantity}</Text>
            <CounterButton onPress={incrementQuantity}>
              <IncreaseSVG />
            </CounterButton>
          </CounterButtonsContainer>
          <Text>{quantity * price} R$</Text>
        </CounterContainer>
      </ContentContainer>
      <RemoveButton onPress={removeItem}>
        <TrashSVG />
      </RemoveButton>
    </Container>
  );
}

const style = StyleSheet.create({
  shadow: {
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2
    },
    shadowOpacity: 0.23,
    shadowRadius: 2.62,
    elevation: 4
  }
});
