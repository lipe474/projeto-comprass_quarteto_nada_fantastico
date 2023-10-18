import React, { useState, useEffect } from "react";
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
  ButtonContainer,
} from "./style";

import Header from "@components/Header";
import AddressModal from "@components/AddressModal";
import { useTranslation } from "react-i18next";
import { useUserStore } from "@contexts/UserFormStore";
import { useCardStore } from "@contexts/UserCardStorege";
import { useNavigation } from "@react-navigation/native";
import { TabProps } from "@routes/tab.routes";
import { useCartStore } from "@contexts/CartStore";
import { CustomButton } from "@components/Button";

function Checkout() {
  const [visibleModal, setVisibleModal] = useState(false);

  const [total, setTotal] = useState<number>(0);
  const cartStore = useCartStore();

  useEffect(() => {
    const calculatedTotal = cartStore.cart.reduce(
      (acc, product) => acc + product.price * product.count,
      0
    );
    setTotal(calculatedTotal);
  }, [cartStore.cart]);
  
  const deliveryPrice = 20;

  const totalCheckout = deliveryPrice + total

  const navigation = useNavigation<TabProps>();

  const { t, i18n } = useTranslation();

  const address = useUserStore();

  const cardAddress = useCardStore();

  StatusBar.setBackgroundColor("white");
  StatusBar.setBarStyle("dark-content");

  const [selectedPayment, setSelectedPayment] = useState<string | null>(null);

  const handlePaymentChange = (paymentType: string) => {
    setSelectedPayment(paymentType);
  };

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
        title={address.getUser().logradouro ? "" : t("Click to add an address")}
        titleName={address.getUser().name ? address.getUser().name : ""}
        titleAddress={address.getUser().logradouro ? address.getUser().logradouro : ""}
        titleCity={address.getUser().localidade ? address.getUser().localidade : "" + ", " + address.getUser().uf ? address.getUser().uf : ""}
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
          <Title>{deliveryPrice.toFixed(2)} R$</Title>
          <Title>{total.toFixed(2)} R$</Title>
          <Summary>{totalCheckout.toFixed(2)} R$</Summary>
        </ContentPrice>
      </Content>

      <ButtonContainer>
        <CustomButton
            title={t("SUBMIT ORDER")}
            width={343}
            height={48}
            isDisabled={total === 0}
        />
      </ButtonContainer>

      <Modal
        animationType="fade"
        visible={visibleModal}
        transparent={true}
        onRequestClose={() => setVisibleModal(false)}
      >
        <AddressModal handleClose={() => setVisibleModal(false)} selectedPayment={selectedPayment} onPaymentChange={handlePaymentChange} />
      </Modal>
    </Container>
  );
}

export default Checkout;