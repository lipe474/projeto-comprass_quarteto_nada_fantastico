import { SuccessMessage } from "@components/SuccessMessage";
import { Container } from "./style";
import { CustomButton } from "@components/Button";

export function Success() {
  return (
    <Container
      source={require("@assets/images/woman-sucess.png")}
      resizeMode="cover"
    >
      <SuccessMessage>
        Your order will be delivered soon. Thank you for choosing our app!
      </SuccessMessage>
      <CustomButton title="CONTINUE" width={160} height={36} />
    </Container>
  );
}
