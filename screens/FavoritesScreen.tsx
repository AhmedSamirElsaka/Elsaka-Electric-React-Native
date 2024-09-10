import { StatusBar, StyleSheet, Text, View } from "react-native";
import React from "react";
import Header from "@/components/Header";

const FavoritesScreen = () => {
  return (
    <View className="flex-1  bg-mainBackground">
      <StatusBar barStyle="light-content" backgroundColor={"#0C0F14"} />
      <Header title="Favorites" />
      <FavoriteProductCard />
    </View>
  );
};

export default FavoritesScreen;
