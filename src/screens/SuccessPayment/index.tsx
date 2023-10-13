import { SuccessMessage } from "@components/SuccessMessage";
import { ButtonContainer, Container } from "./style";
import { CustomButton } from "@components/Button";

export function SuccessPayment() {
  return (
    <Container>
      <SuccessMessage
        hasImage
        source={require("@assets/images/checkout-sucess.png")}
      >
        Your order will be delivered soon. Thank you for choosing our app!
      </SuccessMessage>
      <ButtonContainer>
        <CustomButton title="DOWNLOAD BILL" width={343} height={48} />
        <CustomButton title="CONTINUE SHOPPING" width={343} height={48} />
      </ButtonContainer>
    </Container>
  );
}
