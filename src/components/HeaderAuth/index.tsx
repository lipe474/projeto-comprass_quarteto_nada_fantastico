import React from "react";
import {
  BackButton,
  BackIcon,
  Container,
  Spacer,
  Subtitle,
  Title
} from "./style";

type Props = {
  title: string;
  showBackButton?: boolean;
  onPress?: () => void;
  children?: React.ReactNode;
};

export function HeaderAuth({
  title,
  children,
  showBackButton = false,
  onPress
}: Props) {
  return (
    <Container>
      {showBackButton ? (
        <BackButton onPress={onPress}>
          <BackIcon />
        </BackButton>
      ) : (
        <Spacer />
      )}

      <Title>{title}</Title>
      <Subtitle>{children}</Subtitle>
    </Container>
  );
}
