import { StyleSheet, Text, View } from "react-native";
import React from "react";
import Header from "@/components/Header";
import ElectricShopCategoriesList from "@/components/ElectricShopCategoriesList";

const ShopScreen = () => {
  return (
    <View className="flex-1 bg-mainBackground">
      <Header title="Categories" />
      <ElectricShopCategoriesList />
    </View>
  );
};

export default ShopScreen;

const styles = StyleSheet.create({});
