import { Image, StatusBar, StyleSheet, Text, View } from "react-native";
import React from "react";
import BackIcon from "./BackIcon";
import LoveIcon from "./LoveIcon";
import { Product } from "@/types/types";
import * as Icons from "react-native-heroicons/solid";

const ProductDetails = ({ product }: { product: Product }) => {
  return (
    <View className="flex-1 bg-mainBackground ">
      {/* Transparent StatusBar */}
      <StatusBar
        translucent={true}
        backgroundColor="transparent"
        barStyle="light-content"
        hidden={true}
      />
      {/* Top Icons Row */}
      <View className="flex-row justify-between px-6 content-center z-50 mt-8">
        <BackIcon onPress={() => {}} />
        <LoveIcon onPress={() => {}} IsPressed={true} />
      </View>

      {/* Product Image */}
      <Image
        source={{ uri: product.image }}
        className="w-full h-[60vh] -mt-20"
      />
      <View className="h-40 bg-mainBackground -mt-40 opacity-[0.7] rounded-tr-3xl rounded-tl-3xl flex-row">
        <View className="px-6">
          <Text className="text-white font-bold text-3xl pt-4">Cappuccino</Text>
          <Text className="text-gray-300 text-lg">With Steamed Milk</Text>
          <View className="flex-row items-center pt-6 space-x-2">
            <Icons.StarIcon size={36} color={"gold"} />
            <Text className=" text-white text-2xl">{product.rate}</Text>
            <Text className=" text-gray-300 text-lg">
              ({product.numberOfRates})
            </Text>
          </View>
        </View>
        <View>{/* <CategoryIcon category={product.category} /> */}</View>
      </View>
    </View>
  );
};

export default ProductDetails;

const styles = StyleSheet.create({});
