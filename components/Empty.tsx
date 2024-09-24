import { StyleSheet, Text, View } from "react-native";
import React from "react";
import LottieView from "lottie-react-native";
import { StatusBar } from "react-native";
import Header from "./Header";

const Empty = () => {
  return (
    <View className="flex-1  bg-mainBackground items-center justify-center">
      <Header title="Cart" />
      <StatusBar
        barStyle="light-content"
        backgroundColor={"#0C0F14"}
        hidden={false}
      />
      <LottieView
        source={require("../assets/animations/empty.json")}
        style={{ width: 300, height: 300, flex: 1 }}
        autoPlay
        loop
      />
    </View>
  );
};

export default Empty;

const styles = StyleSheet.create({});
