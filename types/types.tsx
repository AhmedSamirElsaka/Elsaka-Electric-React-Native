export type Product = {
  id: string;
  title: string;
  description: string;
  images: string[];
  price: string;
  rate: string;
  numberOfRates: string;
  category: Category[];
  productSize: ProductSize[];
};
export type Category = {
  id: string;
  name: string;
  icon?: string;
  products: Product[];
};
export type ProductSize = {
  size: string;
  unit: string;
  price: string;
};

{
  /* <ProductDetails
        product={{
          id: "1",
          title: "Electrical Product",
          price: "10000",
          image:
            "https://cdn.britannica.com/88/212888-050-6795342C/study-lamp-electrical-cord.jpg",
          description:
            "Arabica beans are by far the most popular type of coffee beans, making up about 60% of the world’s coffee. These tasty beans originated many centuries ago in the highlands of Ethiopia, and may even be the first coffee beans ever consumed! ",
          rate: "4.5",
          numberOfRates: "6534",
          category: [
            {
              id: "1",
              name: "Electrical",
              icon: "https://cdn.britannica.com/88/212888-050-6795342C/study-lamp-electrical-cord.jpg",
            },
            {
              id: "2",
              name: "home",
              icon: "https://cdn.britannica.com/88/212888-050-6795342C/study-lamp-electrical-cord.jpg",
            },
          ],
          productSize: [
            {
              size: "250",
              unit: "gm",
              price: "10000",
            },
            {
              size: "500",
              unit: "gm",
              price: "10000",
            },
            {
              size: "750",
              unit: "gm",
              price: "10000",
            },
            {
              size: "1",
              unit: "kg",
              price: "10000",
            },
            {
              size: "1.25",
              unit: "kg",
              price: "10000",
            },
            {
              size: "1,5",
              unit: "kg",
              price: "10000",
            },
          ],
        }}
      /> */
}

export type ShopScreenNotification = {
  title: string;
  subTitle: string;
  products: Product[];
};

export type Cart = {
  product: Product;
  count: string;
  size?: String;
};

export type Order = {
  orderNumber: string;
  quantity: string;
  amount: string;
  date?: string;
  products?: Product[];
  status?: string;
};
