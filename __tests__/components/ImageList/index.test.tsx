import { ImagesList } from "@components/ImagesList";
import { render } from "../../utils/customRender";
import "@testing-library/jest-native/extend-expect";

describe("Component: ImagesList", () => {
  it("should render the product image", () => {
    const imageURL = "https://example.com/image.jpg";

    const { getByAccessibilityHint } = render(<ImagesList image={imageURL} />);

    const productImage = getByAccessibilityHint("product-image");
    expect(productImage.props.source.uri).toBe(imageURL);
  });
});
