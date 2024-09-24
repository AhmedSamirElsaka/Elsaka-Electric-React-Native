import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import HomeScreen from "@/screens/HomeScreen";
// import { HomeIcon } from "react-native-heroicons/solid";
import * as Icons from "react-native-heroicons/solid";
import ProfileScreen from "@/screens/ProfileScreen";
import CartScreen from "@/screens/CartScreen";
import { StatusBar } from "react-native";
import FavoritesScreen from "@/screens/FavoritesScreen";
import ShopScreen from "@/screens/ShopScreen";
import ProductsScreen from "@/screens/ProductsScreen";
import WriteReviewScreen from "@/screens/WriteReviewScreen";
import HomeNavigator from "./HomeNavigator";
import ShopNavigator from "./ShopNavigator";
import ProfileNavigator from "./ProfileNavigator";
const TabIcon = ({
  home = false,
  cart = false,
  profile = false,
  favorites = false,
  shop = false,
  color,
  name,
  focused,
}: any) => {
  return (
    <View className="items-center justify-center gap-2">
      {/* <Image
        source={icon}
        resizeMode="contain"
        tintColor={color}
        className="w-6 h-6"
      /> */}

      {home && <Icons.HomeIcon size={24} color={color} />}
      {cart && <Icons.ShoppingBagIcon size={24} color={color} />}

      {profile && <Icons.UserIcon size={24} color={color} />}
      {favorites && <Icons.HeartIcon size={24} color={color} />}
      {shop && <Icons.ShoppingCartIcon size={24} color={color} />}

      <Text
        className={`${focused ? "font-psemibold" : "font-pregular"} text-s`}
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
          height: 70,
        },
      }}
    >
      <Tab.Screen
        name="homeNavigator"
        component={HomeNavigator}
        options={{
          headerShown: false,
          title: "HomeNavigator",
          tabBarIcon: ({ focused, color, size }) => (
            <TabIcon
              color={color}
              name={"home"}
              focused={focused}
              home={true}
            />
          ),
        }}
      />
      <Tab.Screen
        name="shopNavigator"
        component={ShopNavigator}
        options={{
          headerShown: false,
          title: "shopNavigator",
          tabBarIcon: ({ focused, color, size }) => (
            <TabIcon
              color={color}
              name={"shop"}
              focused={focused}
              shop={true}
            />
          ),
        }}
      />
      <Tab.Screen
        name="cart"
        component={CartScreen}
        options={{
          headerShown: false,
          title: "Cart",
          tabBarIcon: ({ focused, color, size }) => (
            <TabIcon
              color={color}
              name={"cart"}
              focused={focused}
              cart={true}
            />
          ),
        }}
      />
      <Tab.Screen
        name="favorites"
        component={FavoritesScreen}
        options={{
          headerShown: false,
          title: "allProducts",
          tabBarIcon: ({ focused, color, size }) => (
            <TabIcon
              color={color}
              name={"favorites"}
              focused={focused}
              favorites={true}
            />
          ),
        }}
      />
      <Tab.Screen
        name="profile"
        component={ProfileNavigator}
        options={{
          headerShown: false,
          title: "Profile",
          tabBarIcon: ({ focused, color, size }) => (
            <TabIcon
              color={color}
              name={"profile"}
              focused={focused}
              profile={true}
            />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

export default TabsNavigator;

const styles = StyleSheet.create({});
