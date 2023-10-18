import { useState, useEffect, useMemo } from "react";
import axios from "axios";
import { FlatList } from "react-native";
import { CategoryTitle, Container, ContainerRow, ViewAll } from "./style";
import ProductResume from "@components/ProductResume";
import { ProductDTO } from "@dtos/ProductDTO";
import { useNavigation } from "@react-navigation/native";
import { TabProps } from "@routes/tab.routes";
import { useTranslation } from "react-i18next";

interface Category {
  id: number;
  name: string;
}

export function CategoryComponent({ category }: { category: Category }) {
  const [products, setProducts] = useState<ProductDTO[]>([]);
  const { t, i18n } = useTranslation(); 

  const navigation = useNavigation<TabProps>();

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

  useEffect(() => {
    axios.get(`https://api.escuelajs.co/api/v1/products`).then((response) => {
      const productsInCategory = response.data.filter(
        (product: ProductDTO) => product.category.id === category.id
      );
      setProducts(productsInCategory);
    });
  }, [category.id]);

  const memoizedProducts = useMemo(() => products, [products]);

  return (
    <Container>
      <ContainerRow>
        <CategoryTitle>{category.name}</CategoryTitle>
        <ViewAll>{t("View all")}</ViewAll>
      </ContainerRow>
      <FlatList
        data={memoizedProducts}
        keyExtractor={(item) => item.id.toString()}
        horizontal
        initialNumToRender={3}
        maxToRenderPerBatch={3}
        renderItem={({ item }) => (
          <ProductResume
            data={item}
            showContainerCount={true}
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
    </Container>
  );
}
