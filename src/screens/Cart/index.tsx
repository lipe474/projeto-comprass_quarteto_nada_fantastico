import { CartItem } from "@components/CartItem";
import {
  ContentContainer,
  FooterContainer,
  FooterText,
  FooterTextContainer,
  FooterTextPrice,
  Title
} from "./style";
import { FlatList } from "react-native";
import { useState, useEffect } from "react";
import { CustomButton } from "@components/Button";
import axios from "axios";
import { AppError } from "@utils/AppError";

interface Product {
  id: number;
  title: string;
  price: number;
  images: string[];
  quantity: number;
}

export function Cart() {
  const [products, setProducts] = useState<Product[]>([]);
  const [total, setTotal] = useState<number>(0);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          "https://api.escuelajs.co/api/v1/products?offset=10&limit=10"
        );

        const products = response.data.map((product: Product) => ({
          ...product,
          quantity: 1
        }));

        setProducts(products);
      } catch (error: any) {
        throw new AppError(error.message);
      }
    };

    fetchData();
  }, []);

  useEffect(() => {
    const calculatedTotal = products.reduce(
      (acc, product) => acc + product.price * product.quantity,
      0
    );
    setTotal(calculatedTotal);
  }, [products]);

  const handleQuantityChange = (itemId: number, newQuantity: number) => {
    const updatedProducts = products.map((product) => {
      if (product.id === itemId) {
        return {
          ...product,
          quantity: newQuantity
        };
      }
      return product;
    });
    setProducts(updatedProducts);
  };

  const handleRemoveItem = (itemId: number) => {
    const newProducts = products.filter((item) => item.id !== itemId);
    setProducts(newProducts);
  };
  return (
    <ContentContainer>
      <Title>Cart</Title>
      <FlatList
        data={products}
        keyExtractor={(item) => String(item.id)}
        renderItem={({ item }) => (
          <CartItem
            key={item.id}
            title={item.title}
            price={item.price}
            quantity={item.quantity} // Adicione a propriedade 'quantity' ao componente CartItem
            image={{ uri: item.images[0] }} // Acesse a primeira imagem do array de imagens
            removeItem={() => handleRemoveItem(item.id)}
            onQuantityChange={(newQuantity) =>
              handleQuantityChange(item.id, newQuantity)
            } // Passa a função de retorno para o CartItem
          />
        )}
        showsVerticalScrollIndicator={false}
        style={{ height: "100%" }}
      />
      <FooterContainer>
        <FooterTextContainer>
          <FooterText>Total amount:</FooterText>
          <FooterTextPrice>{total.toFixed(2)} R$</FooterTextPrice>
        </FooterTextContainer>
        <CustomButton title="BUY" width={343} height={48} />
      </FooterContainer>
    </ContentContainer>
  );
}
