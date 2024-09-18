import { Image, ScrollView, StyleSheet, Text, View } from "react-native";
import React from "react";
import { Product } from "@/types/types";
import CategoryIcon from "./CategoryIcon";
import * as Icons from "react-native-heroicons/solid";
import { LinearGradient } from "expo-linear-gradient";
import LoveIcon from "./LoveIcon";

const FavoriteProductCard = ({ product }: { product: Product }) => {
  return (
    <View className="flex-1 p-4">
      {/* Product Image */}

      <View className="flex-row">
        <Image
          source={{ uri: product.images }}
          className="w-full h-[50vh] rounded-tr-3xl rounded-tl-3xl"
        />
        <View className="w-11 h-auto z-50 -ml-16 mt-6">
          <LoveIcon onPress={() => {}} IsPressed={true} />
        </View>
      </View>

      <View className="h-40 bg-mainBackground -mt-40 opacity-[0.7] rounded-tr-3xl rounded-tl-3xl flex-row">
        <View className="px-6">
          <Text className="text-white font-bold text-2xl pt-4">Cappuccino</Text>
          <Text className="text-gray-300 ">With Steamed Milk</Text>
          <View className="flex-row items-center pt-8 space-x-2">
            <Icons.StarIcon size={30} color={"#D17842"} />
            <Text className=" text-white text-xl font-bold">
              {product.rate}
            </Text>
            <Text className=" text-gray-300 text-lg">
              ({product.numberOfRates})
            </Text>
          </View>
        </View>
        <View className="flex-1 flex-row justify-between pl-6 pr-6 pt-4">
          {product.category?.map((element) => (
            <CategoryIcon category={element} key={element.id} />
          ))}
        </View>
      </View>
      <ScrollView>
        <LinearGradient
          start={{ x: 0, y: 0 }}
          end={{ x: 1, y: 1 }}
          colors={["#252A32", "#0C0F14"]}
          className="border-2 border-secondaryDarkGreyHex rounded-b-3xl bg-secondaryDarkGreyHex p-2"
        >
          <View className="pb-4">
            <Text className="text-white font-bold text-xl px-6 pt-4">
              Description
            </Text>
            <Text
              className="text-gray-200 px-6 pt-4"
              numberOfLines={3}
              ellipsizeMode="tail"
            >
              {product.description}
            </Text>
          </View>
        </LinearGradient>
      </ScrollView>
    </View>
  );
};

export default FavoriteProductCard;

const styles = StyleSheet.create({});
