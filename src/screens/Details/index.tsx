import { DetailsMenu } from "@components/DetailsMenu";
import { ProductOverview } from "@components/ProductOverview";
import { ProductResume } from "@components/ProductResume";
import { View, FlatList, Text } from "react-native";
import {
  Container,
  ContainerCategoryProducts,
  ItemsNumber,
  Title,
  TitleAndNumberItemsContainer
} from "./style";
import { useRoute } from "@react-navigation/native";
import { ProductDTO } from "@dtos/ProductDTO";

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
  const { id, title, price, description, images, category } =
    route.params as RouteParamsProps;
  console.log(id, "product");
  return (
    <Container>
      {id ? (
        // <ProductOverview product={product} />
        <Text>Carregado</Text>
      ) : (
        <Text>Carregando</Text>
      )}
      <DetailsMenu title="Shipping Info" />
      <DetailsMenu title="Alguma coisa" />
      <ContainerCategoryProducts>
        <TitleAndNumberItemsContainer>
          <Title>You can also like this</Title>
          <ItemsNumber>12 items</ItemsNumber>
        </TitleAndNumberItemsContainer>
      </ContainerCategoryProducts>
    </Container>
  );
}
