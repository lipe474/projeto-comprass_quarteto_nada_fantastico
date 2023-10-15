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
  ContentInput,
  ErrorText
} from "./style";

import SvgVisa from "@assets/icons/visa-logo.svg";
import SvgElo from "@assets/icons/elo-logo.svg";
import SvgMastercard from "@assets/icons/mastercard-logo.svg";
import SvgAmerican from "@assets/icons/american-log.svg";

import { CustomButton } from "@components/Button";
import { CustomInput } from "@components/Input";
import { Controller, useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { cardSchema } from "@utils/validation/shcemaCard";

interface CardModalProps {
  handleClose: () => void;
  showCard: boolean;
}

type FormData = {
  nameOnCard?: string;
  cardNumber?: string;
  expireDate?: string;
  cvv?: string;
};

function CardModal({ handleClose, showCard }: CardModalProps) {
  const [isLoading, setIsLoading] = useState(false);
  const formCard = useForm<FormData>({
    resolver: yupResolver(cardSchema)
  });

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

        <ContentInput>
          <Controller
            control={formCard.control}
            name="nameOnCard"
            render={({ field: { onChange, value } }) => (
              <CustomInput
                label="Name on card"
                border
                value={value}
                onChangeText={onChange}
                errorMessage={formCard.formState.errors.nameOnCard?.message}
              />
            )}
          />

          <Controller
            control={formCard.control}
            name="cardNumber"
            render={({ field: { onChange, value } }) => (
              <CustomInput
                label="Card number"
                keyboardType="numeric"
                border
                value={value}
                onChangeText={(text) => {
                  const formattedText = text
                    .replace(/\D/g, "")
                    .substring(0, 16);
                  const regex = /(\d{1,4})/g;
                  const formattedNumber = formattedText
                    .replace(regex, "$1 ")
                    .trim();
                  onChange(formattedNumber);
                }}
                errorMessage={formCard.formState.errors.cardNumber?.message}
              />
            )}
          />

          <Controller
            control={formCard.control}
            name="expireDate"
            render={({ field: { onChange, value } }) => (
              <CustomInput
                label="Expire Date"
                keyboardType="numeric"
                border
                value={value}
                onChangeText={(text) => {
                  const formattedText = text.replace(/\D/g, "").substring(0, 4);
                  const regex = /(\d{1,2})(\d{1,2})/g;
                  const formattedNumber = formattedText.replace(regex, "$1/$2");
                  onChange(formattedNumber);
                }}
                errorMessage={formCard.formState.errors.expireDate?.message}
              />
            )}
          />

          <Controller
            control={formCard.control}
            name="cvv"
            render={({ field: { onChange, value } }) => (
              <CustomInput
                label="CVV"
                keyboardType="numeric"
                border
                value={value}
                onChangeText={(text) => {
                  const formattedText = text.replace(/\D/g, "").substring(0, 3);

                  onChange(formattedText);
                }}
                errorMessage={formCard.formState.errors.cvv?.message}
              />
            )}
          />
          {
            <ErrorText>
              {formCard.formState.errors.nameOnCard?.message ??
                formCard.formState.errors.cardNumber?.message ??
                formCard.formState.errors.expireDate?.message ??
                formCard.formState.errors.cvv?.message}
            </ErrorText>
          }
        </ContentInput>

        <ContentAdd>
          <CustomButton
            height={48}
            width={343}
            title="ADD CARD"
            isDisabled={isLoading}
            onPress={formCard.handleSubmit(() => {})}
          />
        </ContentAdd>
      </Content>
    </Container>
  );
}

export default CardModal;
