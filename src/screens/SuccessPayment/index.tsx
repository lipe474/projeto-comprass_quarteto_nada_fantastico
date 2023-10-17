import { SuccessMessage } from "@components/SuccessMessage";
import { ButtonContainer, Container } from "./style";
import { CustomButton } from "@components/Button";
import { useTranslation } from "react-i18next";

export function SuccessPayment() {
  const { t, i18n } = useTranslation(); 

  return (
    <Container>
      <SuccessMessage
        hasImage
        source={require("@assets/images/checkout-sucess.png")}
      >
        {t("Your order will be delivered soon. Thank you for choosing our app!")}
      </SuccessMessage>
      <ButtonContainer>
        <CustomButton title={t("DOWNLOAD BILL")} width={343} height={48} />
        <CustomButton title={t("CONTINUE SHOPPING")} width={343} height={48} />
      </ButtonContainer>
    </Container>
  );
}
