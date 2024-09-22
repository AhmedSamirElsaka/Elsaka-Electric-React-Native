import {
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import React from "react";
import CustomButton from "./CustomButton";
import { LinearGradient } from "expo-linear-gradient";
import ProductCardCount from "./ProductCardCount";
import { Cart } from "@/types/types";

const CartProductCard = ({
  cart,
  isSingleElement = false,
  navigation,
}: {
  cart: Cart;
  isSingleElement?: boolean;
  navigation: any;
}) => {
  return isSingleElement ? (
    <View>
      <TouchableOpacity
        onPress={() => {
          navigation.navigate("productDetails", {
            productDetails: cart.product,
          });
        }}
        activeOpacity={0.7}
      >
        <LinearGradient
          start={{ x: 0, y: 0 }}
          end={{ x: 1, y: 1 }}
          colors={["#252A32", "#0C0F14"]}
          className="border-2 border-secondaryDarkGreyHex rounded-2xl bg-secondaryDarkGreyHex p-2 h-auto"
        >
          <View className="flex-row ">
            <Image
              source={{ uri: cart.product.images[0] }}
              className="w-32 h-32 rounded-2xl"
            />
            <View>
              <Text className="text-white font-semibold text-xl ml-8  max-w-[220px]">
                {cart.product.title}
              </Text>
              <Text
                className="text-white text-sm ml-8  max-w-[150px]"
                numberOfLines={1}
              >
                {cart.product.description}
              </Text>

              <View className="flex-row items-center content-center justify-center pt-4">
                <View
                  className="border-2 border-secondaryDarkGreyHex rounded-2xl 
              items-center content-center bg-[#0C0F14] p-2 w-24 h-12 ml-8 "
                >
                  <Text className="text-white text-lg" numberOfLines={1}>
                    {cart?.count}
                  </Text>
                </View>
                <Text className="text-white font-bold text-2xl ml-10">
                  <Text className="text-primary text-2xl">EGP </Text>
                  {cart.product.price}
                </Text>
              </View>
              <View className="pt-4 pl-8">
                <ProductCardCount
                  productQuantity={parseInt(cart.count)}
                  onPress={(count) => console.log(count)}
                />
              </View>
            </View>
          </View>
        </LinearGradient>
      </TouchableOpacity>
    </View>
  ) : (
    <View>
      <TouchableOpacity
        onPress={() => {
          navigation.navigate("productDetails", {
            productDetails: cart.product,
          });
        }}
        activeOpacity={0.7}
      >
        <LinearGradient
          start={{ x: 0, y: 0 }}
          end={{ x: 1, y: 1 }}
          colors={["#252A32", "#0C0F14"]}
          className="border-2 border-secondaryDarkGreyHex rounded-2xl bg-secondaryDarkGreyHex p-3 h-auto "
        >
          <View className="flex-row ">
            <Image
              source={{ uri: cart.product.images[0] }}
              className="w-24 h-28 rounded-2xl"
            />
            <View>
              <Text
                className="text-white font-semibold text-lg
               ml-8 max-w-[220px]"
                numberOfLines={2}
              >
                {cart.product.title}
              </Text>
              <Text
                className="text-gray-400 text-sm ml-8 max-w-[150px]"
                numberOfLines={1}
              >
                {cart.product.description}
              </Text>
              <Text className="text-white font-bold text-xl mt-4  -mr-6 flex-1 text-right">
                <Text className="text-primary text-xl">EGP </Text>
                {parseInt(cart.product.price) * parseInt(cart.count)}
              </Text>
            </View>
          </View>
          <View className="flex-row mt-4 items-center ">
            {cart.size && (
              <View
                className="border-2 border-secondaryDarkGreyHex rounded-2xl 
          items-center content-center bg-[#0C0F14] p-2 w-24 h-12 "
              >
                <Text className="text-white text-lg" numberOfLines={1}>
                  {cart.size}
                </Text>
              </View>
            )}

            <View className="flex-1 pr-2 pl-6">
              <ProductCardCount
                productQuantity={parseInt(cart.count)}
                onPress={(count) => console.log(count)}
              />
            </View>
          </View>
        </LinearGradient>
      </TouchableOpacity>
    </View>
  );
};

export default CartProductCard;

const styles = StyleSheet.create({});
