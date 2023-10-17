import React from "react";

import { Container, ImageBG, Title, SecondContainer, ImageLogo } from "./style";
import ActionModal from "@components/ActionModal";
import { useTranslation } from "react-i18next";

import CartSvg from "@assets/icons/cart.svg";

function BigBanner() {
  const { t, i18n } = useTranslation(); 


  return (
    <Container>
      <ImageBG
        resizeMode="cover"
        source={require("../../assets/images/banner.png")}
      >
        <ImageLogo width={263} height={56} />

        <SecondContainer>
          <Title>{t("Here you always win!")}</Title>
          <CartSvg width={46} height={46} />
        </SecondContainer>
      </ImageBG>
    </Container>
  );
}

export default BigBanner;
