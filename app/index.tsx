import { NavigationContainer } from "@react-navigation/native";
import { StatusBar, Text, View } from "react-native";
import { createStackNavigator } from "@react-navigation/stack";
import OnboardingScreen from "@/screens/OnboardingScreen";
import GlobalProvider from "@/context/GlobalProvider";
import TabsNavigator from "@/navigators/TabsNavigator";
import AuthNavigator from "@/navigators/AuthNavigator";
export default function Index() {
  const Stack = createStackNavigator();
  return (
    <GlobalProvider>
      <NavigationContainer independent={true}>
        <StatusBar barStyle="light-content" backgroundColor={"#000"} />
        <Stack.Navigator>
          {/* <Stack.Screen
            component={OnboardingScreen}
            name="Onboarding"
            options={{ headerShown: false }}
          /> */}
          {/* <Stack.Screen
            component={AuthNavigator}
            name="auth"
            options={{ headerShown: false }}
          /> */}
          <Stack.Screen
            component={TabsNavigator}
            name="tabs"
            options={{ headerShown: false }}
          />
          {/* <Stack.Screen component={AuthScreen} name="auth"/>
        <Stack.Screen component={TabsScreen} name="tabs"/> */}
        </Stack.Navigator>
      </NavigationContainer>
    </GlobalProvider>
  );
}
