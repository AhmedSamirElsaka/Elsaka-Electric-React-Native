import {
  FlatList,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  View,
} from "react-native";
import React, { useEffect, useState } from "react";
import Header from "@/components/Header";
import SearchInput from "@/components/SearchInput";
import CategoriesList, { shuffle } from "@/components/CategoriesList";

import BackIcon from "@/components/BackIcon";
import useAppwrite from "@/lib/useAppwrite";
import { getAllCategories, getAllProducts } from "@/lib/appwrite";
import { Category, Product } from "@/types/types";
import HomeProductList from "@/components/HomeProductList";

const HomeScreen = ({ navigation }: { navigation: any }) => {
  const {
    data: categories,
    refetch: refetchCategories,
  }: { data: Category[]; refetch: () => void } = useAppwrite(getAllCategories);

  const {
    data: products,
    refetch: refetchProducts,
  }: { data: Product[]; refetch: () => void } = useAppwrite(getAllProducts);

  // Check if categories are loaded before accessing them
  const [productsToShow, setProductsToShow] = useState<Product[]>([]);

  useEffect(() => {
    // Check if categories and products exist before setting state
    if (products.length > 0 && products) {
      setProductsToShow(
        shuffle(
          products.map((product) => {
            return {
              id: product.id,
              title: product.title,
              description: product.description,
              images: product.images,
              price: product.price,
              rate: product.rate,
              numberOfRates: product.numberOfRates,
              category: product.category,
              productSize: product.productSize,
            };
          })
        )
      );
    } else {
      setProductsToShow([]); // Provide an empty array if no products exist
    }
  }, [products]);

  return (
    <View className="flex-1  bg-mainBackground pt-4 pb-4">
      <StatusBar barStyle="light-content" backgroundColor={"#0C0F14"} />
      <Header title="Home" />
      <ScrollView>
        <View className="flex-1  bg-mainBackground">
          <Text className="text-white font-bold text-2xl pl-8 pr-12 pt-4">
            Find the best
            <Text className="text-primary"> Electrical Product</Text> for your
            home
          </Text>

          <View className="pt-8 px-6 mb-8">
            <SearchInput initialQuery={""} />
          </View>

          <View className="px-6">
            <CategoriesList
              categories={categories}
              selectedItem="All"
              onChangeCategory={(selectedItem) => {
                setProductsToShow(
                  products.filter(
                    (product) =>
                      Array.isArray(product.category) &&
                      product.category.some((cat) => cat.name === selectedItem)
                  )
                );
              }}
            />
          </View>

          <HomeProductList
            title=""
            items={shuffle(productsToShow)}
            navigation={navigation}
          />
          <HomeProductList
            title="New"
            items={shuffle(products)}
            navigation={navigation}
          />
          <HomeProductList
            title="Sale"
            items={shuffle(products)}
            navigation={navigation}
          />
          <HomeProductList
            title="Featured"
            items={shuffle(products)}
            navigation={navigation}
          />
          <HomeProductList
            title="Trending"
            items={shuffle(products)}
            navigation={navigation}
          />
          <HomeProductList
            title="Best Selling"
            items={shuffle(products)}
            navigation={navigation}
          />
          <HomeProductList
            title="Top Rated"
            items={shuffle(products)}
            navigation={navigation}
          />
        </View>
      </ScrollView>
    </View>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({});
