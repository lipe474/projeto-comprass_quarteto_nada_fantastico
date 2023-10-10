import React from "react";
import { Container, Content } from "./style";
import { ImageSourcePropType } from "react-native";

type Props = {
  icon?: boolean;
  onPress?: () => void;
  source?: ImageSourcePropType;
  children?: React.ReactNode;
};
export function TouchableText({
  children,
  icon = false,
  onPress,
  source
}: Props) {
  return (
    <Container onPress={onPress}>
      <Content>{children}</Content>
    </Container>
  );
}
