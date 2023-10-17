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

import { Modal } from "react-native";
import CardModal from "@components/CardModal";

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

  return (
    <Container>
      <Close onPress={handleClose}></Close>

      <Content>
        <Method>Choose you payment method</Method>
        <Card onPress={() => setVisibleModal(true)}>
          <TitleCard>Credit or debit card</TitleCard>
        </Card>
        <Payment>
          <Title>Pix</Title>
        </Payment>
        <Payment>
          <Title>Bank slip</Title>
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
