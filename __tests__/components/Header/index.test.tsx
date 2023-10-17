import Header from "@components/Header";
import { render } from "../../utils/customRender";
import { fireEvent, screen } from "@testing-library/react-native";
import "@testing-library/jest-native/extend-expect";

describe("Component: Header", () => {
  it("should render the component with a title", () => {
    const title = "My Header";
    render(<Header title={title} onCheck={() => ({})} />);

    const headerTitle = screen.getByText(title);
    expect(headerTitle).toBeTruthy();
  });

  it("should render the component without a title", () => {
    render(<Header title="" onCheck={() => ({})} />);

    const headerTitle = screen.queryByText("My Header");
    expect(headerTitle).toBeNull();
  });

  it("should call the onCheck function when the button is pressed", () => {
    const onCheck = jest.fn();
    render(<Header title="" onCheck={onCheck} />);

    const button = screen.getByAccessibilityHint("svg-header");
    fireEvent.press(button);

    expect(onCheck).toHaveBeenCalled();
  });
});
