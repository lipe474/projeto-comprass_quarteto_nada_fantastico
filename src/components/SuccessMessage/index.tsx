import React from "react";
import { Container, Spacer, SubTitle, Title, Image } from "./style";
import { useTranslation } from "react-i18next";

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
  const { t, i18n } = useTranslation(); 

  return (
    <Container>
      {hasImage ? (
        <Image
          source={source!}
          resizeMode="contain"
          accessibilityHint="image-success"
        />
      ) : (
        <Spacer />
      )}
      <Title>{t("Success")}!</Title>
      <SubTitle>{children}</SubTitle>
    </Container>
  );
}
