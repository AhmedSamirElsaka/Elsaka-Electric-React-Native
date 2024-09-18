import {
  FlatList,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import React, { useState } from "react";
import MainCategoryNavItem from "./MainCategoryNavItem";
import { Category } from "@/types/types";

const ElectricShopCategoriesNavList = ({
  mainCategories,
  selectedItem,
  onChangeCategory,
}: {
  mainCategories: Category[];
  selectedItem?: string;
  onChangeCategory: (selectedItem: string) => void;
}) => {
  console.log(mainCategories);
  const [selectedItemState, setSelectedItemState] = useState(selectedItem);
  const renderItem = (item: Category) => {
    return (
      <TouchableOpacity
        onPress={() => {
          setSelectedItemState(item.name);
          onChangeCategory(item.name);
        }}
        activeOpacity={0.7}
      >
        <MainCategoryNavItem
          category={item}
          isSelected={item.name === selectedItemState}
        />
      </TouchableOpacity>
    );
  };
  return (
    <View>
      <FlatList
        data={mainCategories}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => renderItem(item)}
        horizontal
        showsHorizontalScrollIndicator={false}
      />
    </View>
  );
};

export default ElectricShopCategoriesNavList;

const styles = StyleSheet.create({});
