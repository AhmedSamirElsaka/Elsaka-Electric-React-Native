import { StyleSheet, Text, View } from "react-native";
import React from "react";
import BackIcon from "./BackIcon";
import LoveIcon from "./LoveIcon";

const ProductDetails = () => {
  return (
    <View className="flex-1">
      <View className="flex-row justify-between px-6 content-center">
        <BackIcon onPress={() => {}} />
        <LoveIcon onPress={() => {}} IsPressed={true} />
      </View>
    </View>
  );
};

export default ProductDetails;

const styles = StyleSheet.create({});
