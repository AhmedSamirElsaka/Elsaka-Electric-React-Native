import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React, { useEffect, useState } from "react";
import { LinearGradient } from "expo-linear-gradient";
import * as Icons from "react-native-heroicons/solid";

const LoveIcon = ({
  onPress,
  isPressed,
}: {
  onPress: () => void;
  isPressed: boolean;
}) => {
  const [isButtonPressed, setIsButtonPressed] = useState(false);

  useEffect(() => {
    setIsButtonPressed(isPressed);
  }, [isPressed]);
  return (
    <TouchableOpacity
      onPress={() => {
        onPress();
        setIsButtonPressed(!isButtonPressed);
      }}
      activeOpacity={0.7}
    >
      <LinearGradient
        start={{ x: 0, y: 0 }}
        end={{ x: 1, y: 1 }}
        colors={["#252A32", "#0C0F14"]}
        className="border-2 border-secondaryDarkGreyHex rounded-xl bg-secondaryDarkGreyHex p-1.5 opacity-[0.8]"
      >
        <Icons.HeartIcon size={20} color={isButtonPressed ? "red" : "white"} />
      </LinearGradient>
    </TouchableOpacity>
  );
};

export default LoveIcon;

const styles = StyleSheet.create({});
