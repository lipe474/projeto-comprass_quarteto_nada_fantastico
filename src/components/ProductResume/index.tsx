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

interface Product {
  id: number;
  images: any;
  title: string;
  description: string;
  price: number;
}

export function ProductResume({ product }: { product: Product }) {
  const [count, setCount] = useState(0);

  const decrement = () => {
    if (count > 0) {
      setCount((prevCount) => prevCount - 1);
    }
  };

  const increment = () => {
    setCount((prevCount) => prevCount + 1);
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
