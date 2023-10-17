import { Product } from "@components/ActionModal/style";
import React, { useCallback, useState } from "react";
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
  CountIndicator,
  ContainerAll
} from "./style";
import { TouchableOpacityProps, View } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { TabProps } from "@routes/tab.routes";
import { ProductDTO } from "@dtos/ProductDTO";
import { useCartStore } from "../../contexts/CartStore";

type Props = TouchableOpacityProps & {
  data: ProductDTO;
};

function ProductResume({ data, ...rest }: Props) {
  const cartStore = useCartStore();
  const count = cartStore.cart.find((p) => p.id === data.id)?.count || 0;

  const handleDecrement = useCallback(() => {
    if (count > 0) {
      removeFromCart(data.id);
    }
  }, [count, data.id]);

  const handleIncrement = useCallback(() => {
    addToCart(data);
  }, [data]);

  const removeFromCart = useCallback(
    (productId: number) => {
      cartStore.removeFromCartOnHomeScreen(productId);
    },
    [cartStore]
  );

  const addToCart = useCallback(
    (product: any) => {
      cartStore.addToCart(product);
    },
    [cartStore]
  );

  return (
    <ContainerAll>
      <ContainerCount>
        <ButtonMinus onPress={handleDecrement}>
          <MinusIcon />
        </ButtonMinus>
        <CountIndicator>{count}</CountIndicator>
        <ButtonPlus onPress={handleIncrement}>
          <PlusIcon />
        </ButtonPlus>
      </ContainerCount>

      <Container {...rest}>
        <ProductImage source={{ uri: data.images[0] }} />
        <ProductDetails>
          <ProductName numberOfLines={1}>{data.title}</ProductName>
          <ProductDescription numberOfLines={1}>
            {data.description}
          </ProductDescription>
          <ProductPrice>{data.price} R$</ProductPrice>
        </ProductDetails>
      </Container>
    </ContainerAll>
  );
}
export default React.memo(ProductResume);
