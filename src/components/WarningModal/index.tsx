import { useState, useEffect } from "react";
import { Modal } from "react-native";
import {
  Button,
  ButtonContainer,
  Container,
  ContentModal,
  MessageContainer,
  TextButton,
  TitleModal
} from "./style";
import { Message } from "@screens/Profile/style";
import { useTranslation } from "react-i18next";

type WarningModalProps = {
  isVisible: boolean;
  message: string;
  onConfirm: () => void;
  onCancel: () => void;
};

export function WarningModal({
  isVisible,
  onConfirm,
  onCancel,
  message
}: WarningModalProps) {
  const { t } = useTranslation();

  return (
    <Modal
      animationType="fade"
      visible={isVisible}
      transparent={true}
      onRequestClose={() => onCancel()}
    >
      <Container>
        <ContentModal>
          <TitleModal>{t("Warning")}</TitleModal>
          <MessageContainer>
            <Message>{message}</Message>
          </MessageContainer>
          <ButtonContainer>
            <Button onPress={() => onCancel()}>
              <TextButton>{t("No")}</TextButton>
            </Button>
            <Button onPress={() => onConfirm()}>
              <TextButton>{t("Yes")}</TextButton>
            </Button>
          </ButtonContainer>
        </ContentModal>
      </Container>
    </Modal>
  );
}
