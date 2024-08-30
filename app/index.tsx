import { NavigationContainer } from "@react-navigation/native";
import { StatusBar, Text, View } from "react-native";
import { createStackNavigator } from "@react-navigation/stack";
import OnboardingScreen from "@/screens/OnboardingScreen";
import AuthNavigation from "@/navigators/AuthNavigation";
import GlobalProvider from "@/context/GlobalProvider";
export default function Index() {
  const Stack = createStackNavigator();
  return (
    <GlobalProvider>
      <NavigationContainer independent={true}>
        {/* <StatusBar barStyle="light-content" backgroundColor={"#161622"} /> */}
        <Stack.Navigator>
          <Stack.Screen
            component={OnboardingScreen}
            name="Onboarding"
            options={{ headerShown: false }}
          />
          <Stack.Screen
            component={AuthNavigation}
            name="auth"
            options={{ headerShown: false }}
          />
          {/* <Stack.Screen component={AuthScreen} name="auth"/>
        <Stack.Screen component={TabsScreen} name="tabs"/> */}
        </Stack.Navigator>
      </NavigationContainer>
    </GlobalProvider>
  );
}
