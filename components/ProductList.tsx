import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { Product } from "@/types/types";
import { FlatList } from "react-native-gesture-handler";
import ProductCard from "./ProductCard";

const ProductList = ({ title, items }: { title: String; items: Product[] }) => {
  return (
    <View className="px-6 mt-4 space-y-2">
      <Text className="text-2xl font-semibold text-white">{title}</Text>

      <FlatList
        data={items}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => <ProductCard product={item} />}
        showsVerticalScrollIndicator={false}
        horizontal
      />
    </View>
  );
};

export default ProductList;

const styles = StyleSheet.create({});
