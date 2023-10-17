import { ContentContainer, Title } from "./style";
import CartEmptySVG from "@assets/icons/empty-cart.svg";
export function CartEmpty() {
  return (
    <ContentContainer>
      <CartEmptySVG accessibilityHint="cart-svg" />
      <Title>Your cart is so empty and abandoned...</Title>
    </ContentContainer>
  );
}
