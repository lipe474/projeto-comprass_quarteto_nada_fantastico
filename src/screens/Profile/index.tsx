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
import {
  Modal,
  TouchableWithoutFeedback,
  TouchableOpacity
} from "react-native";

import { useNavigation } from "@react-navigation/native";
import { useTranslation } from "react-i18next";

import LogoutSVG from "@assets/icons/logout.svg";
import CaretTopSVG from "@assets/icons/caret-top.svg";
import SwitchOffSVG from "@assets/icons/switch-off.svg";
import SwitchOnSVG from "@assets/icons/switch-on.svg";
import { useEffect, useState } from "react";
import { CustomButton } from "@components/Button";
import { useTheme } from "styled-components/native";

import { useAuth } from "@hooks/useAuth";
import * as ImagePicker from "expo-image-picker";

import CircleCheckSVG from "@assets/icons/circle-check.svg";
import EditSVG from "@assets/icons/edit.svg";
import { WarningModal } from "@components/WarningModal";
import Toast from "react-native-root-toast";
import { UpdateUser } from "@requests/index";
import { set } from "react-hook-form";

export function Profile() {
  const [switchOn, setSwitchOn] = useState(false);
  const [selectedLanguage, setSelectedLanguage] = useState("pt");
  const { logout, user, updateUser } = useAuth();

  const [modalDiscard, setModalDiscard] = useState(false);
  const [modalLanguage, setModalLanguage] = useState(false);
  const [modalLogout, setModalLogout] = useState(false);

  const [name, setName] = useState(user.name!);

  const { COLORS } = useTheme();
  const { t, i18n } = useTranslation();
  const navigation = useNavigation<TabProps>();

  async function handleUpdateUser(name: string, avatar: string) {
    try {
      await updateUser(user.id!, name, avatar);

      Toast.show(t("Profile updated successfully"), {
        duration: 3000,
        position: 40,
        backgroundColor: COLORS.GREEN,
        textColor: COLORS.WHITE
      });
    } catch (error: any) {
      throw new Error(error.message);
    }
  }

  const handleLogout = () => {
    logout();
    setModalLogout(false);
  };

  const handleCancel = () => {
    setModalLogout(false);
    setModalDiscard(false);
    setModalLanguage(false);
  };

  function handlePressSwitch() {
    setSwitchOn(!switchOn);
  }

  function handlePressModalLanguage() {
    setModalLanguage(!modalLanguage);
  }

  function handlePressModalDiscardChanges() {
    setModalDiscard(!modalDiscard);
  }

  async function handleUserPhotoSelected() {
    try {
      const photoSelected = await ImagePicker.launchImageLibraryAsync({
        mediaTypes: ImagePicker.MediaTypeOptions.Images,
        quality: 1,
        aspect: [4, 4],
        allowsEditing: true
      });
      if (photoSelected.canceled) {
        return;
      }

      await updateUser(user.id!, name, photoSelected.assets[0].uri);

      Toast.show(t("Profile updated successfully"), {
        duration: 3000,
        position: 40,
        backgroundColor: COLORS.GREEN,
        textColor: COLORS.WHITE
      });
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    if (selectedLanguage) {
      i18n.changeLanguage(selectedLanguage);
    }
  }, [selectedLanguage]);

  return (
    <Container>
      <TouchableOpacity
        onPress={() => {
          handleUpdateUser(name, user.avatar!);
          handlePressSwitch();
        }}
        style={{
          display: switchOn ? "flex" : "none",
          position: "absolute",
          right: 16,
          top: 48
        }}
      >
        <CircleCheckSVG />
      </TouchableOpacity>
      <Title>{t("My profile")}</Title>
      {user.id ? (
        <ContentContainer>
          <Image
            source={{
              uri: user.avatar
            }}
            resizeMode="contain"
          />
          <TouchableOpacity
            onPress={handleUserPhotoSelected}
            style={{
              display: switchOn ? "flex" : "none",
              position: "absolute",
              right: "35%",
              top: "0%"
            }}
          >
            <EditSVG />
          </TouchableOpacity>
          <ContainerNameEmail>
            <Name editable={switchOn} onChangeText={setName}>
              {user.name}
            </Name>
            <Email>{user.email}</Email>
          </ContainerNameEmail>
        </ContentContainer>
      ) : (
        <ContentContainerLogin>
          <Message>{t("You need to log in to see your details")}</Message>
          <CustomButton
            title="LOGIN"
            width={136}
            height={48}
            onPress={() => navigation.navigate("stackRoutes")}
          />
        </ContentContainerLogin>
      )}

      <Informations
        onPress={() => {
          handlePressSwitch();
        }}
        style={{ display: user.id ? "flex" : "none" }}
      >
        <TextEdit>{t("Edit Informations")}</TextEdit>
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
      <Informations onPress={() => setModalLanguage(true)}>
        <TextEdit>{t("Language")}</TextEdit>
        <CaretTopSVG
          style={{
            position: "absolute",
            right: 16
          }}
        />
      </Informations>
      <Informations
        onPress={() => setModalLogout(true)}
        style={{ display: user.id ? "flex" : "none" }}
      >
        <TextEdit>{t("Log out")}</TextEdit>
        <LogoutSVG
          style={{
            position: "absolute",
            right: 16
          }}
        />

        <WarningModal
          message={t("Do you really want to leave?")}
          isVisible={modalLogout}
          onCancel={handleCancel}
          onConfirm={handleLogout}
        />
      </Informations>
      <Modal
        animationType="fade"
        visible={modalLanguage}
        transparent={true}
        onRequestClose={() => setModalLanguage(false)}
      >
        <ViewModal onPress={handlePressModalLanguage}>
          <TouchableWithoutFeedback>
            <ContentModal>
              <TitleModal>{t("Languages")}</TitleModal>
              <Option
                onPress={() => {
                  setSelectedLanguage("en");
                  handlePressModalLanguage();
                }}
                style={{
                  backgroundColor:
                    selectedLanguage === "en" ? COLORS.RED_500 : COLORS.WHITE
                }}
              >
                <ModalMessage
                  style={{
                    color:
                      selectedLanguage === "en"
                        ? COLORS.WHITE
                        : COLORS.BLACK_900
                  }}
                >
                  {t("English")}
                </ModalMessage>
              </Option>
              <Option
                onPress={() => {
                  setSelectedLanguage("pt");
                  handlePressModalLanguage();
                }}
                style={{
                  backgroundColor:
                    selectedLanguage === "pt" ? COLORS.RED_500 : COLORS.WHITE
                }}
              >
                <ModalMessage
                  style={{
                    color:
                      selectedLanguage === "pt"
                        ? COLORS.WHITE
                        : COLORS.BLACK_900
                  }}
                >
                  {t("Portuguese - Brazil")}
                </ModalMessage>
              </Option>
            </ContentModal>
          </TouchableWithoutFeedback>
        </ViewModal>
      </Modal>
    </Container>
  );
}
