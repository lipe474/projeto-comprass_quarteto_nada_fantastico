import { FlatList } from "react-native";
import { Container, CategoryTitle, ViewAll } from "./style";
import { useEffect, useState } from "react";
import axios from 'axios';

interface Category {
    id: number;
    name: string;
}

export function ProductList () {
    const [categories, setCategories] = useState<Category[]>([]);

    useEffect(() => {
        axios.get('https://api.escuelajs.co/api/v1/categories')
          .then(response => {
            setCategories(response.data);
          })
      }, []);

    return(
        <FlatList 
            data={categories}
            keyExtractor={(item) => item.id.toString()}
            renderItem={({ item }) => (
                <Container>
                    <CategoryTitle>
                        {item.name}
                    </CategoryTitle>
                    <ViewAll>
                        View all
                    </ViewAll>
                </Container>
            )}
            />
    )
}