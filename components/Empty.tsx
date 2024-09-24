import { StyleSheet, Text, View } from "react-native";
import React from "react";
import LottieView from "lottie-react-native";

const Empty = () => {
  return (
    <View className="flex-1 justify-center items-center">
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
