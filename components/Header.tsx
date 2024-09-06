import { Image, StyleSheet, Text, View } from "react-native";
import React from "react";
import * as Icons from "react-native-heroicons/solid";
import GradientHeaderIcon from "./GradientHeaderIcon";

const Header = ({ title = "" }) => {
  return (
    <View className="h-auto  w-full  flex-row justify-between content-center  px-6 py-8">
      <GradientHeaderIcon onPress={() => {}} />
      <Text className="text-white font-bold text-2xl">{title}</Text>
      <View className=" border-secondaryDarkGreyHex w-10 h-10 flex rounded-xl border-2  content-center justify-center">
        <Image
          source={require("../assets/images/personDemo.png")}
          className="w-10 h-10 rounded-xl"
          resizeMode="stretch"
        />
      </View>
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({});
