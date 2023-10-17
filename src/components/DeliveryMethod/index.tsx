import React from "react";
import { FlatList, View, Pressable } from "react-native";
import Svg from "react-native-svg";
import { Container, Title, TitleText, Content, ScrollBar } from "./style";

import DhlSvg from "@assets/icons/dhl.svg";
import Uspsvg from "@assets/icons/usps.svg";
import FedexSvg from "@assets/icons/fedex.svg";
import DhllSvg from "@assets/icons/dhl.svg";

import SvgCheck from "@assets/icons/check.svg";
import { useTranslation } from "react-i18next";

interface SvgData {
  [key: number]: React.FC;
}

interface DeliveryMethodProps {
  showOnCheck: boolean;
}

function DeliveryMethod({ showOnCheck }: DeliveryMethodProps) {
  const svgData: SvgData = {
    1: DhlSvg,
    2: Uspsvg,
    3: FedexSvg,
    4: DhllSvg,
    5: Uspsvg,
    6: FedexSvg,
  };

  const { t, i18n } = useTranslation();

  const data = [
    {
      id: 1,
      backgroundColor: "#FFF",
      label: t("2-3 days"),
      svgWidth: 71,
      svgHeight: 16,
    },
    {
      id: 2,
      backgroundColor: "#FFF",
      label: t("3-4 days"),
      svgWidth: 82,
      svgHeight: 11,
    },
    {
      id: 3,
      backgroundColor: "#FFF",
      label: t("4-5 days"),
      svgWidth: 61,
      svgHeight: 17,
    },
    {
      id: 4,
      backgroundColor: "#FFF",
      label: t("5-6 days"),
      svgWidth: 71,
      svgHeight: 16,
    },
    {
      id: 5,
      backgroundColor: "#FFF",
      label: t("6-7 days"),
      svgWidth: 82,
      svgHeight: 11,
    },
    {
      id: 6,
      backgroundColor: "#FFF",
      label: t("7-8 days"),
      svgWidth: 61,
      svgHeight: 17,
    },
  ];

  return (
    <Container>
      <TitleText>{t("Delivery method")}</TitleText>
      <FlatList
        data={data}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => {
          const SvgComponent = svgData[item.id];
          return (
            <Pressable
              style={{
                padding: 12,
                alignItems: "center",
              }}
            >
              <Content
                style={{
                  shadowColor: "rgba(0,0,0,0.5)",
                  shadowOffset: {
                    width: 0,
                    height: 2,
                  },
                  elevation: 5,
                  shadowOpacity: 0.28,
                  shadowRadius: 4,
                }}
              >
                {showOnCheck ? (
                  <View
                    style={{
                      alignSelf: "flex-end",
                      justifyContent: "flex-start",
                    }}
                  >
                    <SvgCheck />
                  </View>
                ) : null}

                <Svg width={item.svgWidth} height={item.svgHeight}>
                  <SvgComponent />
                  <Title>{item.label}</Title>
                </Svg>
              </Content>
            </Pressable>
          );
        }}
        horizontal={true}
        showsHorizontalScrollIndicator={false}
      />
    </Container>
  );
}

export default DeliveryMethod;
