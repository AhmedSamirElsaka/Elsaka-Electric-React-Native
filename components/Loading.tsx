import { StatusBar, StyleSheet, Text, View } from "react-native";
import React from "react";
import LottieView from "lottie-react-native";

const Loading = () => {
  return (
    <View className="flex-1  bg-mainBackground pt-4 pb-4">
      <StatusBar
        barStyle="light-content"
        backgroundColor={"#0C0F14"}
        hidden={false}
      />
      <View className="flex-1 justify-center items-center">
        <LottieView
          source={require("../assets/animations/loading.json")}
          style={{ width: 200, height: 200, flex: 1 }}
          autoPlay
          loop
        />
      </View>
    </View>
  );
};

export default Loading;

const styles = StyleSheet.create({});
