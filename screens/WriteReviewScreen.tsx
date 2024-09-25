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
import { Rating, AirbnbRating } from "react-native-ratings";
import { LinearGradient } from "expo-linear-gradient";
import * as Icons from "react-native-heroicons/solid";
import CustomButton from "@/components/CustomButton";
import { useNavigation } from "@react-navigation/native";
import * as DocumentPicker from "expo-document-picker";
import BackIcon from "@/components/BackIcon";

const WriteReviewScreen = () => {
  const navigation = useNavigation();
  const ratingCompleted = (rating: number) => {
    setForm({ ...form, rate: rating.toString() });
  };

  const [form, setForm] = useState({
    rateText: "",
    rate: "",
  });

  const openPicker = async () => {
    const result = await DocumentPicker.getDocumentAsync({
      type: ["image/png", "image/jpeg"],
    });

    if (!result.canceled) {
    } else {
      console.log("User canceled the picker");
    }
  };
  // console.log(form);
  return (
    <SafeAreaView className="flex-1 bg-mainBackground pt-4">
      <StatusBar
        barStyle="light-content"
        backgroundColor={"#0C0F14"}
        hidden={false}
      />
      <View className="h-12 w-12 items-center justify-center ml-6">
        <BackIcon onPress={() => navigation.goBack()} />
      </View>
      <Text className="text-white text-center text-xl font-bold  mt-4">
        What is your rate ?
      </Text>
      <View>
        <AirbnbRating
          count={5}
          reviews={["Terrible", "Bad", "OK", "Good", "Very Good"]}
          defaultRating={0}
          size={40}
          onFinishRating={ratingCompleted}
        />
      </View>

      <Text className="text-white text-center text-xl font-semibold italic pt-8">
        Please share your opinion
      </Text>
      <Text className="text-white text-center text-xl font-semibold italic">
        about the product
      </Text>
      <LinearGradient
        start={{ x: 0, y: 0 }}
        end={{ x: 1, y: 1 }}
        colors={["#252A32", "#0C0F14"]}
        className="border-2 rounded-lg mx-6 py-2 mb-6  mt-6 h-40 p-4 border-secondaryDarkGreyHex  bg-secondaryDarkGreyHex "
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

      <TouchableOpacity
        onPress={() => {
          openPicker();
        }}
        activeOpacity={0.7}
      >
        <View className="justify-center items-center pt-4">
          <View className="rounded-full bg-primary w-12 h-12 items-center justify-center">
            <Icons.CameraIcon size={24} color={"white"} />
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
