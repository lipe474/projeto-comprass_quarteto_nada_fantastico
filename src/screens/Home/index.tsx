import BigBanner from "@components/BigBanner";
import { ProductList } from "@components/ProductList";
import { View } from "react-native";
import { Container } from "./style";
import { ScrollView } from "react-native";

export function Home() {
  return (
    <Container>
      <ScrollView
        contentContainerStyle={{ flexGrow: 1 }}
        showsVerticalScrollIndicator={false}
      >
        <BigBanner showSearch showModal />
        <ProductList />
      </ScrollView>
    </Container>
  );
}
