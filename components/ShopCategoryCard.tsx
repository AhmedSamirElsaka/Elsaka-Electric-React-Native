import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";
import { Category, Product } from "@/types/types";
import { LinearGradient } from "expo-linear-gradient";

const ShopCategoryCard = ({
  product,
  navigation,
}: {
  product: Product;
  navigation: any;
}) => {
  return (
    <TouchableOpacity
      activeOpacity={0.7}
      onPress={() =>
        navigation.push("productDetails", { productDetails: product })
      }
    >
      <LinearGradient
        start={{ x: 0, y: 0 }}
        end={{ x: 1, y: 1 }}
        colors={["#252A32", "#0C0F14"]}
        className="  flex-row justify-between rounded-xl items-center pl-6 border-2 border-secondaryDarkGreyHex   bg-secondaryDarkGreyHex "
      >
        <Text
          className="text-white font-semibold text-lg max-w-[200px] "
          numberOfLines={2}
        >
          {product.title}
        </Text>
        <View className="rounded-r-xl w-40 h-24 justify-end content-end">
          <Image
            source={{ uri: product.images[0] }}
            resizeMode="stretch"
            className="ml-8 flex-1 min-w-40 min-h-24"
          />
        </View>
      </LinearGradient>
    </TouchableOpacity>
  );
};

export default ShopCategoryCard;

const styles = StyleSheet.create({});
