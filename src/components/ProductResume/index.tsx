import { Container, ProductImage, ProductDetails, ProductName, ProductDescription, ProductPrice } from "./style";
const Image = require("../../assets/images/productImage.png")

export function ProductResume() {

    const maxLenght: number = 32;
    const longText: string = "Description pequena aqui e se ultrapassar o número de linhas vai limitar os caracteres";

    const truncatedText: string = longText.length > maxLenght
    ? longText.slice(0, maxLenght - 3) + "..."
    : longText;

    return(
        <Container>
            <ProductImage source={Image}/>
            <ProductDetails>
                <ProductName>Name</ProductName>
                <ProductDescription numberOfLines={1}>{truncatedText}</ProductDescription>
                <ProductPrice>30,00 R$</ProductPrice>
            </ProductDetails>
        </Container>
    )
}