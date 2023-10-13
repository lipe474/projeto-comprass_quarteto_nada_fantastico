import { Container, ProductImage, ProductInformationsContainer, NameAndCategoryContainer, Name, Category, Price, DescriptionContainer, Description } from "./style";
import { DetailsMenu } from "@components/DetailsMenu";

export function ProductOverview() {
    const image = require("../../assets/images/productImage.png")

    return(
        <Container>
            <ProductImage source={image}/>
            <ProductInformationsContainer>
                <NameAndCategoryContainer>
                    <Name>Name</Name>
                    <Category>Category</Category>
                </NameAndCategoryContainer>
                <Price>19.99 R$</Price>
            </ProductInformationsContainer>
            <DescriptionContainer>
                <Description>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam nibh nisi, euismod non vulputate eu, scelerisque id neque. Nullam sed lacus velit. Nullam pretium orci et lectus suscipit hendrerit.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam nibh nisi, euismod non vulputate eu, scelerisque id neque. Nullam sed lacus velit. Nullam pretium orci et lectus suscipit hendrerit.</Description>
            </DescriptionContainer>
            <DetailsMenu title="Shipping Info"></DetailsMenu>
        </Container>
    )
}