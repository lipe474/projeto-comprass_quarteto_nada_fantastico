import React, { useState, useEffect } from "react";
import axios from "axios";

import {
  Container,
  ImageBG,
  Title,
  SecondContainer,
  ImageDetail,
  ImageLogo,
  SubmitButton,
  InputResearch,
  FilterContainer,
  FilterTitle,
  Filter,
  ItensContainer,
  ImageProduct,
  Product,
  Description,
  Price,
  ItensSecondContainer,
} from "./style";

import Research from "@assets/lupa.svg";

interface BigBannerProps {
  showSearch: boolean;
}

function BigBanner({ showSearch }: BigBannerProps) {
  const [showResearchInput, setShowResearchInput] = useState(false);

  const [searchTerm, setSearchTerm] = useState("");
  const [searchResult, setSearchResult] = useState(null);
  const [loading, setLoading] = useState(false);

  const onResearchClick = () => {
    setShowResearchInput(!showResearchInput);
  };

  useEffect(() => {
    const searchAPI = async () => {
      setLoading(true);
      try {
        const response = await axios.get(
          `https://api.escuelajs.co/api/v1/products/?title=${searchTerm}`
        );

        setSearchResult(response.data);
      } catch (error) {
        console.error(error);
      } finally {
        setLoading(false);
      }
    };
    searchAPI();
  }, [searchTerm]);

  return (
    <Container>
      <ImageBG resizeMode="contain" source={require("../../assets/banner.png")}>
        {showSearch ? (
          <SubmitButton onPress={onResearchClick}>
            <Research width={41} height={41} />
          </SubmitButton>
        ) : null}

        {showResearchInput ? (
          <InputResearch
            value={searchTerm}
            onChangeText={(text) => setSearchTerm(text)}
            placeholder="Enter the product name"
          />
        ) : null}

        <FilterContainer>
          {loading ? (
            <FilterTitle>Loading...</FilterTitle>
          ) : (
            <Filter
              data={searchResult}
              keyExtractor={(item) => item.id}
              renderItem={({ item }) => (
                <ItensContainer>
                  <ImageProduct source={{ uri: item.images[0] }} />
                  <ItensSecondContainer>
                    <Product>{item.title}</Product>
                    <Description>{item.description}</Description>
                  </ItensSecondContainer>

                  <Price>{item.price}</Price>
                </ItensContainer>
              )}
            />
          )}
        </FilterContainer>

        <ImageLogo width={263} height={56} />

        <SecondContainer>
          <Title>Here you always win!</Title>
          <ImageDetail width={46} height={46} />
        </SecondContainer>
      </ImageBG>
    </Container>
  );
}

export default BigBanner;
