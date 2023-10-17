import { screen } from "@testing-library/react-native";
import { render } from "../../utils/customRender";
import { CartEmpty } from "@components/CartEmpty";

describe("Component: CartEmpty", () => {
  it("should render the component", () => {
    render(<CartEmpty />);
    expect(
      screen.getByText("Your cart is so empty and abandoned...")
    ).toBeTruthy();
  });

  it("should render the CartEmptySVG component", () => {
    render(<CartEmpty />);
    expect(screen.getByAccessibilityHint("cart-svg")).toBeTruthy();
  });
});
