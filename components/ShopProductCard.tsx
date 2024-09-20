import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React, { useEffect, useState } from "react";
import { Product } from "@/types/types";
import { Image } from "react-native";
import * as Icons from "react-native-heroicons/solid";
import LoveIcon from "./LoveIcon";
import { LinearGradient } from "expo-linear-gradient";
import { useNavigation } from "@react-navigation/native";
import { useDispatch, useSelector } from "react-redux";
import {
  addLovedProduct,
  removeLovedProduct,
  selectLovedProducts,
} from "@/features/lovedProdcutsSlice";
import { saveProductToUser, unSaveProductToUser } from "@/lib/appwrite";

const ShopProductCard = ({
  product,
  navigation,
}: {
  product: Product;
  navigation: any;
}) => {
  const lovedProducts = useSelector(selectLovedProducts);
  const dispatch = useDispatch();
  const [isLovedProduct, setisLovedProduct] = useState(false);
  useEffect(() => {
    // Check if categories and products exist before setting state
    if (lovedProducts.length > 0 && lovedProducts) {
      setisLovedProduct(
        lovedProducts
          .map((product) => {
            return product.id;
          })
          .includes(product.id)
      );
    } else {
      setisLovedProduct(false); // Provide an empty array if no products exist
    }
  }, [lovedProducts]);

  const saveProductToUserHandler = async () => {
    dispatch(addLovedProduct(product));
    await saveProductToUser(product);
  };

  const unSaveProductToUserHandler = async () => {
    dispatch(removeLovedProduct(product));
    await unSaveProductToUser(product);
  };
  return (
    <TouchableOpacity
      onPress={() => {
        navigation.navigate("productDetails", { productDetails: product });
      }}
      activeOpacity={0.7}
    >
      <LinearGradient
        start={{ x: 0, y: 0 }}
        end={{ x: 1, y: 1 }}
        colors={["#252A32", "#0C0F14"]}
        className="border-2 flex-row mx-4 border-secondaryDarkGreyHex rounded-xl bg-secondaryDarkGreyHex  "
      >
        <Image
          source={{ uri: product.images[0] }}
          className="w-32 h-36 rounded-l-xl bg-red-800"
        />
        <View className="pt-2 ml-4 flex-1 ">
          <Text
            className="text-white font-semibold text-xl max-w-[200px]"
            numberOfLines={1}
          >
            {product.title}
          </Text>
          <Text
            className="text-gray-400 font-semibold text-xm max-w-[200px]"
            numberOfLines={1}
          >
            {product.description}
          </Text>
          <View className="flex-row items-center pt-2 space-x-2">
            <Icons.StarIcon size={24} color={"#D17842"} />
            <Text className=" text-white text-lg font-bold">
              {product.rate}
            </Text>
            <Text className=" text-gray-400 text-base">
              ({product.numberOfRates})
            </Text>
          </View>
          <Text className="text-white font-bold text-xl pt-4">
            <Text className="text-primary text-lg">EGP </Text>
            {product.price}
          </Text>
        </View>
        <View className="mt-auto -mb-4 mr-4  h-auto w-auto">
          <LoveIcon
            onPress={() => {
              if (isLovedProduct) {
                unSaveProductToUserHandler();
              } else {
                saveProductToUserHandler();
              }
            }}
            isPressed={isLovedProduct}
          />
        </View>
      </LinearGradient>
    </TouchableOpacity>
  );
};

export default ShopProductCard;

const styles = StyleSheet.create({});
