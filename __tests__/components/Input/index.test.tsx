import { CustomInput } from "@components/Input";
import { render, screen } from "@testing-library/react-native";
import "@testing-library/jest-native/extend-expect";
import MockTheme from "../../mocks/mockTheme";

describe("Component: Input", () => {
  it("should render input with value", () => {
    const value = "JohnDoe";

    render(
      <MockTheme>
        <CustomInput label="Username" value={value} />
      </MockTheme>
    );

    expect(screen.getByDisplayValue(value)).toBeTruthy();
  });

  it("should  be render without activity indicator if showIcon and isSearch prop is undefined", () => {
    render(
      <MockTheme>
        <CustomInput label="Username" />
      </MockTheme>
    );

    const activityIndicator = screen.queryByAccessibilityHint("loading-icon");
    expect(activityIndicator).toBeNull();
  });

  it("should  be render with activity indicator if showIcon and isSearch prop is true", () => {
    render(
      <MockTheme>
        <CustomInput label="Username" showIcon isSearch />
      </MockTheme>
    );

    const activityIndicator = screen.queryByAccessibilityHint("loading-icon");
    expect(activityIndicator).toBeTruthy();
  });

  it("should render disabled input", () => {
    const value = "Disabled input";

    render(
      <MockTheme>
        <CustomInput label="Username" value={value} editable={false} />
      </MockTheme>
    );

    expect(screen.getByDisplayValue(value)).toBeDisabled();
  });

  it("should render input with password field", () => {
    const label = "Password";

    render(
      <MockTheme>
        <CustomInput label={label} isPasswordField />
      </MockTheme>
    );

    expect(screen.getByAccessibilityHint("eye-closed-icon")).toBeTruthy();
  });
});
