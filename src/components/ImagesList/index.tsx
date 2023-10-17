import { Container, ProductImage } from "./style";

export function ImagesList({ image }: { image: string }) {
  const productImage = image;

  return (
    <Container>
      <ProductImage
        accessibilityHint="product-image"
        source={{ uri: productImage }}
      />
    </Container>
  );
}
