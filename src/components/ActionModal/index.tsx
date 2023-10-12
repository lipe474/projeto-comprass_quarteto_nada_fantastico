import React, { useState, useEffect } from "react";
import axios from "axios";

import {
  ActionContainer,
  ActionButton,
  ActionSecoudContainer,
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
  InputContainer,
  Money,
  PriceSecondContainer,
} from "./style";
import { Text } from "react-native";

interface ActionModalProps {
  showSearch: boolean;
  handleClose: () => void;
  showResearchInput: boolean;
}

function ActionModal({ handleClose, showResearchInput }: ActionModalProps) {
  const [searchTerm, setSearchTerm] = useState("");
  const [searchResult, setSearchResult] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const searchAPI = async () => {
      setLoading(true);
      try {
        const response = await axios.get(
          `https://api.escuelajs.co/api/v1/products/?title=${searchTerm}`
        );
        console.log(response.data);
        setSearchResult(response.data);
        console.log(response.data);
      } catch (error) {
        console.error(error);
      } finally {
        setLoading(false);
      }
    };
    if (searchTerm) {
      searchAPI();
    }
  }, [searchTerm]);

  return (
    <ActionContainer>
      <InputContainer>
        {showResearchInput ? (
          <InputResearch
            value={searchTerm}
            onChangeText={(text) => setSearchTerm(text)}
            placeholder="Enter the product name"
          />
        ) : null}
      </InputContainer>
      <ActionSecoudContainer>
        <FilterContainer>
          {loading ? (
            <FilterTitle>Loading...</FilterTitle>
          ) : (
            <Filter
              data={searchResult}
              keyExtractor={(item) => item.id.toString()}
              renderItem={({ item }) => (
                <ItensContainer>
                  <ImageProduct source={{ uri: item.images[0] }} />
                  <ItensSecondContainer>
                    <Product>{item.title}</Product>
                    <Description numberOfLines={1}>
                      {item.description}
                    </Description>
                  </ItensSecondContainer>

                  <PriceSecondContainer>
                    <Price>{item.price}</Price>
                    <Money>R$</Money>
                  </PriceSecondContainer>
                </ItensContainer>
              )}
            />
          )}
        </FilterContainer>
      </ActionSecoudContainer>
      <ActionButton onPress={handleClose} />
    </ActionContainer>
  );
}

export default ActionModal;
