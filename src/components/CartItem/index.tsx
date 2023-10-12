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
import { ImageSourcePropType } from "react-native";

type CartItemProps = {
  title: string;
  price: number;
  image: ImageSourcePropType;
  removeItem?: () => void;
};

export function CartItem({ title, price, image, removeItem }: CartItemProps) {
  const [quantity, setQuantity] = useState(0);

  function incrementQuantity() {
    setQuantity(quantity + 1);
  }

  function decrementQuantity() {
    if (quantity > 0) {
      setQuantity(quantity - 1);
    }
  }

  return (
    <Container>
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
