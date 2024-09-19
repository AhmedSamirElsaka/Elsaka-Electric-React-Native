import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import ProductDetails from "@/screens/ProductDetails";
import ShopScreen from "@/screens/ShopScreen";
import WriteReviewScreen from "@/screens/WriteReviewScreen";

const ShopNavigator = () => {
  const Stack = createStackNavigator();
  return (
    <Stack.Navigator>
      <Stack.Screen
        component={ShopScreen}
        name="shop"
        options={{ headerShown: false }}
      />
      <Stack.Screen
        component={ProductDetails}
        name="productDetails"
        options={{ headerShown: false }}
      />
      <Stack.Screen
        component={WriteReviewScreen}
        name="writeReview"
        options={{ headerShown: false }}
      />
    </Stack.Navigator>
  );
};

export default ShopNavigator;

const styles = StyleSheet.create({});
