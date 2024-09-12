import { StatusBar, StyleSheet, Text, View } from "react-native";
import React from "react";
import Header from "@/components/Header";
import * as Icons from "react-native-heroicons/solid";
import { Icon } from "react-native-elements";

const ProductsScreen = () => {
  return (
    <View className="flex-1 bg-mainBackground pt-4">
      <StatusBar barStyle="light-content" backgroundColor={"#0C0F14"} />
      <Header title="Lightning" />
      <View className="pt-4 flex-row justify-between px-4">
        <View className="flex-row space-x-2">
          <Icon name="filter" type="ionicon" color="white" size={24} />
          <Text className="text-white  text-base ">Filters</Text>
        </View>
        <View className="flex-row space-x-2">
          <Icons.ArrowsUpDownIcon size={24} color="white" />
          <Text className="text-white  text-base ">Popular</Text>
        </View>
        <Icon
          name="view-module"
          type="material-icons"
          color="white"
          size={24}
        />
        {/* <Icon
          name="view-list"
          type="material-icons"
          color="white"
          size={24}
        /> */}
      </View>
    </View>
  );
};

export default ProductsScreen;

const styles = StyleSheet.create({});
