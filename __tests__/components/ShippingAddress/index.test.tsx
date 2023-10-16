import React from "react";
import { render, screen } from "@testing-library/react-native";
import ShippingAddress from "@components/ShippingAddress";

describe("ShippingAddess", () => {
  it("the component is rendered and styled", () => {
    const { getByText } = render(
      <ShippingAddress children="Test" change="Change" title="Title" />
    );

    expect(getByText("Test")).toBeTruthy();
    expect(getByText("Change")).toBeTruthy();
    expect(getByText("Title")).toBeTruthy();
  });

  it("the component is rendered and styled", () => {
    const { getByTestId } = render(<ShippingAddress />);
    expect(getByTestId("shippingAddess")).toBeTruthy();
  });
});
