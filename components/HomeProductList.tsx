import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";
import { Product } from "@/types/types";
import { FlatList } from "react-native-gesture-handler";
import HomeProductCard from "./HomeProductCard";

const HomeProductList = ({
  title,
  items,
  navigation,
  isSeeAll = false,
}: {
  title: String;
  items: Product[];
  navigation: any;
  isSeeAll?: boolean;
}) => {
  return (
    <View className="space-y-4">
      <View className="flex-row items-center justify-between px-4">
        {title && (
          <Text className="text-xl font-bold text-white ml-4">{title}</Text>
        )}

        {isSeeAll && (
          <TouchableOpacity
            className="flex-row items-center"
            onPress={() => navigation.navigate("productsScreen")}
            activeOpacity={0.7}
          >
            <Text className="text-primary text-base ">See All</Text>
          </TouchableOpacity>
        )}
      </View>

      <View className="pl-4 ">
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
    </View>
  );
};

export default HomeProductList;

const styles = StyleSheet.create({});
