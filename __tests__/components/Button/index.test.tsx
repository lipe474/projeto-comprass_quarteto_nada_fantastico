import { CustomButton } from "@components/Button";
import { render, screen } from "@testing-library/react-native";
import MockTheme from "../../mocks/mockTheme";

describe("Component: Button", () => {
  it("should render button with text", () => {
    const text = "Sign In";

    render(
      <MockTheme>
        <CustomButton title={text} />
      </MockTheme>
    );

    expect(screen.getByText(text)).toBeTruthy();
  });

  it("should render button with loading icon", () => {
    const text = "Sign In";

    render(
      <MockTheme>
        <CustomButton title={text} isLoading />
      </MockTheme>
    );

    expect(screen.getByAccessibilityHint("loading-icon")).toBeTruthy();
  });
});
