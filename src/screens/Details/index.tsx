import { DetailsMenu } from "@components/DetailsMenu";
import { ProductOverview } from "@components/ProductOverview";
import { ProductResume } from "@components/ProductResume";
import { View, FlatList, Text, ScrollView } from "react-native";
import {
  ButtonMinus,
  Container,
  ContainerCount,
  PlusIcon,
  CountIndicator,
  ButtonPlus,
  MinusIcon
} from "./style";
import { useRoute } from "@react-navigation/native";
import { ProductDTO } from "@dtos/ProductDTO";
import axios from "axios";
import { useEffect, useState } from "react";
import { Loading } from "@components/Loading";
import { useCartStore } from "../../contexts/CartStore";

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
      <ContainerCount>
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
