import React, { useState } from "react";
import { Modal, StatusBar, Text, View } from "react-native";

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
import { useUserStore } from "@contexts/UserFormStore";
import { useCardStore } from "@contexts/UserCardStorege";
import { useNavigation } from "@react-navigation/native";
import { TabProps } from "@routes/tab.routes";

function Checkout() {
  const [visibleModal, setVisibleModal] = useState(false);

  const navigation = useNavigation<TabProps>();

  const { t, i18n } = useTranslation();

  const address = useUserStore();

  const cardAddress = useCardStore();

  StatusBar.setBackgroundColor("white");
  StatusBar.setBarStyle("dark-content");

  return (
    <Container>
      <Header title={t("Checkout")} onCheck={() => {}} />
      <ShippingAddress
        onAddress={() => navigation.navigate("address")}
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
        title={!address ? t("Click to add an address") : null}
        titleName={address.getUser().name}
        titleAddress={address.getUser().logradouro}
        titleCity={address.getUser().localidade + ", " + address.getUser().uf}
        change={t("Change")}
      />

      <ShippingAddress
        children={t("Payment Method")}
        title={!cardAddress ? t("None added") : null}
        titleAddress={cardAddress.getUser().cardNumber}
        change={t("Change")}
        onAddress={() => setVisibleModal(true)}
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

/*
title={t("Click to add an address")}
        titleName={address.getUser().name}
        titleAddress={address.getUser().logradouro}
        titleCity={address.getUser().localidade + ", " + address.getUser().uf}
         title={!address ? t("Click to add an address") : null}




               <View style={{ justifyContent: "center", alignItems: "center" }}>
        <Text>{address.getUser().name}</Text>
        <Text>{address.getUser().logradouro}</Text>
        <Text>
          {address.getUser().localidade + ", " + address.getUser().uf}
        </Text>
      </View>



         titleName={address.getUser().name}
        titleAddress={address.getUser().logradouro}
        titleCity={address.getUser().localidade + ", " + address.getUser().uf}
        */
