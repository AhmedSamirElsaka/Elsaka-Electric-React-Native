import {
  FlatList,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import React, { useRef, useState } from "react";
import Header from "@/components/Header";
import CustomButton from "@/components/CustomButton";
import CartProductCard from "@/components/CartProductCard";
import ProductDetails from "./ProductDetails";
import * as Icons from "react-native-heroicons/solid";
import { LinearGradient } from "expo-linear-gradient";
import BottomSheet, { BottomSheetView } from "@gorhom/bottom-sheet";
import PromoCodeComponent from "@/components/PromoCodeComponent";

const CartScreen = () => {
  const [isPromoCodeBottomSheetShown, setIsPromoCodeBottomSheetShown] =
    useState(false);
  const bottomSheetRef = useRef<BottomSheet>(null);

  return (
    // <View className="flex-1 bg-mainBackground">
    //   <ProductDetails
    //     product={{
    //       id: "1",
    //       title: "Electrical Product",
    //       price: "10000",
    //       image:
    //         "https://cdn.britannica.com/88/212888-050-6795342C/study-lamp-electrical-cord.jpg",
    //       description: "Electrical Product Description",
    //       rate: "4.5",
    //       numberOfRates: "6534",
    //       category: [],
    //       productSize: [
    //         {
    //           size: "250",
    //           unit: "gm",
    //           price: "10000",
    //         },
    //         {
    //           size: "500",
    //           unit: "gm",
    //           price: "10000",
    //         },
    //         {
    //           size: "750",
    //           unit: "gm",
    //           price: "10000",
    //         },
    //         {
    //           size: "1",
    //           unit: "kg",
    //           price: "10000",
    //         },
    //       ],
    //     }}
    //   />
    // </View>
    <View className="flex-1 bg-mainBackground">
      <Header title="Cart" />
      <View className="flex-1 ">
        <FlatList
          data={[1, 2, 3, 4, 5]}
          renderItem={({ item }) => (
            <View className="px-4 pt-4">
              <CartProductCard />
            </View>
          )}
        />
      </View>
      <PromoCodeComponent
        onFocus={() => {
          bottomSheetRef.current?.expand();
        }}
        onPress={() => {}}
      />
      {/* <LinearGradient
        start={{ x: 0, y: 0 }}
        end={{ x: 1, y: 1 }}
        colors={["#252A32", "#0C0F14"]}
        className="  flex-row justify-between px-4 bg-secondaryDarkGreyHex mx-4 rounded-xl mt-4"
      >
        <TextInput
          className="bg-[#fff0] flex-1 -mr-6 rounded-xl px-4 text-white"
          placeholder="Enter promo code"
          multiline={false}
          onFocus={() => {
            console.log("focus");
          }}
          placeholderTextColor={"gray"}
        />
        <TouchableOpacity
          className="bg-white rounded-full p-2"
          activeOpacity={0.7}
        >
          <Icons.ArrowRightIcon color="black" size={30} />
        </TouchableOpacity>
      </LinearGradient> */}

      <View className="flex-row  pt-4 justify-between mb-2">
        <View className="justify-center items-center pr-10  pl-6">
          <Text className="text-white font-bold text-lg">Price</Text>
          <Text className="text-white font-bold text-xl">
            <Text className="text-primary text-2xl">$ </Text>
            {10.5}
          </Text>
        </View>
        <CustomButton
          title="Pay"
          handlePress={() => {}}
          textStyles="text-white text-lg text-bold"
          containerStyles="bg-primary flex-1 mr-6"
        />
      </View>
      <BottomSheet
        ref={bottomSheetRef}
        // onChange={handleSheetChanges}
        snapPoints={[450]}
        index={0}
        backgroundStyle={{ backgroundColor: "#2B2D31" }}
        handleIndicatorStyle={{ backgroundColor: "white" }}
        handleStyle={{ borderRadius: 30 }}
        containerHeight={500}
        // onClose={() => bottomSheetRef.current?.close()}
        enablePanDownToClose
        // containerStyle={{ backgroundColor: "#00000059" }}
      >
        <BottomSheetView className="bg-red flex-1 opacity-100">
          <PromoCodeComponent
            onFocus={() => {}}
            onPress={() => {
              bottomSheetRef.current?.close();
            }}
          />
          <Text className="text-white text-xl font-semibold px-6 pt-6">
            Your Promo Codes
          </Text>
        </BottomSheetView>
      </BottomSheet>
    </View>
  );
};

export default CartScreen;

const styles = StyleSheet.create({});
