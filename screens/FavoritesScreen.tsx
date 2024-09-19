import { FlatList, StatusBar, StyleSheet, Text, View } from "react-native";
import React, { useEffect, useState } from "react";
import Header from "@/components/Header";
import FavoriteProductCard from "@/components/FavoriteProductCard";
import useAppwrite from "@/lib/useAppwrite";
import { getUserLovedProducts } from "@/lib/appwrite";
import { Product } from "@/types/types";
import { useSelector } from "react-redux";
import { selectLovedProducts } from "@/features/lovedProdcutsSlice";

const FavoritesScreen = ({ navigation }: { navigation: any }) => {
  const [productsToShow, setProductsToShow] = useState<Product[]>([]);

  const lovedProducts = useSelector(selectLovedProducts).lovedProducts;

  console.log(lovedProducts);
  useEffect(() => {
    // Check if categories and products exist before setting state
    if (lovedProducts.length > 0 && lovedProducts) {
      setProductsToShow(
        lovedProducts.map((product: Product) => {
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
      );
    } else {
      setProductsToShow([]); // Provide an empty array if no products exist
    }
  }, [lovedProducts]);

  return (
    <View className="flex-1  bg-mainBackground pt-4">
      <StatusBar
        barStyle="light-content"
        backgroundColor={"#0C0F14"}
        hidden={false}
      />
      <Header title="Favorites" />
      <FlatList
        data={productsToShow}
        keyExtractor={(product) => product.id}
        renderItem={({ item }) => (
          <FavoriteProductCard
            product={item}
            key={item.id}
            navigation={navigation}
          />
        )}
      />
    </View>
  );
};

export default FavoritesScreen;
