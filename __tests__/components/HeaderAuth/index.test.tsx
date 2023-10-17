import { fireEvent } from "@testing-library/react-native";
import { render } from "../../utils/customRender";
import { HeaderAuth } from "@components/HeaderAuth";

describe("Component: HeaderAuth", () => {
  it("should render the title correctly", () => {
    const { getByText } = render(<HeaderAuth title="My Title" />);
    expect(getByText("My Title")).toBeTruthy();
  });

  it("should not render the back button when showBackButton is false", () => {
    const { queryByAccessibilityHint } = render(
      <HeaderAuth title="My Title" showBackButton={false} />
    );
    expect(queryByAccessibilityHint("back-button")).not.toBeTruthy();
  });

  it("should render the back button when showBackButton is true", () => {
    const { getByAccessibilityHint } = render(
      <HeaderAuth title="My Title" showBackButton={true} />
    );
    expect(getByAccessibilityHint("back-button")).toBeTruthy();
  });

  it("should call onPress when back button is pressed", () => {
    const onPress = jest.fn();
    const { getByAccessibilityHint } = render(
      <HeaderAuth title="My Title" showBackButton={true} onPress={onPress} />
    );
    fireEvent.press(getByAccessibilityHint("back-button"));
    expect(onPress).toHaveBeenCalled();
  });
});
