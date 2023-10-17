export type MockGetProductsAPIResponse = typeof mockGetProductsAPIResponse;

export const mockGetProductsAPIResponse = [
  {
    id: 1,
    title: "Product Title",
    price: 10.99,
    description: "Product Description",
    images: ["image1", "image2"],
    category: {
      id: 1,
      name: "Category Name",
      image: "category-image"
    }
  }
];
