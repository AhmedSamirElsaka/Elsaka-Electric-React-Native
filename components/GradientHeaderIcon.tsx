import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";
import { LinearGradient } from "expo-linear-gradient";
import * as Icons from "react-native-heroicons/solid";

const GradientHeaderIcon = ({ onPress }: { onPress: () => void }) => {
  return (
    <TouchableOpacity onPress={onPress}>
      <LinearGradient
        start={{ x: 0, y: 0 }}
        end={{ x: 1, y: 1 }}
        colors={["#252A32", "#0C0F14"]}
        className="border-2 border-secondaryDarkGreyHex rounded-xl bg-secondaryDarkGreyHex p-1.5"
      >
        <Icons.Squares2X2Icon
          size={20}
          color="white"
          className="opacity-[0.5]"
        />
      </LinearGradient>
    </TouchableOpacity>
  );
};

export default GradientHeaderIcon;

const styles = StyleSheet.create({});
