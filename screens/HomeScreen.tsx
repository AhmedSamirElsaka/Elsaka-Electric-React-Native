import { ScrollView, StatusBar, StyleSheet, Text, View } from "react-native";
import React from "react";
import Header from "@/components/Header";
import SearchInput from "@/components/SearchInput";
import CategoriesList from "@/components/CategoriesList";

const HomeScreen = () => {
  return (
    <ScrollView className="flex-1  bg-mainBackground">
      <View className="flex-1  bg-mainBackground">
        <Header title="Home" />
        <Text className="text-white font-bold text-2xl pl-8 pr-12">
          Find the best <Text className="text-primary">Electrical Product</Text>{" "}
          for your home
        </Text>

        <View className="pt-8 px-6 mb-6">
          <SearchInput initialQuery={""} />
        </View>

        <View className="px-6">
          <CategoriesList
            categories={[
              "All",
              "Cappuccino",
              "Espresso",
              "Americano",
              "Macchiato",
            ]}
            selectedItem="All"
          />
        </View>
      </View>
    </ScrollView>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({});
