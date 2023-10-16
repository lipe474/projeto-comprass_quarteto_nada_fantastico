export type ProductDTO = {
  id: number;
  images: Array<string>;
  title: string;
  description: string;
  price: number;
  category: any;
  count: number;
  totalPriceOnCart: number;
};