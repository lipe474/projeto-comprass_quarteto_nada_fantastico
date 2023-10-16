import { useState } from "react";
import { Text, Image } from "react-native";
import profileImage from "@assets/images/profileImage.png";
import { SafeAreaView } from "react-native-safe-area-context";
import { TabProps } from "src/routes/tab.routes";
import {
  ContainerTop,
  ImageBackground,
  Title,
  Name,
  Email,
  ContainerMiddle,
  Informations
} from "./style";

import { CustomButton } from "@components/Button";
import { ToggleButton } from "@components/Toggle";
import { useNavigation } from "@react-navigation/native";

export function Profile() {
  const navigation = useNavigation<TabProps>();

  return (
    <>
      <ContainerTop>
        <SafeAreaView>
          <Title>My profile</Title>
          {/* <ImageBackground source={profileImage} /> */}
          <Name> Juliane Gonçalves Freitas</Name>
          <Email>matildabrown@mail.com</Email>
        </SafeAreaView>

        <ContainerMiddle>
          <Informations> Edit Informations </Informations>
          <Text> Language</Text>
          <Text> Log out</Text>
        </ContainerMiddle>
        <ToggleButton isOn />
      </ContainerTop>

      <CustomButton
        title="LOGIN"
        width={343}
        height={48}
        onPress={() => navigation.navigate("stackRoutes")}
      />
    </>
  );
}
