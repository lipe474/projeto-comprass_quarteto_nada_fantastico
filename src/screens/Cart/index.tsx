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
import { CartEmpty } from "@components/CartEmpty";
import { useNavigation } from "@react-navigation/native";
import { StackProps } from "@routes/stack.routes";
import { useCartStore } from "../../contexts/CartStore";
import { useTranslation } from "react-i18next";


export function Cart() {
  const cartStore = useCartStore();
  const [total, setTotal] = useState<number>(0);
  const { t, i18n } = useTranslation();

  const navigation = useNavigation<StackProps>();

  useEffect(() => {
    const calculatedTotal = cartStore.cart.reduce(
      (acc, product) => acc + product.price * product.count,
      0
    );
    setTotal(calculatedTotal);
  }, [cartStore.cart]);

  function handleNavigateCheckout() {
    navigation.navigate("checkout");
  }

  return (
    <ContentContainer>
      <Title>{t("Cart")}</Title>
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
          <FooterText>{t("Total amount")}:</FooterText>
          <FooterTextPrice>{total.toFixed(2)} R$</FooterTextPrice>
        </FooterTextContainer>
        <CustomButton
          title={t("BUY")}
          width={343}
          height={48}
          isDisabled={total === 0}
          onPress={handleNavigateCheckout}
        />
      </FooterContainer>
    </ContentContainer>
  );
}