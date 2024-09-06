import { Image, StyleSheet, Text, View } from "react-native";
import React from "react";
import { LinearGradient } from "expo-linear-gradient";
import * as Icons from "react-native-heroicons/solid";
import * as OutlineIcons from "react-native-heroicons/outline";
import { Product } from "@/types/types";

const ProductCard = ({ product }: { product: Product }) => {
  return (
    <View className="w-44 h-72 bg-green-800 rounded-3xl">
      <LinearGradient
        start={{ x: 0, y: 0 }}
        end={{ x: 1, y: 1 }}
        colors={["#252A32", "#0C0F14"]}
        //   colors={["#fff", "#fff"]}
        // style={styles.CartItemLinearGradient}
        className=" flex-1 rounded-3xl items-center pt-4"
      >
        <View className="flex-row w-36 h-40">
          <Image
            source={{ uri: product.image }}
            className="w-36 h-40 rounded-3xl bg-red-800"
            resizeMode="stretch"
          />
          <View className="-ml-20  w-20 bg-[#000000b9] flex-row items-center justify-center space-x-1 h-8 rounded-tr-3xl rounded-bl-3xl ">
            <Icons.StarIcon size={14} color={"gold"} />
            <Text className=" text-white ">{product.rate}</Text>
          </View>
        </View>
        <View className="w-32 items-start space-y-1 pt-1">
          <Text className="text-white font-semibold text-lg w-32 h-6">
            {product.title}
          </Text>
          <Text className="text-white  text-sm h-4">{product.description}</Text>
        </View>

        <View className="flex-row items-center mt-4 w-32 justify-between">
          <Text className="text-white font-semibold text-lg">
            <Text className="text-primary">$ </Text> {product.price}
          </Text>
          <Icons.PlusIcon
            size={4}
            color={"white"}
            className="bg-primary p-4 rounded-lg "
          />
        </View>
      </LinearGradient>
    </View>
  );
};

export default ProductCard;

const styles = StyleSheet.create({});
