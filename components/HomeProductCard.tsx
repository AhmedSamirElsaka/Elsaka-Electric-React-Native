import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";
import { LinearGradient } from "expo-linear-gradient";
import * as Icons from "react-native-heroicons/solid";
import * as OutlineIcons from "react-native-heroicons/outline";
import { Product } from "@/types/types";
import ProductDetailsScreen from "@/screens/ProductDetailsScreen";
import { saveProductToUserCart } from "@/lib/appwrite";
import { useDispatch } from "react-redux";
import { addCart } from "@/features/cartSlice";
import { ToastAndroid } from "react-native";

const HomeProductCard = ({
  product,
  navigation,
}: {
  product: Product;
  navigation: any;
}) => {
  const dispatch = useDispatch();

  const showToast = () => {
    ToastAndroid.show("Item added to cart", ToastAndroid.SHORT);
  };

  return (
    <TouchableOpacity
      className="w-40 h-72 bg-green-800 rounded-3xl"
      activeOpacity={0.7}
      onPress={() => {
        navigation.push("productDetails", { productDetails: product });
      }}
    >
      <LinearGradient
        start={{ x: 0, y: 0 }}
        end={{ x: 1, y: 1 }}
        colors={["#252A32", "#0C0F14"]}
        className=" flex-1 rounded-3xl items-center pt-4"
      >
        <View className="flex-row w-28 h-32">
          <Image
            source={{ uri: product.images[0] }}
            className="w-28 h-32 rounded-3xl "
            resizeMode="cover"
          />
          <View className="-ml-20  w-20 bg-[#000000b9] flex-row items-center justify-center space-x-1 h-8 rounded-tr-3xl rounded-bl-3xl ">
            <Icons.StarIcon size={12} color={"gold"} />
            <Text className=" text-white text-xs">{product.rate}</Text>
          </View>
        </View>
        <View className="w-32 items-center space-y-1 pt-1 ">
          <Text
            className="text-white font-semibold text-base w-32  pl-2"
            numberOfLines={1}
          >
            {product.title}
          </Text>
          <Text className="text-gray-400 text-sm pl-2  w-32" numberOfLines={1}>
            {product.description}
          </Text>
        </View>

        <View className="flex-row items-center mt-4 w-28 justify-between">
          <Text className="text-white font-semibold text-lg">
            <Text className="text-primary">EGP</Text> {product.price}
          </Text>
          <TouchableOpacity
            activeOpacity={0.7}
            onPress={() => {
              saveProductToUserCart(product);
              dispatch(addCart(product));
              showToast();
            }}
          >
            <Icons.PlusIcon
              size={2}
              color={"white"}
              className="bg-primary p-3 rounded-lg "
            />
          </TouchableOpacity>
        </View>
      </LinearGradient>
    </TouchableOpacity>
  );
};

export default HomeProductCard;

const styles = StyleSheet.create({});
