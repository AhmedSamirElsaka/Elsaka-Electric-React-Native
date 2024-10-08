import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React, { useState } from "react";
import { Category } from "@/types/types";

const MainCategoryNavItem = ({
  category,
  isSelected,
}: {
  category: Category;
  isSelected: boolean;
}) => {
  return (
    <View className=" space-y-2">
      <Text className="text-white font-bold text-base px-4 text-center">
        {category.name}
      </Text>
      {isSelected && (
        <View className="w-auto h-2 flex rounded-xl border-2  content-center justify-center bg-primary" />
      )}
    </View>
  );
};

export default MainCategoryNavItem;

const styles = StyleSheet.create({});
