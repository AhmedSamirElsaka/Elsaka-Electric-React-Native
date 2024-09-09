import {
  FlatList,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  View,
} from "react-native";
import React from "react";
import Header from "@/components/Header";
import CustomButton from "@/components/CustomButton";
import CartProductCard from "@/components/CartProductCard";

const CartScreen = () => {
  return (
    <View className="flex-1 bg-mainBackground">
      <Header title="Cart" />
      <View className="flex-1 ">
        <FlatList
          data={[1, 2, 3, 4, 5]}
          renderItem={({ item }) => (
            <View className="px-4 pt-4">
              <CartProductCard />
            </View>
          )}
        />
      </View>

      <View className="flex-row px-6 pb-4 justify-between pt-4">
        <View className="justify-center items-center ">
          <Text className="text-white font-bold text-lg">Total Price</Text>
          <Text className="text-white font-bold text-xl">
            <Text className="text-primary text-2xl">$ </Text>
            {10.5}
          </Text>
        </View>
        <CustomButton
          title="Pay"
          handlePress={() => {}}
          textStyles="text-white text-lg text-bold"
          containerStyles="bg-primary flex-1 ml-8"
        />
      </View>
    </View>
  );
};

export default CartScreen;

const styles = StyleSheet.create({});
