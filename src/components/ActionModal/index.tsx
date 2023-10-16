import React, { useState, useEffect } from "react";

import axios from "axios";
import {
  ActionContainer,
  ActionSecoudContainer,
  InputResearch,
  FilterContainer,
  FilterTitle,
  ItensContainer,
  ImageProduct,
  Product,
  Description,
  Price,
  ItensSecondContainer,
  InputContainer,
  Money,
} from "./style";
import {
  View,
  FlatList,
  TouchableWithoutFeedback,
  Text,
  TouchableOpacity,
} from "react-native";
import Research from "@assets/icons/lupa.svg";

function ActionModal() {
  const [searchTerm, setSearchTerm] = useState("");
  const [searchResult, setSearchResult] = useState(null);
  const [loading, setLoading] = useState(false);
  const [inputFocused, setInputFocused] = useState(false);
  const [searching, setSearching] = useState(false);
  const [isModalVisible, setModalVisible] = useState(false);

  const toggleModal = () => {
    if (searchTerm.trim() !== "") setModalVisible(!isModalVisible);
  };

  const handleInputFocus = () => {
    setInputFocused(true);
  };

  useEffect(() => {
    const searchAPI = async () => {
      setLoading(true);
      setSearching(true);
      try {
        const response = await axios.get(
          `https://api.escuelajs.co/api/v1/products/?title=${searchTerm}`
        );
        setSearchResult(response.data);
        toggleModal();
      } catch (error) {
        console.error(error);
      } finally {
        setLoading(false);
        setSearching(false);
      }
    };
    if (searchTerm) {
      searchAPI();
    }
  }, [searchTerm]);

  return (
    <ActionContainer>
      <View style={{ flexDirection: "row" }}>
        <TouchableOpacity
          style={{ marginLeft: "auto", marginRight: 12 }}
          onPress={() => setInputFocused(!inputFocused)}
        >
          <Research width={41} height={41} />
        </TouchableOpacity>
      </View>
      {inputFocused ? (
        <InputContainer>
          <InputResearch
            onFocus={handleInputFocus}
            value={searchTerm}
            onChangeText={(text) => setSearchTerm(text)}
            placeholder="Enter the product name"
          />
        </InputContainer>
      ) : null}

      {isModalVisible && (
        <View style={{ flex: 1, backgroundColor: "rgba(0, 0, 0, 0.0)" }}>
          <FilterContainer>
            {loading ? <FilterTitle>Loading...</FilterTitle> : null}
            <FlatList
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

                  <Price>{item.price}</Price>
                  <Money>R$</Money>
                </ItensContainer>
              )}
            />
          </FilterContainer>
        </View>
      )}
    </ActionContainer>
  );
}

export default ActionModal;

/*

      {isModalVisible && (
        <View style={{ flex: 1, backgroundColor: "rgba(0, 0, 0, 0.0)" }}>
          <FilterContainer>
            {loading ? <FilterTitle>Loading...</FilterTitle> : null}
            <FlatList
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

                  <Price>{item.price}</Price>
                  <Money>R$</Money>
                </ItensContainer>
              )}
            />
          </FilterContainer>
        </View>
      )}
      */
