import { CartItem } from "@components/CartItem";
import {
  ContentContainer,
  FooterContainer,
  FooterText,
  FooterTextContainer,
  FooterTextPrice,
  Title
} from "./style";
import { FlatList } from "react-native";
import { useState, useEffect } from "react";
import { CustomButton } from "@components/Button";
import axios from "axios";
import { AppError } from "@utils/AppError";
import { CartEmpty } from "@components/CartEmpty";
import { useNavigation } from "@react-navigation/native";
import { StackProps } from "@routes/stack.routes";
import { useCartStore } from "src/contexts/CartStore";
import { ProductDTO } from "@dtos/ProductDTO";

interface Product {
  id: number;
  title: string;
  price: number;
  images: string[];
  quantity: number;
}

export function Cart() {
  const [products, setProducts] = useState<Product[]>([]);
  const [total, setTotal] = useState<number>(0);
  const cartStore = useCartStore();

  const navigation = useNavigation<StackProps>();

  function handleNavigateCheckout() {
    navigation.navigate("checkout");
  }

  return (
    <ContentContainer>
      <Title>Cart</Title>
      <FlatList
        data={cartStore.cart}
        keyExtractor={(item) => String(item.id)}
        renderItem={({ item }) => (
          <CartItem
            key={item.id}
            product={item}
          />
        )}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{
          flexGrow: 1
        }}
        style={{ height: "100%" }}
        ListEmptyComponent={<CartEmpty />}
      />
      <FooterContainer>
        <FooterTextContainer>
          <FooterText>Total amount:</FooterText>
          <FooterTextPrice>{total.toFixed(2)} R$</FooterTextPrice>
        </FooterTextContainer>
        <CustomButton
          title="BUY"
          width={343}
          height={48}
          isDisabled={products.length === 0}
          onPress={handleNavigateCheckout}
        />
      </FooterContainer>
    </ContentContainer>
  );
}