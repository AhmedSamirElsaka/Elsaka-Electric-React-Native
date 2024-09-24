import {
  Alert,
  Dimensions,
  Image,
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  View,
} from "react-native";
import React, { useState } from "react";
import { images } from "@/constants";
import FormField from "@/components/FormField";
import CustomButton from "@/components/CustomButton";
import { createUser, signOut } from "@/lib/appwrite";
import { useGlobalContext } from "@/context/GlobalProvider";
import { useNavigation } from "@react-navigation/native";
import { TouchableWithoutFeedback } from "react-native-gesture-handler";

const SignUp = () => {
  const { setUser, setIsLogged }: any = useGlobalContext();

  const [isSubmitting, setSubmitting] = useState(false);
  const [form, setForm] = useState({
    username: "",
    email: "",
    password: "",
  });

  const navigation = useNavigation();
  const submit = async () => {
    if (form.username === "" || form.email === "" || form.password === "") {
      Alert.alert("Error", "Please fill in all fields");
    }

    setSubmitting(true);
    try {
      const result = await createUser(form.email, form.password, form.username);
      setUser(result);
      setIsLogged(true);

      navigation.navigate("tabs" as never);
    } catch (error: any) {
      Alert.alert("Error", error.message);
    } finally {
      setSubmitting(false);
    }
  };
  return (
    <SafeAreaView className="bg-mainBackground h-full">
      <StatusBar
        barStyle="light-content"
        backgroundColor={"#0C0F14"}
        hidden={false}
      />
      <ScrollView>
        <View
          className="w-full flex justify-center h-full px-4 "
          style={{
            minHeight: Dimensions.get("window").height - 100,
          }}
        >
          <Image source={images.logo} className="w-[200px] h-[100px] " />

          <Text className="text-2xl font-semibold text-white mt-6 font-psemibold">
            Sign Up to Elsaka Electric
          </Text>

          <FormField
            title="UserName"
            value={form.username}
            handleChangeText={(e) => setForm({ ...form, username: e })}
            otherStyles="mt-7"
            keyboardType="default"
            placeholder="Enter your username"
          />

          <FormField
            title="Email"
            value={form.email}
            handleChangeText={(e) => setForm({ ...form, email: e })}
            otherStyles="mt-7"
            keyboardType="email-address"
            placeholder="Enter your email"
          />

          <FormField
            title="Password"
            value={form.password}
            handleChangeText={(e) => setForm({ ...form, password: e })}
            otherStyles="mt-7"
            placeholder="Enter your password"
            keyboardType="default"
          />

          <CustomButton
            title="Sign Up"
            handlePress={submit}
            containerStyles="mt-7"
            isLoading={isSubmitting}
          />

          <View className="flex justify-center items-center pt-5 flex-row">
            <Text className="text-lg text-gray-100 font-pregular mr-2">
              Don't have an account?
            </Text>
            <TouchableWithoutFeedback
              onPress={() => navigation.navigate("signIn" as never)}
              className="flex-1"
            >
              <Text className="text-xl font-psemibold text-secondary text-center font-bold">
                SignIn
              </Text>
            </TouchableWithoutFeedback>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default SignUp;
