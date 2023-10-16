import { Loading } from "@components/Loading";
import { render, screen } from "@testing-library/react-native";
import "@testing-library/jest-native/extend-expect";
import MockTheme from "../../mocks/mockTheme";

describe("Component: Loading", () => {
  it("should render the background image", () => {
    render(
      <MockTheme>
        <Loading />
      </MockTheme>
    );

    const backgroundImage = screen.getByAccessibilityHint("image-background");
    expect(backgroundImage).toBeTruthy();
  });
});
