import { Container, ProductImage, ProductDetails, ProductName, ProductDescription, ProductPrice } from "./style";

interface Product {
    id: number;
    images: any;
    title: string;
    description: string;
    price: number;
}

export function ProductResume({ product }: {product: Product}) {

    return(
        <Container>
            <ProductImage source={{ uri: product.images[0] }}/>
            <ProductDetails>
                <ProductName numberOfLines={1}>{product.title}</ProductName>
                <ProductDescription numberOfLines={1}>{product.description}</ProductDescription>
                <ProductPrice>{product.price} R$</ProductPrice>
            </ProductDetails>
        </Container>
    )
}