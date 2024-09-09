export type Product = {
  id: string;
  title: string;
  description: string;
  image: string;
  price: string;
  rate: string;
  numberOfRates: string;
  category: Category[];
  productSize: ProductSize[];
};
export type Category = {
  id: string;
  name: string;
  icon: string;
};
export type ProductSize = {
  size: string;
  unit: string;
  price: string;
};
