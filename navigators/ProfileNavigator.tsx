import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import HomeScreen from "@/screens/HomeScreen";
import ProductDetails from "@/screens/ProductDetailsScreen";
import WriteReviewScreen from "@/screens/WriteReviewScreen";
import SearchScreen from "@/screens/SearchScreen";
import ProfileScreen from "@/screens/ProfileScreen";
import OrdersScreen from "@/screens/OrdersScreen";

const ProfileNavigator = () => {
  const Stack = createStackNavigator();
  return (
    <Stack.Navigator>
      <Stack.Screen
        component={ProfileScreen}
        name="profileScreen"
        options={{ headerShown: false }}
      />
      <Stack.Screen
        component={OrdersScreen}
        name="orders"
        options={{ headerShown: false }}
      />
    </Stack.Navigator>
  );
};

export default ProfileNavigator;

const styles = StyleSheet.create({});
