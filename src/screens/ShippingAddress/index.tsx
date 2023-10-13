import { CustomInput } from "@components/Input";
import {
  BackButton,
  BackIcon,
  ButtonContainer,
  Container,
  ContentContainer,
  ErrorText,
  HeaderContainer,
  HeaderTitle
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

type FormData = {
  cep?: string;
};

type AddressData = {
  logradouro: string;
  localidade: string;
  uf: string;
};

export function ShippingAddress() {
  const [isLoading, setIsLoading] = useState(false);
  const [isFirstRender, setIsFirstRender] = useState(true);
  const [isCepValid, setIsCepValid] = useState(false);
  const [addressData, setAddressData] = useState<AddressData>({
    logradouro: "",
    localidade: "",
    uf: ""
  });

  // const navigation = useNavigation<StackProps>();

  const formCep = useForm<FormData>({
    resolver: yupResolver(cepSchema)
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
          message: "This zip code was not found"
        });
        setIsCepValid(false);
        setAddressData({
          logradouro: "",
          localidade: "",
          uf: ""
        });
      } else {
        setIsCepValid(true);
        setAddressData({
          logradouro:
            response.logradouro && response.bairro
              ? `${response.logradouro}, ${response.bairro}`
              : response.logradouro || "",
          localidade: response.localidade,
          uf: response.uf
        });
      }
    } catch (error: any) {
      throw new AppError(error.message);
    } finally {
      setIsLoading(false);
    }
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
        uf: ""
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
          <HeaderTitle>Adding Shipping Address</HeaderTitle>
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
                label="Zip Code (Postal Code)"
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
                    uf: ""
                  });
                }}
                value={value}
                maxLength={8}
                errorMessage={formCep.formState.errors.cep?.message}
              />
            )}
          />

          <CustomInput
            label="Address"
            border
            isDisabled={!isCepValid || isLoading}
            value={addressData.logradouro}
          />
          <CustomInput
            label="City"
            border
            isDisabled={!isCepValid || isLoading}
            value={addressData.localidade}
          />
          <CustomInput
            label="State/Province/Region"
            border
            isDisabled={!isCepValid || isLoading}
            value={addressData.uf}
          />
          <CustomInput
            label="Full name"
            border
            isDisabled={!isCepValid || isLoading}
          />

          {<ErrorText>{formCep.formState.errors.cep?.message}</ErrorText>}
        </ContentContainer>

        <ButtonContainer>
          <CustomButton
            title="SAVE ADDRESS"
            width={343}
            height={48}
            onPress={formCep.handleSubmit(handleCheckCep)}
            isDisabled={!isCepValid || isLoading}
          />
        </ButtonContainer>
      </Container>
    </KeyboardAvoidingView>
  );
}
