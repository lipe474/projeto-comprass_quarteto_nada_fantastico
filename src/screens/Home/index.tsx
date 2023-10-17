import BigBanner from "@components/BigBanner";
import { ButtonContainer, Container, ContentContainer } from "./style";

import ActionModal from "@components/ActionModal";
import { useEffect, useState } from "react";
import { api } from "@services/api";
import { CategoryComponent } from "@components/CategoryComponent";
import { FlatList } from "react-native";

interface Category {
  id: number;
  name: string;
}

export function Home() {
  const [categories, setCategories] = useState<Category[]>([]);

  useEffect(() => {
    api.get("/categories").then((response) => {
      setCategories(response.data);
    });
  }, []);

  return (
    <Container>
      <ContentContainer>
        <ButtonContainer>
          <ActionModal onCloseModal={() => ({})} />
        </ButtonContainer>

        <FlatList
          ListHeaderComponent={<BigBanner />}
          accessibilityHint="category-list"
          data={categories}
          keyExtractor={(item) => item.id.toString()}
          initialNumToRender={10}
          maxToRenderPerBatch={10}
          renderItem={({ item }) => <CategoryComponent category={item} />}
        />
      </ContentContainer>
    </Container>
  );
}
