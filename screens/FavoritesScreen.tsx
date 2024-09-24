import { FlatList, StatusBar, StyleSheet, Text, View } from "react-native";
import React, { useEffect, useState } from "react";
import Header from "@/components/Header";
import FavoriteProductCard from "@/components/FavoriteProductCard";
import { useSelector } from "react-redux";
import { selectLovedProducts } from "@/features/lovedProdcutsSlice"; // Corrected import
import { Product } from "@/types/types";

const FavoritesScreen = ({ navigation }: { navigation: any }) => {
  const [productsToShow, setProductsToShow] = useState<Product[]>([]);
  const lovedProducts = useSelector(selectLovedProducts);

  const [isLoading, setIsLoading] = useState(productsToShow.length === 0);

  useEffect(() => {
    if (lovedProducts && lovedProducts.length > 0) {
      const updatedProducts = lovedProducts.map((product: Product) => ({
        id: product.id,
        title: product.title,
        description: product.description,
        images: product.images,
        price: product.price,
        rate: product.rate,
        numberOfRates: product.numberOfRates,
        category: product.category,
        productSize: product.productSize,
      }));
      setProductsToShow([...updatedProducts]); // Create a new array reference
    }
  }, [lovedProducts]);

  return (
    <View className="flex-1 bg-mainBackground pt-4">
      <StatusBar
        barStyle="light-content"
        backgroundColor="#0C0F14"
        hidden={false}
      />
      <Header title="Favorites" />

      <FlatList
        data={productsToShow}
        keyExtractor={(item, index) => index.toString()}
        initialNumToRender={3}
        renderItem={({ item }) => (
          <FavoriteProductCard
            product={item}
            itemkey={item.title}
            navigation={navigation}
          />
        )}
      />
    </View>
  );
};

export default FavoritesScreen;
