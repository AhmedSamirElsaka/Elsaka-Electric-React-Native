import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";
import { Order } from "@/types/types";
import { LinearGradient } from "expo-linear-gradient";

const OrderCard = ({
  order,
  navigation,
}: {
  order: Order;
  navigation: any;
}) => {
  return (
    <LinearGradient
      start={{ x: 0, y: 0 }}
      end={{ x: 1, y: 1 }}
      colors={["#252A32", "#0C0F14"]}
      className="border-2 border-secondaryDarkGreyHex rounded-xl bg-secondaryDarkGreyHex p-2 opacity-[0.8]"
    >
      <View className="flex-row items-center justify-between">
        <Text className="text-white font-semibold text-lg m-2">
          Order No {order.orderNumber}
        </Text>
        <Text className="text-gray-400 text-base mr-2">24-9-2024</Text>
      </View>
      <Text className="text-gray-300 font-semibold text-lg m-2">
        Tracking number: <Text className="text-white">{order.orderNumber}</Text>
      </Text>
      <View className="flex-row items-center justify-between">
        <Text className="text-gray-300 font-semibold text-lg m-2">
          Quantity: <Text className="text-white">{order.quantity}</Text>
        </Text>
        <Text className="text-gray-300 font-semibold text-lg m-2">
          Total Amount: <Text className="text-white">EGP {order.amount}</Text>
        </Text>
      </View>
      <View className="flex-row items-center justify-between mb-4 mt-4">
        <TouchableOpacity className=" border-4 border-red rounded-full bg-white px-4 py-2 items-center justify-center">
          <Text className="text-black font-semibold text-xl italic">
            Details
          </Text>
        </TouchableOpacity>

        <Text className="text-green-500 font-semibold text-xl italic mr-2">
          Delivered
        </Text>
      </View>
    </LinearGradient>
  );
};

export default OrderCard;

const styles = StyleSheet.create({});
