import React, { useState } from "react";

import {
  Container,
  ModalContainer,
  ImageBG,
  Title,
  SecondContainer,
  ImageDetail,
  ImageLogo,
  SubmitButton
} from "./style";
import ActionModal from "@components/ActionModal";

import Research from "@assets/icons/lupa.svg";
interface BigBannerProps {
  showSearch: boolean;
  showModal: boolean;
}

function BigBanner({ showSearch, showModal }: BigBannerProps) {
  const [visibleModal, setVisibleModal] = useState(false);

  return (
    <Container>
      <ImageBG
        resizeMode="cover"
        source={require("../../assets/images/banner.png")}
      >
        {showSearch ? (
          <SubmitButton onPress={() => setVisibleModal(true)}>
            <Research width={41} height={41} />
          </SubmitButton>
        ) : null}

        {showModal ? (
          <ModalContainer
            visible={visibleModal}
            transparent={true}
            onRequestClose={() => setVisibleModal(true)}
          >
            <ActionModal
              showResearchInput
              handleClose={() => setVisibleModal(false)}
            />
          </ModalContainer>
        ) : null}

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
