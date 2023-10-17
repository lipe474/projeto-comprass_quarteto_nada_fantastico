import {
  Container,
  ProductInformationsContainer,
  NameAndCategoryContainer,
  Name,
  Category,
  Price,
  DescriptionContainer,
  Description,
  ContainerCategoryProducts,
  TitleAndNumberItemsContainer,
  Title,
  ItemsNumber
} from "./style";
import { DetailsMenu } from "@components/DetailsMenu";
import { useState, useEffect } from "react";
import { FlatList, TouchableOpacityProps } from "react-native";
import { ProductDTO } from "@dtos/ProductDTO";
import { ImagesList } from "@components/ImagesList";
import ProductResume from "@components/ProductResume";
import { useNavigation } from "@react-navigation/native";
import { TabProps } from "@routes/tab.routes";
import { api } from "@services/api";

type Props = TouchableOpacityProps & {
  data: ProductDTO;
};

export function ProductOverview({ data }: Props) {
  const keyExtractor = (item: string, index: number) => index.toString();
  const [products, setProducts] = useState<ProductDTO[]>([]);
  const navigation = useNavigation<TabProps>();

  useEffect(() => {
    api.get("/products").then((response) => {
      const productsInCategory = response.data.filter(
        (product: ProductDTO) =>
          product.category.id === data.category.id && product.id !== data.id
      );
      setProducts(productsInCategory);
    });
  }, [data.category.id]);

  function handleOpenDetails(
    id: number,
    title: string,
    price: number,
    description: string,
    images: Array<string>,
    category: any
  ) {
    navigation.navigate("details", {
      id,
      title,
      price,
      description,
      images,
      category
    });
  }
  return (
    <Container>
      <FlatList
        data={data.images}
        renderItem={({ item }) => <ImagesList image={item} />}
        keyExtractor={keyExtractor}
        horizontal
        accessibilityHint="product-image"
      />
      <ProductInformationsContainer>
        <NameAndCategoryContainer>
          <Name>{data.title}</Name>
          <Category>{data.category.name}</Category>
        </NameAndCategoryContainer>
        <Price>{data.price.toFixed(2)} R$</Price>
      </ProductInformationsContainer>
      <DescriptionContainer>
        <Description>{data.description}</Description>
      </DescriptionContainer>
      <DetailsMenu title="Shipping Info" />
      <DetailsMenu title="Support" />
      <ContainerCategoryProducts>
        <TitleAndNumberItemsContainer>
          <Title>You can also like this</Title>
          <ItemsNumber>12 items</ItemsNumber>
        </TitleAndNumberItemsContainer>
        <FlatList
          data={products}
          keyExtractor={(item) => item.id.toString()}
          horizontal
          initialNumToRender={10}
          renderItem={({ item }) => (
            <ProductResume
              data={item}
              onPress={() =>
                handleOpenDetails(
                  item.id,
                  item.title,
                  item.price,
                  item.description,
                  item.images,
                  item.category
                )
              }
            />
          )}
        />
      </ContainerCategoryProducts>
    </Container>
  );
}
