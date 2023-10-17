import React, { useState, ReactNode } from "react";
import { Text, View } from "react-native";

import {
  Container,
  Content,
  Method,
  Close,
  ContentAdd,
  Detail,
  ContentInput,
  ErrorText,
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
import { type } from "@testing-library/react-native/build/user-event/type";
import { useTranslation } from "react-i18next";
import { useCardStore } from "@contexts/UserCardStorege";
import { TabProps } from "@routes/tab.routes";
import { useNavigation } from "@react-navigation/native";

type FormData = {
  nameOnCard?: string;
  cardNumber?: string;
  expireDate?: string;
  cvv?: string;
};

interface CardModalProps {
  handleOnClose: () => void;
}

function CardModal({ handleOnClose }: CardModalProps) {
  const [isLoading, setIsLoading] = useState(false);

  const formCard = useForm<FormData>({
    resolver: yupResolver(cardSchema),
  });
  const { t, i18n } = useTranslation();

  const [selectedCard, setSelectedCard] = useState("");

  const card = useCardStore();

  const navigation = useNavigation<TabProps>();

  const handleFormSubmit = (formData: FormData) => {
    if (
      formData.nameOnCard !== undefined &&
      formData.cardNumber !== undefined &&
      formData.expireDate !== undefined &&
      formData.cvv !== undefined
    ) {
      card.setUser({
        nameOnCard: formData.nameOnCard,
        cardNumber: formData.cardNumber,
        expireDate: formData.expireDate,
        cvv: formData.cvv,
      });
      formCard.reset();
      navigation.navigate("checkout");
    }
  };
  const handleCardChange = (cardNumber: string) => {
    const firstDigit = cardNumber[0];

    if (firstDigit === "4") {
      setSelectedCard("visa");
      console.log(cardNumber);
    } else if (firstDigit === "5") {
      setSelectedCard("mastercard");
    } else if (firstDigit === "6") {
      setSelectedCard("elo");
    } else if (firstDigit === "3") {
      setSelectedCard("american");
    } else {
      setSelectedCard("");
    }
  };

  return (
    <Container>
      <Close onPress={handleOnClose}></Close>
      <Content>
        <Method>Add new card</Method>

        <ContentInput>
          <Controller
            control={formCard.control}
            name="nameOnCard"
            render={({ field: { onChange, value } }) => (
              <CustomInput
                label={t("Name on card")}
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
              <View style={{ flexDirection: "row", alignItems: "center" }}>
                <View style={{ flex: 1 }}>
                  <CustomInput
                    label={t("Card number")}
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

                      handleCardChange(formattedText);
                    }}
                    errorMessage={formCard.formState.errors.cardNumber?.message}
                  />
                </View>
                <View
                  style={{
                    position: "absolute",
                    right: 0,
                    marginRight: 12,
                    marginBottom: 8,
                  }}
                >
                  <Text>
                    {" "}
                    {selectedCard === "visa" && (
                      <Detail>
                        <SvgVisa width={48} height={29} />
                      </Detail>
                    )}
                    {selectedCard === "mastercard" && (
                      <Detail>
                        <SvgMastercard width={32} height={25} />
                      </Detail>
                    )}
                    {selectedCard === "elo" && (
                      <Detail>
                        <SvgElo width={51} height={18} />
                      </Detail>
                    )}
                    {selectedCard === "american" && (
                      <Detail>
                        <SvgAmerican width={37} height={27} />
                      </Detail>
                    )}
                  </Text>
                </View>
              </View>
            )}
          />

          <Controller
            control={formCard.control}
            name="expireDate"
            render={({ field: { onChange, value } }) => (
              <CustomInput
                label={t("Expire Date")}
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
            title={t("ADD CARD")}
            isDisabled={isLoading}
            onPress={formCard.handleSubmit(handleFormSubmit)}
          />
        </ContentAdd>
      </Content>
    </Container>
  );
}

export default CardModal;
