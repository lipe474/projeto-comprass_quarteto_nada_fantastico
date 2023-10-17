// import { act, waitFor } from "@testing-library/react-native";
// import { render } from "../../utils/customRender";
// import { ProductList } from "@components/ProductList";
// import { api } from "@services/api";
// import { mockGetCategoriesAPIResponse } from "../../mocks/api/mockGetCategoriesAPIResponse";

// jest.mock("@services/api");

// describe("ProductList component", () => {
//   it("should render a list of categories", async () => {
//     (api.get as jest.Mock).mockResolvedValue({
//       data: mockGetCategoriesAPIResponse
//     });

//     const { getByText } = render(<ProductList />);

//     await waitFor(() => {
//       expect(getByText("Category 1")).toBeTruthy();
//       expect(getByText("Category 2")).toBeTruthy();
//       expect(getByText("Category 3")).toBeTruthy();
//     });
//   });
// });
