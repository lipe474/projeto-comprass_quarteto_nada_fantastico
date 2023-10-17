import BigBanner from "@components/BigBanner";
import { ProductList } from "@components/ProductList";
import { ButtonContainer, Container } from "./style";
import { ScrollView } from "react-native";
import ActionModal from "@components/ActionModal";

export function Home() {
  return (
    <Container>
      <ButtonContainer>
        <ActionModal />
      </ButtonContainer>
      <ScrollView
        contentContainerStyle={{ flexGrow: 1 }}
        showsVerticalScrollIndicator={false}
      >
        <BigBanner />
        <ProductList />
      </ScrollView>
    </Container>
  );
}
