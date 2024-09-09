import {
  Image,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  View,
} from "react-native";
import React from "react";
import BackIcon from "../components/BackIcon";
import LoveIcon from "../components/LoveIcon";
import { Product } from "@/types/types";
import * as Icons from "react-native-heroicons/solid";
import CategoryIcon from "../components/CategoryIcon";
import ProductSizeComponent from "../components/ProductSizeComponent";
import { FlatList } from "react-native-gesture-handler";
import CustomButton from "../components/CustomButton";

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
            <Icons.StarIcon size={30} color={"#D17842"} />
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
      <ScrollView>
        <View className="pb-4">
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

          <View className="px-6 pt-2">
            <FlatList
              data={product.productSize}
              renderItem={({ item }) => (
                <ProductSizeComponent productSize={item} />
              )}
              keyExtractor={(item) => item.size}
              horizontal
              showsHorizontalScrollIndicator={false}
              ItemSeparatorComponent={() => <View className="w-6" />}
            />
          </View>
          <View className="flex-row px-6 pt-8 justify-between">
            <View className="justify-center items-center">
              <Text className="text-white font-bold text-lg">Price</Text>
              <Text className="text-white font-bold text-xl">
                <Text className="text-primary text-2xl">$ </Text>
                {10.5}
              </Text>
            </View>
            <CustomButton
              title="Add To Cart"
              handlePress={() => {}}
              textStyles="text-white text-lg text-bold"
              containerStyles="bg-primary flex-1 ml-8"
            />
          </View>
        </View>
      </ScrollView>
    </View>
  );
};

export default ProductDetails;

const styles = StyleSheet.create({});
