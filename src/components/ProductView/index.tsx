import { ProductResume } from "@components/ProductResume";
import { ProductCount } from "@components/ProductCount";
import { Container } from "./style";

export function ProductView() {
    return(
        <Container>
            <ProductCount />
            <ProductResume />
        </Container>
    )
}