import React from "react";

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

interface AddressModalProps {
  handleClose: () => void;
}

function AddressModal({ handleClose }: AddressModalProps) {
  return (
    <Container>
      <Close onPress={handleClose}></Close>

      <Content>
        <Detail></Detail>
        <Method>Choose you payment method</Method>
        <Card>
          <TitleCard>Cartão de crédito ou débito</TitleCard>
        </Card>
        <Payment>
          <Title>Pix</Title>
        </Payment>
        <Payment>
          <Title>Boleto bancário</Title>
        </Payment>
      </Content>
    </Container>
  );
}

export default AddressModal;
