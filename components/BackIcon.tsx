import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";
import { LinearGradient } from "expo-linear-gradient";
import * as Icons from "react-native-heroicons/solid";

const BackIcon = ({ onPress }: { onPress: () => void }) => {
  return (
    <TouchableOpacity onPress={onPress}>
      <LinearGradient
        start={{ x: 0, y: 0 }}
        end={{ x: 1, y: 1 }}
        colors={["#252A32", "#0C0F14"]}
        className="border-2 border-secondaryDarkGreyHex rounded-xl bg-secondaryDarkGreyHex p-2"
      >
        <Icons.ArrowLeftIcon
          size={24}
          color="white"
          className="opacity-[0.5]"
        />
      </LinearGradient>
    </ToucOp>
  );
};

export default BackIcon;

const styles = StyleSheet.create({});
