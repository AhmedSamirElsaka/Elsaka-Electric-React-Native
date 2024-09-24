import {
  Alert,
  FlatList,
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import React, { useEffect, useState } from "react";
import { PaymentSheetError, useStripe } from "@stripe/stripe-react-native";
import { StatusBar } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import BackIcon from "@/components/BackIcon";
import CustomButton from "@/components/CustomButton";
import { StripeProvider } from "@stripe/stripe-react-native";
import { fetchAPI } from "@/lib/fetch";
import { useGlobalContext } from "@/context/GlobalProvider";
import { useNavigation, useRoute } from "@react-navigation/native";
import { addOrderToUser, clearUserCart } from "@/lib/appwrite";
import { useDispatch, useSelector } from "react-redux";
import { clearCarts, selectCarts } from "@/features/cartSlice";
import Header from "@/components/Header";

const PaymentScreen = () => {
  const navigation = useNavigation();
  const { initPaymentSheet, presentPaymentSheet } = useStripe();
  const [success, setSuccess] = useState(false);
  const { user }: any = useGlobalContext();
  const routed = useRoute();
  const amount: number = (routed?.params as { amount: number }).amount;
  const [delivery, setDelivery] = useState(50);
  const total = delivery + amount;
  const carts = useSelector(selectCarts).carts;

  const dispatch = useDispatch();
  const confirmHandler = async (
    paymentMethod: any,
    _: any,
    intentCreationCallback: any
  ) => {
    const { paymentIntent, customer } = await fetchAPI(
      "http://localhost:3000/api/stripe/create",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: user.username || user.email.split("@")[0], // fallback to the part before the @ if name is not provided
          email: user.email,
          amount: total,
          paymentMethodId: paymentMethod.id,
        }),
      }
    );

    if (paymentIntent.client_secret) {
      const { result } = await fetchAPI(
        "http://localhost:3000/api/stripe/payment",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            payment_method_id: paymentMethod.id,
            payment_intent_id: paymentIntent.id,
            customer_id: customer,
            client_secret: paymentIntent.client_secret,
          }),
        }
      );
    }
  };

  const initializePaymentSheet = async () => {
    const { error } = await initPaymentSheet({
      merchantDisplayName: "Example, Inc.",

      intentConfiguration: {
        mode: {
          amount: total * 100,
          currencyCode: "USD",
        },
        confirmHandler: confirmHandler,
      },
    });
    if (error) {
      // handle error
    }
  };

  useEffect(() => {
    initializePaymentSheet();
  }, []);

  const openPaymentSheet = async () => {
    await initializePaymentSheet();
    const { error } = await presentPaymentSheet();

    if (error) {
      Alert.alert(`error code :${error.code} `, error.message);
    } else {
      setSuccess(true);
    }
  };
  return (
    <StripeProvider
      publishableKey={process.env.EXPO_PUBLIC_STRIPE_PUBLISHABLE_KEY!}
      merchantIdentifier="merchant.elsakaElectric.com" // required for Apple Pay
      urlScheme="myapp" // required for 3D Secure and bank redirects
    >
      <View className="bg-mainBackground flex-1">
        <StatusBar
          barStyle="light-content"
          backgroundColor={"#0C0F14"}
          hidden={false}
        />
        {/* <BackIcon onPress={() => navigation.goBack()} /> */}
        <Header
          title="Payment"
          onBackIconPress={() => navigation.goBack()}
          isBackIconRequired={true}
        />

        <Text className="text-white text-xl italic mt-10 p-4 ">
          Shipping address
        </Text>
        <LinearGradient
          start={{ x: 0, y: 0 }}
          end={{ x: 1, y: 1 }}
          colors={["#252A32", "#0C0F14"]}
          className="border-2 border-secondaryDarkGreyHex rounded-xl bg-secondaryDarkGreyHex p-2 mx-2"
        >
          <View className="flex-row justify-between mt-2">
            <Text className="text-gray-200 text-2xl ml-4">Jane Doe</Text>
            <TouchableOpacity activeOpacity={0.7} onPress={() => {}}>
              <Text className="text-red-500 text-xl italic">Change</Text>
            </TouchableOpacity>
          </View>
          <Text className="text-white text-lg max-w-[300px]  ml-4 mt-4 mb-4">
            3 Newbridge Court Chino Hills, CA 91709, United States
          </Text>
        </LinearGradient>

        <Text className="text-white text-xl italic mt-10 ml-4">
          Delivery method
        </Text>
        <View>
          <FlatList
            data={[1, 2, 3, 4, 5, 6]}
            keyExtractor={(item) => item.toString()}
            renderItem={(item) => {
              return (
                <LinearGradient
                  start={{ x: 0, y: 0 }}
                  end={{ x: 1, y: 1 }}
                  colors={["#252A32", "#0C0F14"]}
                  className="border-2 border-secondaryDarkGreyHex rounded-xl  items-center bg-secondaryDarkGreyHex px-4 py-2"
                >
                  <Image
                    source={require(`../assets/images/shipping1.png`)}
                    className="w-20 h-12"
                    resizeMode="contain"
                  />
                  <Text className="text-white mt-2">2 - 3 days</Text>
                </LinearGradient>
              );
            }}
            ItemSeparatorComponent={() => <View className="w-4" />}
            horizontal
            className="mx-4 mt-4"
          />
        </View>

        <View className="flex-1  px-4 mt-16">
          <View className="flex-row justify-between ">
            <Text className="text-white text-xl">Order: </Text>
            <Text className="text-white text-xl">
              {amount} <Text className="text-xl text-primary">EGP</Text>
            </Text>
          </View>
          <View className="flex-row justify-between  mt-6">
            <Text className="text-white text-xl">Delivery:</Text>
            <Text className="text-white text-xl">
              {delivery} <Text className="text-xl text-primary">EGP</Text>
            </Text>
          </View>
          <View className="flex-row justify-between  mt-6">
            <Text className="text-white text-xl">Summary: </Text>
            <Text className="text-white text-xl">
              {total} <Text className="text-xl text-primary">EGP</Text>
            </Text>
          </View>
        </View>

        <CustomButton
          title={"Submit Order"}
          handlePress={() => {
            openPaymentSheet();
            clearUserCart();
            addOrderToUser(carts, total.toString(), "68756281");
            dispatch(clearCarts());
          }}
          containerStyles="mx-6 bg-primary rounded-full mb-6"
          textStyles="text-white text-lg text-bold"
        />
      </View>
    </StripeProvider>
  );
};

export default PaymentScreen;

const styles = StyleSheet.create({});
