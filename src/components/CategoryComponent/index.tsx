import { useState, useEffect } from "react";
import axios from "axios";
import { FlatList } from "react-native";
import { CategoryTitle, Container, ContainerRow, ViewAll } from "./style";
import { ProductResume } from "@components/ProductResume";
import { ProductDTO } from "@dtos/ProductDTO";
import { useNavigation } from "@react-navigation/native";
import { AppNavigatorRoutesProps } from "@routes/tab.routes";

interface Category {
  id: number;
  name: string;
}

export function CategoryComponent({ category }: { category: Category }) {
  const [products, setProducts] = useState<ProductDTO[]>([]);

  const navigation = useNavigation<AppNavigatorRoutesProps>();

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
  return (
    <Container>
      <ContainerRow>
        <CategoryTitle>{category.name}</CategoryTitle>
        <ViewAll>View all</ViewAll>
      </ContainerRow>
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
    </Container>
  );
}