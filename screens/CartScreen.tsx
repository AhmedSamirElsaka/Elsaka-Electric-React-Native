import { StatusBar, StyleSheet, Text, View } from "react-native";
import React from "react";
import ProductDetails from "@/components/ProductDetails";

const CartScreen = () => {
  return (
    <View className="flex-1  bg-mainBackground">
      <ProductDetails
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
        }}
      />
    </View>
  );
};

export default CartScreen;

const styles = StyleSheet.create({});
