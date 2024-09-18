import { FlatList, StatusBar, StyleSheet, Text, View } from "react-native";
import React, { useEffect, useState } from "react";
import Header from "@/components/Header";
import ElectricShopCategoriesNavList from "@/components/ElectricShopCategoriesNavList";
import ShopCategoryCard from "@/components/ShopCategoryCard";
import { getShopScreenCategories } from "@/lib/appwrite";
import useAppwrite from "@/lib/useAppwrite";
import { Category, Product } from "@/types/types";
import { shuffle } from "@/components/CategoriesList";

const ShopScreen = () => {
  const {
    data: categories,
    refetch: refetchCategories,
  }: { data: Category[]; refetch: () => void } = useAppwrite(
    getShopScreenCategories
  );

  // const [productsToShow, setProductsToShow] = useState<Product[]>([]);

  // useEffect(() => {
  //   // Check if categories and products exist before setting state
  //   if (categories.length > 0 && categories) {
  //     setProductsToShow(
  //       shuffle(
  //         categories.map((product) => {
  //           return {
  //             id: product.id,
  //             title: product.title,
  //             description: product.description,
  //             images: product.images,
  //             price: product.price,
  //             rate: product.rate,
  //             numberOfRates: product.numberOfRates,
  //             category: product.category,
  //             productSize: product.productSize,
  //           };
  //         })
  //       )
  //     );
  //   } else {
  //     setProductsToShow([]); // Provide an empty array if no products exist
  //   }
  // }, [products]);
  return (
    <View className="flex-1 bg-mainBackground pt-4">
      <StatusBar barStyle="light-content" backgroundColor={"#0C0F14"} />
      <Header title="Categories" />
      <View className="pt-4">
        <ElectricShopCategoriesNavList
          mainCategories={categories}
          selectedItem="Best Sellers"
        />
      </View>
      <View className="rounded-lg bg-primary content-center items-center mx-4 mt-4 py-8">
        <Text className="text-white font-semibold text-3xl ">SUMMER SALES</Text>
        <Text className="text-white text-base"> Get 50% OFF</Text>
      </View>
      <FlatList
        data={categories}
        // data={[
        //   {
        //     id: "1",

        //     name: "Electrical",
        //     icon: require("../assets/images/imageDemo.png"),
        //   },
        //   {
        //     id: "2",

        //     name: "Electrical",
        //     icon: require("../assets/images/imageDemo.png"),
        //   },
        //   {
        //     id: "3",

        //     name: "Electrical",
        //     icon: require("../assets/images/imageDemo.png"),
        //   },
        //   {
        //     id: "321",

        //     name: "Electrical",
        //     icon: require("../assets/images/imageDemo.png"),
        //   },
        //   {
        //     id: "4",

        //     name: "Electrical",
        //     icon: require("../assets/images/imageDemo.png"),
        //   },
        //   {
        //     id: "5",

        //     name: "Electrical",
        //     icon: require("../assets/images/imageDemo.png"),
        //   },
        //   {
        //     id: "6",

        //     name: "Electrical",
        //     icon: require("../assets/images/imageDemo.png"),
        //   },
        //   {
        //     id: "7",
        //     name: "Electrical",
        //     icon: require("../assets/images/imageDemo.png"),
        //   },
        // ]}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => {
          return <ShopCategoryCard category={item} />;
        }}
        showsHorizontalScrollIndicator={false}
        ItemSeparatorComponent={() => <View className="h-4" />}
        className="mx-4 pt-4"
      />
    </View>
  );
};

export default ShopScreen;

const styles = StyleSheet.create({});
