import {
  FlatList,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import React, { useState } from "react";
import MainCategoryNavItem from "./MainCategoryNavItem";

const ElectricShopCategoriesNavList = ({
  mainCategories,
  selectedItem = mainCategories[0],
}: {
  mainCategories: string[];
  selectedItem?: string;
}) => {
  const [selectedItemState, setSelectedItemState] = useState(selectedItem);
  const renderItem = (item: string) => {
    return (
      <TouchableOpacity
        onPress={() => setSelectedItemState(item)}
        activeOpacity={0.7}
      >
        <MainCategoryNavItem
          category={item}
          isSelected={item === selectedItemState}
        />
      </TouchableOpacity>
    );
  };
  return (
    <View>
      <FlatList
        data={mainCategories}
        keyExtractor={(item) => item}
        renderItem={({ item }) => renderItem(item)}
        horizontal
        showsHorizontalScrollIndicator={false}
      />
    </View>
  );
};

export default ElectricShopCategoriesNavList;

const styles = StyleSheet.create({});
