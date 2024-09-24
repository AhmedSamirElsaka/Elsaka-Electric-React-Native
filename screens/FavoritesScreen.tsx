import { FlatList, StatusBar, StyleSheet, Text, View } from "react-native";
import React, { useEffect, useState } from "react";
import Header from "@/components/Header";
import FavoriteProductCard from "@/components/FavoriteProductCard";
import { useSelector } from "react-redux";
import { selectLovedProducts } from "@/features/lovedProdcutsSlice"; // Corrected import
import { Product } from "@/types/types";
import Loading from "@/components/Loading";
import Empty from "@/components/Empty";

const FavoritesScreen = ({ navigation }: { navigation: any }) => {
  const [productsToShow, setProductsToShow] = useState<Product[]>([]);
  const lovedProducts = useSelector(selectLovedProducts);

  const [isLoading, setIsLoading] = useState(productsToShow.length === 0);
  const [isEmpty, setIsEmpty] = useState(true);

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
      setIsLoading(false);
      setIsEmpty(false);
    } else if (lovedProducts && lovedProducts.length === 0) {
      setIsEmpty(true);
    }
  }, [lovedProducts]);

  // if (isLoading) {
  //   return (
  //     <View className="flex-1  bg-mainBackground">
  //       <Loading />
  //     </View>
  //   );
  // }

  if (isEmpty) {
    return (
      <View className="flex-1  bg-mainBackground">
        <Empty />
      </View>
    );
  }
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
