import { Image, StyleSheet, Text, View } from "react-native";
import React from "react";
import { Category } from "@/types/types";
import { LinearGradient } from "expo-linear-gradient";

const CategoryIcon = ({ category }: { category: Category }) => {
  return (
    <View>
      <LinearGradient
        start={{ x: 0, y: 0 }}
        end={{ x: 1, y: 1 }}
        colors={["#252A32", "#0C0F14"]}
        className=" w-16 h-20 border-2 border-secondaryDarkGreyHex rounded-xl  bg-secondaryDarkGreyHex items-center justify-center space-y-1"
      >
        {/* <Icons.HeartIcon size={24} color={IsPressed ? "red" : "white"} /> */}
        <Image
          source={require("../assets/images/testicon.png")}
          className="w-6  h-6"
          resizeMode="stretch"
          style={{ tintColor: "#D17842" }}
        />
        <Text className="text-white text-sm">{category.name}</Text>
      </LinearGradient>
    </View>
  );
};

export default CategoryIcon;

const styles = StyleSheet.create({});
