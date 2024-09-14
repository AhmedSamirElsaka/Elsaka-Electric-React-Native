import {
  FlatList,
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import React, { useState } from "react";
import { LinearGradient } from "expo-linear-gradient";
import * as SolidIcons from "react-native-heroicons/solid";
import * as OutlineIcons from "react-native-heroicons/outline";

const ReviewCard = ({ isWithPhotos }: { isWithPhotos: boolean }) => {
  const [isHelpful, setIsHelpful] = useState(false);
  return (
    <LinearGradient
      start={{ x: 0, y: 0 }}
      end={{ x: 1, y: 1 }}
      colors={["#252A32", "#0C0F14"]}
      className="border-2 border-secondaryDarkGreyHex rounded-2xl bg-secondaryDarkGreyHex p-2 mt-10 mx-6"
    >
      <View className=" border-secondaryDarkGreyHex w-10 h-10 flex rounded-full border-2 -mt-8 -ml-6">
        <Image
          source={require("../assets/images/personDemo.png")}
          className="w-10 h-10 rounded-full"
          resizeMode="stretch"
        />
      </View>
      <Text className="text-white font-semibold text-2xl px-4">
        Ahmed Samir
      </Text>
      <View className="flex-row pl-4 pt-2 justify-between">
        <View className="flex-row space-x-1">
          <SolidIcons.StarIcon size={24} color={"#D17842"} />
          <SolidIcons.StarIcon size={24} color={"#D17842"} />
          <SolidIcons.StarIcon size={24} color={"#D17842"} />
          <SolidIcons.StarIcon size={24} color={"#D17842"} />
          <OutlineIcons.StarIcon size={24} color={"#D17842"} />
        </View>
        <Text className="text-gray-300 text-sm pr-2">August 13, 2022</Text>
      </View>
      <Text className="text-white font-semibold text-base px-4 pt-4">
        I loved this dress so much as soon as I tried it on I knew I had to buy
        it in another color. I am 5'3 about 155lbs and I carry all my weight in
        my upper body. When I put it on I felt like it thinned me put and I got
        so many compliments.
      </Text>
      {isWithPhotos && (
        <FlatList
          data={[1, 2, 3, 4, 5, 6, 7, 8, 9, 10]}
          keyExtractor={(item) => item.toString()}
          renderItem={() => (
            <Image
              source={require("../assets/images/imageDemo.png")}
              className="w-32 h-32 rounded-xl"
            />
          )}
          horizontal
          showsHorizontalScrollIndicator={false}
          ItemSeparatorComponent={() => <View className="w-6" />}
          className="pt-6 px-4"
        />
      )}
      <View className="flex-row space-x-2 items-center justify-end  p-4">
        <Text className="text-gray-300 font-semibold text-base">Helpful</Text>
        <TouchableOpacity
          onPress={() => setIsHelpful(!isHelpful)}
          activeOpacity={0.7}
        >
          {isHelpful ? (
            <SolidIcons.HandThumbUpIcon size={24} color={"#D17842"} />
          ) : (
            <SolidIcons.HandThumbUpIcon size={24} color={"gray"} />
          )}
          {/* <SolidIcons.HandThumbUpIcon size={24} color={"gray"} /> */}
        </TouchableOpacity>
      </View>
    </LinearGradient>
  );
};

export default ReviewCard;

const styles = StyleSheet.create({});
