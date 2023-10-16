import { Container, ProductImage } from "./style";

export function ImagesList({image}: {image: string}) {
    const productImage = image;

    return(
    <Container>
        <ProductImage source={{ uri: productImage}}/>
    </Container>
    )
}