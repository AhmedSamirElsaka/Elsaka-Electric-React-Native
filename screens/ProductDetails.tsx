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
import ProductCardCount from "@/components/ProductCardCount";
import HomeProductCard from "@/components/HomeProductCard";

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
      <ScrollView className="w-full h-[60vh] -mt-20">
        <Image
          source={{ uri: product.image }}
          className="w-full h-[60vh] -mt-20"
        />
        <View className="h-40 bg-mainBackground -mt-40 opacity-[0.7] rounded-tr-3xl rounded-tl-3xl flex-row">
          <View className="px-6">
            <Text className="text-white font-bold text-2xl pt-4">
              Cappuccino
            </Text>
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
          <View className="flex-1 flex-row justify-between pl-10 pr-6 pt-4">
            {product.category?.map((element) => (
              <CategoryIcon category={element} key={element.id} />
            ))}
          </View>
        </View>
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
          <Text className="text-white font-bold text-xl px-6 pt-6">Size</Text>

          <View className="px-6 pt-4">
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
          <Text className="text-white font-bold text-2xl px-6 pt-10">
            Rating&Reviews
          </Text>
          <View className="pt-8 px-6 justify-between w-auto flex-row items-center">
            <View className=" w-auto -mt-12">
              <Text className="text-white font-bold text-3xl ">
                {product.rate}
              </Text>
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

          <Text className="text-white font-bold text-2xl px-6 pt-10">
            20 Reviews
          </Text>

          <Text className="text-white font-bold text-2xl px-6 pt-8">
            You can also like this
          </Text>

          <FlatList
            data={[
              {
                id: "1",
                title: "Electrical Product",
                price: "10000",
                image:
                  "https://cdn.britannica.com/88/212888-050-6795342C/study-lamp-electrical-cord.jpg",
                description: "Electrical Product Description",
                rate: "4.5",
                numberOfRates: "6534",
                category: [],
                productSize: [
                  {
                    size: "250",
                    unit: "gm",
                    price: "10000",
                  },
                  {
                    size: "500",
                    unit: "gm",
                    price: "10000",
                  },
                  {
                    size: "750",
                    unit: "gm",
                    price: "10000",
                  },
                  {
                    size: "1",
                    unit: "kg",
                    price: "10000",
                  },
                ],
              },
              {
                id: "12",
                title: "Electrical Product",
                price: "10000",
                image:
                  "https://cdn.britannica.com/88/212888-050-6795342C/study-lamp-electrical-cord.jpg",
                description: "Electrical Product Description",
                rate: "4.5",
                numberOfRates: "6534",
                category: [],
                productSize: [
                  {
                    size: "250",
                    unit: "gm",
                    price: "10000",
                  },
                  {
                    size: "500",
                    unit: "gm",
                    price: "10000",
                  },
                  {
                    size: "750",
                    unit: "gm",
                    price: "10000",
                  },
                  {
                    size: "1",
                    unit: "kg",
                    price: "10000",
                  },
                ],
              },
              {
                id: "14",
                title: "Electrical Product",
                price: "10000",
                image:
                  "https://cdn.britannica.com/88/212888-050-6795342C/study-lamp-electrical-cord.jpg",
                description: "Electrical Product Description",
                rate: "4.5",
                numberOfRates: "6534",
                category: [],
                productSize: [
                  {
                    size: "250",
                    unit: "gm",
                    price: "10000",
                  },
                  {
                    size: "500",
                    unit: "gm",
                    price: "10000",
                  },
                  {
                    size: "750",
                    unit: "gm",
                    price: "10000",
                  },
                  {
                    size: "1",
                    unit: "kg",
                    price: "10000",
                  },
                ],
              },
              {
                id: "16",
                title: "Electrical Product",
                price: "10000",
                image:
                  "https://cdn.britannica.com/88/212888-050-6795342C/study-lamp-electrical-cord.jpg",
                description: "Electrical Product Description",
                rate: "4.5",
                numberOfRates: "6534",
                category: [],
                productSize: [
                  {
                    size: "250",
                    unit: "gm",
                    price: "10000",
                  },
                  {
                    size: "500",
                    unit: "gm",
                    price: "10000",
                  },
                  {
                    size: "750",
                    unit: "gm",
                    price: "10000",
                  },
                  {
                    size: "1",
                    unit: "kg",
                    price: "10000",
                  },
                ],
              },
              {
                id: "17",
                title: "Electrical Product",
                price: "10000",
                image:
                  "https://cdn.britannica.com/88/212888-050-6795342C/study-lamp-electrical-cord.jpg",
                description: "Electrical Product Description",
                rate: "4.5",
                numberOfRates: "6534",
                category: [],
                productSize: [
                  {
                    size: "250",
                    unit: "gm",
                    price: "10000",
                  },
                  {
                    size: "500",
                    unit: "gm",
                    price: "10000",
                  },
                  {
                    size: "750",
                    unit: "gm",
                    price: "10000",
                  },
                  {
                    size: "1",
                    unit: "kg",
                    price: "10000",
                  },
                ],
              },
              {
                id: "18",
                title: "Electrical Product",
                price: "10000",
                image:
                  "https://cdn.britannica.com/88/212888-050-6795342C/study-lamp-electrical-cord.jpg",
                description: "Electrical Product Description",
                rate: "4.5",
                numberOfRates: "6534",
                category: [],
                productSize: [
                  {
                    size: "250",
                    unit: "gm",
                    price: "10000",
                  },
                  {
                    size: "500",
                    unit: "gm",
                    price: "10000",
                  },
                  {
                    size: "750",
                    unit: "gm",
                    price: "10000",
                  },
                  {
                    size: "1",
                    unit: "kg",
                    price: "10000",
                  },
                ],
              },
              {
                id: "19",
                title: "Electrical Product",
                price: "10000",
                image:
                  "https://cdn.britannica.com/88/212888-050-6795342C/study-lamp-electrical-cord.jpg",
                description: "Electrical Product Description",
                rate: "4.5",
                numberOfRates: "6534",
                category: [],
                productSize: [
                  {
                    size: "250",
                    unit: "gm",
                    price: "10000",
                  },
                  {
                    size: "500",
                    unit: "gm",
                    price: "10000",
                  },
                  {
                    size: "750",
                    unit: "gm",
                    price: "10000",
                  },
                  {
                    size: "1",
                    unit: "kg",
                    price: "10000",
                  },
                ],
              },
              {
                id: "10",
                title: "Electrical Product",
                price: "10000",
                image:
                  "https://cdn.britannica.com/88/212888-050-6795342C/study-lamp-electrical-cord.jpg",
                description: "Electrical Product Description",
                rate: "4.5",
                numberOfRates: "6534",
                category: [],
                productSize: [
                  {
                    size: "250",
                    unit: "gm",
                    price: "10000",
                  },
                  {
                    size: "500",
                    unit: "gm",
                    price: "10000",
                  },
                  {
                    size: "750",
                    unit: "gm",
                    price: "10000",
                  },
                  {
                    size: "1",
                    unit: "kg",
                    price: "10000",
                  },
                ],
              },
              {
                id: "100",
                title: "Electrical Product",
                price: "10000",
                image:
                  "https://cdn.britannica.com/88/212888-050-6795342C/study-lamp-electrical-cord.jpg",
                description: "Electrical Product Description",
                rate: "4.5",
                numberOfRates: "6534",
                category: [],
                productSize: [
                  {
                    size: "250",
                    unit: "gm",
                    price: "10000",
                  },
                  {
                    size: "500",
                    unit: "gm",
                    price: "10000",
                  },
                  {
                    size: "750",
                    unit: "gm",
                    price: "10000",
                  },
                  {
                    size: "1",
                    unit: "kg",
                    price: "10000",
                  },
                ],
              },
              {
                id: "146",
                title: "Electrical Product",
                price: "10000",
                image:
                  "https://cdn.britannica.com/88/212888-050-6795342C/study-lamp-electrical-cord.jpg",
                description: "Electrical Product Description",
                rate: "4.5",
                numberOfRates: "6534",
                category: [],
                productSize: [
                  {
                    size: "250",
                    unit: "gm",
                    price: "10000",
                  },
                  {
                    size: "500",
                    unit: "gm",
                    price: "10000",
                  },
                  {
                    size: "750",
                    unit: "gm",
                    price: "10000",
                  },
                  {
                    size: "1",
                    unit: "kg",
                    price: "10000",
                  },
                ],
              },
              {
                id: "1345",
                title: "Electrical Product",
                price: "10000",
                image:
                  "https://cdn.britannica.com/88/212888-050-6795342C/study-lamp-electrical-cord.jpg",
                description: "Electrical Product Description",
                rate: "4.5",
                numberOfRates: "6534",
                category: [],
                productSize: [
                  {
                    size: "250",
                    unit: "gm",
                    price: "10000",
                  },
                  {
                    size: "500",
                    unit: "gm",
                    price: "10000",
                  },
                  {
                    size: "750",
                    unit: "gm",
                    price: "10000",
                  },
                  {
                    size: "1",
                    unit: "kg",
                    price: "10000",
                  },
                ],
              },
            ]}
            keyExtractor={(item) => item.id}
            renderItem={({ item }) => {
              return <HomeProductCard product={item} />;
            }}
            showsHorizontalScrollIndicator={false}
            ItemSeparatorComponent={() => <View className="w-4" />}
            className="mx-4 pt-4"
            horizontal
          />
        </View>
      </ScrollView>
      <View className="flex-row px-6 pt-8 justify-between mb-4">
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
  );
};

export default ProductDetails;

const styles = StyleSheet.create({});
