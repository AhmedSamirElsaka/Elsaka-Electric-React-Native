import { StatusBar, StyleSheet, Text, View } from "react-native";
import React from "react";
import Header from "@/components/Header";

const HomeScreen = () => {
  return (
    <View className="flex-1 justify-center items-center bg-mainBackground">
      <Header />
    </View>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({});
