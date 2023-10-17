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
import { useTranslation } from "react-i18next";

function Checkout() {
  const [visibleModal, setVisibleModal] = useState(false);
  
  const { t, i18n } = useTranslation(); 

  StatusBar.setBackgroundColor("white");
  StatusBar.setBarStyle("dark-content");

  return (
    <Container>
      <Header title={t("Checkout")} onCheck={() => {}} />
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
        children={t("Shipping address")}
        title={t("Click to add an address")}
        change={t("Change")}
      />
      <ShippingAddress
        children={t("Payment Method")}
        title={t("None added")}
        change={t("Change")}
        onModal={() => setVisibleModal(true)}
      />

      <DeliveryMethod />

      <Content>
        <ContentTitle>
          <Title>{t("Order")}:</Title>
          <Title>{t("Delivery")}:</Title>
          <Summary>{t("Summary")}:</Summary>
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
