import {
  StatusBar,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import React, { useEffect, useState } from "react";
import Header from "@/components/Header";
import { FlatList } from "react-native-gesture-handler";
import useAppwrite from "@/lib/useAppwrite";
import { Order } from "@/types/types";
import { getUserOrders } from "@/lib/appwrite";
import OrderCard from "@/components/OrderCard";
import { useSelector } from "react-redux";
import { selectCarts } from "@/features/cartSlice";
import { selectOrders } from "@/features/orderSlice";
import Loading from "@/components/Loading";
import Empty from "@/components/Empty";

const OrdersScreen = ({ navigation }: { navigation: any }) => {
  const [selectedItem, setSelectedItem] = useState("Delivered");

  const orders = useSelector(selectOrders).orders;

  const [isLoading, setIsLoading] = useState(orders.length === 0);
  const [isEmpty, setIsEmpty] = useState(true);
  useEffect(() => {
    if (orders.length > 0) {
      setIsLoading(false);
      setIsEmpty(false);
    }
  }, [orders]);
  //   if (isLoading) {
  //     return (
  //       <View className="flex-1  bg-mainBackground">
  //         <Loading />
  //       </View>
  //     );
  //   }

  if (isEmpty) {
    return (
      <View className="flex-1  bg-mainBackground">
        <Empty />
      </View>
    );
  }
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

      <View>
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
      </View>

      {selectedItem === "Delivered" ? (
        <View className="mt-6 mb-48">
          <FlatList
            data={orders}
            renderItem={({ item }) => (
              <View className="m-4">
                <OrderCard order={item} navigation={navigation} />
              </View>
            )}
            keyExtractor={(item) => item.orderNumber.toString()}
            showsVerticalScrollIndicator={false}
          />
        </View>
      ) : (
        <View className="flex-1 justify-center items-center">
          <Empty />
        </View>
      )}
    </View>
  );
};

export default OrdersScreen;

const styles = StyleSheet.create({});
