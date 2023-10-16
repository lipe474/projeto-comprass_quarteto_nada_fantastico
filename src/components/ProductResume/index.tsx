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
  CountIndicator,
  ContainerAll
} from "./style";
import { TouchableOpacityProps, View } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { AppNavigatorRoutesProps } from "@routes/tab.routes";
import { ProductDTO } from "@dtos/ProductDTO";

type Props = TouchableOpacityProps & {
  data: ProductDTO;
};

export function ProductResume({ data, ...rest }: Props) {
  const [count, setCount] = useState(0);

  const decrement = () => {
    if (count > 0) {
        cartStore.removeFromCart(product.id);
      }
  };

  const increment = () => {
    cartStore.addToCart(product);
  };

  return (
    <ContainerAll>
      <ContainerCount>
        <ButtonMinus onPress={decrement}>
          <MinusIcon />
        </ButtonMinus>
        <CountIndicator>{count}</CountIndicator>
        <ButtonPlus onPress={increment}>
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
