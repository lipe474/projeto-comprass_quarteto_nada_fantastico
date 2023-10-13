import React from "react";
import { FlatList, View, ScrollView, Text } from "react-native";
import Svg from "react-native-svg";
import { Container, Title, TitleText, Content, ScrollBar } from "./style";

import DhlSvg from "@assets/icons/dhl.svg";
import Uspsvg from "@assets/icons/usps.svg";
import FedexSvg from "@assets/icons/fedex.svg";
import DhllSvg from "@assets/icons/dhl.svg";

interface SvgData {
  [key: number]: React.FC;
}

function DeliveryMethod() {
  const svgData: SvgData = {
    1: DhlSvg,
    2: Uspsvg,
    3: FedexSvg,
    4: DhllSvg,
  };

  const data = [
    {
      id: 1,
      backgroundColor: "#FFF",
      label: "2-3 days",
      svgWidth: 71,
      svgHeight: 16,
    },
    {
      id: 2,
      backgroundColor: "#FFF",
      label: "3-4 days",
      svgWidth: 82,
      svgHeight: 11,
    },
    {
      id: 3,
      backgroundColor: "#FFF",
      label: "4-5 days",
      svgWidth: 61,
      svgHeight: 17,
    },
    {
      id: 4,
      backgroundColor: "#FFF",
      label: "5-6 days",
      svgWidth: 71,
      svgHeight: 16,
    },
  ];

  return (
    <Container>
      <TitleText>Delivery method</TitleText>
      <Content>
        <FlatList
          data={data}
          keyExtractor={(item) => item.id.toString()}
          renderItem={({ item }) => {
            const SvgComponent = svgData[item.id];
            return (
              <View style={{ alignItems: "center" }}>
                <View
                  style={{
                    width: 120,
                    height: 100,
                    borderRadius: 8,
                    backgroundColor: item.backgroundColor,
                    alignItems: "center",
                    justifyContent: "center",
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
                  <Svg width={item.svgWidth} height={item.svgHeight}>
                    <SvgComponent />
                    <Title>{item.label}</Title>
                  </Svg>
                </View>
              </View>
            );
          }}
          horizontal={true}
          ItemSeparatorComponent={() => <View style={{ width: 10 }} />}
          showsHorizontalScrollIndicator={false}
        />
      </Content>
    </Container>
  );
}

export default DeliveryMethod;
