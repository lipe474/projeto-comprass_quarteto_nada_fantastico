import { ProductResume } from "@components/ProductResume";
import { Container } from "./style";

interface Product {
  category: any;
  id: number;
  images: any;
  title: string;
  description: string;
  price: number;
}

export function ProductOnHomeScreen({ product }: { product: Product }) {
  return (
    <Container>
      <ProductResume product={product} />
    </Container>
  );
}
