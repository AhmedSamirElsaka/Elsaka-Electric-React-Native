import { Image, ScrollView, StyleSheet, Text, View } from "react-native";
import React from "react";
import CustomButton from "./CustomButton";
import { LinearGradient } from "expo-linear-gradient";
import ProductCardCount from "./ProductCardCount";

const CartProductCard = ({ isSingleElement = false }) => {
  return isSingleElement ? (
    <View>
      <LinearGradient
        start={{ x: 0, y: 0 }}
        end={{ x: 1, y: 1 }}
        colors={["#252A32", "#0C0F14"]}
        className="border-2 border-secondaryDarkGreyHex rounded-2xl bg-secondaryDarkGreyHex p-2 h-auto"
      >
        <View className="flex-row ">
          <Image
            source={require("../assets/images/imageDemo.png")}
            className="w-32 h-32 rounded-2xl"
          />
          <View>
            <Text className="text-white font-semibold text-xl ml-8">
              Cappuccino
            </Text>
            <Text className="text-white text-sm ml-8" numberOfLines={1}>
              With Steamed Milk
            </Text>

            <View className="flex-row items-center content-center justify-center pt-4">
              <View
                className="border-2 border-secondaryDarkGreyHex rounded-2xl 
              items-center content-center bg-[#0C0F14] p-2 w-24 h-12 ml-8 "
              >
                <Text className="text-white text-lg" numberOfLines={1}>
                  M
                </Text>
              </View>
              <Text className="text-white font-bold text-2xl ml-10">
                <Text className="text-primary text-2xl">$ </Text>
                {10.5}
              </Text>
            </View>
            <View className="pt-4 pl-8">
              <ProductCardCount productQuantity={1} />
            </View>
          </View>
        </View>
      </LinearGradient>
    </View>
  ) : (
    <View>
      <LinearGradient
        start={{ x: 0, y: 0 }}
        end={{ x: 1, y: 1 }}
        colors={["#252A32", "#0C0F14"]}
        className="border-2 border-secondaryDarkGreyHex rounded-2xl bg-secondaryDarkGreyHex p-3 h-auto "
      >
        <View className="flex-row ">
          <Image
            source={require("../assets/images/imageDemo.png")}
            className="w-24 h-24 rounded-2xl"
          />
          <View>
            <Text className="text-white font-semibold text-xl ml-8">
              Cappuccino
            </Text>
            <Text className="text-white text-sm ml-8" numberOfLines={1}>
              With Steamed Milk
            </Text>
          </View>
        </View>
        <View className="flex-row pt-4 items-center">
          <View
            className="border-2 border-secondaryDarkGreyHex rounded-2xl 
          items-center content-center bg-[#0C0F14] p-2 w-24 h-12 "
          >
            <Text className="text-white text-lg" numberOfLines={1}>
              M
            </Text>
          </View>
          <Text className="text-white font-bold text-xl ml-2">
            <Text className="text-primary text-xl">$ </Text>
            {10.5}
          </Text>
          <View className="flex-1 pr-2 pl-6">
            <ProductCardCount productQuantity={1} />
          </View>
        </View>
      </LinearGradient>
    </View>
  );
};

export default CartProductCard;

const styles = StyleSheet.create({});
