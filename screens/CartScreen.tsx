import { ScrollView, StatusBar, StyleSheet, Text, View } from "react-native";
import React from "react";
import ProductDetails from "@/components/ProductDetails";
import Header from "@/components/Header";
import CustomButton from "@/components/CustomButton";
import CartProductCard from "@/components/CartProductCard";

const CartScreen = () => {
  return (
    <View className="flex-1 bg-mainBackground">
      <ScrollView>
        <Header title="Cart" />
        <CartProductCard />
      </ScrollView>
      <View className="flex-row px-6 pb-4 justify-between">
        <View className="justify-center items-center ">
          <Text className="text-white font-bold text-lg">Total Price</Text>
          <Text className="text-white font-bold text-xl">
            <Text className="text-primary text-2xl">$ </Text>
            {10.5}
          </Text>
        </View>
        <CustomButton
          title="Add To Cart"
          handlePress={() => {}}
          textStyles="text-white text-lg text-bold"
          containerStyles="bg-primary flex-1 ml-12"
        />
      </View>
    </View>
  );
};

export default CartScreen;

const styles = StyleSheet.create({});
