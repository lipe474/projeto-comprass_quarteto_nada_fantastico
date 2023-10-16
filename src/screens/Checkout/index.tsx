import React, { useState } from "react";
import { Modal, StatusBar } from "react-native";

import DeliveryMethod from "@components/DeliveryMethod";
import ShippingAddress from "@components/ShippingAddress";

import {
  Container,
  Content,
  ContentTitle,
  ContentPrice,
  Title,
  Summary,
} from "./style";

import Header from "@components/Header";
import AddressModal from "@components/AddressModal";

function Checkout() {
  const [visibleModal, setVisibleModal] = useState(false);

  StatusBar.setBackgroundColor("white");
  StatusBar.setBarStyle("dark-content");

  return (
    <Container>
      <Header title="Checkout" onCheck={() => {}} />
      <ShippingAddress
        customStyle={{
          shadowColor: "rgba(0,0,0,0.5)",
          shadowOffset: {
            width: 0,
            height: 2,
          },
          elevation: 5,
          shadowOpacity: 0.28,
          shadowRadius: 4,
        }}
        children="Shipping address"
        title="Click to add an address"
        change="Change"
      />
      <ShippingAddress
        children="Payment Method"
        title="None added"
        change="Change"
        onModal={() => setVisibleModal(true)}
      />

      <DeliveryMethod />

      <Content>
        <ContentTitle>
          <Title>Order:</Title>
          <Title>Delivery:</Title>
          <Summary>Summary:</Summary>
        </ContentTitle>

        <ContentPrice>
          <Title>R$</Title>
          <Title>0R$</Title>
          <Summary>R$</Summary>
        </ContentPrice>
      </Content>

      <Modal
        animationType="fade"
        visible={visibleModal}
        transparent={true}
        onRequestClose={() => setVisibleModal(false)}
      >
        <AddressModal handleClose={() => setVisibleModal(false)} />
      </Modal>
    </Container>
  );
}

export default Checkout;
