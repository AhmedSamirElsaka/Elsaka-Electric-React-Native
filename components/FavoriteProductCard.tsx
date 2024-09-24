import {
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import React, { PureComponent } from "react";
import { Product } from "@/types/types";
import CategoryIcon from "./CategoryIcon";
import * as Icons from "react-native-heroicons/solid";
import { LinearGradient } from "expo-linear-gradient";
import LoveIcon from "./LoveIcon";
import { useNavigation } from "@react-navigation/native";
import { useDispatch } from "react-redux";
import { removeLovedProduct } from "@/features/lovedProdcutsSlice";
import { unSaveProductToUser } from "@/lib/appwrite";

const FavoriteProductCard = ({
  product,
  navigation,
  itemkey,
}: {
  product: Product;
  navigation: any;
  itemkey: string;
}) => {
  const dispatch = useDispatch();

  const unSaveProductToUserHandler = async () => {
    console.log(product);
    dispatch(removeLovedProduct(product));
    await unSaveProductToUser(product);
  };

  return (
    <TouchableOpacity
      className="flex-1 p-4"
      onPress={() => {
        navigation.push("productDetails", { productDetails: product });
      }}
      activeOpacity={0.7}
      key={itemkey}
    >
      <View className="flex-row">
        <Image
          source={{ uri: product.images[0] }}
          className="w-full h-[50vh] rounded-tr-3xl rounded-tl-3xl"
        />
        <View className="w-11 h-auto z-50 -ml-16 mt-6">
          <LoveIcon
            onPress={() => {
              unSaveProductToUserHandler();
            }}
            isPressed={true}
          />
        </View>
      </View>

      <View className="h-40 bg-mainBackground -mt-40 opacity-[0.7] rounded-tr-3xl rounded-tl-3xl flex-row">
        <View className="px-6">
          <Text
            className="text-white font-bold text-2xl pt-4 max-w-[240px] "
            numberOfLines={2}
          >
            {product.title}
          </Text>
          <Text className="text-gray-300 max-w-[240px]" numberOfLines={1}>
            {product.description}
          </Text>
          <View className="flex-row items-center pt-6 space-x-2">
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
          {product.category
            ?.filter((element) => element.name != "All")
            .map((element) => (
              <View className="mr-2" key={element.id}>
                <CategoryIcon category={element} />
              </View>
            ))}
        </View>
      </View>
      <LinearGradient
        start={{ x: 0, y: 0 }}
        end={{ x: 1, y: 1 }}
        colors={["#252A32", "#0C0F14"]}
        className="border-2 border-secondaryDarkGreyHex rounded-b-3xl bg-secondaryDarkGreyHex p-2"
      >
        <View className="pb-4">
          <Text className="text-white font-bold text-xl px-6 pt-2">
            Description
          </Text>
          <Text
            className="text-gray-200 px-6 pt-4"
            ellipsizeMode="tail"
            numberOfLines={5}
          >
            {product.description}
          </Text>
        </View>
      </LinearGradient>
    </TouchableOpacity>
  );
};

export default FavoriteProductCard;

const styles = StyleSheet.create({});
