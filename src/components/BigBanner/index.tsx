import React, { useState } from "react";

import {
  Container,
  ModalContainer,
  ImageBG,
  Title,
  SecondContainer,
  ImageDetail,
  ImageLogo,
  SubmitButton,
} from "./style";
import ActionModal from "@components/ActionModal";

import Research from "@assets/lupa.svg";
interface BigBannerProps {
  showSearch: boolean;
}

function BigBanner({ showSearch }: BigBannerProps) {
  const [visibleModal, setVisibleModal] = useState(true);

  return (
    <Container>
      <ImageBG resizeMode="contain" source={require("../../assets/banner.png")}>
        {showSearch ? (
          <SubmitButton onPress={() => setVisibleModal(true)}>
            <Research width={41} height={41} />
          </SubmitButton>
        ) : null}

        <ModalContainer
          visible={visibleModal}
          transparent={true}
          onRequestClose={() => setVisibleModal(false)}
        >
          <ActionModal
            showResearchInput
            showSearch
            handleClose={() => setVisibleModal(false)}
          />
        </ModalContainer>

        <ImageLogo width={263} height={56} />

        <SecondContainer>
          <Title>Here you always win!</Title>
          <ImageDetail width={46} height={46} />
        </SecondContainer>
      </ImageBG>
    </Container>
  );
}

export default BigBanner;
