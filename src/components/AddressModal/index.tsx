import React, { useState } from "react";

import {
  Container,
  Content,
  Method,
  Card,
  TitleCard,
  Payment,
  Title,
  Close,
  Detail,
} from "./style";

import CardModal from "@components/CardModal";
import { Modal } from "react-native";
import { useTranslation } from "react-i18next";

interface AddressModalProps {
  handleClose?: () => void;
  handleOpClose?: () => void;
  onModal?: () => void;
}

function AddressModal({
  handleClose,
  handleOpClose,
  onModal,
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
        <Card onPress={openCardModal}>
          <TitleCard>{t("Credit or debit card")}</TitleCard>
        </Card>
        <Payment>
          <Title>Pix</Title>
        </Payment>
        <Payment>
          <Title>{t("Bank slip")}</Title>
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

export default AddressModal;
