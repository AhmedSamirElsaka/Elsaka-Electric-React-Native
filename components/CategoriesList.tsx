import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React, { useState } from "react";
import { FlatList } from "react-native-gesture-handler";
import { Category, Product } from "@/types/types";

const CategoriesList = ({
  categories,
  selectedItem,
  onChangeCategory,
}: {
  categories: Category[];
  selectedItem: string;
  onChangeCategory: (selectedItem: string) => void;
}) => {
  // console.log(categories);
  const [selectedItemState, setSelectedItemState] = useState(selectedItem);
  const renderItem = (item: string) => {
    return (
      <TouchableOpacity
        onPress={() => {
          setSelectedItemState(item);
          onChangeCategory(item);
        }}
        activeOpacity={0.7}
      >
        <View className=" items-center space-y-1">
          <Text
            className={`text-gray-200 text-lg ${
              item === selectedItemState && "text-primary"
            }`}
          >
            {item}
          </Text>
          {item === selectedItemState && (
            <View className="w-2 h-2 rounded-full bg-primary" />
          )}
        </View>
      </TouchableOpacity>
    );
  };
  return (
    <View>
      <FlatList
        data={categories}
        renderItem={({ item }) => renderItem(item.name)}
        horizontal
        ItemSeparatorComponent={() => <View className="w-4" />}
      />
    </View>
  );
};

export default CategoriesList;

const styles = StyleSheet.create({});
export function shuffle(array: any) {
  // Create a copy of the array to avoid modifying the original array
  let shuffledArray = array.slice();

  // Fisher-Yates shuffle algorithm
  for (let i = shuffledArray.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    // Swap elements at i and j
    [shuffledArray[i], shuffledArray[j]] = [shuffledArray[j], shuffledArray[i]];
  }

  return shuffledArray;
}
