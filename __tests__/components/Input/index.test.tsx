import { CustomInput } from "@components/Input";
import { screen } from "@testing-library/react-native";
import { render } from "../../utils/customRender";
import "@testing-library/jest-native/extend-expect";
import MockTheme from "../../mocks/mockTheme";

describe("Component: Input", () => {
  it("should render input with value", () => {
    const value = "JohnDoe";

    render(<CustomInput label="Username" value={value} />);

    expect(screen.getByDisplayValue(value)).toBeTruthy();
  });

  it("should  be render without activity indicator if showIcon and isSearch prop is undefined", () => {
    render(<CustomInput label="Username" />);

    const activityIndicator = screen.queryByAccessibilityHint("loading-icon");
    expect(activityIndicator).toBeNull();
  });

  it("should  be render with activity indicator if showIcon and isSearch prop is true", () => {
    render(<CustomInput label="Username" showIcon isSearch />);

    const activityIndicator = screen.queryByAccessibilityHint("loading-icon");
    expect(activityIndicator).toBeTruthy();
  });

  it("should render disabled input", () => {
    const value = "Disabled input";

    render(<CustomInput label="Username" value={value} editable={false} />);

    expect(screen.getByDisplayValue(value)).toBeDisabled();
  });

  it("should render input with password field", () => {
    const label = "Password";

    render(<CustomInput label={label} isPasswordField />);

    expect(screen.getByAccessibilityHint("eye-closed-icon")).toBeTruthy();
  });
});
