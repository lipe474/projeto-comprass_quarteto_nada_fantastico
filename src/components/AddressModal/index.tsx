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
import { ButtonAddress } from "@components/ShippingAddress/style";
import { Modal, Text } from "react-native";
import CardModal from "@components/CardModal";

interface AddressModalProps {
  handleClose: () => void;
}

function AddressModal({ handleClose }: AddressModalProps) {
  const [visibleModal, setVisibleModal] = useState(false);

  return (
    <Container>
      <Close onPress={handleClose}></Close>

      <Content>
        <Detail></Detail>
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
          <CardModal handleClose={() => setVisibleModal(false)} />
        </Modal>
      </Content>
    </Container>
  );
}

export default AddressModal;
