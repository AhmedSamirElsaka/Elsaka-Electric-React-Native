import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import SignInScreen from "@/screens/SignInScreen";
const AuthNavigation = () => {
  const Stack = createStackNavigator();
  return (
    <Stack.Navigator>
      <Stack.Screen component={SignInScreen} name="signIn" />
      <Stack.Screen component={SignUpScreen} name="signUp" />
    </Stack.Navigator>
  );
};

export default AuthNavigation;

const styles = StyleSheet.create({});
