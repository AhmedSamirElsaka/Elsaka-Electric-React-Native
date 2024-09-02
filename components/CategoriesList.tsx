import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { FlatList } from "react-native-gesture-handler";

const CategoriesList = ({
  categories,
  selectedItem,
}: {
  categories: string[];
  selectedItem: string;
}) => {
  const renderItem = (item: string) => {
    return (
      <View className=" items-center space-y-1">
        <Text
          className={`text-gray-200 text-lg ${
            item === selectedItem && "text-primary"
          }`}
        >
          {item}
        </Text>
        {item === selectedItem && (
          <View className="w-2 h-2 rounded-full bg-primary" />
        )}
      </View>
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
