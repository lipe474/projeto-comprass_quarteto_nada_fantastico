import React from "react";
import { Container, Spacer, SubTitle, Title, Image } from "./style";

type SuccessMessageProps = {
  hasImage?: boolean;
  source?: number;
  children?: React.ReactNode;
};

export function SuccessMessage({
  hasImage,
  source,
  children
}: SuccessMessageProps) {
  return (
    <Container>
      {hasImage ? <Image source={source!} resizeMode="contain" /> : <Spacer />}
      <Title>Success!</Title>
      <SubTitle>{children}</SubTitle>
    </Container>
  );
}
