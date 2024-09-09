import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React, { useState } from "react";
import { LinearGradient } from "expo-linear-gradient";
import { ProductSize } from "@/types/types";

const ProductSizeComponent = ({
  productSize,
}: {
  productSize: ProductSize;
}) => {
  const [isPressed, setIsPressed] = useState(false);
  return (
    <TouchableOpacity onPress={() => setIsPressed(!isPressed)}>
      <LinearGradient
        start={{ x: 0, y: 0 }}
        end={{ x: 1, y: 1 }}
        colors={["#252A32", "#0C0F14"]}
        className={` w-28 h-14 border-2 flex-row border-secondaryDarkGreyHex ${
          isPressed ? "border-[#D17842]" : ""
        } rounded-xl  bg-secondaryDarkGreyHex items-center justify-center space-x-1`}
      >
        <Text
          className={`text-white text-base ${
            isPressed ? "text-[#D17842]" : ""
          }`}
        >
          {productSize.size}
        </Text>
        <Text
          className={`text-white text-base  ${
            isPressed ? "text-[#D17842]" : ""
          }`}
        >
          {productSize.unit}
        </Text>
      </LinearGradient>
    </TouchableOpacity>
  );
};

export default ProductSizeComponent;

const styles = StyleSheet.create({});
