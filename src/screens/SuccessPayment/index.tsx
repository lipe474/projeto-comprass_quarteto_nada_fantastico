import { SuccessMessage } from "@components/SuccessMessage";
import { ButtonContainer, Container } from "./style";
import { CustomButton } from "@components/Button";
import { useTranslation } from "react-i18next";
import { useNavigation } from "@react-navigation/native";
import { TabProps } from "@routes/tab.routes";

export function SuccessPayment() {
  const { t, i18n } = useTranslation();

  const navigation = useNavigation<TabProps>();

  const messages = [
    t("Your order will be delivered soon. Thank you for choosing our app!"),
    t(
      "Pay your pix using the QR code above and then follow the steps sent by email."
    ),
    t("Pay the invoice by 02/10/2023 and then follow the steps sent by email.")
  ];

  return (
    <Container>
      <SuccessMessage
        hasImage
        source={require("@assets/images/checkout-sucess.png")}
      >
        {t(
          "Your order will be delivered soon. Thank you for choosing our app!"
        )}
      </SuccessMessage>
      <ButtonContainer>
        <CustomButton title={t("DOWNLOAD BILL")} width={343} height={48} />
        <CustomButton
          title={t("CONTINUE SHOPPING")}
          width={343}
          height={48}
          onPress={() => navigation.navigate("home")}
        />
      </ButtonContainer>
    </Container>
  );
}
