import { ProductOverview } from "@components/ProductOverview";
import { ScrollView } from "react-native";
import {
  ButtonMinus,
  Container,
  ContainerCount,
  PlusIcon,
  CountIndicator,
  ButtonPlus,
  MinusIcon,
  HeaderContainer,
  HeaderTitle,
  BackButton,
  BackIcon
} from "./style";
import { useNavigation, useRoute } from "@react-navigation/native";
import { ProductDTO } from "@dtos/ProductDTO";
import axios from "axios";
import { useEffect, useState } from "react";
import { Loading } from "@components/Loading";
import { useCartStore } from "../../contexts/CartStore";
import { TabProps } from "@routes/tab.routes";
import { useTranslation } from "react-i18next";
import { StyleSheet } from "react-native";

type RouteParamsProps = {
  id: number;
  title: string;
  price: number;
  description: string;
  images: any;
  category: any;
};

export function Details() {
  const route = useRoute();
  const { id } = route.params as RouteParamsProps;
  const [actualProduct, setActualProduct] = useState<ProductDTO>();

  const navigation = useNavigation<TabProps>();

  const cartStore = useCartStore();
  const count = cartStore.cart.find((p) => p.id === id)?.count || 0;

  const decrement = () => {
    if (count > 0) {
      cartStore.removeFromCartOnHomeScreen(id);
    }
  };

  const increment = () => {
    cartStore.addToCart(actualProduct!);
  };

  const { t, i18n } = useTranslation();

  useEffect(() => {
    if (id) {
      axios
        .get(`https://api.escuelajs.co/api/v1/products/${id}`)
        .then((response) => {
          setActualProduct(response.data);
        })
        .catch((error) => {
          console.error("Erro na requisição:", error);
        });
    }
  }, [id]);

  return (
    <Container>
      <HeaderContainer>
        <HeaderTitle>{t("Details")}</HeaderTitle>
        <BackButton onPress={() => navigation.navigate("home")}>
          <BackIcon />
        </BackButton>
      </HeaderContainer>
      <ContainerCount style={style.shadow}>
        <ButtonMinus onPress={decrement}>
          <MinusIcon />
        </ButtonMinus>
        <CountIndicator>{count}</CountIndicator>
        <ButtonPlus onPress={increment}>
          <PlusIcon />
        </ButtonPlus>
      </ContainerCount>
      <ScrollView
        contentContainerStyle={{ flexGrow: 1 }}
        showsVerticalScrollIndicator={false}
      >
        {actualProduct ? <ProductOverview data={actualProduct} /> : <Loading />}
      </ScrollView>
    </Container>
  );
}

const style = StyleSheet.create({
  shadow: {
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 10
    },
    shadowOpacity: 1,
    shadowRadius: 20,
    elevation: 10
  }
});
