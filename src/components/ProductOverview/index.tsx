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
import axios from "axios";
import { FlatList, TouchableOpacityProps } from "react-native";
import { ProductDTO } from "@dtos/ProductDTO";
import { ImagesList } from "@components/ImagesList";
import { useNavigation } from "@react-navigation/native";
import { TabProps } from "@routes/tab.routes";
import { useCartStore } from "../../contexts/CartStore";
import { useTranslation } from "react-i18next";
import ProductResume from "@components/ProductResume";

type Props = TouchableOpacityProps & {
  data: ProductDTO;
};

export function ProductOverview({ data }: Props) {
  const keyExtractor = (item: string, index: number) => index.toString();
  const [products, setProducts] = useState<ProductDTO[]>([]);
  const navigation = useNavigation<TabProps>();
  const cartStore = useCartStore();
  const count = cartStore.cart.find((p) => p.id === data.id)?.count || 0;

  const decrement = () => {
    if (count > 0) {
      cartStore.removeFromCartOnHomeScreen(data.id);
    }
  };

  const { t, i18n } = useTranslation();

  const increment = () => {
    cartStore.addToCart(data);
  };

  useEffect(() => {
    axios.get(`https://api.escuelajs.co/api/v1/products`).then((response) => {
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
    <>
      <Container>
        <FlatList
          data={data.images}
          renderItem={({ item }) => <ImagesList image={item} />}
          keyExtractor={keyExtractor}
          horizontal
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
        <DetailsMenu title={t("Shipping Info")} />
        <DetailsMenu title={t("Support")} />
        <ContainerCategoryProducts>
          <TitleAndNumberItemsContainer>
            <Title>{t("You can also like this")}</Title>
            <ItemsNumber>12 {t("items")}</ItemsNumber>
          </TitleAndNumberItemsContainer>
          <FlatList
            data={products}
            keyExtractor={(item) => item.id.toString()}
            horizontal
            initialNumToRender={10}
            renderItem={({ item }) => (
              <ProductResume
                data={item}
                showContainerCount={false}
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
    </>
  );
}
