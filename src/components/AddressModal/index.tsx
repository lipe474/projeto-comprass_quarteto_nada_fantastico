import React, { useState } from "react";

import {
  Container,
  Content,
  Method,
  TitleSelected,
  Payment,
  Title,
  Close,
  Detail,
} from "./style";

import { StyleSheet } from "react-native"
import CardModal from "@components/CardModal";
import { Modal } from "react-native";
import { useTranslation } from "react-i18next";

interface AddressModalProps {
  handleClose?: () => void;
  handleOpClose?: () => void;
  onModal?: () => void;
  selectedPayment: string | null;
  onPaymentChange: (payment: string) => void;
}

function AddressModal({
  handleClose,
  handleOpClose,
  onModal,
  selectedPayment,
  onPaymentChange
}: AddressModalProps) {
  const [visibleModal, setVisibleModal] = useState(false);
  const { t, i18n } = useTranslation();

  const openCardModal = () => {
    setVisibleModal(true);
  };

  return (
    <Container>
      <Close onPress={handleClose}></Close>

      <Content>
        <Method>{t("Choose you payment method")}</Method>
        <Payment style={selectedPayment === "card" && styles.selectedPayment } onPress={() => { onPaymentChange("card"); openCardModal(); }}>
          <Title style={selectedPayment === "card" && styles.selectedTitle }>{t("Credit or debit card")}</Title>
        </Payment>
        <Payment style={selectedPayment === "pix" && styles.selectedPayment } onPress={() => onPaymentChange("pix")}>
          <Title style={selectedPayment === "pix" && styles.selectedTitle }>Pix</Title>
        </Payment>
        <Payment style={selectedPayment === "bank_slip" && styles.selectedPayment } onPress={() => onPaymentChange("bank_slip")}>
          <Title style={selectedPayment === "bank_slip" && styles.selectedTitle }>{t("Bank slip")}</Title>
        </Payment>

        <Modal
          animationType="fade"
          visible={visibleModal}
          transparent={true}
          onRequestClose={() => setVisibleModal(false)}
        >
          <CardModal handleOnClose={() => setVisibleModal(false)} />
        </Modal>
      </Content>
    </Container>
  );
}

const styles = StyleSheet.create({
  selectedPayment: {
    backgroundColor: "#FF0024",
  },
  selectedTitle: {
    color: "#FFFFFF",
  }
})

export default AddressModal;
