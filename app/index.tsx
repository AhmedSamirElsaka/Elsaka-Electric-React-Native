import { NavigationContainer } from "@react-navigation/native";
import { StatusBar, Text, View } from "react-native";
import { createStackNavigator } from "@react-navigation/stack";
import OnboardingScreen from "@/screens/OnboardingScreen";
import GlobalProvider, { useGlobalContext } from "@/context/GlobalProvider";
import TabsNavigator from "@/navigators/TabsNavigator";
import AuthNavigator from "@/navigators/AuthNavigator";
import CartScreen from "@/screens/CartScreen";
import ProductDetails from "@/screens/ProductDetailsScreen";
import WriteReviewScreen from "@/screens/WriteReviewScreen";
import store from "@/store";
import { Provider } from "react-redux";
import PaymentScreen from "@/screens/PaymentScreen";
import SearchScreen from "@/screens/SearchScreen";

export default function Index() {
  const Stack = createStackNavigator();

  return (
    <GlobalProvider>
      <NavigationContainer independent={true}>
        <Provider store={store}>
          <StatusBar
            barStyle="light-content"
            backgroundColor={"#0C0F14"}
            hidden={false}
          />
          <Stack.Navigator>
            <Stack.Screen
              component={OnboardingScreen}
              name="Onboarding"
              options={{ headerShown: false }}
            />
            <Stack.Screen
              component={AuthNavigator}
              name="auth"
              options={{ headerShown: false }}
            />
            <Stack.Screen
              component={TabsNavigator}
              name="tabs"
              options={{ headerShown: false }}
            />
            <Stack.Screen
              component={ProductDetails}
              name="productDetails"
              options={{ headerShown: false }}
            />
            <Stack.Screen
              component={WriteReviewScreen}
              name="writeReview"
              options={{ headerShown: false }}
            />
            <Stack.Screen
              component={PaymentScreen}
              name="payment"
              options={{ headerShown: false }}
            />
            <Stack.Screen
              component={SearchScreen}
              name="search"
              options={{ headerShown: false }}
            />
          </Stack.Navigator>
        </Provider>
      </NavigationContainer>
    </GlobalProvider>
  );
}
