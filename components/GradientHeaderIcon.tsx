import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { LinearGradient } from "expo-linear-gradient";
import * as Icons from "react-native-heroicons/solid";

const GradientHeaderIcon = () => {
  return (
    <View>
      <LinearGradient
        start={{ x: 0, y: 0 }}
        end={{ x: 1, y: 1 }}
        colors={["#252A32", "#0C0F14"]}
        className="border-2 border-secondaryDarkGreyHex rounded-xl bg-secondaryDarkGreyHex p-2"
      >
        <Icons.Squares2X2Icon
          size={24}
          color="white"
          className="opacity-[0.5]"
        />
      </LinearGradient>
    </View>
  );
};

export default GradientHeaderIcon;

const styles = StyleSheet.create({});
