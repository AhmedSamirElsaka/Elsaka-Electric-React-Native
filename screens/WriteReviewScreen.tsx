import {
  SafeAreaView,
  StatusBar,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import React, { useState } from "react";
import { Header } from "react-native-elements";
import { Rating, AirbnbRating } from "react-native-ratings";
import { LinearGradient } from "expo-linear-gradient";
import * as Icons from "react-native-heroicons/solid";
import CustomButton from "@/components/CustomButton";
import { useNavigation } from "@react-navigation/native";

const WriteReviewScreen = () => {
  const navigation = useNavigation();
  const ratingCompleted = (rating: number) => {
    setForm({ ...form, rate: rating.toString() });
  };

  const [form, setForm] = useState({
    rateText: "",
    rate: "",
  });

  // console.log(form);
  return (
    <SafeAreaView className="flex-1 bg-mainBackground pt-8">
      <StatusBar barStyle="light-content" backgroundColor={"#0C0F14"} />
      <Text className="text-white text-center text-2xl font-bold mb-6">
        What is your rate ?
      </Text>
      <AirbnbRating
        count={5}
        reviews={["Terrible", "Bad", "OK", "Good", "Very Good"]}
        defaultRating={0}
        size={40}
        onFinishRating={ratingCompleted}
      />

      <Text className="text-white text-center text-2xl font-semibold italic pt-8">
        Please share your opinion
      </Text>
      <Text className="text-white text-center text-2xl font-semibold italic">
        about the product
      </Text>
      <LinearGradient
        start={{ x: 0, y: 0 }}
        end={{ x: 1, y: 1 }}
        colors={["#252A32", "#0C0F14"]}
        className="border-2 rounded-lg mx-6 py-2 mb-6  mt-6 h-48 p-4 border-secondaryDarkGreyHex  bg-secondaryDarkGreyHex "
      >
        <TextInput
          className="text-start text-lg text-white "
          placeholder="Write your review"
          multiline={true}
          placeholderTextColor={"gray"}
          onChangeText={(text) => {
            setForm({ ...form, rateText: text });
          }}
        />
      </LinearGradient>

      <TouchableOpacity onPress={() => {}} activeOpacity={0.7}>
        <View className="justify-center items-center pt-8">
          <View className="rounded-full bg-primary w-14 h-14 items-center justify-center">
            <Icons.CameraIcon size={30} color={"white"} />
          </View>
          <Text className="text-white  text-lg font-semibold italic ">
            Add your photos
          </Text>
        </View>
      </TouchableOpacity>

      <CustomButton
        title="Send Review"
        handlePress={() => {
          navigation.goBack();
        }}
        textStyles="text-white text-lg text-bold"
        containerStyles="bg-primary rounded-full mt-8 mx-6"
      />
    </SafeAreaView>
  );
};

export default WriteReviewScreen;

const styles = StyleSheet.create({});
