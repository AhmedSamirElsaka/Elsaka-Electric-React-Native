import { StyleSheet, Text, View } from "react-native";
import React, { useState } from "react";
import { Product } from "@/types/types";
import { FlatList } from "react-native";
import ShopProductCard from "./ShopProductCard";
import HomeProductCard from "./HomeProductCard";
import { useNavigation } from "@react-navigation/native";

const ShopProductList = ({
  products,
  isHorizontal,
  navigation,
}: {
  products: Product[];
  isHorizontal?: boolean;
  navigation: any;
}) => {
  const [Horizontal, setHorizontal] = useState(isHorizontal);

  // console.log(products, "products");
  return (
    <View>
      {!isHorizontal ? (
        <FlatList
          data={products}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => (
            <HomeProductCard product={item} navigation={navigation} />
          )}
          ItemSeparatorComponent={() => <View className="h-6" />}
          className="pt-4"
          numColumns={2}
          columnWrapperStyle={{ justifyContent: "space-around" }}
          key={1}
        />
      ) : (
        <FlatList
          data={products}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => (
            <ShopProductCard product={item} navigation={navigation} />
          )}
          ItemSeparatorComponent={() => <View className="h-6" />}
          className="pt-2"
          key={2}
        />
      )}
    </View>
  );
};

export default ShopProductList;

const styles = StyleSheet.create({});
