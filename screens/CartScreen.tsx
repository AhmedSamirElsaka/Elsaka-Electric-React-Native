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
import React, { useCallback, useEffect, useRef, useState } from "react";
import Header from "@/components/Header";
import CustomButton from "@/components/CustomButton";
import CartProductCard from "@/components/CartProductCard";
import ProductDetailsScreen from "./ProductDetailsScreen";
import * as Icons from "react-native-heroicons/solid";
import { LinearGradient } from "expo-linear-gradient";
import BottomSheet, {
  BottomSheetFlatList,
  BottomSheetView,
} from "@gorhom/bottom-sheet";
import PromoCodeComponent from "@/components/PromoCodeComponent";
import PersonalPromoCodeCard from "@/components/PersonalPromoCodeCard";
import { selectCarts } from "@/features/cartSlice";
import { useSelector } from "react-redux";

import { StripeProvider } from "@stripe/stripe-react-native";

const CartScreen = ({ navigation }: { navigation: any }) => {
  const [isPromoCodeBottomSheetShown, setIsPromoCodeBottomSheetShown] =
    useState(false);
  const bottomSheetRef = useRef<BottomSheet>(null);
  const [promoCode, setPromoCode] = useState("");

  const carts = useSelector(selectCarts).carts;

  // console.log(carts, "carts");
  const [price, setPrice] = useState(0);

  useEffect(() => {
    // Calculate the total price in one pass
    let totalPrice = 0;
    carts.forEach((cart: any) => {
      totalPrice += cart.product.price * cart.count;
    });

    // Update the price once
    setPrice(totalPrice);
  }, [carts]); // The effect depends on changes to `carts`
  // console.log(price, "carts");

  const [publishableKey, setPublishableKey] = useState("");

  const fetchPublishableKey = async () => {
    // const key = await fetchKey(); // fetch key from your server here
    // setPublishableKey(key);
  };

  useEffect(() => {
    fetchPublishableKey();
  }, []);

  return (
    <StripeProvider
      publishableKey={process.env.EXPO_PUBLIC_STRIPE_PUBLISHABLE_KEY}
      merchantIdentifier="merchant.identifier" // required for Apple Pay
      urlScheme="your-url-scheme" // required for 3D Secure and bank redirects
    >
      <View className="flex-1  bg-mainBackground pt-4 ">
        <Header title="Cart" />
        <View className="flex-1 ">
          <FlatList
            data={carts}
            renderItem={({ item }) => (
              <View className="px-4 pt-4">
                <CartProductCard cart={item} navigation={navigation} />
              </View>
            )}
          />
        </View>
        <PromoCodeComponent
          onFocus={() => {
            bottomSheetRef.current?.expand();
          }}
          onPress={() => {}}
          onTextChange={(text) => {
            setPromoCode(text);
          }}
          textValue={promoCode}
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
          <View className="justify-center items-center pr-10  pl-8 ">
            <View className="flex-1">
              <Text className="text-white font-bold text-lg text-center ">
                Price
              </Text>
              <Text className="text-white font-bold text-xl text-center">
                <Text className="text-primary text-xl">EGP </Text>
                {price}
              </Text>
            </View>
          </View>
          <CustomButton
            title="Ceck Out"
            handlePress={() => {}}
            textStyles="text-white text-lg text-bold"
            containerStyles="bg-primary flex-1 mr-6"
          />
        </View>
        <BottomSheet
          ref={bottomSheetRef}
          snapPoints={[450, 700]}
          index={-1}
          backgroundStyle={{ backgroundColor: "#2B2D31" }}
          handleIndicatorStyle={{ backgroundColor: "white" }}
          handleStyle={{ borderRadius: 30 }}
          containerHeight={500}
          enablePanDownToClose
        >
          <BottomSheetView>
            <PromoCodeComponent
              onFocus={() => {}}
              onPress={() => {
                bottomSheetRef.current?.close();
              }}
              onTextChange={(text) => {
                setPromoCode(text);
              }}
              textValue={promoCode}
            />
            <Text className="text-white text-xl font-semibold px-6 pt-6">
              Your Promo Codes
            </Text>

            <FlatList
              data={[1, 2, 3, 4, 45, 6, 7, 8]}
              keyExtractor={(i) => i.toString()}
              renderItem={({ item }) => (
                <PersonalPromoCodeCard
                  onApplyPromoCode={(text: string) => {
                    setPromoCode(text);
                  }}
                  bottomSheetRef={bottomSheetRef}
                />
              )}
            />
            {/* <PersonalPromoCodeCard /> */}
          </BottomSheetView>
        </BottomSheet>
      </View>
    </StripeProvider>
  );
};

export default CartScreen;

const styles = StyleSheet.create({});
