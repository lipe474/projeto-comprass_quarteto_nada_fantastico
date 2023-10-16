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
import { useCartStore } from "src/contexts/CartStore";
import { ProductDTO } from "@dtos/ProductDTO";

type CartItemProps = {
  product: ProductDTO
};

export function CartItem({
  product,
}: CartItemProps) {
  const cartStore = useCartStore();
  const count = cartStore.cart.find((p) => p.id === product.id)?.count || 0;

  function incrementQuantity() {
    cartStore.addToCart(product);
  }

  function decrementQuantity() {
    if (count > 0) {
      cartStore.removeFromCart(product.id);
    }
  }

  function removeItem() {
    cartStore.deleteFromCart(product.id);
  }

  return (
    <Container style={style.shadow}>
      <Image source={{uri: product.images[0]}} resizeMode="contain" />

      <ContentContainer>
        <Title>{product.title}</Title>

        <CounterContainer>
          <CounterButtonsContainer>
            <CounterButton onPress={decrementQuantity}>
              <DecreaseSVG />
            </CounterButton>
            <Text>{product.count}</Text>
            <CounterButton onPress={incrementQuantity}>
              <IncreaseSVG />
            </CounterButton>
          </CounterButtonsContainer>
          <Text>{product.count * product.price} R$</Text>
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