import { useState, useEffect } from "react";
import axios from "axios";
import { FlatList, ScrollView} from "react-native";
import { ProductOnHomeScreen } from "@components/ProductOnHomeScreen";
import { CategoryTitle, Container, ContainerRow, ViewAll } from "./style";

interface Category {
    id: number;
    name: string;
}

interface Product {
    category: any;
    id: number;
    images: any;
    title: string;
    description: string;
    price: number;
}

export function CategoryComponent({ category }: { category: Category }) {
    const [products, setProducts] = useState<Product[]>([]);
  
    useEffect(() => {
      axios.get(`https://api.escuelajs.co/api/v1/products`)
        .then(response => {
          const productsInCategory = response.data.filter((product: Product) => product.category.id === category.id);
          setProducts(productsInCategory);
        });
    }, [category.id]);
    return (
      <Container>
        <ContainerRow>
            <CategoryTitle>{category.name}</CategoryTitle>
            <ViewAll>View all</ViewAll>
        </ContainerRow>
        <ScrollView horizontal>
          <FlatList
            data={products}
            keyExtractor={(item) => item.id.toString()}
            horizontal
            renderItem={({ item }) => (
              <ProductOnHomeScreen product={item} />
            )}
          />
        </ScrollView>
      </Container>
    );
  }