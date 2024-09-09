import { Image, StatusBar, StyleSheet, Text, View } from "react-native";
import React from "react";
import BackIcon from "./BackIcon";
import LoveIcon from "./LoveIcon";
import { Product } from "@/types/types";
import * as Icons from "react-native-heroicons/solid";
import CategoryIcon from "./CategoryIcon";

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
          <Text className="text-white font-bold text-2xl pt-4">Cappuccino</Text>
          <Text className="text-gray-300 ">With Steamed Milk</Text>
          <View className="flex-row items-center pt-8 space-x-2">
            <Icons.StarIcon size={30} color={"gold"} />
            <Text className=" text-white text-xl">{product.rate}</Text>
            <Text className=" text-gray-300 text-lg">
              ({product.numberOfRates})
            </Text>
          </View>
        </View>
        <View className="flex-1 flex-row justify-between pl-10 pr-6 pt-4">
          {product.category?.map((element) => (
            <CategoryIcon category={element} key={element.id} />
          ))}
        </View>
      </View>
      <View>
        <Text className="text-white font-bold text-xl px-6 pt-4">
          Description
        </Text>
        <Text
          className="text-gray-200 px-6 pt-4"
          numberOfLines={5}
          ellipsizeMode="tail"
        >
          {product.description}
        </Text>
        <Text className="text-white font-bold text-xl px-6 pt-4">Size</Text>
      </View>
    </View>
  );
};

export default ProductDetails;

const styles = StyleSheet.create({});
