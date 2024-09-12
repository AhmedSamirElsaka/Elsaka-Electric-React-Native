import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { Product } from "@/types/types";
import { FlatList } from "react-native";

const ShopProductList = ({ items }: { items: Product[] }) => {
  return (
    <View>
      <FlatList
        data={items}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => <ShopProductCard product={item} />}
      />
    </View>
  );
};

export default ShopProductList;

const styles = StyleSheet.create({});
