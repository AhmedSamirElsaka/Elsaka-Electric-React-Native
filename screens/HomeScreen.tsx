import { ScrollView, StatusBar, StyleSheet, Text, View } from "react-native";
import React from "react";
import Header from "@/components/Header";
import SearchInput from "@/components/SearchInput";
import CategoriesList from "@/components/CategoriesList";
import ProductCard from "@/components/ProductCard";

const HomeScreen = () => {
  return (
    <View className="flex-1  bg-mainBackground">
      <StatusBar barStyle="light-content" backgroundColor={"#0C0F14"} />
      <ScrollView>
        <View className="flex-1  bg-mainBackground">
          <Header title="Home" />
          <Text className="text-white font-bold text-2xl pl-8 pr-12">
            Find the best{" "}
            <Text className="text-primary">Electrical Product</Text> for your
            home
          </Text>

          <View className="pt-8 px-6 mb-6">
            <SearchInput initialQuery={""} />
          </View>

          <View className="px-6">
            <CategoriesList
              categories={[
                "All",
                "Lighting",
                "Wires & Cables",
                "Switches & Sockets",
                "Plugs & Connectors",
                "Electrical Tools",
                "Circuit Protection",
                "Power Supplies",
                "Conduits & Accessories",
                "Heating & Cooling",
                "Smart Home Devices",
              ]}
              selectedItem="All"
            />
          </View>

          {/* <ProductCard /> */}
        </View>
      </ScrollView>
    </View>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({});
