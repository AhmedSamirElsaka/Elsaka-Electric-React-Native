import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { Product } from "@/types/types";
import * as Icons from "react-native-heroicons/solid";

const ProductRatingSection = ({ product }: { product: Product }) => {
  return (
    <View>
      <Text className="text-white font-bold text-xl px-6 pt-10">
        Rating&Reviews
      </Text>
      <View className="pt-8 px-6 justify-between w-auto flex-row items-center">
        <View className=" w-auto -mt-12">
          <Text className="text-white font-bold text-3xl ">{product.rate}</Text>
          <Text className="text-gray-300 text-base">
            {product.numberOfRates} ratings
          </Text>
        </View>
        <View className="scale-x-[-1]">
          <View className="flex-row">
            <Icons.StarIcon size={20} color={"#D17842"} />
            <Icons.StarIcon size={20} color={"#D17842"} />
            <Icons.StarIcon size={20} color={"#D17842"} />
            <Icons.StarIcon size={20} color={"#D17842"} />
            <Icons.StarIcon size={20} color={"#D17842"} />
          </View>
          <View className="flex-row ">
            <Icons.StarIcon size={20} color={"#D17842"} />
            <Icons.StarIcon size={20} color={"#D17842"} />
            <Icons.StarIcon size={20} color={"#D17842"} />
            <Icons.StarIcon size={20} color={"#D17842"} />
          </View>
          <View className="flex-row">
            <Icons.StarIcon size={20} color={"#D17842"} />
            <Icons.StarIcon size={20} color={"#D17842"} />
            <Icons.StarIcon size={20} color={"#D17842"} />
          </View>
          <View className="flex-row">
            <Icons.StarIcon size={20} color={"#D17842"} />
            <Icons.StarIcon size={20} color={"#D17842"} />
          </View>
          <View className="flex-row">
            <Icons.StarIcon size={20} color={"#D17842"} />
          </View>
        </View>
        <View className="space-y-3">
          <View className={`w-24 h-2 bg-amber-400 rounded-full`} />
          <View className="w-16 h-2 bg-amber-400 rounded-full" />
          <View className="w-12 h-2 bg-amber-400 rounded-full" />
          <View className="w-8 h-2 bg-amber-400 rounded-full" />
          <View className="w-4 h-2 bg-amber-400 rounded-full" />
        </View>
        <View className="items-center">
          <Text className="text-white text-sm">1000</Text>
          <Text className="text-white text-sm">90</Text>
          <Text className="text-white text-sm">1200</Text>
          <Text className="text-white text-sm">200</Text>
          <Text className="text-white text-sm">50</Text>
        </View>
      </View>
    </View>
  );
};

export default ProductRatingSection;

const styles = StyleSheet.create({});
