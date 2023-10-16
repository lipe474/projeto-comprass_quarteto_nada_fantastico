import { DetailsMenu } from "@components/DetailsMenu";
import { ProductOverview } from "@components/ProductOverview";
import { ProductResume } from "@components/ProductResume";
import { View, FlatList, Text, ScrollView } from "react-native";
import {
  Container
} from "./style";
import { useRoute } from "@react-navigation/native";
import { ProductDTO } from "@dtos/ProductDTO";
import axios from "axios";
import { useEffect, useState } from "react";

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

  useEffect(() => {
    if (id) {
      axios.get(`https://api.escuelajs.co/api/v1/products/${id}`)
        .then((response) => {
          setActualProduct(response.data);
        })
        .catch((error) => {
          console.error('Erro na requisição:', error);
        });
    }
  }, [id]);

  return (
    <Container>
        <ScrollView
        contentContainerStyle={{ flexGrow: 1 }}
        showsVerticalScrollIndicator={false}
      >
      {actualProduct ? (
        <ProductOverview data={actualProduct} />
      ) : (
        <Text>Carregando</Text>
      )}
      </ScrollView>
    </Container>
  );
}
