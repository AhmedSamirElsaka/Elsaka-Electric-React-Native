import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";
import { LinearGradient } from "expo-linear-gradient";
import BottomSheet from "@gorhom/bottom-sheet";
const PersonalPromoCodeCard = ({
  onApplyPromoCode,
  bottomSheetRef,
}: {
  onApplyPromoCode: (text: string) => void;
  bottomSheetRef: React.RefObject<BottomSheet>;
}) => {
  const promoCode = "mypromocode2020";
  return (
    <LinearGradient
      start={{ x: 0, y: 0 }}
      end={{ x: 1, y: 1 }}
      colors={["#252A32", "#0C0F14"]}
      className="border-2 border-secondaryDarkGreyHex rounded-xl bg-secondaryDarkGreyHex m-4 flex-row"
    >
      <Image
        source={require("../assets/images/testPromoCode.png")}
        className="w-20 h-24 rounded-l-xl"
      />
      <View className="pt-4 pl-2">
        <Text className="text-white font-semibold text-lg italic pr-2">
          Personal offer
        </Text>
        <Text className="text-white  text-base italic">promocode2020</Text>
      </View>

      <View className="pt-4">
        <Text className="text-gray-400 font-semibold text-xs italic">
          6 days remaining
        </Text>
        <TouchableOpacity
          className="bg-primary rounded-full py-1 mt-2"
          activeOpacity={0.7}
          onPress={() => {
            onApplyPromoCode(promoCode);
            bottomSheetRef.current?.close();
          }}
        >
          <Text className="text-white text-center text-base">Apply</Text>
        </TouchableOpacity>
      </View>
    </LinearGradient>
  );
};

export default PersonalPromoCodeCard;

const styles = StyleSheet.create({});
