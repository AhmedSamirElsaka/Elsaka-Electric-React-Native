import { StatusBar, StyleSheet, Text, View } from "react-native";
import React from "react";
import Header from "@/components/Header";
import SearchInput from "@/components/SearchInput";

const HomeScreen = () => {
  return (
    <View className="flex-1  bg-mainBackground">
      <Header title="Home" />
      <Text className="text-white font-bold text-2xl pl-8 pr-12">
        Find the best <Text className="text-primary">Electrical Product</Text>{" "}
        for your home
      </Text>

      <View className="pt-8 px-6">
        <SearchInput initialQuery={""} />
      </View>
    </View>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({});
