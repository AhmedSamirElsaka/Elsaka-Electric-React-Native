import { FlatList, StyleSheet, Text, View } from "react-native";
import React from "react";
import MainCategoryItem from "./MainCategoryItem";

const ElectricShopCategoriesList = ({
  mainCategories,
}: {
  mainCategories: string[];
}) => {
  return (
    <View>
      <FlatList
        data={mainCategories}
        keyExtractor={(item) => item}
        renderItem={({ item }) => <MainCategoryItem category={item} />}
      />
    </View>
  );
};

export default ElectricShopCategoriesList;

const styles = StyleSheet.create({});
