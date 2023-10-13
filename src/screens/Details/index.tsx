import { DetailsMenu } from "@components/DetailsMenu"
import { ProductOverview } from "@components/ProductOverview"
import { ProductResume } from "@components/ProductResume"
import { View, FlatList} from "react-native"
import { ContainerCategoryProducts, ItemsNumber, Title, TitleAndNumberItemsContainer } from "./style";
import { useRoute } from '@react-navigation/native';

interface Product {
    id: number;
    images: any;
    title: string;
    description: string;
    price: number;
}

interface RouteParams {
    productId: number;
}

export function Details() {
    const route = useRoute();
    const { productId } = route.params as RouteParams;

    return(
        <View>
            <ProductOverview />
            <DetailsMenu title="Shipping Info"/>
            <DetailsMenu title="Alguma coisa"/>
            <ContainerCategoryProducts>
                <TitleAndNumberItemsContainer>
                    <Title>You can also like this</Title>
                    <ItemsNumber>12 items</ItemsNumber>
                </TitleAndNumberItemsContainer>
                <FlatList />
            </ContainerCategoryProducts>
        </View>
    )
}