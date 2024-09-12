import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React, { useState } from "react";

const MainCategoryNavItem = ({
  category,
  isSelected,
}: {
  category: string;
  isSelected: boolean;
}) => {
  return (
    <View className=" space-y-2">
      <Text className="text-white font-bold text-lg px-6 text-center">
        {category}
      </Text>
      {isSelected && (
        <View className="w-auto h-2 flex rounded-xl border-2  content-center justify-center bg-primary" />
      )}
    </View>
  );
};

export default MainCategoryNavItem;

const styles = StyleSheet.create({});
