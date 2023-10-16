import { useState } from "react";
import { Text, Image } from "react-native";
import profileImage from "@assets/images/profileImage.png";
import { SafeAreaView } from "react-native-safe-area-context";
import { TabRoutes } from "src/routes/tab.routes";
import {
  ContainerTop,
  ImageBackground,
  Title,
  Name,
  Email,
  ContainerMiddle,
  Informations,
} from "./style";

import { CustomButton } from "@components/Button";
import { ToggleButton } from "@components/Toggle";

export function Profile() {
    return(
        <>
        <ContainerTop>
    <SafeAreaView>
      <Title>My profile</Title>
      <ImageBackground source={profileImage} />
      <Name> Juliane Gonçalves Freitas</Name>
      <Email>matildabrown@mail.com</Email>
    </SafeAreaView>
    
    <ContainerMiddle>
      <Informations> Edit Informations </Informations>
      <Text> Language</Text>
      <Text> Log out</Text>
    </ContainerMiddle>
    <ToggleButton isOn/>
  </ContainerTop>
  
  <CustomButton
    title="LOGIN"
    width={343}
    height={48}  
  />
</>
    );
  
}
