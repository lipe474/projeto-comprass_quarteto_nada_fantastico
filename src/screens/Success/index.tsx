import { SuccessMessage } from "@components/SuccessMessage";
import { Container } from "./style";
import { CustomButton } from "@components/Button";
import { useTranslation } from "react-i18next";
import { useNavigation } from "@react-navigation/native";
import { TabProps } from "@routes/tab.routes";

export function Success() {
  const { t, i18n } = useTranslation();

  const navigation = useNavigation<TabProps>();

  return (
    <Container
      source={require("@assets/images/woman-sucess.png")}
      resizeMode="cover"
    >
      <SuccessMessage>
        {t(
          "Your order will be delivered soon. Thank you for choosing our app!"
        )}
      </SuccessMessage>
      <CustomButton
        title="CONTINUE"
        width={160}
        height={36}
        onPress={() => navigation.navigate("successPayment")}
      />
    </Container>
  );
}
