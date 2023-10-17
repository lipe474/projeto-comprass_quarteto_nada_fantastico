import { TabProps } from "src/routes/tab.routes";
import {
  Title,
  Name,
  Email,
  Informations,
  ContentContainer,
  Container,
  Image,
  ContainerNameEmail,
  TextEdit,
  Message,
  ContentContainerLogin,
  ViewModal,
  ContentModal,
  Option,
  TitleModal,
  ModalMessage
} from "./style";
import { Modal, TouchableWithoutFeedback, View } from "react-native";

import { useNavigation } from "@react-navigation/native";
import { useTranslation } from "react-i18next";

import LogoutSVG from "@assets/icons/logout.svg";
import CaretTopSVG from "@assets/icons/caret-top.svg";
import SwitchOffSVG from "@assets/icons/switch-off.svg";
import SwitchOnSVG from "@assets/icons/switch-on.svg";
import { useState } from "react";
import { CustomButton } from "@components/Button";
import { useTheme } from "styled-components/native";

export function Profile() {
  const [switchOn, setSwitchOn] = useState(false);
  const [logged, setLogged] = useState(false);
  const [modalVisible, setModalVisible] = useState(false);
  const [selectedLanguage, setSelectedLanguage] = useState("");

  const { COLORS } = useTheme();

  const handlePressSwitch = () => {
    setSwitchOn(!switchOn);
  };

  const handlePressModal = () => {
    setModalVisible(!modalVisible);
  };

  const navigation = useNavigation<TabProps>();
  const { t, i18n } = useTranslation(); 

  return (
    <Container>
      <Title>My profile</Title>
      {logged ? (
        <ContentContainer>
          <Image source={require("@assets/images/avatar.png")} />
          <ContainerNameEmail>
            <Name>Juliane Gonçalves Freitas</Name>
            <Email>matildabrown@mail.com</Email>
          </ContainerNameEmail>
        </ContentContainer>
      ) : (
        <ContentContainerLogin>
          <Message>You need to log in to see your details</Message>
          <CustomButton
            title="LOGIN"
            width={136}
            height={48}
            onPress={() => navigation.navigate("stackRoutes")}
          />
        </ContentContainerLogin>
      )}

      <Informations
        onPress={handlePressSwitch}
        style={{ display: logged ? "flex" : "none" }}
      >
        <TextEdit>Edit Informations</TextEdit>
        {switchOn ? (
          <SwitchOnSVG
            style={{
              position: "absolute",
              right: 16
            }}
          />
        ) : (
          <SwitchOffSVG
            style={{
              position: "absolute",
              right: 16
            }}
          />
        )}
      </Informations>
      <Informations onPress={handlePressModal}>
        <TextEdit>Language</TextEdit>
        <CaretTopSVG
          style={{
            position: "absolute",
            right: 16
          }}
        />
      </Informations>
      <Informations style={{ display: logged ? "flex" : "none" }}>
        <TextEdit>Log out</TextEdit>
        <LogoutSVG
          style={{
            position: "absolute",
            right: 16
          }}
        />
      </Informations>
      {modalVisible && (
        <Modal
          animationType="fade"
          visible={modalVisible}
          transparent={true}
          onRequestClose={() => setModalVisible(false)}
        >
          <ViewModal onPress={handlePressModal}>
            <TouchableWithoutFeedback>
              <ContentModal>
                <TitleModal>Languages</TitleModal>
                <Option
                  onPress={() => {
                    setSelectedLanguage("English");
                    handlePressModal();
                  }}
                  style={{
                    backgroundColor:
                      selectedLanguage === "English"
                        ? COLORS.RED_500
                        : COLORS.WHITE
                  }}
                >
                  <ModalMessage
                    style={{
                      color:
                        selectedLanguage === "English"
                          ? COLORS.WHITE
                          : COLORS.BLACK_900
                    }}
                  >
                    English
                  </ModalMessage>
                </Option>
                <Option
                  onPress={() => {
                    setSelectedLanguage("Portuguese");
                    handlePressModal();
                  }}
                  style={{
                    backgroundColor:
                      selectedLanguage === "Portuguese"
                        ? COLORS.RED_500
                        : COLORS.WHITE
                  }}
                >
                  <ModalMessage
                    style={{
                      color:
                        selectedLanguage === "Portuguese"
                          ? COLORS.WHITE
                          : COLORS.BLACK_900
                    }}
                  >
                    Portuguese - Brazil
                  </ModalMessage>
                </Option>
              </ContentModal>
            </TouchableWithoutFeedback>
          </ViewModal>
        </Modal>
      )}
    </Container>
  );
}
