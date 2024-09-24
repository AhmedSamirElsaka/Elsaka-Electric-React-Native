import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import HomeScreen from "@/screens/HomeScreen";
import ProductDetails from "@/screens/ProductDetailsScreen";
import WriteReviewScreen from "@/screens/WriteReviewScreen";
import SearchScreen from "@/screens/SearchScreen";

const HomeNavigator = () => {
  const Stack = createStackNavigator();
  return (
    <Stack.Navigator>
      <Stack.Screen
        component={HomeScreen}
        name="home"
        options={{ headerShown: false }}
      />
    </Stack.Navigator>
  );
};

export default HomeNavigator;

const styles = StyleSheet.create({});
