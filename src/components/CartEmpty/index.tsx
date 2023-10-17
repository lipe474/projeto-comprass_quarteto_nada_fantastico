import { ContentContainer, Title } from "./style";
import CartEmptySVG from "@assets/icons/empty-cart.svg";
import { useTranslation } from "react-i18next";

export function CartEmpty() {
  const { t, i18n } = useTranslation(); 

  return (
    <ContentContainer>
      <CartEmptySVG />
      <Title>{t("Your cart is so empty and abandoned...")}</Title>
    </ContentContainer>
  );
}
