import {
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import React from "react";
import * as Icons from "react-native-heroicons/solid";
import { LinearGradient } from "expo-linear-gradient";
const PromoCodeComponent = ({
  onFocus,
  onPress,
}: {
  onFocus: () => void;
  onPress: () => void;
}) => {
  return (
    <LinearGradient
      start={{ x: 0, y: 0 }}
      end={{ x: 1, y: 1 }}
      colors={["#252A32", "#0C0F14"]}
      className="  flex-row justify-between px-4 bg-secondaryDarkGreyHex mx-4 rounded-xl mt-4"
    >
      <TextInput
        className="bg-[#fff0] flex-1 -mr-6 rounded-xl px-4 text-white"
        placeholder="Enter promo code"
        multiline={false}
        onFocus={onFocus}
        placeholderTextColor={"gray"}
      />
      <TouchableOpacity
        className="bg-white rounded-full p-2"
        activeOpacity={0.7}
        onPress={onPress}
      >
        <Icons.ArrowRightIcon color="black" size={30} />
      </TouchableOpacity>
    </LinearGradient>
  );
};

export default PromoCodeComponent;

const styles = StyleSheet.create({});
