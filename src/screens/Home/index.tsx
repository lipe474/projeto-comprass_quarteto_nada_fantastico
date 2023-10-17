import BigBanner from "@components/BigBanner";
import {
  ButtonContainer,
  Container,
  ContainerProfile,
  ContentContainer,
  Name,
  ProfileImage
} from "./style";

import ActionModal from "@components/ActionModal";
import { useEffect, useState } from "react";
import { api } from "@services/api";
import { CategoryComponent } from "@components/CategoryComponent";
import { FlatList } from "react-native";
import { useAuth } from "@hooks/useAuth";
import { useTranslation } from "react-i18next";

interface Category {
  id: number;
  name: string;
}

export function Home() {
  const [categories, setCategories] = useState<Category[]>([]);

  const { t, i18n } = useTranslation();

  const { user } = useAuth();

  useEffect(() => {
    api.get("/categories").then((response) => {
      setCategories(response.data);
    });
  }, []);

  return (
    <Container>
      <ButtonContainer>
        <ActionModal onCloseModal={() => ({})} />
      </ButtonContainer>
      {user.id ? (
        <ContainerProfile>
          <ProfileImage source={{ uri: user.avatar }} />
          <Name>
            {t("Hello")}, {user.name}
          </Name>
        </ContainerProfile>
      ) : null}
      <ContentContainer>
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
