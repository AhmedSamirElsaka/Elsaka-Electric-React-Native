import { Image, StyleSheet, Text, View } from "react-native";
import React from "react";
import * as Icons from "react-native-heroicons/solid";
import GradientHeaderIcon from "./GradientHeaderIcon";

const Header = ({ title = "" }) => {
  return (
    <View className="h-auto  w-full  flex-row justify-between content-center  px-6 py-8">
      <GradientHeaderIcon />
      <Text className="text-white font-bold text-2xl">{title}</Text>
      <View className=" border-secondaryDarkGreyHex rounded-xl border-2 bg-secondaryDarkGreyHex content-center justify-center">
        <Image
          source={require("../assets/images/imageDemo.png")}
          className="w-10 h-10"
          resizeMode="contain"
        />
      </View>
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({});
