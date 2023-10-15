import { DetailsMenu } from "@components/DetailsMenu"
import { ProductOverview } from "@components/ProductOverview"
import { ProductResume } from "@components/ProductResume"
import { View, FlatList, Text} from "react-native"
import { Container, ContainerCategoryProducts, ItemsNumber, Title, TitleAndNumberItemsContainer } from "./style";
import { useRoute } from '@react-navigation/native';

interface Product {
    id: number;
    images: any;
    title: string;
    description: string;
    price: number;
}

interface RouteParams {
    product: Product;
}


export function Details() {
    const route = useRoute();
    const { product } = route.params as RouteParams;

    return(
        <Container>
            {product ? (
                <ProductOverview product={product} />
            ) : (
                <p>Carregando...</p>
            )}
            <DetailsMenu title="Shipping Info"/>
            <DetailsMenu title="Alguma coisa"/>
            <ContainerCategoryProducts>
                <TitleAndNumberItemsContainer>
                    <Title>You can also like this</Title>
                    <ItemsNumber>12 items</ItemsNumber>
                </TitleAndNumberItemsContainer>
            </ContainerCategoryProducts>
        </Container>
    )
}