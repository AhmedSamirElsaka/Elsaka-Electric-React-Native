import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React, { useState } from "react";
import { FlatList } from "react-native-gesture-handler";

const CategoriesList = ({
  categories,
  selectedItem,
}: {
  categories: string[];
  selectedItem: string;
}) => {
  const [selectedItemState, setSelectedItemState] = useState(selectedItem);
  const renderItem = (item: string) => {
    return (
      <TouchableOpacity
        onPress={() => setSelectedItemState(item)}
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
        renderItem={({ item }) => renderItem(item)}
        horizontal
        ItemSeparatorComponent={() => <View className="w-4" />}
      />
    </View>
  );
};

export default CategoriesList;

const styles = StyleSheet.create({});
