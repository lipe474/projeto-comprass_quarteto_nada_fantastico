// import { act, fireEvent, waitFor } from "@testing-library/react-native";
// import { ProductOverview } from "@components/ProductOverview";
// import { render } from "../../utils/customRender";
// import { api } from "@services/api";
// import { mockGetProductsAPIResponse } from "../../mocks/api/mockGetProductsAPIResponse";

// jest.mock("@services/api");

// describe("ProductOverview component", () => {
//   it("should render product information correctly", async () => {
//     const product = mockGetProductsAPIResponse[0];

//     const { getByText, getByAccessibilityHint } = render(
//       <ProductOverview data={mockGetProductsAPIResponse as any} />
//     );

//     const name = getByText(product.title);
//     const category = getByText(product.category.name);
//     const price = getByText(`${product.price.toFixed(2)} R$`);
//     const description = getByText(product.description);
//     const imagesList = getByAccessibilityHint("product-image");

//     waitFor(() => {
//       expect(name).toBeTruthy();
//       expect(category).toBeTruthy();
//       expect(price).toBeTruthy();
//       expect(description).toBeTruthy();
//       expect(imagesList).toBeTruthy();
//     });
//   });

//   it("should render related products correctly", async () => {
//     const product = {
//       id: 1,
//       title: "Product Title",
//       price: 10.99,
//       description: "Product Description",
//       images: ["image1", "image2"],
//       category: {
//         id: 1,
//         name: "Category Name"
//       }
//     };

//     const relatedProducts = [
//       {
//         id: 2,
//         title: "Related Product 1",
//         price: 20.99,
//         description: "Related Product 1 Description",
//         images: ["image1", "image2"],
//         category: {
//           id: 1,
//           name: "Category Name"
//         }
//       },
//       {
//         id: 3,
//         title: "Related Product 2",
//         price: 30.99,
//         description: "Related Product 2 Description",
//         images: ["image1", "image2"],
//         category: {
//           id: 1,
//           name: "Category Name"
//         }
//       }
//     ];

//     jest.spyOn(api, "get").mockResolvedValue({
//       data: mockGetProductsAPIResponse(relatedProducts)
//     });

//     const { getByText, getAllByTestId } = render(
//       <ProductOverview data={product} />
//     );

//     const relatedProductsTitle = getByText("You can also like this");
//     const relatedProductsItemsNumber = getByText(
//       `${relatedProducts.length} items`
//     );
//     const relatedProductsList = getAllByTestId("product-resume");

//     expect(relatedProductsTitle).toBeTruthy();
//     expect(relatedProductsItemsNumber).toBeTruthy();
//     expect(relatedProductsList.length).toBe(relatedProducts.length);
//   });

//   it("should navigate to product details when a related product is pressed", async () => {
//     const product = {
//       id: 1,
//       title: "Product Title",
//       price: 10.99,
//       description: "Product Description",
//       images: ["image1", "image2"],
//       category: {
//         id: 1,
//         name: "Category Name"
//       }
//     };

//     const relatedProduct = {
//       id: 2,
//       title: "Related Product",
//       price: 20.99,
//       description: "Related Product Description",
//       images: ["image1", "image2"],
//       category: {
//         id: 1,
//         name: "Category Name"
//       }
//     };

//     const navigation = {
//       navigate: jest.fn()
//     };

//     jest.spyOn(api, "get").mockResolvedValue({
//       data: mockGetProductsAPIResponse([relatedProduct])
//     });

//     const { getAllByTestId } = render(
//       <ProductOverview data={product} navigation={navigation} />
//     );

//     const relatedProductButton = getAllByTestId("product-resume")[0];

//     act(() => {
//       fireEvent.press(relatedProductButton);
//     });

//     waitFor(() => {
//       expect(navigation.navigate).toHaveBeenCalledTimes(1);
//       expect(navigation.navigate).toHaveBeenCalledWith("details", {
//         id: relatedProduct.id,
//         title: relatedProduct.title,
//         price: relatedProduct.price,
//         description: relatedProduct.description,
//         images: relatedProduct.images,
//         category: relatedProduct.category
//       });
//     });
//   });
// });
