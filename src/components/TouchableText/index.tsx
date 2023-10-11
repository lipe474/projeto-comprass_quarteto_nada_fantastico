import React from "react";
import { Container, Content } from "./style";

type Props = {
  onPress?: () => void;
  children?: React.ReactNode;
};
export function TouchableText({ children, onPress }: Props) {
  return (
    <Container onPress={onPress}>
      <Content>{children}</Content>
    </Container>
  );
}
