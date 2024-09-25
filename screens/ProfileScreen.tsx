import {
  Alert,
  Button,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  View,
} from "react-native";
import React, { useEffect, useState } from "react";
import { addPhotoToUser, signOut } from "@/lib/appwrite";
import { useGlobalContext } from "@/context/GlobalProvider";
import { useNavigation } from "@react-navigation/native";
import { LinearGradient } from "expo-linear-gradient";
import { TouchableOpacity } from "react-native";
import * as Icons from "react-native-heroicons/outline";
import { Image } from "react-native";
import * as DocumentPicker from "expo-document-picker";
import { useSelector } from "react-redux";
import { selectOrders } from "@/features/orderSlice";

const ProfileScreen = () => {
  const navigation = useNavigation();
  const { user, setUser, setIsLogged }: any = useGlobalContext();
  const [userName, setUserName] = useState(user?.username);
  const [email, setEmail] = useState(user?.email);
  const orders = useSelector(selectOrders).orders;

  const logout = async () => {
    navigation.navigate("auth" as never);
    setUser(null);
    setIsLogged(false);
    await signOut();
  };

  useEffect(() => {
    setEmail(user?.email);
    setUserName(user?.username);
  }, [user]);
  const openPicker = async () => {
    const result = await DocumentPicker.getDocumentAsync({
      type: ["image/png", "image/jpeg"],
    });

    if (!result.canceled) {
      const updatedUser = await addPhotoToUser(result.assets[0]);
      setUser(updatedUser);
    } else {
      console.log("User canceled the picker");
    }
  };

  return (
    <View className="flex-1  bg-mainBackground">
      <StatusBar
        barStyle="light-content"
        backgroundColor={"#0C0F14"}
        hidden={false}
      />
      <View className="items-end p-4 mt-2">
        <TouchableOpacity
          onPress={() => {
            logout();
          }}
          activeOpacity={0.7}
        >
          <Icons.ArrowRightStartOnRectangleIcon size={20} color={"white"} />
        </TouchableOpacity>
      </View>

      <Text className="text-white font-bold text-3xl italic ml-4">
        My profile
      </Text>
      <View className="flex-row ml-4">
        <View className="relative">
          {user?.photo ? (
            <Image
              source={{ uri: user?.photo }}
              className="w-24 h-24 rounded-full mt-8"
              resizeMode="contain"
            />
          ) : (
            <Image
              source={require("../assets/images/person.png")}
              className="w-24 h-24 rounded-full mt-8 "
              resizeMode="contain"
            />
          )}

          <TouchableOpacity
            className="bg-white rounded-full h-8 w-8 items-center justify-center self-end -mt-9 -mr-2"
            activeOpacity={0.7}
            onPress={() => {
              openPicker();
            }}
          >
            <Icons.CameraIcon size={20} color={"black"} />
          </TouchableOpacity>
        </View>
        <View className="mt-8 ">
          <Text className="text-white font-bold text-xl italic ml-4">
            {userName}
          </Text>
          <Text className="text-gray-400 font-bold text-lg italic ml-4 ">
            {email}
          </Text>
        </View>
      </View>
      <ScrollView className="">
        <TouchableOpacity
          className="ml-4 flex-row mt-6 justify-between pr-2 items-center"
          activeOpacity={0.7}
          onPress={() => {
            navigation.navigate("orders" as never);
          }}
        >
          <View>
            <Text className="text-white font-semibold text-lg italic ">
              My orders
            </Text>
            <Text className="text-gray-400 font-semibold text-base italic mt-1">
              Already have {orders.length} orders
            </Text>
          </View>
          <Icons.ChevronRightIcon size={20} color={"white"} />
        </TouchableOpacity>
        <TouchableOpacity
          className="ml-4 flex-row mt-10 justify-between pr-2 items-center"
          activeOpacity={0.7}
        >
          <View>
            <Text className="text-white font-semibold text-lg italic ">
              Shipping addresses
            </Text>
            <Text className="text-gray-400 font-semibold text-base italic mt-1">
              3 addresses
            </Text>
          </View>
          <Icons.ChevronRightIcon size={20} color={"white"} />
        </TouchableOpacity>
        <TouchableOpacity
          className="ml-4 flex-row mt-10 justify-between pr-2 items-center"
          activeOpacity={0.7}
        >
          <View>
            <Text className="text-white font-semibold text-lg italic ">
              Promocodes
            </Text>
            <Text className="text-gray-400 font-semibold text-base italic mt-1">
              You have special promocodes
            </Text>
          </View>
          <Icons.ChevronRightIcon size={20} color={"white"} />
        </TouchableOpacity>
        <TouchableOpacity
          className="ml-4 flex-row mt-10 justify-between pr-2 items-center"
          activeOpacity={0.7}
        >
          <View>
            <Text className="text-white font-semibold text-lg italic ">
              My reviews
            </Text>
            <Text className="text-gray-400 font-semibold text-base italic mt-1">
              Reviews for 0 items
            </Text>
          </View>
          <Icons.ChevronRightIcon size={20} color={"white"} />
        </TouchableOpacity>
        <TouchableOpacity
          className="ml-4 flex-row mt-10 justify-between pr-2 items-center"
          activeOpacity={0.7}
        >
          <View className="mb-4">
            <Text className="text-white font-semibold text-lg italic ">
              Settings
            </Text>
            <Text className="text-gray-400 font-semibold text-base italic mt-1">
              Notifications, password
            </Text>
          </View>
          <Icons.ChevronRightIcon size={20} color={"white"} />
        </TouchableOpacity>
      </ScrollView>
    </View>
  );
};

export default ProfileScreen;

const styles = StyleSheet.create({});
