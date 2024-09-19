import { Button, StatusBar, StyleSheet, Text, View } from "react-native";
import React from "react";
import { signOut } from "@/lib/appwrite";
import { useGlobalContext } from "@/context/GlobalProvider";
import { useNavigation } from "expo-router";

const ProfileScreen = () => {
  const navigation = useNavigation();
  const { user, setUser, setIsLogged }: any = useGlobalContext();

  const logout = async () => {
    await signOut();
    setUser(null);
    setIsLogged(false);

    navigation.navigate("Onboarding" as never);
  };

  return (
    <View className="flex-1  bg-mainBackground">
      <StatusBar barStyle="light-content" backgroundColor={"#0C0F14"} />
      <View className="pt-36">
        <Button
          title="Logout"
          onPress={() => {
            signOut();
          }}
        />
      </View>
    </View>
  );
};

export default ProfileScreen;

const styles = StyleSheet.create({});
