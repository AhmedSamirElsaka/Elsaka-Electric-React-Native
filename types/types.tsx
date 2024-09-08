export type Product = {
  id: string;
  title: string;
  description: string;
  image: string;
  price: string;
  rate: string;
  numberOfRates: string;
  category: Category[];
};
export type Category = {
  id: string;
  name: string;
  icon: string;
};
