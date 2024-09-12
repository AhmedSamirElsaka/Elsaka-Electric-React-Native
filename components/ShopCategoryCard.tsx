import { Image, StyleSheet, Text, View } from "react-native";
import React from "react";
import { Category } from "@/types/types";
import { LinearGradient } from "expo-linear-gradient";

const ShopCategoryCard = ({ category }: { category: Category }) => {
  return (
    <LinearGradient
      start={{ x: 0, y: 0 }}
      end={{ x: 1, y: 1 }}
      colors={["#252A32", "#0C0F14"]}
      className=" flex-1 flex-row justify-between rounded-xl items-center pl-6 border-2 border-secondaryDarkGreyHex   bg-secondaryDarkGreyHex "
    >
      <Text className="text-white font-semibold text-lg">{category.name}</Text>
      <Image
        source={require("../assets/images/imageDemo.png")}
        resizeMode="stretch"
        className="w-44 h-24  rounded-r-xl "
      />
    </LinearGradient>
  );
};

export default ShopCategoryCard;

const styles = StyleSheet.create({});
