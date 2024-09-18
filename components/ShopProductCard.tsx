import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { Product } from "@/types/types";
import { Image } from "react-native";
import * as Icons from "react-native-heroicons/solid";
import LoveIcon from "./LoveIcon";
import { LinearGradient } from "expo-linear-gradient";

const ShopProductCard = ({ product }: { product: Product }) => {
  return (
    <LinearGradient
      start={{ x: 0, y: 0 }}
      end={{ x: 1, y: 1 }}
      colors={["#252A32", "#0C0F14"]}
      className="border-2 flex-row mx-4  border-secondaryDarkGreyHex rounded-xl bg-secondaryDarkGreyHex  "
    >
      <Image
        source={{ uri: product.images }}
        className="w-32 h-36 rounded-l-xl bg-red-800"
      />
      <View className="pt-2 ml-4">
        <Text className="text-white font-semibold text-xl">
          {product.title}
        </Text>
        <Text
          className="text-white font-semibold text-xm max-w-[250px]"
          numberOfLines={1}
        >
          {product.description}
        </Text>
        <View className="flex-row items-center pt-2 space-x-2">
          <Icons.StarIcon size={24} color={"#D17842"} />
          <Text className=" text-white text-lg font-bold">{product.rate}</Text>
          <Text className=" text-gray-300 text-base">
            ({product.numberOfRates})
          </Text>
        </View>
        <Text className="text-white font-bold text-xl pt-4">
          <Text className="text-primary text-2xl">$ </Text>
          {10.5}
        </Text>
      </View>
      <View className="mt-auto -mb-4 -ml-2  h-auto w-auto">
        <LoveIcon onPress={() => {}} IsPressed={false} />
      </View>
    </LinearGradient>
  );
};

export default ShopProductCard;

const styles = StyleSheet.create({});
