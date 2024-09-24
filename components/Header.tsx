import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";
import * as Icons from "react-native-heroicons/solid";
import GradientHeaderIcon from "./GradientHeaderIcon";
import { useNavigation } from "@react-navigation/native";
import BackIcon from "./BackIcon";

const Header = ({
  title = "",
  isBackIconRequired = false,
  onBackIconPress = () => {},
  onOptionsIconPress = () => {},
}: {
  title: string;
  isBackIconRequired?: boolean;
  onBackIconPress?: () => void;
  onOptionsIconPress?: () => void;
}) => {
  const navigation = useNavigation();
  return (
    <View className="h-auto  w-full  flex-row justify-between content-center  px-6 py-4">
      {isBackIconRequired ? (
        <BackIcon onPress={onBackIconPress} />
      ) : (
        <GradientHeaderIcon onPress={onOptionsIconPress} />
      )}
      <Text className="text-white font-bold text-2xl">{title}</Text>
      <TouchableOpacity
        activeOpacity={0.7}
        onPress={() => {
          navigation.navigate("profile" as never);
        }}
      >
        <View className=" border-secondaryDarkGreyHex w-10 h-10 flex rounded-xl border-2  content-center justify-center">
          <Image
            source={require("../assets/images/personDemo.png")}
            className="w-10 h-10 rounded-xl"
            resizeMode="stretch"
          />
        </View>
      </TouchableOpacity>
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({});
