import React from "react";
import { render } from "@testing-library/react-native";
import { BackgroundAuth } from "@components/BackgroundAuth";

describe("BackgroundAuth", () => {
  it("should render ImageBackground with source prop", () => {
    const { getByTestId } = render(
      <BackgroundAuth source={require("@assets/images/background.png")} />
    );
    expect(getByTestId("image-background")).toHaveProperty(
      "source",
      require("@assets/images/background.png")
    );
  });
});
