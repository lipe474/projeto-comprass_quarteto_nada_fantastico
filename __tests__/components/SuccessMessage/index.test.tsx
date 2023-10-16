import { SuccessMessage } from "@components/SuccessMessage";
import { render, screen } from "@testing-library/react-native";
import "@testing-library/jest-native/extend-expect";
import MockTheme from "../../mocks/mockTheme";

describe("Component: SuccessMessage", () => {
  it("should render the component", () => {
    render(
      <MockTheme>
        <SuccessMessage />
      </MockTheme>
    );

    const title = screen.getByText("Success!");
    expect(title).toBeTruthy();
  });

  it("should render the component with a message", () => {
    render(
      <MockTheme>
        <SuccessMessage>Success message</SuccessMessage>
      </MockTheme>
    );

    const message = screen.getByText("Success message");
    expect(message).toBeTruthy();
  });

  it("should render the component with an image", () => {
    render(
      <MockTheme>
        <SuccessMessage
          hasImage
          source={require("@assets/images/woman-sucess.png")}
        >
          Success message
        </SuccessMessage>
      </MockTheme>
    );

    const image = screen.getByAccessibilityHint("image-success");
    expect(image).toBeTruthy();
  });
});
