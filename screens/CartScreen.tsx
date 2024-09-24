import {
  Alert,
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
import { useNavigation } from "@react-navigation/native";
import Loading from "@/components/Loading";
import Empty from "@/components/Empty";

const CartScreen = ({ navigation }: { navigation: any }) => {
  const [isPromoCodeBottomSheetShown, setIsPromoCodeBottomSheetShown] =
    useState(false);
  const bottomSheetRef = useRef<BottomSheet>(null);
  const [promoCode, setPromoCode] = useState("");

  const carts = useSelector(selectCarts).carts;

  const [price, setPrice] = useState(0);

  const [isLoading, setIsLoading] = useState(carts.length === 0);
  const [isEmpty, setIsEmpty] = useState(carts.length === 0);

  useEffect(() => {
    let totalPrice = 0;
    carts.forEach((cart: any) => {
      totalPrice += cart.product.price * cart.count;
    });
    setPrice(totalPrice);
    if (carts.length > 0) {
      setIsLoading(false);
      setIsEmpty(false);
    }
  }, [carts]);

  if (isLoading) {
    return (
      <View className="flex-1  bg-mainBackground">
        <Empty />
      </View>
    );
  }

  return (
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
        onPress={() => {
          if (price === 0) {
            Alert.alert("Cart is empty", "Please add items to cart");
          } else {
            navigation.navigate("payment", { amount: price });
          }
        }}
        onTextChange={(text) => {
          setPromoCode(text);
        }}
        textValue={promoCode}
      />
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
          handlePress={() => {
            if (price === 0) {
              Alert.alert("Cart is empty", "Please add items to cart");
            } else {
              navigation.navigate("payment", { amount: price });
            }
          }}
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
        </BottomSheetView>
      </BottomSheet>
    </View>
  );
};

export default CartScreen;

const styles = StyleSheet.create({});
