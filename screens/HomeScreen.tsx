import { StatusBar, StyleSheet, Text, View } from "react-native";
import React from "react";

const HomeScreen = () => {
  return (
    <View className="flex-1 justify-center items-center bg-mainBackground">
      <StatusBar barStyle="light-content" backgroundColor={"#000"} />
      <Text>HomeScreen</Text>
    </View>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({});
