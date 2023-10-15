import React, { useState } from "react";
import { TextInput, View } from "react-native";

import {
  Container,
  Content,
  Method,
  Close,
  ContentAdd,
  Detail,
  MaskInput,
} from "./style";

import SvgVisa from "@assets/icons/visa-logo.svg";
import SvgElo from "@assets/icons/elo-logo.svg";
import SvgMastercard from "@assets/icons/mastercard-logo.svg";
import SvgAmerican from "@assets/icons/american-log.svg";

import { CustomButton } from "@components/Button";

interface CardModalProps {
  handleClose: () => void;
  showCard: boolean;
}

function CardModal({ handleClose, showCard }: CardModalProps) {
  return (
    <Container>
      <Close onPress={handleClose}></Close>

      <Content>
        <Method>Add new card</Method>

        {showCard ? (
          <View>
            <Detail>
              <SvgVisa width={48} height={29} />
            </Detail>

            <Detail>
              <SvgElo width={51} height={18} />
            </Detail>

            <Detail>
              <SvgMastercard width={32} height={25} />
            </Detail>

            <Detail>
              <SvgAmerican width={37} height={27} />
            </Detail>
          </View>
        ) : null}

        <View>
          <TextInput
            placeholder="Card number"
            onChangeText={(text) => {
              const formattedText = text.replace(/\D/g, "").substring(0, 16);
              const regex = /(\d{1,4})/g;
              const formattedNumber = formattedText
                .replace(regex, "$1 ")
                .trim();
              onChange(formattedNumber);
            }}
          />
        </View>

        <View>
          <TextInput
            onChangeText={(text) => {
              const formattedText = text.replace(/\D/g, "").substring(0, 4);
              if (formattedText.length >= 2) {
                const formattedDate =
                  formattedText.slice(0, 2) + "/" + formattedText.slice(2);
                onChange(formattedDate);
              } else {
                onChange(formattedText);
              }
            }}
          />
        </View>

        <View>
          <TextInput
            placeholder="CVV"
            onChangeText={(text) => {
              const formattedText = text.replace(/\D/g, "").substring(0, 3);
              const formattedCVV = formattedText
                .replace(/(\d{1,3})/g, "$1 ")
                .trim();
              onChange(formattedCVV);
            }}
          />
        </View>

        <ContentAdd>
          <CustomButton height={48} width={343} title="ADD CARD" />
        </ContentAdd>
      </Content>
    </Container>
  );
}

export default CardModal;
