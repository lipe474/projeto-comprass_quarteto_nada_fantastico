import React from "react";

import { Container, ImageBG, Title, SecondContainer, ImageLogo } from "./style";
import ActionModal from "@components/ActionModal";

import CartSvg from "@assets/icons/cart.svg";

function BigBanner() {
  return (
    <Container>
      <ImageBG
        resizeMode="cover"
        source={require("../../assets/images/banner.png")}
      >
        <ImageLogo width={263} height={56} />

        <SecondContainer>
          <Title>Here you always win!</Title>
          <CartSvg width={46} height={46} />
        </SecondContainer>
      </ImageBG>
    </Container>
  );
}

export default BigBanner;
