import { render, screen } from "@testing-library/react-native";
import { BackgroundAuth } from "@components/BackgroundAuth";

describe("BackgroundAuth", () => {
  it("should render ImageBackground with source prop", () => {
    render(
      <BackgroundAuth source={require("@assets/images/background.png")} />
    );
    const imageBackground = screen.getByAccessibilityHint("image-background");
    expect(imageBackground).toBeTruthy();
  });
});
