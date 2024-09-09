import { ScrollView, StatusBar, StyleSheet, Text, View } from "react-native";
import React from "react";
import ProductDetails from "@/components/ProductDetails";
import Header from "@/components/Header";

const CartScreen = () => {
  return (
    <View className="flex-1  bg-mainBackground">
      <ScrollView>
        <Header title="Cart" />
      </ScrollView>
    </View>
  );
};

export default CartScreen;

const styles = StyleSheet.create({});
