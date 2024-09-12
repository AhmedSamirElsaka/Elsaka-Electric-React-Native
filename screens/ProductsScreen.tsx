import { FlatList, StatusBar, StyleSheet, Text, View } from "react-native";
import React from "react";
import Header from "@/components/Header";
import * as Icons from "react-native-heroicons/solid";
import { Icon } from "react-native-elements";
import HomeProductList from "@/components/HomeProductList";
import ShopProductList from "@/components/ShopProductList";

const ProductsScreen = () => {
  return (
    <View className="flex-1 bg-mainBackground pt-4">
      <StatusBar barStyle="light-content" backgroundColor={"#0C0F14"} />
      <Header title="Lightning" />
      <View className="pt-4 flex-row justify-between px-4">
        <View className="flex-row space-x-2">
          <Icon name="filter" type="ionicon" color="white" size={24} />
          <Text className="text-white  text-base ">Filters</Text>
        </View>
        <View className="flex-row space-x-2">
          <Icons.ArrowsUpDownIcon size={24} color="white" />
          <Text className="text-white  text-base ">Popular</Text>
        </View>
        <Icon
          name="view-module"
          type="material-icons"
          color="white"
          size={24}
        />
        {/* <Icon
          name="view-list"
          type="material-icons"
          color="white"
          size={24}
        /> */}
      </View>
      <ShopProductList
        items={[
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
        isHorizontal={true}
      />
    </View>
  );
};

export default ProductsScreen;

const styles = StyleSheet.create({});
