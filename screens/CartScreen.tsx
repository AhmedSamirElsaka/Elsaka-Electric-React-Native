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
          description: "Electrical Product Description",
          rate: "4.5",
          numberOfRates: "6534",
        }}
      />
    </View>
  );
};

export default CartScreen;

const styles = StyleSheet.create({});
