import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";
import { LinearGradient } from "expo-linear-gradient";
import * as Icons from "react-native-heroicons/solid";

const LoveIcon = ({
  onPress,
  IsPressed,
}: {
  onPress: () => void;
  IsPressed: boolean;
}) => {
  return (
    <TouchableOpacity onPress={onPress} activeOpacity={0.7}>
      <LinearGradient
        start={{ x: 0, y: 0 }}
        end={{ x: 1, y: 1 }}
        colors={["#252A32", "#0C0F14"]}
        className="border-2 border-secondaryDarkGreyHex rounded-xl bg-secondaryDarkGreyHex p-2 opacity-[0.8]"
      >
        <Icons.HeartIcon size={24} color={IsPressed ? "red" : "white"} />
      </LinearGradient>
    </TouchableOpacity>
  );
};

export default LoveIcon;

const styles = StyleSheet.create({});
