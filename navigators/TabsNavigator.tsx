import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import HomeScreen from "@/screens/HomeScreen";
import { HomeIcon } from "react-native-heroicons/solid";
import * as Icons from "react-native-heroicons/solid";
const TabIcon = ({ icon, color, name, focused }: any) => {
  return (
    <View className="items-center justify-center gap-2">
      <Image
        source={icon}
        resizeMode="contain"
        tintColor={color}
        className="w-6 h-6"
      />

      <Text
        className={`${focused ? "font-psemibold" : "font-pregular"} text-xs`}
        style={{ color: color }}
      >
        {name}
      </Text>
    </View>
  );
};

const TabsNavigator = () => {
  const Tab = createBottomTabNavigator();
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarShowLabel: false,
        tabBarActiveTintColor: "#FFA001",
        tabBarInactiveTintColor: "#CDCDE0",
        tabBarStyle: {
          backgroundColor: "#000",
          borderTopWidth: 1,
          borderTopColor: "#232533",
        },
      }}
    >
      <Tab.Screen
        name="home"
        component={HomeScreen}
        options={{
          headerShown: false,
          title: "Home",
          tabBarIcon: ({ focused, color, size }) => (
            // <TabIcon
            //   icon={icons.home}
            //   color={color}
            //   name={"home"}
            //   focused={focused}
            // />
            <HomeIcon size={30} color={color} className="w-6 h-6" />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

export default TabsNavigator;

const styles = StyleSheet.create({});
