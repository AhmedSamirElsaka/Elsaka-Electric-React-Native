import { StyleSheet, Text, View } from "react-native";
import React from "react";
import BackIcon from "./BackIcon";

const ProductDetails = () => {
  return (
    <View className="flex-1">
      <View className="flex-row justify-between px-6 content-center">
        <BackIcon onPress={() => {}} />
      </View>
    </View>
  );
};

export default ProductDetails;

const styles = StyleSheet.create({});
