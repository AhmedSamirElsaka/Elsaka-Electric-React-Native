import { StyleSheet, Text, View } from "react-native";
import React from "react";
import * as Icons from "react-native-heroicons/solid";
import { LinearGradient } from "expo-linear-gradient";

const Header = () => {
  return (
    <View>
      <LinearGradient
        start={{ x: 0, y: 0 }}
        end={{ x: 1, y: 1 }}
        colors={["#252A32", "#0C0F14"]}
        className="border-2 border-secondaryDarkGreyHex rounded-lg bg-secondaryDarkGreyHex p-2"
      >
        <Icons.Squares2X2Icon
          size={24}
          color="white"
          className="opacity-[0.8]"
        />
      </LinearGradient>
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({});
