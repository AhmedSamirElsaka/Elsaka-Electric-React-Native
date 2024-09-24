import {
  StatusBar,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import React, { useState } from "react";
import Header from "@/components/Header";
import { FlatList } from "react-native-gesture-handler";
import useAppwrite from "@/lib/useAppwrite";
import { Order } from "@/types/types";
import { getUserOrders } from "@/lib/appwrite";

const OrdersScreen = ({ navigation }: { navigation: any }) => {
  const [selectedItem, setSelectedItem] = useState("Delivered");

  const {
    data: userOrders,
    loading: userOrdersLoading,
    refetch: refetchOrders,
  }: { data: Order[]; refetch: () => void; loading: boolean } = useAppwrite(
    getUserOrders
  );

  return (
    <View className="flex-1  bg-mainBackground">
      <StatusBar
        barStyle="light-content"
        backgroundColor={"#0C0F14"}
        hidden={false}
      />

      <Header
        title=""
        isBackIconRequired={true}
        onBackIconPress={() => {
          navigation.goBack();
        }}
      />
      <Text className="text-white font-bold text-4xl italic ml-6 mt-6">
        My Orders
      </Text>

      <FlatList
        data={["Delivered", "Processing", "Cancelled"]}
        renderItem={({ item }) => (
          <TouchableOpacity
            onPress={() => setSelectedItem(item)}
            activeOpacity={0.7}
          >
            <Text
              className={`text-white px-4 py-1 text-xl ${
                item === selectedItem && "text-black bg-white rounded-full"
              }`}
            >
              {item}
            </Text>
          </TouchableOpacity>
        )}
        keyExtractor={(item) => item}
        horizontal
        showsHorizontalScrollIndicator={false}
        ItemSeparatorComponent={() => <View className="w-2" />}
        className="ml-4  mt-6"
      />

      <FlatList
        data={userOrders}
        renderItem={({ item }) => (
          <OrderCard
            order={item}
            navigation={navigation}
            refetchOrders={refetchOrders}
          />
        )}
        keyExtractor={(item) => item.id}
        showsVerticalScrollIndicator={false}
        ListEmptyComponent={() => (
            
        )} />
    </View>
  );
};

export default OrdersScreen;

const styles = StyleSheet.create({});
