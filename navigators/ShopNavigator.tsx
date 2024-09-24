import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import ProductDetails from "@/screens/ProductDetailsScreen";
import ShopScreen from "@/screens/ShopScreen";
import WriteReviewScreen from "@/screens/WriteReviewScreen";
import ProductsScreen from "@/screens/ProductsScreen";

const ShopNavigator = () => {
  const Stack = createStackNavigator();
  return (
    <Stack.Navigator>
      <Stack.Screen
        component={ShopScreen}
        name="shop"
        options={{ headerShown: false }}
      />
    </Stack.Navigator>
  );
};

export default ShopNavigator;

const styles = StyleSheet.create({});
