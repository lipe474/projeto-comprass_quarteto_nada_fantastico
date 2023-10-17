import { CustomInput } from "@components/Input";
import {
  BackButton,
  BackIcon,
  ButtonContainer,
  Container,
  ContentContainer,
  ErrorText,
  HeaderContainer,
  HeaderTitle,
} from "./style";
import { CustomButton } from "@components/Button";
import { useState, useEffect, useRef } from "react";
import { Controller, useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { cepSchema } from "@utils/validation/schemaCep";
import { SearchZipCode } from "@requests/index";
import { KeyboardAvoidingView, Platform } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { StackProps } from "@routes/stack.routes";
import { AppError } from "@utils/AppError";
import { useTranslation } from "react-i18next";
import { useUserStore } from "@contexts/UserFormStore";
import { TabProps } from "@routes/tab.routes";

type FormData = {
  cep?: string;
  logradouro?: string;
  localidade?: string;
  uf?: string;
  name?: string;
};

type AddressData = {
  logradouro: string;
  localidade: string;
  uf: string;
  name: string;
};

export function ShippingAddress() {
  const [isLoading, setIsLoading] = useState(false);
  const [isFirstRender, setIsFirstRender] = useState(true);
  const [isCepValid, setIsCepValid] = useState(false);
  const { t, i18n } = useTranslation();

  const form = useUserStore();

  const navigation = useNavigation<TabProps>();

  const [addressData, setAddressData] = useState<AddressData>({
    logradouro: "",
    localidade: "",
    uf: "",
    name: "",
  });

  const formCep = useForm<FormData>({
    resolver: yupResolver(cepSchema),
  });

  const initialFormState = useRef(formCep.getValues()).current;

  async function handleCheckCep({ cep }: FormData) {
    if (isFirstRender) {
      return;
    }

    try {
      setIsLoading(true);

      const response = await SearchZipCode(cep!);

      if (response.erro) {
        formCep.setError("cep", {
          type: "manual",
          message: t("This zip code was not found"),
        });
        setIsCepValid(false);
        setAddressData({
          logradouro: "",
          localidade: "",
          uf: "",
          name: "",
        });
      } else {
        setIsCepValid(true);
        setAddressData({
          logradouro:
            response.logradouro && response.bairro
              ? `${response.logradouro}, ${response.bairro}`
              : response.logradouro || "",
          localidade: response.localidade,
          uf: response.uf,
          name: "",
        });
      }
    } catch (error: any) {
      throw new AppError(error.message);
    } finally {
      setIsLoading(false);
    }
  }

  function handleChange(name: string, value: string) {
    setAddressData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  }

  useEffect(() => {
    formCep.handleSubmit(handleCheckCep).apply(initialFormState);
    setIsFirstRender(false);
  }, []);

  useEffect(() => {
    if (formCep.getValues("cep")?.length === 8) {
      handleCheckCep(formCep.getValues());
    } else if (!formCep.formState.errors.cep) {
      setAddressData({
        logradouro: "",
        localidade: "",
        uf: "",
        name: "",
      });
    }
  }, [formCep.getValues("cep"), formCep.formState.errors.cep]);

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === "ios" ? "padding" : "height"}
      enabled={false}
      style={{ flex: 1 }}
    >
      <Container>
        <HeaderContainer>
          <HeaderTitle>{t("Adding Shipping Address")}</HeaderTitle>
          <BackButton>
            <BackIcon />
          </BackButton>
        </HeaderContainer>

        <ContentContainer>
          <Controller
            control={formCep.control}
            name="cep"
            render={({ field: { onChange, value } }) => (
              <CustomInput
                label={t("Zip Code (Postal Code)")}
                border
                showIcon
                keyboardType="numeric"
                isSearch={isLoading}
                formSubmitted={formCep.formState.isSubmitted}
                onChangeText={(text) => {
                  const formattedText = text.replace(/[^0-9]/g, "");
                  onChange(formattedText);
                  setIsCepValid(false);
                  setAddressData({
                    logradouro: "",
                    localidade: "",
                    uf: "",
                    name: "",
                  });
                }}
                value={value}
                maxLength={8}
                errorMessage={formCep.formState.errors.cep?.message}
              />
            )}
          />

          <Controller
            control={formCep.control}
            name="logradouro"
            render={({ field: { onChange, value } }) => (
              <CustomInput
                label={t("Address")}
                border
                isDisabled={!isCepValid || isLoading}
                value={addressData.logradouro}
                onChangeText={(text) => {
                  onChange(text);
                  handleChange("logradouro", text);
                }}
              />
            )}
          />

          <Controller
            control={formCep.control}
            name="localidade"
            render={({ field: { onChange, value } }) => (
              <CustomInput
                label={t("City")}
                border
                isDisabled={!isCepValid || isLoading}
                value={addressData.localidade}
                onChangeText={(text) => {
                  onChange(text);
                  handleChange("localidade", text);
                }}
              />
            )}
          />

          <Controller
            control={formCep.control}
            name="uf"
            render={({ field: { onChange, value } }) => (
              <CustomInput
                label={t("State/Province/Region")}
                border
                isDisabled={!isCepValid || isLoading}
                value={addressData.uf}
                onChangeText={(text) => {
                  onChange(text);
                  handleChange("uf", text);
                }}
              />
            )}
          />

          <Controller
            control={formCep.control}
            name="name"
            render={({ field: { onChange, value } }) => (
              <CustomInput
                label={t("Full name")}
                border
                isDisabled={!isCepValid || isLoading}
                value={addressData.name}
                onChangeText={(text) => {
                  onChange(text);
                  handleChange("name", text);
                }}
              />
            )}
          />

          {<ErrorText>{formCep.formState.errors.cep?.message}</ErrorText>}
        </ContentContainer>

        <ButtonContainer>
          <CustomButton
            title={t("SAVE ADDRESS")}
            width={343}
            height={48}
            onPress={() => {
              formCep.handleSubmit(handleCheckCep);
              if (formCep !== undefined) {
                form.setUser(addressData);
              }
              navigation.navigate("checkout");
            }}
            isDisabled={!isCepValid || isLoading}
          />
        </ButtonContainer>
      </Container>
    </KeyboardAvoidingView>
  );
}
