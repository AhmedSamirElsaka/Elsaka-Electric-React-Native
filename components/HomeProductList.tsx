import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { Product } from "@/types/types";
import { FlatList } from "react-native-gesture-handler";
import HomeProductCard from "./HomeProductCard";

const HomeProductList = ({
  title,
  items,
  navigation,
}: {
  title: String;
  items: Product[];
  navigation: any;
}) => {
  return (
    <View className="px-6 mt-6 space-y-2">
      {title && (
        <Text className="text-2xl font-semibold text-white">{title}</Text>
      )}

      <FlatList
        data={items}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          // console.log(item),
          <HomeProductCard product={item} navigation={navigation} />
        )}
        showsVerticalScrollIndicator={false}
        horizontal
        ItemSeparatorComponent={() => <View className="w-4" />}
      />
    </View>
  );
};

export default HomeProductList;

const styles = StyleSheet.create({});
