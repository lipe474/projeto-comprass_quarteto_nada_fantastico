import { Product } from "@components/ActionModal/style";
import { useState } from "react";
import {
  Container,
  ProductImage,
  ProductDetails,
  ProductName,
  ProductDescription,
  ProductPrice,
  ContainerCount,
  ButtonMinus,
  ButtonPlus,
  PlusIcon,
  MinusIcon,
  CountIndicator
} from "./style";
import { View } from "react-native";
import { useCartStore } from "src/contexts/CartStore";

interface Product {
    id: number;
    images: any;
    title: string;
    description: string;
    price: number;
    count: number;
  }

interface ProductResumeProps {
    product: Product;
}

export function ProductResume({ product }: ProductResumeProps) {
const cartStore = useCartStore();
  const count = cartStore.cart.find((p) => p.id === product.id)?.count || 0;

  const decrement = () => {
    if (count > 0) {
        cartStore.removeFromCart(product.id);
      }
  };

  const increment = () => {
    cartStore.addToCart(product);
  };

  return (
    <View>
      <ContainerCount>
        <ButtonMinus onPress={decrement}>
          <MinusIcon />
        </ButtonMinus>
        <CountIndicator>{count}</CountIndicator>
        <ButtonPlus onPress={increment}>
          <PlusIcon />
        </ButtonPlus>
      </ContainerCount>

      <Container>
        <ProductImage source={{ uri: product.images[0] }} />
        <ProductDetails>
          <ProductName numberOfLines={1}>{product.title}</ProductName>
          <ProductDescription numberOfLines={1}>
            {product.description}
          </ProductDescription>
          <ProductPrice>{product.price} R$</ProductPrice>
        </ProductDetails>
      </Container>
    </View>
  );
}
