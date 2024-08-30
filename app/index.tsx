import { NavigationContainer } from "@react-navigation/native";
import { Text, View } from "react-native";
import { createStackNavigator } from "@react-navigation/stack";
import OnboardingScreen from "@/screens/OnboardingScreen";
export default function Index() {
  const Stack = createStackNavigator();
  return (
    <NavigationContainer independent={true}>
      <Stack.Navigator>
        <Stack.Screen component={OnboardingScreen} name="Onboarding" />
        {/* <Stack.Screen component={AuthScreen} name="auth"/>
        <Stack.Screen component={TabsScreen} name="tabs"/> */}
      </Stack.Navigator>
    </NavigationContainer>
  );
}
