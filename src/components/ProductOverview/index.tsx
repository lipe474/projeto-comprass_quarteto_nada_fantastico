import { Container, ProductImage, ProductInformationsContainer, NameAndCategoryContainer, Name, Category, Price, DescriptionContainer, Description } from "./style";
import { DetailsMenu } from "@components/DetailsMenu";
import { useState, useEffect } from "react";
import axios from "axios";

interface Product {
    id: number;
    images: any;
    title: string;
    description: string;
    price: number;
}

export function ProductOverview({ product }: {product: Product}) {
    const image = require("../../assets/images/productImage.png")

    return(
        <Container>
            <ProductImage source={image}/>
            <ProductInformationsContainer>
                <NameAndCategoryContainer>
                    <Name>{product.title}</Name>
                    <Category>Category</Category>
                </NameAndCategoryContainer>
                <Price>{product.price}</Price>
            </ProductInformationsContainer>
            <DescriptionContainer>
                <Description>{product.description}</Description>
            </DescriptionContainer>
            <DetailsMenu title="Shipping Info"></DetailsMenu>
        </Container>
    )
}