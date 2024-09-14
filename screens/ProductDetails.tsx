import {
  Image,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import React, { useState } from "react";
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
import { Icon } from "@rneui/themed";
import ReviewCard from "@/components/ReviewCard";
import ProductReviewsSection from "@/components/ProductReviewsSection";
import ProductRatingSection from "@/components/ProductRatingSection";

const ProductDetails = ({ product }: { product: Product }) => {
  const [isReviewsWithPhotoShown, setIsReviewsWithPhotoShown] = useState(true);
  const data = [
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
  ];
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
          <ProductRatingSection product={product} />
          <Text className="text-white font-bold text-2xl px-6 pt-8">
            You can also like this
          </Text>

          <FlatList
            data={data}
            keyExtractor={(item) => item.id}
            renderItem={({ item }) => {
              return <HomeProductCard product={item} />;
            }}
            showsHorizontalScrollIndicator={false}
            ItemSeparatorComponent={() => <View className="w-4" />}
            className="mx-4 pt-4"
            horizontal
          />
          <ProductReviewsSection data={data} />
        </View>
      </ScrollView>

      <TouchableOpacity className="items-end bg-[#fff0] -mt-12">
        <View className="px-6 py-4 bg-primary rounded-full w-44 flex-row space-x-2 items-center content-center">
          <Icons.PencilIcon size={20} color={"#FFFFFF"} />
          <Text className="text-white font-bold text-center">
            Write A Review
          </Text>
        </View>
      </TouchableOpacity>
      <View className="flex-row  pt-4 justify-between mb-4">
        <View className="justify-center items-center pr-10  pl-6">
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
          containerStyles="bg-primary flex-1 mr-6"
        />
      </View>
    </View>
  );
};

export default ProductDetails;

const styles = StyleSheet.create({});
